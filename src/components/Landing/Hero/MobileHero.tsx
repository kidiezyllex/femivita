import Image from "next/image";
import React from "react";

export const MobileHero: React.FC = () => (
  <section className="relative aspect-[375/656.25] max-h-[900px] w-full overflow-hidden">
    <Image
      src="/images/hero/femivita-hero-mobile.webp"
      alt=""
      fill
      priority
      quality={100}
      sizes="100vw"
      draggable={false}
      className="object-cover"
    />

    <h1 className="absolute left-1/2 top-[23.7%] w-[83%] -translate-x-1/2 text-center font-sans font-semibold leading-[1.3] [font-size:clamp(20px,6vw,28px)]">
      <span className="block text-black">Rũ bỏ mọi lo âu</span>
      <span className="block text-brand-text">Tự tin đón nhận yêu thương</span>
    </h1>
  </section>
);
