"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define our translations
export const translations = {
  en: {
    // Navigation
    services: "Services",
    work: "Work",
    process: "Process",
    about: "About",
    contact: "Contact",

    // Hero
    heroTitle1: "Fushiguro",
    heroTitle2: "Megumi",
    heroSubtitle: "Building digital experiences with the same calm precision it takes to control an infinite space.",
    contactUs: "Contact Us",
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
    maintenanceDesc:
      "Ongoing support and maintenance to keep your digital assets secure, updated, and performing optimally.",
    modernSolutions: "Modern & Fast",
    modernSolutionsDesc:
      "We deliver optimized, lightning-fast solutions using cutting-edge technologies for maximum performance.",
    freeHosting: "Free Hosting & SSL",
    freeHostingDesc:
      "Every project includes free hosting and SSL certificates to keep your website secure and accessible.",

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
    aboutP1:
      "We take on every project with a simple idea: no challenge is too big when approached the right way. We combine smart planning and bold creativity to build solutions that are made to grow, adapt, and lead.",
    aboutP2:
      "Our work is designed to fit your goals perfectly — with the flexibility to evolve as you do. We stay sharp, focused, and ready to move, just like the endless flow of ideas that drive true innovation.",
    aboutP3:
      "With deep research, clear thinking, and a creative edge, we don't just solve problems — we spot new opportunities others miss. Every decision is made with precision, every design with intent.",
    aboutP4:
      "In a world that's always moving, we believe in creating solutions that feel limitless — no shortcuts, no compromises. Just forward momentum, tailored to you.",

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
    company: "Company",
    aboutUs: "About Us",
    ourWork: "Our Work",
    careers: "Careers",
    privacyPolicy: "Privacy Policy",
    allRightsReserved: "All rights reserved.",
  },
  da: {
    // Navigation
    services: "Ydelser",
    work: "Arbejde",
    process: "Proces",
    about: "Om os",
    contact: "Kontakt",

    // Hero
    heroTitle1: "Fushiguro",
    heroTitle2: "Megumi",
    heroSubtitle:
      "Vi bygger digitale oplevelser med samme rolige præcision, det kræver at kontrollere et uendeligt rum.",
    contactUs: "Kontakt os",
    ourServices: "Vores ydelser",

    // Services
    expertiseTitle: "Fokuseret",
    expertiseHighlight: "Ekspertise",
    expertiseSubtitle:
      "Vi bringer smarte idéer og skarp udførelse sammen for at hjælpe dig med at vokse, uden grænser.",
    webSolutions: "Webløsninger",
    webSolutionsDesc:
      "Skræddersyede hjemmesider bygget til at tilpasse, imponere og præstere — uanset hvad der kommer din vej.",
    mobileApps: "Mobil-apps",
    mobileAppsDesc: "Højtydende mobile apps designet til iOS og Android — hurtige, pålidelige og smidige.",
    uiUx: "UI/UX",
    uiUxDesc: "Brugeroplevelser designet med fokus og præcision — naturlige, intuitive og gnidningsfrie.",
    branding: "Branding",
    brandingDesc: "Opbygning af brands, der skiller sig ud — klare, genkendelige og bygget til varig indvirkning.",
    seo: "SEO-optimering",
    seoDesc: "Boost din synlighed med vores ekspert SEO-strategier, der driver organisk trafik og forbedrer rangering.",
    ecommerce: "E-handelsløsninger",
    ecommerceDesc:
      "Kraftfulde online butikker med problemfri checkout-oplevelser, der konverterer besøgende til kunder.",
    customDesign: "Skræddersyet Design",
    customDesignDesc:
      "Skræddersyede designs, der perfekt matcher dine specifikke behov, brandidentitet og forretningsmål.",
    maintenance: "Vedligeholdelse & Support",
    maintenanceDesc:
      "Løbende support og vedligeholdelse for at holde dine digitale aktiver sikre, opdaterede og optimalt ydende.",
    modernSolutions: "Moderne & Hurtig",
    modernSolutionsDesc:
      "Vi leverer optimerede, lynhurtige løsninger ved hjælp af banebrydende teknologier for maksimal ydeevne.",
    freeHosting: "Gratis Hosting & SSL",
    freeHostingDesc:
      "Hvert projekt inkluderer gratis hosting og SSL-certifikater for at holde din hjemmeside sikker og tilgængelig.",

    // Work
    workTitle: "Vores",
    workHighlight: "Arbejde",
    workSubtitle: "Se nogle af vores prisvindende projekter, der har hjulpet virksomheder med at vokse.",

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
    aboutP1:
      "Vi tager fat på hvert projekt med en enkel idé: ingen udfordring er for stor, når den tilgås på den rigtige måde. Vi kombinerer smart planlægning og dristig kreativitet for at bygge løsninger, der er skabt til at vokse, tilpasse sig og lede.",
    aboutP2:
      "Vores arbejde er designet til at passe perfekt til dine mål — med fleksibiliteten til at udvikle sig, som du gør. Vi forbliver skarpe, fokuserede og klar til at bevæge os, ligesom den endeløse strøm af ideer, der driver sand innovation.",
    aboutP3:
      "Med dyb forskning, klar tænkning og en kreativ kant løser vi ikke bare problemer — vi opdager nye muligheder, som andre overser. Hver beslutning træffes med præcision, hvert design med hensigt.",
    aboutP4:
      "I en verden, der altid bevæger sig, tror vi på at skabe løsninger, der føles grænseløse — ingen genveje, ingen kompromiser. Bare fremadrettet momentum, skræddersyet til dig.",

    // CTA
    ctaTitle: "Klar til at",
    ctaHighlight: "Komme i gang?",
    ctaSubtitle: "Lad os skabe noget fantastisk sammen. Kontakt os i dag for at diskutere dit projekt.",
    viewOurWork: "Se vores arbejde",

    // Contact
    contactTitle: "Kom i",
    contactHighlight: "Kontakt",
    contactSubtitle:
      "Klar til at starte dit næste projekt? Vi er her for at hjælpe med at gøre din vision til virkelighed.",
    emailUs: "Email Os",
    callUs: "Ring Til Os",
    whatsappUs: "WhatsApp Os",
    available247: "Vi er tilgængelige 24/7 for at chatte",
    sendEmail: "Send Email",
    startWhatsapp: "Start WhatsApp Chat",

    // Footer
    services: "Ydelser",
    company: "Virksomhed",
    aboutUs: "Om os",
    ourWork: "Vores arbejde",
    careers: "Karriere",
    privacyPolicy: "Privatlivspolitik",
    allRightsReserved: "Alle rettigheder forbeholdes.",
  },
}

type Language = "en" | "da"
type TranslationKey = keyof typeof translations.en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Get initial language from localStorage if available, otherwise default to English
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      return savedLanguage || "en"
    }
    return "en"
  })

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
