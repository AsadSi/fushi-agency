import { z } from "zod";

// Helper function to create a schema with at least one field required
const atLeastOne = (obj: Record<string, z.ZodTypeAny>) => {
  return z.object(obj).refine((data) => Object.values(data).some((val) => val && val.length > 0), {
    message: "At least one contact method is required",
    path: ["contactMethods"],
  });
};

// Basic info schema
const basicInfoSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    company: z.string().optional(),
  })
  .and(
    atLeastOne({
      email: z.string().email({ message: "Invalid email address" }).or(z.literal("")),
      phone: z
        .string()
        .regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, {
          message: "Invalid phone number",
        })
        .or(z.literal("")),
      facebookAccount: z.string().min(3, { message: "Facebook account must be at least 3 characters" }).or(z.literal("")),
    })
  );

// Project details schema
const projectDetailsSchema = z
  .object({
    projectType: z.string().min(1, { message: "Project type is required" }),
    otherProjectType: z.string().optional(),
    existingWebsite: z.string().optional(),
    pagesEstimate: z.string().optional(),
    features: z.string().optional(),
  })
  .refine((data) => data.projectType !== "other" || (data.otherProjectType && data.otherProjectType.length > 0), {
    message: "Please specify the project type",
    path: ["otherProjectType"],
  })
  .refine((data) => data.projectType !== "redesign" || (data.existingWebsite && data.existingWebsite.length > 0), {
    message: "Please provide the existing website URL",
    path: ["existingWebsite"],
  });

// Design preferences schema
const designPreferencesSchema = z
  .object({
    needHelpWithDesign: z.boolean().optional().default(false),
    designStyle: z.string().optional().default(""),
    colorScheme: z.string().optional().default(""),
    inspiration: z.string().optional().default(""),
  })
  .refine((data) => data.needHelpWithDesign === true || (data.designStyle && data.designStyle.length > 0), {
    message: "Please select a design style or check 'I need help with design'",
    path: ["designStyle"],
  });

// Timeline and budget schema
const timelineBudgetSchema = z.object({
  timeline: z.string().min(1, { message: "Timeline is required" }),
  budget: z.string().min(1, { message: "Budget is required" }),
});

// Additional info schema
const additionalInfoSchema = z.object({
  additionalInfo: z.string().optional().default(""),
  language: z.string().default("en"),
});

// Complete form schema
export const formSchema = basicInfoSchema.and(projectDetailsSchema).and(designPreferencesSchema).and(timelineBudgetSchema).and(additionalInfoSchema);
