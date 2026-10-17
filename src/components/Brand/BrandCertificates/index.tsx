"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import React, { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, FreeMode, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BrandCertificate, BrandCertificatesData, DEFAULT_BRAND_CERTIFICATES_DATA } from "./types";

export * from "./types";

const CarouselArrow: React.FC<{
  label: string;
  direction: "prev" | "next";
  onClick: () => void;
}> = ({ label, direction, onClick }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-ink-iron transition-colors hover:bg-white"
  >
    <Image
      src="/logos/carousel-arrow-left.svg"
      alt=""
      width={24}
      height={24}
      draggable={false}
      className={direction === "next" ? "rotate-180" : undefined}
    />
  </button>
);

const CertificateCard: React.FC<{ certificate: BrandCertificate }> = ({ certificate }) => (
  <article className="flex shrink-0 flex-col items-center justify-center gap-[10px] rounded-[20px] border border-ink-iron p-3">
    <div className="relative w-full overflow-hidden rounded-[6.222px] aspect-[220/300] md:aspect-[280/380]">
      <Image
        src={certificate.image}
        alt={certificate.imageAlt}
        fill
        sizes="280px"
        quality={100}
        draggable={false}
        className="object-cover"
      />
    </div>
    <div className="flex flex-col items-center">
      <h3 className="w-[220px] text-center font-google-sans text-xl font-medium leading-[1.6] text-ink-dark md:w-[250px]">
        {certificate.title}
      </h3>
      <p className="font-google-sans text-base leading-[1.6] text-ink-soft">{certificate.subtitle}</p>
    </div>
  </article>
);

interface BrandCertificatesSectionProps {
  data?: BrandCertificatesData;
}

const AUTOPLAY_MS = 3500;

export const BrandCertificates: React.FC<BrandCertificatesSectionProps> = ({
  data = DEFAULT_BRAND_CERTIFICATES_DATA,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="certificates" className="relative w-full overflow-hidden bg-ink-surface">
      <ScrollReveal direction="up" delay={0.05} amount={0.4} once>
        <div className="flex flex-col items-center px-4 py-12 md:px-12 md:py-16 lg:px-[161px] lg:py-20">
          <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="font-sans font-bold leading-[1.3] text-gray-700 text-center [font-size:clamp(32px,3.34vw,48px)]">
            <span className="text-brand-text">{data.headlineHighlight}</span>
            {data.headlineRest}
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15} amount={0.4} once>
        <div className="relative">
          <Swiper
            modules={[Autoplay, FreeMode, Keyboard, Mousewheel]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView="auto"
            centeredSlides
            spaceBetween={20}
            rewind={true}
            freeMode={{
              enabled: true,
              sticky: true,
              momentumRatio: 0.8,
              momentumVelocityRatio: 0.8,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.8,
            }}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: AUTOPLAY_MS,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={500}
            className="!overflow-visible"
            wrapperClass="!ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            {data.certificates.map((certificate) => (
              <SwiperSlide
                key={certificate.id}
                className="!w-[220px] !h-auto md:!w-[280px] cursor-grab active:cursor-grabbing select-none"
              >
                <CertificateCard certificate={certificate} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Fade the strip out at both edges */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-surface to-transparent md:w-40 lg:w-[300px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-surface to-transparent md:w-40 lg:w-[300px]"
          />
        </div>
      </ScrollReveal>

      <div className="flex items-center justify-center gap-2 pb-12 pt-10 md:pb-16">
        <CarouselArrow
          label={data.prevLabel}
          direction="prev"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <CarouselArrow
          label={data.nextLabel}
          direction="next"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    </section>
  );
};

export default BrandCertificates;
