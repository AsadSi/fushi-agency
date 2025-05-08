import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import React from "react";

function Services() {
  const { t } = useLanguage();
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      titleKey: "service1Title",
      descriptionKey: "service1Description",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      titleKey: "service2Title",
      descriptionKey: "service2Description",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      titleKey: "service3Title",
      descriptionKey: "service3Description",
    },
  ];
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
  };
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
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div>
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
          <motion.div className="text-center mb-20" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {t("expertiseTitle")} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">{t("expertiseHighlight")}</span>
            </h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">{t("expertiseSubtitle")}</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
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
                <motion.div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors" whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3">{t(service.titleKey as keyof typeof t)}</h3>
                <p className="text-blue-100/70">{t(service.descriptionKey as keyof typeof t)}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl border border-blue-500/10 text-center" variants={scaleUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold">{t("freeHosting")}</h3>
            </div>
            <p className="text-blue-100/70">{t("freeHostingDesc")}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
