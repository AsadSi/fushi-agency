"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "@/contexts/language-context";

export default function NavBar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/90 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-1 shadow-md animate-pulse">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">Fushiguro Megumi</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors">
            {t("services")}
          </Link>
          <Link href="#work" className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors">
            {t("work")}
          </Link>
          <Link href="#process" className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors">
            {t("process")}
          </Link>
          <Link href="#about" className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors">
            {t("about")}
          </Link>
          <Link href="#contact" className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm">
            {t("contact")}
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link href="#services" className="text-blue-100/80 hover:text-blue-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t("services")}
            </Link>
            <Link href="#work" className="text-blue-100/80 hover:text-blue-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t("work")}
            </Link>
            <Link href="#process" className="text-blue-100/80 hover:text-blue-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t("process")}
            </Link>
            <Link href="#about" className="text-blue-100/80 hover:text-blue-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t("about")}
            </Link>
            <Link href="#contact" className="text-blue-100/80 hover:text-blue-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              {t("contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
