"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { lang, t } = useLanguage();
  const socialLinks = [
    {
      icon: MapPin,
      href: "https://maps.app.goo.gl/HZKbx8V1v2A3V16Z9",
    },
    {
      icon: Phone,
      href: "tel:551298899",
    },
    {
      icon: Mail,
      href: "mailto:Strata.bu@gmail.com",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@strata.sa?_r=1&_t=ZS-95cakj2ksJG",
    },
    {
      icon: FaSnapchatGhost,
      href: "https://www.snapchat.com/add/strata.sa?share_id=KQMTANrXXJg&locale=ar-SA",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/strata.sa?igsh=N2MwZHlwY2I0YTc4",
    },
  ];
  return (
    <footer
      id="footer"
      className="bg-black text-white py-[clamp(40px,6vw,100px)]"
    >
      <div className="w-full px-[clamp(16px,5vw,120px)]">
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-[clamp(20px,4vw,50px)] text-center">
          {/* ❌ مخفي في الموبايل */}
          <div className="hidden md:flex flex-col items-center space-y-2 lg:items-start lg:text-start">
            <h3 className="text-[clamp(18px,2vw,26px)] font-semibold">
              {t.footer.clinicName}
            </h3>
            <p className="text-[clamp(16px,1.8vw,22px)] text-white/70">
              {t.footer.clinicEnName}
            </p>
          </div>

          {/* ❌ مخفي في الموبايل */}
          <div className="hidden md:flex flex-col items-center space-y-3">
            <p className="text-[clamp(24px,3.5vw,56px)] font-black leading-tight">
              {t.footer.headline}
            </p>
            <p className="max-w-[clamp(280px,40vw,500px)] text-[clamp(13px,1.4vw,16px)] text-white/80">
              {t.footer.subtitle}
            </p>
          </div>

          {/* LOGO */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex justify-end mx-auto lg:mx-0 opacity-80 hover:opacity-100 transition"
          >
            <img
              className="w-[clamp(160px,30vw,420px)]"
              src="/images/strata-white.png"
              alt="STRATA"
            />
          </button>
        </div>

        {/* CTA */}
        <div className="mt-[clamp(30px,6vw,80px)] flex justify-center">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=551298899&text&type=phone_number&app_absent=0"
            className="
              group flex items-center justify-center gap-3
              h-[clamp(44px,5vw,60px)]
              px-[clamp(18px,4vw,40px)]
              text-[clamp(16px,2vw,22px)]
              border border-white/70
              rounded-lg
              transition
              hover:bg-white hover:text-black
            "
          >
            <GiClick className="shrink-0 text-[clamp(18px,2vw,26px)]" />
            {t.footer.bookNow}
          </a>
        </div>

        {/* BOTTOM */}
        <div className="mt-[clamp(40px,7vw,100px)] grid grid-cols-1 lg:grid-cols-3 gap-[clamp(20px,4vw,40px)] text-center text-white/60">
          {/* VAT + REG */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-2">
              <img src="/images/vat.png" className="h-[clamp(24px,3vw,32px)]" />
              <span>{t.footer.vatLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/reg.png" className="h-[clamp(24px,3vw,32px)]" />
              <span>{t.footer.regLabel}</span>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-wrap justify-center items-center gap-[clamp(10px,2vw,18px)]">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
        flex items-center justify-center
        w-[clamp(40px,5vw,52px)]
        h-[clamp(40px,5vw,52px)]
        border border-white
        rounded-full
        hover:bg-white hover:text-black
        transition
      "
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* RIGHTS */}
          <div className="flex flex-col items-center lg:items-end gap-3">
            <img src="/images/visa.png" className="h-[clamp(65px,6vw,70px)]" />
            <div className="text-[clamp(12px,1.2vw,16px)] text-white/60 leading-relaxed text-center lg:text-right">
              {t.footer.rights}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
