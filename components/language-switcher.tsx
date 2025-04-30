"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const changeLanguage = (lang: "en" | "da") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-blue-100/80 hover:text-blue-300 transition-colors"
        aria-label="Change language"
      >
        <Globe size={16} />
        <span className="uppercase text-sm">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-gray-900 border border-blue-500/20 rounded-lg shadow-lg z-50">
          <button
            onClick={() => changeLanguage("en")}
            className={`w-full text-left px-4 py-2 text-sm ${language === "en" ? "text-blue-400" : "text-blue-100/80"} hover:bg-gray-800 rounded-t-lg`}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("da")}
            className={`w-full text-left px-4 py-2 text-sm ${language === "da" ? "text-blue-400" : "text-blue-100/80"} hover:bg-gray-800 rounded-b-lg`}
          >
            Dansk
          </button>
        </div>
      )}
    </div>
  )
}
