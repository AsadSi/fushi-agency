import { fadeIn, staggerContainer, itemVariants } from "@/app/utils/animation.variants";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    content: "They transformed our online presence completely. Their team was professional, creative, and delivered beyond our expectations. Our new website has increased conversions by 150%.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Lisa Johnson",
    role: "Marketing Director, StyleBrand",
    content: "Working with them was a game-changer for our e-commerce business. They understood our vision and created a user-friendly website that our customers love. Sales have increased by 200% since launch.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mark Davis",
    role: "Founder, HealthPlus",
    content: "The team exceeded all expectations. They delivered our healthcare portal on time and on budget, with all the complex functionality we needed. Highly recommended!",
    image: "/placeholder.svg?height=80&width=80",
  },
];

function Testimonials() {
  const { t } = useLanguage();

  return (
    <div>
      {" "}
      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {t("testimonialsTitle")} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">{t("testimonialsHighlight")}</span>
            </h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">{t("testimonialsSubtitle")}</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
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
                  <Image src={testimonial.image || "/placeholder.svg"} width={48} height={48} alt={testimonial.name} className="rounded-full" />
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
    </div>
  );
}

export default Testimonials;
