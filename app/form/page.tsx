"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronRight, ChevronLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { submitFormData } from "@/lib/actions";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { E164Number } from "libphonenumber-js/core";
import { useLanguage } from "@/contexts/language-context";
import { InfoTooltip } from "../../components/InfoTooltip";
import { SuccessModal } from "../../components/SuccessModal";

const getSteps = (t: (key: string) => string) => [
  {
    title: t("step1"),
    fields: ["name", "email", "phone", "facebookAccount", "company"],
    requiredFields: ["name"],
  },
  {
    title: t("step2"),
    fields: ["projectType", "pagesEstimate", "features"],
    requiredFields: ["projectType"],
  },
  {
    title: t("step3"),
    fields: ["designStyle", "colorScheme", "inspiration"],
    requiredFields: ["designStyle"],
  },
  {
    title: t("step4"),
    fields: ["timeline", "budget"],
    requiredFields: ["timeline", "budget"],
  },
  {
    title: t("step5"),
    fields: ["additionalInfo"],
    requiredFields: [],
  },
];

export default function ClientForm() {
  const { t, language } = useLanguage();
  const steps = getSteps(t as (key: string) => string);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    facebookAccount: "",
    company: "",
    projectType: "",
    otherProjectType: "",
    existingWebsite: "",
    pagesEstimate: "",
    features: "",
    designStyle: "",
    needHelpWithDesign: false,
    colorScheme: "",
    inspiration: "",
    timeline: "",
    budget: "",
    additionalInfo: "",
    language: language,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [, setNotification] = useState<{
    open: boolean;
    title: string;
    description: string;
    variant: "default" | "destructive";
    icon?: React.ReactNode;
  }>({
    open: false,
    title: "",
    description: "",
    variant: "default",
    icon: undefined,
  });

  // Update language in form data when it changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, language }));
  }, [language]);

  const validateStep = () => {
    // const currentRequiredFields = steps[currentStep].requiredFields;
    const newErrors: Record<string, string> = {};

    try {
      if (currentStep === 0) {
        const basicInfoSchema = z
          .object({
            name: z.string().min(2, { message: t("Name must be at least 2 characters") }),
            email: z
              .string()
              .email({ message: t("Invalid email address") })
              .or(z.literal("")),
            phone: z
              .string()
              .regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, {
                message: t("Invalid phone number"),
              })
              .or(z.literal("")),
            facebookAccount: z
              .string()
              .min(3, { message: t("Facebook account must be at least 3 characters") })
              .or(z.literal("")),
            company: z.string().optional(),
          })
          .refine((data) => data.email || data.phone || data.facebookAccount, {
            message: t("contactMethodRequired"),
            path: ["email"],
          });

        basicInfoSchema.parse(formData);
      } else if (currentStep === 1) {
        try {
          if (!formData.projectType) {
            newErrors.projectType = t("Project type is required");
            setErrors(newErrors);
            return false;
          }
          if (formData.projectType === "redesign" && !formData.existingWebsite) {
            newErrors.existingWebsite = t("Please provide the existing website URL");
            setErrors(newErrors);
            return false;
          }

          if (formData.projectType === "other" && !formData.otherProjectType) {
            newErrors.otherProjectType = t("Please specify the project type");
            setErrors(newErrors);
            return false;
          }
          return true;
        } catch (error) {
          console.error("Validation error:", error);
          return false;
        }
      } else if (currentStep === 2) {
        const designPreferencesSchema = z
          .object({
            needHelpWithDesign: z.boolean().optional(),
            designStyle: z.string().optional(),
            colorScheme: z.string().optional(),
            inspiration: z.string().optional(),
          })
          .refine((data) => data.needHelpWithDesign === true || (data.designStyle && data.designStyle.length > 0), {
            message: t("Please select a design style or check 'I need help with design'"),
            path: ["designStyle"],
          });

        designPreferencesSchema.parse(formData);
      } else if (currentStep === 3) {
        const timelineBudgetSchema = z.object({
          timeline: z.string().min(1, { message: t("Timeline is required") }),
          budget: z.string().min(1, { message: t("Budget is required") }),
        });

        timelineBudgetSchema.parse(formData);
      }

      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors as unknown as Record<string, string>;

        Object.entries(fieldErrors).forEach(([field, errors]) => {
          if (errors && errors.length > 0) {
            newErrors[field] = errors[0];
          }
        });

        setErrors(newErrors);
        return false;
      }

      return false;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | { target: { name: string; value: string | E164Number } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();

    console.log("Current step:", currentStep);
    console.log("Validating step...");

    const isValid = validateStep();
    console.log("Step validation result:", isValid);

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      console.log("Moving to next step:", currentStep + 1);
    } else if (!isValid) {
      console.log("Validation errors:", errors);
      setNotification({
        open: true,
        title: t("missingFieldsTitle"),
        description: t("missingFieldsDesc"),
        variant: "destructive",
        icon: <AlertCircle className="h-4 w-4" />,
      });
    }
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();

    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!validateStep()) {
      console.log("Final step validation failed");
      setNotification({
        open: true,
        title: t("missingFieldsTitle"),
        description: t("missingFieldsDesc"),
        variant: "destructive",
        icon: <AlertCircle className="h-4 w-4" />,
      });
      return;
    }
    setIsSubmitting(true);
    console.log("Submitting form data:", formData);

    try {
      const result = await submitFormData(formData);
      console.log("Form submission result:", result);

      if (result.success) {
        setNotification({
          open: true,
          title: t("formSubmittedTitle"),
          description: t("formSubmittedDesc"),
          variant: "default",
          icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
        });

        setShowSuccessModal(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          facebookAccount: "",
          company: "",
          projectType: "",
          otherProjectType: "",
          existingWebsite: "",
          pagesEstimate: "",
          features: "",
          designStyle: "",
          needHelpWithDesign: false,
          colorScheme: "",
          inspiration: "",
          timeline: "",
          budget: "",
          additionalInfo: "",
          language: language,
        });
        setCurrentStep(0);
      } else {
        setNotification({
          open: true,
          title: t("errorSubmittingTitle"),
          description: result.error || t("errorSubmittingDesc"),
          variant: "destructive",
          icon: <AlertCircle className="h-4 w-4" />,
        });
        if (result.fieldErrors) {
          const fieldErrors: Record<string, string> = {};
          for (const key in result.fieldErrors) {
            if (result.fieldErrors[key] && result.fieldErrors[key].length > 0) {
              fieldErrors[key] = result.fieldErrors[key][0];
            }
          }
          setErrors(fieldErrors);
        }
      }
    } catch (error) {
      console.error("Error during form submission:", error);

      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        const newErrors: Record<string, string> = {};

        Object.entries(fieldErrors).forEach(([field, errors]) => {
          if (errors && errors.length > 0) {
            newErrors[field] = errors[0];
          }
        });

        setErrors(newErrors);
        setNotification({
          open: true,
          title: t("validationErrorTitle"),
          description: t("validationErrorDesc"),
          variant: "destructive",
          icon: <AlertCircle className="h-4 w-4" />,
        });
      } else {
        setNotification({
          open: true,
          title: t("errorSubmittingTitle"),
          description: t("errorSubmittingDesc"),
          variant: "destructive",
          icon: <AlertCircle className="h-4 w-4" />,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormFields = () => {
    const currentFields = steps[currentStep].fields;

    return (
      <>
        {currentFields.includes("name") && (
          <div className="mb-6">
            <div className="flex items-center">
              <Label htmlFor="name" className="flex items-center">
                {t("name")}
                {steps[currentStep].requiredFields.includes("name") && <span className="text-destructive ml-1">*</span>}
              </Label>
              <InfoTooltip content={t("nameTooltip")} />
            </div>
            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} className={`mt-1 transition-all duration-200 ${errors.name ? "border-destructive" : ""}`} required={steps[currentStep].requiredFields.includes("name")} />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>
        )}

        {currentFields.includes("email") && (
          <div className="mb-6">
            <div className="flex items-center">
              <Label htmlFor="email" className="flex items-center">
                {t("email")}
              </Label>
              <InfoTooltip content={t("emailTooltip")} />
            </div>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className={`mt-1 transition-all duration-200 ${errors.email ? "border-destructive" : ""}`} />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>
        )}

        {currentFields.includes("phone") && (
          <div className="mb-6">
            <div className="flex items-center">
              <Label htmlFor="phone" className="flex items-center">
                {t("phone")}
              </Label>
              <InfoTooltip content={t("phoneTooltip")} />
            </div>

            <div className="mt-1">
              <PhoneInput
                id="phone"
                name="phone"
                defaultCountry="DK"
                value={formData.phone}
                onChange={(value: string | undefined) => handleInputChange({ target: { name: "phone", value: value ?? "" } })}
                className={`mt-1 transition-all px-3.5 py-2.5 bg-muted rounded-md border duration-200 w-full ${errors.phone ? "border border-destructive" : ""}`}
              />
            </div>

            {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
          </div>
        )}

        {currentFields.includes("facebookAccount") && (
          <div className="mb-6">
            <div className="flex items-center">
              <Label htmlFor="facebookAccount" className="flex items-center">
                {t("facebookAccount")}
              </Label>
              <InfoTooltip content={t("facebookAccountTooltip")} />
            </div>
            <Input id="facebookAccount" name="facebookAccount" value={formData.facebookAccount} onChange={handleInputChange} className={`mt-1 transition-all duration-200 ${errors.facebookAccount ? "border-destructive" : ""}`} />
            {errors.facebookAccount && <p className="text-destructive text-sm mt-1">{errors.facebookAccount}</p>}
          </div>
        )}

        {errors.contactMethods && (
          <div className="mb-6">
            <p className="text-destructive text-sm">{t("contactMethodRequired")}</p>
          </div>
        )}

        {currentFields.includes("company") && (
          <div className="mb-6">
            <Label htmlFor="company">{t("company")}</Label>
            <Input id="company" name="company" value={formData.company} onChange={handleInputChange} className="mt-1" />
          </div>
        )}

        {currentFields.includes("projectType") && (
          <div className="mb-6">
            <div className="flex items-center">
              <Label className="flex items-center mb-2">
                {t("projectType")}
                {steps[currentStep].requiredFields.includes("projectType") && <span className="text-destructive ml-1">*</span>}
              </Label>
              <InfoTooltip content={t("projectTypeTooltip")} />
            </div>
            <RadioGroup name="projectType" value={formData.projectType} onValueChange={(value) => handleRadioChange(value, "projectType")} className={`mt-2 space-y-3 ${errors.projectType ? "border-destructive p-3 rounded-md border" : ""}`}>
              <div className="flex items-center space-x-2 transition-all duration-200 hover:translate-x-1">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new" className="cursor-pointer">
                  {t("newWebsite")}
                </Label>
              </div>
              <div className="flex items-center space-x-2 transition-all duration-200 hover:translate-x-1">
                <RadioGroupItem value="redesign" id="redesign" />
                <Label htmlFor="redesign" className="cursor-pointer">
                  {t("redesign")}
                </Label>
              </div>
              <div className="flex items-center space-x-2 transition-all duration-200 hover:translate-x-1">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="cursor-pointer">
                  {t("other")}
                </Label>
              </div>
            </RadioGroup>
            {errors.projectType && <p className="text-destructive text-sm mt-1">{errors.projectType}</p>}

            {formData.projectType === "redesign" && (
              <div className="mt-4 pl-6 border-l-2 border-muted">
                <Label htmlFor="existingWebsite" className="flex items-center">
                  {t("existingWebsite")}
                  <span className="text-destructive ml-1">*</span>
                </Label>
                <Input id="existingWebsite" name="existingWebsite" value={formData.existingWebsite} onChange={handleInputChange} placeholder={t("existingWebsitePlaceholder")} className={`mt-1 ${errors.existingWebsite ? "border-destructive" : ""}`} required />
                {errors.existingWebsite && <p className="text-destructive text-sm mt-1">{errors.existingWebsite}</p>}
              </div>
            )}

            {formData.projectType === "other" && (
              <div className="mt-4 pl-6 border-l-2 border-muted">
                <Label htmlFor="otherProjectType" className="flex items-center">
                  {t("otherProjectType")}
                  <span className="text-destructive ml-1">*</span>
                </Label>
                <Input id="otherProjectType" name="otherProjectType" value={formData.otherProjectType} onChange={handleInputChange} placeholder={t("otherProjectTypePlaceholder")} className={`mt-1 ${errors.otherProjectType ? "border-destructive" : ""}`} required />
                {errors.otherProjectType && <p className="text-destructive text-sm mt-1">{errors.otherProjectType}</p>}
              </div>
            )}
          </div>
        )}

        {currentFields.includes("pagesEstimate") && (
          <div className="mb-6">
            <Label htmlFor="pagesEstimate">{t("pagesEstimate")}</Label>
            <Input id="pagesEstimate" name="pagesEstimate" type="number" value={formData.pagesEstimate} onChange={handleInputChange} className="mt-1" />
          </div>
        )}

        {currentFields.includes("features") && (
          <div className="mb-6">
            <div className="flex items-center">
              <Label htmlFor="features">{t("features")}</Label>
              <InfoTooltip content={t("featuresToolTip")} />
            </div>
            <Textarea id="features" name="features" value={formData.features} onChange={handleInputChange} placeholder={t("featuresPlaceholder")} className="mt-1 min-h-[120px]" />
          </div>
        )}

        {currentFields.includes("designStyle") && (
          <>
            <div className="mb-6">
              <div className="flex items-center">
                <Label htmlFor="needHelpWithDesign" className="cursor-pointer">
                  {t("needHelpWithDesign")}
                </Label>
              </div>
              <div className="flex items-center h-10 mt-1">
                <input type="checkbox" id="needHelpWithDesign" name="needHelpWithDesign" checked={formData.needHelpWithDesign} onChange={handleCheckboxChange} className="mr-2 h-4 w-4" />
                <Label htmlFor="needHelpWithDesign" className="cursor-pointer">
                  {t("needHelpWithDesign")}
                </Label>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <Label htmlFor="designStyle" className="flex items-center">
                  {t("designStyle")}
                  {!formData.needHelpWithDesign && steps[currentStep].requiredFields.includes("designStyle") && <span className="text-destructive ml-1">*</span>}
                </Label>
                <InfoTooltip content={t("designStyleTooltip")} />
              </div>
              <select
                id="designStyle"
                name="designStyle"
                value={formData.designStyle}
                onChange={(e) => handleInputChange(e)}
                disabled={formData.needHelpWithDesign}
                className={`w-full h-10 px-3 py-2 mt-1 bg-background border rounded-md ${formData.needHelpWithDesign ? "opacity-50 cursor-not-allowed" : ""} ${errors.designStyle ? "border-destructive" : "border-input"}`}
                required={!formData.needHelpWithDesign && steps[currentStep].requiredFields.includes("designStyle")}
              >
                <option value="" disabled>
                  {t("designStylePlaceholder")}
                </option>
                <option value="minimalist">{t("designStyleOption1")}</option>
                <option value="modern">{t("designStyleOption2")}</option>
                <option value="corporate">{t("designStyleOption3")}</option>
                <option value="playful">{t("designStyleOption4")}</option>
                <option value="luxury">{t("designStyleOption5")}</option>
                <option value="retro">{t("designStyleOption6")}</option>
              </select>
              {errors.designStyle && !formData.needHelpWithDesign && <p className="text-destructive text-sm mt-1">{errors.designStyle}</p>}
            </div>
          </>
        )}

        {currentFields.includes("colorScheme") && (
          <div className="mb-6">
            <Label htmlFor="colorScheme">{t("colorScheme")}</Label>
            <Input id="colorScheme" name="colorScheme" value={formData.colorScheme} onChange={handleInputChange} placeholder={t("colorSchemePlaceholder")} className="mt-1" disabled={formData.needHelpWithDesign} />
          </div>
        )}

        {currentFields.includes("inspiration") && (
          <div className="mb-6">
            <Label htmlFor="inspiration">{t("inspiration")}</Label>
            <Textarea id="inspiration" name="inspiration" value={formData.inspiration} onChange={handleInputChange} placeholder={t("inspirationPlaceholder")} className="mt-1 min-h-[120px]" />
          </div>
        )}

        {currentFields.includes("timeline") && (
          <div className="mb-6">
            <div className="flex items-center">
              <Label htmlFor="timeline" className="flex items-center">
                {t("timeline")}
                {steps[currentStep].requiredFields.includes("timeline") && <span className="text-destructive ml-1">*</span>}
              </Label>
              <InfoTooltip content={t("timelineTooltip")} />
            </div>
            <Input
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              placeholder={t("timelinePlaceholder")}
              className={`mt-1 transition-all duration-200 ${errors.timeline ? "border-destructive" : ""}`}
              required={steps[currentStep].requiredFields.includes("timeline")}
            />
            {errors.timeline && <p className="text-destructive text-sm mt-1">{errors.timeline}</p>}
          </div>
        )}

        {currentFields.includes("budget") && (
          <div className="mb-6">
            <div className="flex items-center">
              <Label htmlFor="budget" className="flex items-center">
                {t("budget")}
                {steps[currentStep].requiredFields.includes("budget") && <span className="text-destructive ml-1">*</span>}
              </Label>
              <InfoTooltip content={t("budgetTooltip")} />
            </div>
            <Input id="budget" name="budget" value={formData.budget} onChange={handleInputChange} className={`mt-1 transition-all duration-200 ${errors.budget ? "border-destructive" : ""}`} required={steps[currentStep].requiredFields.includes("budget")} />
            {errors.budget && <p className="text-destructive text-sm mt-1">{errors.budget}</p>}
          </div>
        )}

        {currentFields.includes("additionalInfo") && (
          <div className="mb-6">
            <Label htmlFor="additionalInfo">{t("additionalInfo")}</Label>
            <Textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleInputChange} placeholder={t("additionalInfoPlaceholder")} className="mt-1 min-h-[150px]" />
          </div>
        )}
      </>
    );
  };

  return (
    <section className="relative flex items-center justify-center pt-20 px-8 overflow-hidden">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">{t("title")}</h1>

        <div className="mb-10">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div key={step.title} className={`text-sm flex flex-col items-center transition-all duration-300 ${index < currentStep ? "text-primary" : index === currentStep ? "text-primary font-medium scale-110" : "text-muted-foreground"}`}>
                <div className="relative mb-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      index < currentStep ? "border-primary bg-primary text-primary-foreground" : index === currentStep ? "border-primary text-primary" : "border-muted-foreground"
                    }`}
                  >
                    {index < currentStep ? <CheckCircle2 className="h-5 w-5" /> : index + 1}
                  </div>
                </div>
                <span className="hidden sm:block text-xs">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-muted rounded-full h-2 mt-2">
            <div className="bg-primary h-2 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></div>
          </div>
        </div>

        <Card className="border shadow-sm transition-all duration-300 hover:shadow-md">
          <CardContent className="p-6">
            <AnimatePresence mode="wait">
              <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">{steps[currentStep].title}</h2>
                {renderFormFields()}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <Button type="button" onClick={handlePrevious} variant="outline" className="transition-transform duration-200 hover:-translate-x-1" disabled={isSubmitting}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> {t("previous")}
                </Button>
              )}
              {currentStep < steps.length - 1 ? (
                <Button type="button" onClick={handleNext} className="ml-auto transition-transform duration-200 hover:translate-x-1" disabled={isSubmitting}>
                  {t("next")} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" className="ml-auto relative overflow-hidden group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t("submitting")}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      {t("submit")}
                      <motion.span className="ml-2" animate={{ x: [0, 4, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.5, duration: 0.5 }}>
                        <CheckCircle2 className="h-4 w-4" />
                      </motion.span>
                    </span>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>{t("requiredFields")}</p>
        </div>
        {/* <NotificationDialog open={notification.open} onOpenChange={(open) => setNotification((prev) => ({ ...prev, open }))} title={notification.title} description={notification.description} variant={notification.variant} icon={notification.icon} /> */}
        <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
      </form>
    </section>
  );
}
