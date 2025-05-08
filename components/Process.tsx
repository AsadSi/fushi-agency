import { fadeIn, staggerContainer, itemVariants } from "@/app/utils/animation.variants";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import React from "react";
const processSteps: Array<{
  number: number;
  titleKey: "step1" | "step2" | "step3" | "step4" | "step5";
  descKey: "step1Desc" | "step2Desc" | "step3Desc" | "step4Desc" | "step5Desc";
  icon: string;
}> = [
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
];
function Process() {
  const { t } = useLanguage();

  return (
    <div>
      {" "}
      {/* Process Section - Enhanced with animations */}
      <section id="process" className="py-32 px-8 bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <motion.div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_40%)]" />
        <motion.div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.1),transparent_40%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-20" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {t("processTitle")} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">{t("processHighlight")}</span>
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

            <motion.div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              {processSteps.map((step, index) => (
                <motion.div key={index} className="flex flex-col items-center relative z-10" variants={itemVariants} custom={index} whileHover={{ scale: 1.05 }}>
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
                    <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">{t(step.titleKey)}</h3>
                    <p className="text-blue-100/70">{t(step.descKey as keyof typeof t)}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;
