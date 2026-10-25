"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Mousewheel } from "swiper/modules";
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
    <div className="relative aspect-[220/300] w-full overflow-hidden rounded-[6.222px] md:aspect-[280/380]">
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
      <p className="font-google-sans text-base leading-[1.6] text-ink-soft">
        {certificate.subtitle}
      </p>
    </div>
  </article>
);

interface BrandCertificatesSectionProps {
  data?: BrandCertificatesData;
}

// Shorter slide transition: the quicker it settles, the less likely a second click lands mid-animation.
const TRANSITION_MS = 400;

// Swiper's loop mode needs clearly more slides than fit on screen (slidesPerView is "auto" and the strip is
// centred, so ~5-6 cards are visible on desktop). The certificates are repeated this many times to give it enough.
const LOOP_REPEAT = 4;

export const BrandCertificates: React.FC<BrandCertificatesSectionProps> = ({
  data = DEFAULT_BRAND_CERTIFICATES_DATA,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = useMemo(
    () =>
      Array.from({ length: LOOP_REPEAT }, (_, round) =>
        data.certificates.map((certificate) => ({
          certificate,
          key: `${certificate.id}-${round}`,
        })),
      ).flat(),
    [data.certificates],
  );

  return (
    <section id="certificates" className="relative w-full bg-ink-surface">
      <ScrollReveal direction="up" delay={0.05} amount={0.4} once>
        <div className="flex flex-col items-center px-4 py-12 md:px-12 md:py-16 lg:px-[161px] lg:py-20">
          <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="text-center font-sans font-bold leading-[1.3] text-gray-700 [font-size:clamp(32px,3.34vw,48px)]">
            <span className="text-brand-text">{data.headlineHighlight}</span>
            {data.headlineRest}
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15} amount={0.4} once>
        <div className="relative">
          {/* loop gives the endless strip. freeMode is left out on purpose: combined with loop, Swiper keeps
              drifting after a drag, so the strip snaps card by card instead. */}
          <Swiper
            modules={[Mousewheel]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop
            // By default Swiper ignores slideNext/slidePrev while a loop transition is still running, so a click
            // made during the animation did nothing. That is why the arrows only worked "sometimes".
            loopPreventsSliding={false}
            loopAdditionalSlides={data.certificates.length}
            slidesPerView="auto"
            centeredSlides
            spaceBetween={20}
            speed={TRANSITION_MS}
            slideToClickedSlide
            grabCursor
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.8,
            }}
          >
            {slides.map(({ certificate, key }) => (
              <SwiperSlide key={key} className="!h-auto !w-[220px] select-none md:!w-[280px]">
                <CertificateCard certificate={certificate} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Fade the strip out at both edges so the partial cards read as "peeking"
              through, not as broken content. Keep the fade short so the title/subtitle
              of the edge cards is still legible. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-surface to-transparent md:w-24 lg:w-32"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-surface to-transparent md:w-24 lg:w-32"
          />
        </div>
      </ScrollReveal>

      <div className="flex items-center justify-center gap-2 pb-12 pt-10 md:pb-16">
        <CarouselArrow
          label={data.prevLabel}
          direction="prev"
          onClick={() => swiperRef.current?.slidePrev(TRANSITION_MS)}
        />
        <CarouselArrow
          label={data.nextLabel}
          direction="next"
          onClick={() => swiperRef.current?.slideNext(TRANSITION_MS)}
        />
      </div>
    </section>
  );
};

export default BrandCertificates;
