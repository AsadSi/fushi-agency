import { fadeIn, staggerContainer, itemVariants } from "@/app/utils/animation.variants";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

type Partner = {
  name: string;
  logo: string;
  url: string;
};

function Partners() {
  const { t } = useLanguage();

  const partners: Partner[] = [
    { name: "Partner 1", logo: "/partner1.svg", url: "https://partner1.com" },
    { name: "Partner 2", logo: "/partner2.svg", url: "https://partner2.com" },
    // Add more partners as needed
  ];
  return (
    <div>
      {/* Partners Section */}
      <section id="partners" className="py-32 px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">{t("partnersTitle")}</h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg mt-4">{t("partnersSubtitle")}</p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center items-center gap-16" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {partners.map((partner, index) => (
              <motion.a key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center" variants={itemVariants} whileHover={{ scale: 1.1 }}>
                <Image src={partner.logo || "/placeholder.svg"} width={200} height={80} alt={partner.name} className="opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Partners;
