"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import NavBar from "@/components/nav"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import { Globe, Laptop, Search, ShoppingCart, Wrench, Zap, Shield, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"

// Consolidated services
const services = [
  {
    titleKey: "webSolutions",
    descriptionKey: "webSolutionsDesc",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    titleKey: "ecommerce",
    descriptionKey: "ecommerceDesc",
    icon: <ShoppingCart className="w-8 h-8" />,
  },
  {
    titleKey: "uiUx",
    descriptionKey: "uiUxDesc",
    icon: <Laptop className="w-8 h-8" />,
  },
  {
    titleKey: "seo",
    descriptionKey: "seoDesc",
    icon: <Search className="w-8 h-8" />,
  },
  {
    titleKey: "maintenance",
    descriptionKey: "maintenanceDesc",
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    titleKey: "modernSolutions",
    descriptionKey: "modernSolutionsDesc",
    icon: <Zap className="w-8 h-8" />,
  },
]

const partners = [
  {
    name: "WeCircle.io",
    logo: "/placeholder.svg?height=80&width=200",
    url: "https://example.com",
  },
  {
    name: "NSSA.dk",
    logo: "/placeholder.svg?height=80&width=200",
    url: "https://example.com",
  },
  {
    name: "TechCorp",
    logo: "/placeholder.svg?height=80&width=200",
    url: "https://example.com",
  },
  {
    name: "DigitalBrand",
    logo: "/placeholder.svg?height=80&width=200",
    url: "https://example.com",
  },
]

const projects = [
  {
    title: "E-commerce Platform",
    description: "Online store with 200% increase in conversions",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Corporate Website",
    description: "Modern redesign for a Fortune 500 company",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Mobile Application",
    description: "Fitness app with 1M+ downloads",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "SaaS Platform",
    description: "Customer management solution",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    content:
      "They transformed our online presence completely. Their team was professional, creative, and delivered beyond our expectations. Our new website has increased conversions by 150%.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Lisa Johnson",
    role: "Marketing Director, StyleBrand",
    content:
      "Working with them was a game-changer for our e-commerce business. They understood our vision and created a user-friendly website that our customers love. Sales have increased by 200% since launch.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mark Davis",
    role: "Founder, HealthPlus",
    content:
      "The team exceeded all expectations. They delivered our healthcare portal on time and on budget, with all the complex functionality we needed. Highly recommended!",
    image: "/placeholder.svg?height=80&width=80",
  },
]

// Process steps with animations
const processSteps = [
  {
    number: 1,
    titleKey: "step1",
    descKey: "step1Desc",
    icon: "📋",
  },
  {
    number: 2,
    titleKey: "step2",
    descKey: "step2Desc",
    icon: "💰",
  },
  {
    number: 3,
    titleKey: "step3",
    descKey: "step3Desc",
    icon: "🤝",
  },
  {
    number: 4,
    titleKey: "step4",
    descKey: "step4Desc",
    icon: "💻",
  },
  {
    number: 5,
    titleKey: "step5",
    descKey: "step5Desc",
    icon: "🚀",
  },
]

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

export default function Home() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })

  // Parallax effect for hero section
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar />

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center px-8 overflow-hidden" ref={heroRef}>
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <Image
            src="/images/hero-image.png"
            alt="Team collaboration"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 to-gray-950/95"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <AnimatePresence>
            {heroInView && (
              <>
                <motion.h1
                  className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                    {t("heroTitle1")}
                  </span>{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                    {t("heroTitle2")}
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {t("heroSubtitle")}
                </motion.p>

                <motion.div
                  className="flex gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link href="#contact">
                    <motion.button
                      className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow flex items-center gap-2 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t("contactUs")}
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </motion.button>
                  </Link>
                  <Link href="#services">
                    <motion.button
                      className="px-8 py-4 border border-blue-400/30 rounded-lg hover:bg-blue-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t("ourServices")}
                    </motion.button>
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="w-8 h-12 border-2 border-blue-400/50 rounded-full flex justify-center"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <motion.div
              className="w-1.5 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 bg-gray-950 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {t("expertiseTitle")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                {t("expertiseHighlight")}
              </span>
            </h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">{t("expertiseSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-xl hover:bg-gray-900/50 transition-all duration-300 border border-transparent hover:border-blue-500/20 group"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)",
                }}
              >
                <motion.div
                  className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3">{t(service.titleKey)}</h3>
                <p className="text-blue-100/70">{t(service.descriptionKey)}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl border border-blue-500/10 text-center"
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold">{t("freeHosting")}</h3>
            </div>
            <p className="text-blue-100/70">{t("freeHostingDesc")}</p>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-8 bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {t("workTitle")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                {t("workHighlight")}
              </span>
            </h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">{t("workSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px -20px rgba(59, 130, 246, 0.3)",
                }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100/80">{project.description}</p>
                  <motion.button className="mt-4 text-blue-400 flex items-center gap-2 w-fit" whileHover={{ x: 5 }}>
                    View Project <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-32 px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
              {t("partnersTitle")}
            </h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg mt-4">{t("partnersSubtitle")}</p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  width={200}
                  height={80}
                  alt={partner.name}
                  className="opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - Enhanced with animations */}
      <section id="process" className="py-32 px-8 bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <motion.div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_40%)]" />
        <motion.div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.1),transparent_40%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {t("processTitle")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                {t("processHighlight")}
              </span>
            </h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">{t("processSubtitle")}</p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/20 via-indigo-500/40 to-blue-600/20 transform -translate-y-1/2 hidden md:block"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-5 gap-12 relative"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center relative z-10"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Step Number with Icon */}
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-3xl mb-6 shadow-lg relative"
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.8 },
                    }}
                  >
                    <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                  </motion.div>

                  {/* Step Content */}
                  <motion.div
                    className="bg-gray-800/50 p-6 rounded-xl border border-blue-500/10 text-center w-full hover:border-blue-500/30 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-lg"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)" }}
                  >
                    <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-blue-100/70">{t(step.descKey)}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {t("testimonialsTitle")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                {t("testimonialsHighlight")}
              </span>
            </h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">{t("testimonialsSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-900 rounded-3xl border border-blue-500/10 shadow-md"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px -20px rgba(59, 130, 246, 0.3)",
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    width={48}
                    height={48}
                    alt={testimonial.name}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-blue-300/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-blue-100/80">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("aboutTitle")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              {t("aboutHighlight")}
            </span>
          </motion.h2>
          <motion.p
            className="text-blue-100/70 max-w-2xl mx-auto text-lg mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("aboutSubtitle")}
          </motion.p>

          <motion.div
            className="p-8 bg-gray-900 rounded-3xl border border-blue-500/10 shadow-md space-y-6"
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
              {t("innovationTitle")}
            </h3>
            <p className="text-blue-100/90 text-lg">{t("aboutP1")}</p>
            <p className="text-blue-100/80 text-lg">{t("aboutP2")}</p>
            <p className="text-blue-100/80 text-lg">{t("aboutP3")}</p>
            <p className="text-blue-100/80 text-lg">{t("aboutP4")}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 25,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("ctaTitle")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
              {t("ctaHighlight")}
            </span>
          </motion.h2>
          <motion.p
            className="text-blue-100/80 max-w-2xl mx-auto text-xl mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("ctaSubtitle")}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Link href="#contact">
                <motion.button
                  className="w-full sm:w-auto px-10 py-5 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center gap-2 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("contactUs")}
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="#work">
                <motion.button
                  className="w-full sm:w-auto px-10 py-5 border border-blue-400/30 rounded-lg hover:bg-blue-800/30 transition-colors text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("viewOurWork")}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
