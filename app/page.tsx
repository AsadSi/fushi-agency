"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, itemVariants } from "./utils/animation.variants";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";

// const projects = [
//   {
//     title: "E-commerce Platform",
//     description: "Online store with 200% increase in conversions",
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     title: "Corporate Website",
//     description: "Modern redesign for a Fortune 500 company",
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     title: "Mobile Application",
//     description: "Fitness app with 1M+ downloads",
//     image: "/placeholder.svg?height=400&width=600",
//   },
//   {
//     title: "SaaS Platform",
//     description: "Customer management solution",
//     image: "/placeholder.svg?height=400&width=600",
//   },
// ];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Hero />
      <Services />
      <Partners />
      <Testimonials />

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
          <motion.h2 className="text-5xl md:text-7xl font-bold mb-6" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}>
            {t("ctaTitle")} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">{t("ctaHighlight")}</span>
          </motion.h2>
          <motion.p className="text-blue-100/80 max-w-2xl mx-auto text-xl mb-12" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
            {t("ctaSubtitle")}
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={itemVariants}>
              <Link href="#contact">
                <motion.button className="w-full sm:w-auto px-10 py-5 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center gap-2 text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {t("contactUs")}
                  <motion.span initial={{ x: 0 }} animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="#work">
                <motion.button className="w-full sm:w-auto px-10 py-5 border border-blue-400/30 rounded-lg hover:bg-blue-800/30 transition-colors text-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {t("viewOurWork")}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
