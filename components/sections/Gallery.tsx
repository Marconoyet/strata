"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.png",
  "/images/gallery/3.png",
  "/images/gallery/4.png",
  "/images/gallery/5.png",
];

export function Gallery() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-1 pb-10 md:py-20 lg:py-24 bg-white relative">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: {
                  opacity: 0,
                  y: idx === 0 ? 34 : 24,
                  scale: idx === 0 ? 0.98 : 0.96,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className={`relative group overflow-hidden rounded-[8px] bg-slate-100 shadow-sm ${
                idx === 0
                  ? "md:col-span-2 aspect-[16/10] md:aspect-[16/9]"
                  : "aspect-[16/10]"
              }`}
            >
              <img
                src={src}
                alt={`Clinic Interior ${idx + 1}`}
                className="w-full h-full object-center object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
