"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { IoMdCheckboxOutline } from "react-icons/io";

export function Doctors() {
  const { lang, t } = useLanguage();

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
    <section id="doctors" className="py-16 md:py-24 bg-white relative">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-12 md:mb-16 gap-4 md:gap-6">
          <div className="space-y-[clamp(8px,1.5vw,20px)]">
            <h2
              className={`
      font-bold text-foreground leading-tight
      text-[clamp(25px,4vw,56px)]
      ${lang === "en" ? "font-display" : ""}
    `}
            >
              {t.doctors.title}
            </h2>

            <p
              className={`
      mt-1 text-black leading-relaxed
      text-[clamp(10px,1.6vw,22px)]
      max-w-[clamp(280px,60vw,600px)]
      ${lang === "en" ? "font-display" : ""}
    `}
            >
              {boldSaudiWord(t.doctors.description)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {t.doctors.items.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group h-full flex flex-col border border-gray-200 rounded-2xl hover:border-black transition"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  src={`/images/doctors/${idx + 1}.png`}
                  alt={doc.name}
                />
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 -mt-10 relative z-10 flex flex-col flex-grow">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center leading-snug">
                  {doc.name}
                </h3>

                <p className="text-black text-xs sm:text-sm font-medium mt-1 text-center">
                  {doc.spec}
                </p>

                <div className="w-10 h-[2px] bg-primary/30 my-4 mx-auto"></div>

                <div className="flex flex-col gap-3 text-right flex-grow">
                  {doc.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 justify-start"
                    >
                      <IoMdCheckboxOutline className="text-black mt-[3px] shrink-0" />
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
