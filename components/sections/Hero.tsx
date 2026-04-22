"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import BookNowButton from "@/components/basic/BookNowButton";

const DURATIONS = [10000, 2000];

export function Hero() {
  const { lang, t } = useLanguage();
  const [state, setState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setState((s) => (s + 1) % 2),
      DURATIONS[state]
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
      <div className="flex-1 relative" style={{ marginTop: "64px" }}>
        <AnimatePresence mode="wait">
          {state === 0 && (
            <motion.div
              key="tooth"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.img
                src="/images/hero-tooth.png"
                alt="STRATA"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5.5 }}
                className="object-contain drop-shadow-2xl"
                style={{
                  height: "clamp(170px, min(46dvh, 52vw), 460px)",
                  maxWidth: "82vw",
                }}
              />
            </motion.div>
          )}

          {state === 1 && (
            <motion.div
              key="brand"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <img
                src="/images/strata-big.png"
                alt="STRATA"
                className="object-contain"
                style={{
                  width: "clamp(180px, 58vw, 780px)",
                  maxWidth: "86vw",
                  maxHeight: "clamp(110px, 34dvh, 340px)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-shrink-0 backdrop-blur">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between mb-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-40 py-4 md:py-5">
          <BookNowButton text={t.hero.bookNow} onClick={scrollToBook} />

          <div className="text-center flex-1 px-4">
            <p className="text-3xl lg:text-4xl font-black">{t.hero.title}</p>
            <p className="text-[13px] lg:text-[14px] mt-1">
              {boldSaudiWord(t.hero.subtitle)}
            </p>
          </div>

          <div className="text-center text-black" dir="rtl">
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
