"use client"

import { Mail, Phone, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Contact() {
  const { t } = useLanguage()

  const handleEmailClick = () => {
    window.location.href = "mailto:info@fushiguro.com"
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank")
  }

  return (
    <section id="contact" className="py-32 px-8 bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-40 left-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
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
            {t("contactTitle")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
              {t("contactHighlight")}
            </span>
          </h2>
          <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">{t("contactSubtitle")}</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 bg-gray-900 rounded-3xl border border-blue-500/10 shadow-md flex flex-col items-center justify-center text-center hover:bg-gray-800 transition-colors"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -20px rgba(59, 130, 246, 0.3)",
              }}
            >
              <motion.div
                className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-blue-600/20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Mail className="w-10 h-10 text-blue-400" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{t("emailUs")}</h3>
              <p className="text-blue-100/70 mb-6">info@fushiguro.com</p>
              <motion.button
                onClick={handleEmailClick}
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4" />
                {t("sendEmail")}
              </motion.button>
            </motion.div>

            <motion.div
              className="p-8 bg-gray-900 rounded-3xl border border-blue-500/10 shadow-md flex flex-col items-center justify-center text-center hover:bg-gray-800 transition-colors"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -20px rgba(59, 130, 246, 0.3)",
              }}
            >
              <motion.div
                className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-blue-600/20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Phone className="w-10 h-10 text-blue-400" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{t("whatsappUs")}</h3>
              <p className="text-blue-100/70 mb-6">{t("available247")}</p>
              <motion.button
                onClick={handleWhatsAppClick}
                className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("startWhatsapp")}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
