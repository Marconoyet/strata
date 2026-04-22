"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function Services() {
  const { lang, t } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section
      id="services"
      className="relative bg-[#fafafa] py-[clamp(60px,8vw,140px)]"
    >
      <div className="w-full px-[clamp(16px,5vw,120px)]">
        {/* layout */}
        <div className="grid gap-[clamp(30px,5vw,80px)] lg:grid-cols-[0.85fr_1.45fr] lg:[direction:ltr]">
          {/* LEFT (Sticky on ALL screens) */}
          <div
            className={`
              top-20 sticky h-fit
              ${isArabic ? "[direction:rtl]" : "[direction:ltr]"}
            `}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center text-center lg:text-center lg:items-center space-y-[clamp(12px,2vw,24px)]"
            >
              {/* image */}
              <motion.img
                src="/images/tooth.png"
                alt="STRATA dental care"
                className="w-[clamp(120px,25vw,260px)] object-contain"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              />

              {/* title */}
              <h2
                className={`
                  font-bold text-black leading-tight
                  text-[clamp(26px,4.5vw,56px)]
                  ${lang === "en" ? "font-display" : ""}
                `}
              >
                {t.services.heading}
              </h2>

              {/* description */}
              <p className="max-w-[clamp(260px,60vw,500px)] text-[clamp(14px,1.6vw,18px)] leading-relaxed text-zinc-600">
                {isArabic ? (
                  <>
                    مجموعة شاملة من{" "}
                    <strong className="text-black">
                      {t.services.descriptionRich.highlight}
                    </strong>{" "}
                    {t.services.descriptionRich.suffix}
                  </>
                ) : (
                  t.services.description
                )}
              </p>
            </motion.div>
          </div>

          {/* RIGHT (Scrollable content) */}
          <div
            className={`
              space-y-[clamp(16px,2vw,28px)]
              ${isArabic ? "[direction:rtl]" : "[direction:ltr]"}
            `}
          >
            {t.services.items.map((service, idx) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.25 }}
                className="
                  group relative overflow-hidden
                  rounded-[clamp(10px,1vw,16px)]
                  border border-zinc-200/70
                  bg-white
                  p-[clamp(14px,2vw,24px)]
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  transition duration-300
                  hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.1)]
                "
              >
                <div
                  className={`
                    grid items-center
                    gap-[clamp(12px,2vw,24px)]
                    md:grid-cols-[0.8fr_1fr]
                    ${isArabic ? "md:[direction:rtl]" : ""}
                  `}
                >
                  {/* image */}
                  <div className="overflow-hidden rounded-lg flex justify-center">
                    <img
                      src={`/images/services/${idx + 1}.png`}
                      alt={service.title}
                      className="h-[clamp(120px,18vw,200px)] object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* text */}
                  <div className={isArabic ? "text-right" : "text-left"}>
                    <h3 className="text-[clamp(16px,2vw,24px)] font-bold text-black">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[clamp(13px,1.4vw,16px)] leading-relaxed text-zinc-600">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
