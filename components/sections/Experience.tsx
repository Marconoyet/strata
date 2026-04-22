"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function Experience() {
  const { lang, t } = useLanguage();
  const titleParts =
    lang === "ar"
      ? t.experience
          .split("...")
          .map((part, index, parts) =>
            index < parts.length - 1 ? `${part.trim()}...` : part.trim()
          )
      : t.experience
          .split("...")
          .map((part, index, parts) =>
            index < parts.length - 1 ? `${part.trim()}...` : part.trim()
          );

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-[calc(100vw-24px)] sm:max-w-[calc(100vw-32px)] md:max-w-[calc(100vw-48px)] lg:max-w-[calc(100vw-72px)] px-0">
        <motion.div
          className="relative flex h-[160px] sm:h-[240px] md:h-[360px] lg:h-[520px] items-center justify-center overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[34px]"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/reference-hero.png"
            aria-hidden="true"
          >
            <source src="/videos/experience.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/55" />

          <motion.h2
            className={`relative z-10 mx-auto flex max-w-5xl flex-col items-start px-5 sm:px-6 md:px-10 text-right text-[clamp(1.7rem,6vw,5.9rem)] font-black leading-[1.18] text-white ${
              lang === "en" ? "font-display" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.65 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            {titleParts.map((part) => (
              <motion.span
                key={part}
                className="block mb-2 sm:mb-4"
                variants={{
                  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {part}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
