import { motion, AnimatePresence, useInView, useTransform, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

function Hero() {
  const heroRef = useRef(null);
  const { t } = useLanguage();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  // Parallax effect for hero section
  const [, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center px-8 overflow-hidden" ref={heroRef}>
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <Image src="/images/hero-image.png" alt="Team collaboration" fill className="object-cover opacity-20" priority />
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
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">{t("heroTitle1")}</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">{t("heroTitle2")}</span>
                </motion.h1>

                <motion.p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                  {t("heroSubtitle")}
                </motion.p>

                <motion.div className="flex gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                  {/* <Link href="#contact">
                    <motion.button className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow flex items-center gap-2 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {t("contactUs")}
                      <motion.span initial={{ x: 0 }} animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </motion.button>
                  </Link>
                  <Link href="#services">
                    <motion.button className="px-8 py-4 border border-blue-400/30 rounded-lg hover:bg-blue-800 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {t("ourServices")}
                    </motion.button>
                  </Link> */}

                  <Link href="/form">
                    <motion.button className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow flex items-center gap-2 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {t("getAnOffer")}
                      <motion.span initial={{ x: 0 }} animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </motion.button>
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}>
          <motion.div className="w-8 h-12 border-2 border-blue-400/50 rounded-full flex justify-center" initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
            <motion.div className="w-1.5 h-3 bg-blue-400 rounded-full mt-2" animate={{ y: [0, 15, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
