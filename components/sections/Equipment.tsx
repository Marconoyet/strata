"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { IoMdCheckboxOutline } from "react-icons/io";

export function Equipment() {
  const { lang, t } = useLanguage();
  const isRTL = lang === "ar";
  const items = [t.equipment.item1, t.equipment.item2];

  return (
    <section
      id="equipment"
      className="bg-white py-[clamp(40px,6vw,120px)]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="w-full px-[clamp(16px,5vw,120px)]">
        {/* TITLE */}
        <div className="text-center mb-[clamp(30px,5vw,80px)]">
          <h2 className="text-[clamp(24px,4vw,48px)] font-bold text-zinc-950">
            {t.equipment.title}
          </h2>
          <span className="mt-4 inline-flex h-[4px] w-[80px] bg-black rounded-full" />
        </div>

        {/* ITEMS */}
        <div className="space-y-[clamp(30px,5vw,80px)]">
          {items.map((item) => (
            <motion.article
              key={item.title}
              className="
                grid
                gap-[clamp(20px,4vw,60px)]
                items-center

                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-[1fr_1fr_1fr]

                p-[clamp(16px,2vw,32px)]
                rounded-[clamp(16px,2vw,28px)]
                shadow-lg
              "
            >
              {/* IMAGE */}
              <div className="flex justify-center">
                <motion.img
                  src={item.device}
                  alt={item.alt}
                  className="
                    w-[clamp(180px,40vw,420px)]
                    h-auto object-contain
                  "
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                />
              </div>

              {/* TEXT */}
              <div className={`${isRTL ? "text-right" : "text-left"}`}>
                <p className="text-[clamp(20px,3vw,48px)] font-bold">
                  {item.brandIntro}
                </p>

                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-[clamp(120px,20vw,240px)] object-contain mt-0"
                />

                <h3 className="text-[clamp(18px,2vw,28px)] font-bold">
                  {item.title}
                </h3>

                <p className="text-[clamp(14px,1.4vw,18px)] text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* LIST */}
              <ul className="space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-[clamp(14px,1.4vw,18px)] font-medium"
                  >
                    <IoMdCheckboxOutline className="mt-1 shrink-0" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
