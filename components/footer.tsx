"use client"

import Link from "next/link"
import { Globe, Mail, Phone, Instagram, Twitter, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 py-16 px-8 border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
            Fushiguro Megumi
          </h3>
          <p className="text-blue-100/70">{t("heroSubtitle")}</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">{t("services")}</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                {t("webSolutions")}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                {t("mobileApps")}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                {t("uiUx")}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                {t("branding")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">{t("company")}</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                {t("aboutUs")}
              </Link>
            </li>
            <li>
              <Link href="#work" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                {t("ourWork")}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                {t("careers")}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                {t("privacyPolicy")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">{t("contact")}</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-blue-100/70">
              <Mail size={16} />
              <span>info@fushiguro.com</span>
            </li>
            <li className="flex items-center gap-2 text-blue-100/70">
              <Phone size={16} />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2 text-blue-100/70">
              <Globe size={16} />
              <span>123 Digital Street, Tokyo, Japan</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-blue-900/20 text-center text-blue-100/50 text-sm">
        © {new Date().getFullYear()} Fushiguro Megumi. {t("allRightsReserved")}
      </div>
    </footer>
  )
}
