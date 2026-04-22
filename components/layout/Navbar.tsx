"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BiWorld } from "react-icons/bi";

export function Navbar() {
  const { lang, t, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAr = lang === "ar";

  const navItems = [
    { label: t.nav.equipment, id: "equipment" },
    { label: t.nav.doctors, id: "doctors" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.about, id: "about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // اقفل المينيو الأول
    setMobileOpen(false);

    // استنى لحد ما الـ layout يثبت (مهم جدًا للموبايل)
    requestAnimationFrame(() => {
      const navbar = document.querySelector("nav");
      const navHeight = navbar?.getBoundingClientRect().height || 80;

      const y = el.getBoundingClientRect().top + window.scrollY - 10;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div
        dir="ltr"
        className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-40 py-4 md:py-5"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[20px] md:text-[22px] font-black tracking-[0.12em] leading-none flex-shrink-0"
          style={{ fontFamily: "Cormorant Garamond, serif", color: "#020202" }}
        >
          <img
            src="/images/strata-small.png"
            alt="STRATA logo"
            className="object-contain"
            style={{
              height: "clamp(26px, 3.2vw, 36px)",
              maxWidth: "clamp(96px, 18vw, 150px)",
            }}
          />
        </button>

        <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-base lg:text-lg font-semibold transition-opacity hover:opacity-60 whitespace-nowrap"
              style={{
                color: "#020202",
                letterSpacing: isAr ? "0" : "0.03em",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={toggleLanguage}
            className="flex justify-center items-center font-black tracking-widest transition-opacity hover:opacity-60 whitespace-nowrap"
            style={{
              color: "#020202",
              gap: "clamp(4px, 0.8vw, 6px)",
              fontSize: "clamp(11px, 1.4vw, 14px)",
              minHeight: "clamp(28px, 3.4vw, 34px)",
              padding: "clamp(3px, 0.7vw, 4px) clamp(7px, 1.4vw, 10px)",
            }}
          >
            <BiWorld style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }} />
            {isAr ? "EN" : "AR"}
          </button>
          <button
            className="md:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#020202" }}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-b border-gray-200"
          >
            <div
              className="px-6 py-5 flex flex-col gap-1"
              dir={isAr ? "rtl" : "ltr"}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-base font-semibold py-3 border-b border-gray-100 last:border-0 text-start transition-opacity hover:opacity-60"
                  style={{
                    fontFamily: isAr ? "Tajawal, sans-serif" : "inherit",
                    color: "#020202",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
