"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function About() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="about"
      className={`
        py-[clamp(60px,8vw,120px)]
        relative
        ${
          lang === "en"
            ? "bg-[linear-gradient(90deg,#fafafa_0%,#ffffff_55%,#ffffff_100%)]"
            : "bg-[linear-gradient(270deg,#fafafa_0%,#ffffff_55%,#ffffff_100%)]"
        }
      `}
    >
      <div className="w-full px-[clamp(16px,5vw,120px)]">
        <div className="flex flex-col lg:flex-row gap-[clamp(24px,4vw,80px)] items-center justify-between">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-[clamp(16px,2vw,28px)] w-full"
          >
            <h3
              className={`
                font-bold text-foreground
                text-[clamp(32px,5vw,72px)]
                leading-tight
                ${lang === "en" ? "font-display" : ""}
              `}
            >
              {t.about.title}
            </h3>

            <div className="w-[clamp(60px,6vw,100px)] h-[clamp(4px,0.5vw,6px)] bg-black rounded-full" />

            <p className="text-[clamp(14px,1.6vw,20px)] text-muted-foreground leading-relaxed max-w-[650px]">
              {t.about.description}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end w-full lg:w-1/2"
          >
            <img
              src="/images/place-outline.png"
              alt="STRATA place"
              className="w-[clamp(220px,40vw,420px)] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
