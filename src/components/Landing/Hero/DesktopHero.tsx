import Image from "next/image";
import React from "react";

export const DesktopHero: React.FC = () => (
  <section className="relative h-[600px] w-full overflow-hidden">
    <Image
      src="/images/hero/femivita-hero-desktop.webp"
      alt=""
      fill
      priority
      quality={100}
      sizes="100vw"
      draggable={false}
      className="object-cover"
    />

    <div className="relative flex h-full items-end px-12 py-10">
      <div className="grid h-[300px] w-full grid-cols-12 content-start gap-x-4">
        <h1 className="col-span-8 col-start-2 font-sans font-semibold leading-[1.3] [font-size:clamp(32px,3.34vw,48px)]">
          <span className="block text-black">Rũ bỏ mọi lo âu</span>
          <span className="block text-brand-text">Tự tin đón nhận yêu thương</span>
        </h1>
      </div>
    </div>
  </section>
);
