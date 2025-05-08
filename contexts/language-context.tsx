"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

// Define our translations
export const translations = {
  en: {
    // Navigation
    servicesNav: "Services",
    work: "Work",
    process: "Process",
    about: "About",
    contact: "Contact",

    // Hero
    heroTitle1: "Fushiguro",
    heroTitle2: "Megumi",
    heroSubtitle: "Building digital experiences with the same calm precision it takes to control an infinite space.",
    contactUs: "Contact Us",
    getAnOffer: "Get an Offer",
    ourServices: "Our Services",

    // Services
    expertiseTitle: "Focused",
    expertiseHighlight: "Expertise",
    expertiseSubtitle: "We bring smart ideas and sharp execution together to help you grow, without limits.",
    webSolutions: "Web Solutions",
    webSolutionsDesc: "Custom websites built to adapt, impress, and perform — no matter what comes your way.",
    mobileApps: "Mobile Apps",
    mobileAppsDesc: "High-performance mobile apps designed for iOS and Android — fast, reliable, and smooth.",
    uiUx: "UI/UX",
    uiUxDesc: "User experiences designed with focus and precision — natural, intuitive, and frictionless.",
    branding: "Branding",
    brandingDesc: "Building brands that stand out — clear, recognizable, and built for lasting impact.",
    seo: "SEO Optimization",
    seoDesc: "Boost your visibility with our expert SEO strategies that drive organic traffic and improve rankings.",
    ecommerce: "E-commerce Solutions",
    ecommerceDesc: "Powerful online stores with seamless checkout experiences that convert visitors into customers.",
    customDesign: "Custom Design",
    customDesignDesc: "Tailored designs that perfectly match your specific needs, brand identity, and business goals.",
    maintenance: "Maintenance & Support",
    maintenanceDesc: "Ongoing support and maintenance to keep your digital assets secure, updated, and performing optimally.",
    modernSolutions: "Modern & Fast",
    modernSolutionsDesc: "We deliver optimized, lightning-fast solutions using cutting-edge technologies for maximum performance.",
    freeHosting: "Free Hosting & SSL",
    freeHostingDesc: "Every project includes free hosting and SSL certificates to keep your website secure and accessible.",

    // Work
    workTitle: "Our",
    workHighlight: "Work",
    workSubtitle: "Check out some of our award-winning projects that have helped businesses grow.",

    // Partners
    partnersTitle: "Our Trusted Partners",
    partnersSubtitle: "Companies that trust us to keep them moving forward.",

    // Process
    processTitle: "Our",
    processHighlight: "Process",
    processSubtitle: "Our proven methodology ensures successful project delivery every time.",
    step1: "Fill Our Form",
    step1Desc: "Tell us about your needs and wants to get started with your project.",
    step2: "Get a Quote",
    step2Desc: "Receive and negotiate your personalized quote within 24 hours.",
    step3: "Plan & Agree",
    step3Desc: "We agree on the scope and plan out the project timeline together.",
    step4: "Development",
    step4Desc: "Our team builds your solution with regular updates and feedback.",
    step5: "Deployment",
    step5Desc: "Receive your personalized solution live and deployed, ready for the world.",

    // Testimonials
    testimonialsTitle: "Client",
    testimonialsHighlight: "Testimonials",
    testimonialsSubtitle: "Don't just take our word for it. Here's what our clients have to say about working with us.",

    // About
    aboutTitle: "About",
    aboutHighlight: "Fushiguro Megumi",
    aboutSubtitle: "Clear thinking. Focused execution. Digital solutions that move with you, without limits.",
    innovationTitle: "Innovation Without Limits",
    aboutP1: "We take on every project with a simple idea: no challenge is too big when approached the right way.",
    aboutP2: "Our work is designed to fit your goals perfectly — with the flexibility to evolve as you do.",
    aboutP3: "We don't just solve problems — we spot new opportunities others miss.",
    aboutP4: "In a world that's always moving, we create solutions that feel limitless — no shortcuts, no compromises.",

    // CTA
    ctaTitle: "Ready to",
    ctaHighlight: "Get Started?",
    ctaSubtitle: "Let's create something amazing together. Contact us today to discuss your project.",
    viewOurWork: "View Our Work",

    // Contact
    contactTitle: "Get in",
    contactHighlight: "Touch",
    contactSubtitle: "Ready to start your next project? We're here to help turn your vision into reality.",
    emailUs: "Email Us",
    callUs: "Call Us",
    whatsappUs: "WhatsApp Us",
    available247: "We're available 24/7 to chat",
    sendEmail: "Send Email",
    startWhatsapp: "Start WhatsApp Chat",

    // Footer
    services: "Services",
    aboutUs: "About Us",
    ourWork: "Our Work",
    careers: "Careers",
    privacyPolicy: "Privacy Policy",
    allRightsReserved: "All rights reserved.",

    // UI Elements
    thankYou: "Thank you",
    formSubmittedLong: "Your form has been submitted successfully. We will get back to you shortly.",
    close: "Close",

    // Form page labels
    name: "Name",
    email: "Email",
    phone: "Phone",
    facebookAccount: "Facebook Account",
    company: "Company",
    projectType: "Project Type",
    pagesEstimate: "Pages Estimate",
    features: "Features",
    designStyle: "Design Style",
    designStyleOption1: "Minimalist",
    designStyleOption2: "Modern",
    designStyleOption3: "Corporate",
    designStyleOption4: "Playful",
    designStyleOption5: "Luxury",
    designStyleOption6: "Retro",
    colorScheme: "Color Scheme",
    inspiration: "Inspiration",
    timeline: "Timeline",
    budget: "Budget",
    additionalInfo: "Additional Info",

    // Option labels
    newWebsite: "New Website",
    redesign: "Redesign",
    other: "Other",

    needHelpWithDesign: "I need help with design",
    otherProjectType: "Other Project Type",
    existingWebsite: "Existing Website",
    title: "Website Project Questionnaire",
    requiredFields: "Fields marked with * are required",

    // Placeholders & tooltips
    nameTooltip: "Your full name",
    emailTooltip: "We'll contact you via email if provided",
    phoneTooltip: "We'll contact you via phone if provided",
    facebookAccountTooltip: "Your Facebook profile link",
    projectTypeTooltip: "What kind of website do you need?",
    featuresToolTip: "Let us know any specific features you want",
    designStyleTooltip: "Choose a style or let us help you decide",
    timelineTooltip: "How soon do you need the project done?",
    budgetTooltip: "What’s your estimated budget?",
    contactMethodRequired: "Please provide at least one way to contact you",

    designStylePlaceholder: "Choose a design style",
    existingWebsitePlaceholder: "https://your-old-site.com",
    otherProjectTypePlaceholder: "e.g., Web app for internal use",
    featuresPlaceholder: "Login, contact form, animations...",
    inspirationPlaceholder: "Link or describe design examples you like",
    timelinePlaceholder: "e.g., 4 weeks, 2 months",
    colorSchemePlaceholder: "e.g., Black and gold, pastel tones",
    additionalInfoPlaceholder: "Anything else we should know?",

    // Validation & notifications
    formSubmittedTitle: "Form Submitted",
    formSubmittedDesc: "Thanks! We've received your form and will be in touch shortly.",
    errorSubmittingTitle: "Something went wrong",
    errorSubmittingDesc: "There was an error while submitting your form. Please try again.",
    validationErrorTitle: "Validation Error",
    validationErrorDesc: "Some fields need your attention. Please review the errors.",
    missingFieldsTitle: "Missing Required Fields",
    missingFieldsDesc: "Please fill out all required fields before continuing.",
    submitting: "Submitting...",
    submit: "Submit",
    previous: "Previous",
    next: "Next",

    // Zod error messages
    "Name must be at least 2 characters": "Name must be at least 2 characters",
    "Invalid email address": "Invalid email address",
    "Invalid phone number": "Invalid phone number",
    "Facebook account must be at least 3 characters": "Facebook account must be at least 3 characters",
    "Project type is required": "Project type is required",
    "Please provide the existing website URL": "Please provide the existing website URL",
    "Please specify the project type": "Please specify the project type",
    "Please select a design style or check 'I need help with design'": "Please select a design style or check 'I need help with design'",
    "Timeline is required": "Timeline is required",
    "Budget is required": "Budget is required",
  },

  da: {
    // Navigation
    servicesNav: "Ydelser",
    work: "Arbejde",
    process: "Proces",
    about: "Om os",
    contact: "Kontakt",

    // Hero
    heroTitle1: "Fushiguro",
    heroTitle2: "Megumi",
    heroSubtitle: "Vi bygger digitale oplevelser med samme rolige præcision, det kræver at kontrollere et uendeligt rum.",
    contactUs: "Kontakt os",
    getAnOffer: "Få et tilbud",
    ourServices: "Vores ydelser",

    needHelpWithDesign: "Jeg har brug for hjælp til designet",
    otherProjectType: "Anden projekttype",
    existingWebsite: "Eksisterende hjemmeside",
    title: "Spørgeskema til hjemmesideprojekt",
    requiredFields: "Felter markeret med * er obligatoriske",

    // Services
    expertiseTitle: "Fokuseret",
    expertiseHighlight: "Ekspertise",
    expertiseSubtitle: "Vi bringer smarte idéer og skarp udførelse sammen for at hjælpe dig med at vokse, uden grænser.",
    webSolutions: "Webløsninger",
    webSolutionsDesc: "Skræddersyede hjemmesider bygget til at tilpasse, imponere og præstere — uanset hvad der kommer din vej.",
    mobileApps: "Mobil-apps",
    mobileAppsDesc: "Højtydende mobile apps designet til iOS og Android — hurtige, pålidelige og smidige.",
    uiUx: "UI/UX",
    uiUxDesc: "Brugeroplevelser designet med fokus og præcision — naturlige, intuitive og gnidningsfrie.",
    branding: "Branding",
    brandingDesc: "Opbygning af brands, der skiller sig ud — klare, genkendelige og bygget til varig indvirkning.",
    seo: "SEO-optimering",
    seoDesc: "Boost din synlighed med vores ekspert SEO-strategier, der driver organisk trafik og forbedrer rangering.",
    ecommerce: "E-handelsløsninger",
    ecommerceDesc: "Kraftfulde online butikker med problemfri checkout-oplevelser, der konverterer besøgende til kunder.",
    customDesign: "Skræddersyet Design",
    customDesignDesc: "Skræddersyede designs, der perfekt matcher dine specifikke behov, brandidentitet og forretningsmål.",
    maintenance: "Vedligeholdelse & Support",
    maintenanceDesc: "Løbende support og vedligeholdelse for at holde dine digitale aktiver sikre, opdaterede og optimalt ydende.",
    modernSolutions: "Moderne & Hurtig",
    modernSolutionsDesc: "Vi leverer optimerede, lynhurtige løsninger ved hjælp af banebrydende teknologier for maksimal ydeevne.",
    freeHosting: "Gratis Hosting & SSL",
    freeHostingDesc: "Hvert projekt inkluderer gratis hosting og SSL-certifikater for at holde din hjemmeside sikker og tilgængelig.",

    // Work
    workTitle: "Vores",
    workHighlight: "Arbejde",
    workSubtitle: "Se nogle af vores prisvindende projekter, der har hjulpet virksomheder med at vokse.",
    designStyleOption1: "Minimalistisk",
    designStyleOption2: "Moderne",
    designStyleOption3: "Corporate",
    designStyleOption4: "Legesyg",
    designStyleOption5: "Luksus",
    designStyleOption6: "Retro",

    // Partners
    partnersTitle: "Vores betroede partnere",
    partnersSubtitle: "Virksomheder, der stoler på os til at holde dem i bevægelse fremad.",

    // Process
    processTitle: "Vores",
    processHighlight: "Proces",
    processSubtitle: "Vores gennemprøvede metode sikrer vellykket projektlevering hver gang.",
    step1: "Udfyld Vores Formular",
    step1Desc: "Fortæl os om dine behov og ønsker for at komme i gang med dit projekt.",
    step2: "Få et Tilbud",
    step2Desc: "Modtag og forhandl dit personlige tilbud inden for 24 timer.",
    step3: "Planlæg & Acceptér",
    step3Desc: "Vi bliver enige om omfanget og planlægger projektets tidslinje sammen.",
    step4: "Udvikling",
    step4Desc: "Vores team bygger din løsning med regelmæssige opdateringer og feedback.",
    step5: "Implementering",
    step5Desc: "Modtag din personlige løsning live og implementeret, klar til verden.",

    // Testimonials
    testimonialsTitle: "Kunde",
    testimonialsHighlight: "Udtalelser",
    testimonialsSubtitle: "Tag ikke bare vores ord for det. Her er, hvad vores kunder siger om at arbejde med os.",

    // About
    aboutTitle: "Om",
    aboutHighlight: "Fushiguro Megumi",
    aboutSubtitle: "Klar tænkning. Fokuseret udførelse. Digitale løsninger, der bevæger sig med dig, uden grænser.",
    innovationTitle: "Innovation uden grænser",
    aboutP1: "Vi tager fat på hvert projekt med en enkel idé: ingen udfordring er for stor, når den tilgås på den rigtige måde.",
    aboutP2: "Vores arbejde er designet til at passe perfekt til dine mål — med fleksibiliteten til at udvikle sig, som du gør.",
    aboutP3: "Vi opdager nye muligheder, som andre overser — ikke bare løser problemer.",
    aboutP4: "I en verden, der altid bevæger sig, skaber vi løsninger uden grænser — ingen genveje, ingen kompromiser.",

    // CTA
    ctaTitle: "Klar til at",
    ctaHighlight: "Komme i gang?",
    ctaSubtitle: "Lad os skabe noget fantastisk sammen. Kontakt os i dag for at diskutere dit projekt.",
    viewOurWork: "Se vores arbejde",

    // Contact
    contactTitle: "Kom i",
    contactHighlight: "Kontakt",
    contactSubtitle: "Klar til at starte dit næste projekt? Vi er her for at hjælpe med at gøre din vision til virkelighed.",
    emailUs: "Email Os",
    callUs: "Ring Til Os",
    whatsappUs: "WhatsApp Os",
    available247: "Vi er tilgængelige 24/7 for at chatte",
    sendEmail: "Send Email",
    startWhatsapp: "Start WhatsApp Chat",

    // Footer
    services: "Services",
    aboutUs: "Om os",
    ourWork: "Vores arbejde",
    careers: "Karriere",
    privacyPolicy: "Privatlivspolitik",
    allRightsReserved: "Alle rettigheder forbeholdes.",

    // UI Elements
    thankYou: "Tak",
    formSubmittedLong: "Din formular er sendt. Vi vender tilbage til dig snart.",
    close: "Luk",

    // Form page labels
    name: "Navn",
    email: "Email",
    phone: "Telefon",
    facebookAccount: "Facebook-konto",
    company: "Firma",
    projectType: "Projekttype",
    pagesEstimate: "Sideantal",
    features: "Funktioner",
    designStyle: "Designstil",
    colorScheme: "Farveskema",
    inspiration: "Inspiration",
    timeline: "Tidslinje",
    budget: "Budget",
    additionalInfo: "Yderligere info",

    // Option labels
    newWebsite: "Ny hjemmeside",
    redesign: "Redesign",
    other: "Andet",

    // Placeholders & tooltips
    nameTooltip: "Dit fulde navn",
    emailTooltip: "Vi kontakter dig via e-mail, hvis oplyst",
    phoneTooltip: "Vi kontakter dig via telefon, hvis oplyst",
    facebookAccountTooltip: "Link til din Facebook-profil",
    projectTypeTooltip: "Hvilken slags hjemmeside har du brug for?",
    featuresToolTip: "Fortæl os, hvilke funktioner du ønsker",
    designStyleTooltip: "Vælg en stil, eller lad os hjælpe dig",
    timelineTooltip: "Hvornår skal projektet være færdigt?",
    budgetTooltip: "Hvad er dit budget?",
    contactMethodRequired: "Angiv venligst mindst én kontaktmetode",

    designStylePlaceholder: "Vælg en designstil",
    existingWebsitePlaceholder: "https://din-nuværende-side.dk",
    otherProjectTypePlaceholder: "f.eks. intern webapp",
    featuresPlaceholder: "Login, kontaktformular, animationer…",
    inspirationPlaceholder: "Link eller beskrivelse af design, du kan lide",
    timelinePlaceholder: "f.eks. 4 uger, 2 måneder",
    colorSchemePlaceholder: "f.eks. Sort og guld, pasteltoner",
    additionalInfoPlaceholder: "Er der andet, vi skal vide?",

    // Validation & notifications
    formSubmittedTitle: "Formular sendt",
    formSubmittedDesc: "Tak! Vi har modtaget din formular og kontakter dig snart.",
    errorSubmittingTitle: "Noget gik galt",
    errorSubmittingDesc: "Der opstod en fejl under indsendelsen. Prøv igen.",
    validationErrorTitle: "Valideringsfejl",
    validationErrorDesc: "Nogle felter kræver din opmærksomhed. Tjek venligst fejlene.",
    missingFieldsTitle: "Manglende obligatoriske felter",
    missingFieldsDesc: "Udfyld venligst alle obligatoriske felter, før du fortsætter.",
    submitting: "Indsender...",
    submit: "Indsend",
    previous: "Forrige",
    next: "Næste",

    // Zod error messages
    "Name must be at least 2 characters": "Navn skal være mindst 2 tegn langt",
    "Invalid email address": "Ugyldig e-mailadresse",
    "Invalid phone number": "Ugyldigt telefonnummer",
    "Facebook account must be at least 3 characters": "Facebook-konto skal være mindst 3 tegn langt",
    "Project type is required": "Projekttype er obligatorisk",
    "Please provide the existing website URL": "Angiv venligst den eksisterende hjemmesides URL",
    "Please specify the project type": "Angiv venligst projekttypen",
    "Please select a design style or check 'I need help with design'": "Vælg en designstil eller marker 'Jeg har brug for hjælp til designet'",
    "Timeline is required": "Tidslinje er obligatorisk",
    "Budget is required": "Budget er obligatorisk",
  },
};

type Language = "en" | "da";
type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Get initial language from localStorage if available, otherwise default to English
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      return savedLanguage || "en";
    }
    return "en";
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = (key: TranslationKey): string => {
    return (translations[language] as typeof translations.en)[key] || translations.en[key] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
