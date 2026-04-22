"use client";

import { GiClick } from "react-icons/gi";

type Props = {
  text?: string;
  onClick?: () => void;
};

export default function BookNowButton({
  text = "احجز موعدك الآن",
  onClick,
}: Props) {
  return (
    <div className="flex justify-center">
      <a
        onClick={onClick}
        target="_blank"
        href="https://api.whatsapp.com/send/?phone=551298899&text&type=phone_number&app_absent=0"
        className="
          group relative overflow-hidden
          flex justify-center items-center
          gap-[clamp(6px,1.2vw,12px)]
          px-[clamp(12px,2vw,24px)]
          py-[clamp(10px,1.5vw,14px)]
          rounded-[clamp(8px,1vw,14px)]
          bg-black text-white
          text-[clamp(13px,1.4vw,18px)] font-medium
          transition-all duration-300
          hover:scale-[1.03]
        "
      >
        {/* overlay */}
        <span
          className="
            absolute inset-0
            bg-white opacity-0
            transition-opacity duration-300
            pointer-events-none
            group-hover:opacity-20
          "
        />

        {/* content */}
        <span className="relative z-10 flex items-center gap-[clamp(6px,1vw,10px)]">
          <GiClick className="text-[clamp(18px,2vw,26px)]" />
          {text}
        </span>
      </a>
    </div>
  );
}
