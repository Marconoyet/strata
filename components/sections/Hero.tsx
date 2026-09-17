"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import BookNowButton from "@/components/basic/BookNowButton";

const SLIDES = [
  "/images/hero/1.webp",
  "/images/hero/2.webp",
  "/images/hero/3.webp",
  "/images/hero/4.webp",
];

const SLIDE_DURATION = 10000;
const FADE_DURATION = 0.9;

export function Hero() {
  const { lang, t } = useLanguage();
  const [state, setState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setState((s) => (s + 1) % SLIDES.length),
      SLIDE_DURATION
    );
    return () => clearTimeout(timer);
  }, [state]);

  const scrollToBook = () =>
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });

  const boldSaudiWord = (text: string) =>
    text.split("سعوديون").map((part, index, parts) => (
      <span key={`${part}-${index}`}>
        {part}
        {index < parts.length - 1 && (
          <strong className="font-black">سعوديون</strong>
        )}
      </span>
    ));

  return (
    <section
      className="relative h-screen flex flex-col overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #ffffff 0%, #fbfbfb 60%, #f7f7f7 100%)",
      }}
    >
      {SLIDES.map((src, index) => (
        <motion.img
          key={src}
          src={src}
          alt="STRATA"
          loading={index === 0 ? "eager" : "lazy"}
          initial={false}
          animate={{ opacity: state === index ? 1 : 0 }}
          transition={{ duration: FADE_DURATION }}
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] pointer-events-none"
        />
      ))}

      <div className="flex-1" />

      <div className="relative z-10 flex-shrink-0">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between mb-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-40 py-4 md:py-5">
          <BookNowButton text={t.hero.bookNow} onClick={scrollToBook} />

          <div className="text-center flex-1 px-4">
            <p className="text-3xl lg:text-4xl font-black">{t.hero.title}</p>
            <p className="text-[13px] lg:text-[14px] mt-1">
              {boldSaudiWord(t.hero.subtitle)}
            </p>
          </div>

          <div className="text-center text-white" dir="rtl">
            <p className="text-[16px] lg:text-[18px] font-medium leading-tight whitespace-nowrap">
              {t.hero.clinic.name}
            </p>
            <p
              className="mt-1 text-[16px] lg:text-[18px] font-normal leading-none tracking-[0.04em] whitespace-nowrap"
              dir="ltr"
            >
              {t.hero.clinic.enName}
            </p>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden px-4 sm:px-8 py-4 flex justify-between items-center">
          <div>
            <p className="font-black text-[clamp(14px,2vw,22px)]">
              {t.hero.title}
            </p>

            <p className="text-[clamp(10px,1.5vw,16px)]">
              {boldSaudiWord(t.hero.mobileSubtitle || t.hero.subtitle)}
            </p>
          </div>

          <BookNowButton text={t.hero.bookNow} onClick={scrollToBook} />
        </div>
      </div>
    </section>
  );
}
