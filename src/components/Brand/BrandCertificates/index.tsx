"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import { BrandCertificate, BrandCertificatesData, DEFAULT_BRAND_CERTIFICATES_DATA } from "./types";

export * from "./types";

const CarouselArrow: React.FC<{ label: string; direction: "prev" | "next"; onClick: () => void }> = ({
  label,
  direction,
  onClick,
}) => (
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
  <article
    data-certificate-card
    className="flex shrink-0 snap-center flex-col items-center justify-center gap-[10px] rounded-[20px] border border-ink-iron p-[10px]"
  >
    <div className="relative h-[300px] w-[220px] overflow-hidden rounded-[6.222px] md:h-[380px] md:w-[280px]">
      <Image
        src={certificate.image}
        alt={certificate.imageAlt}
        fill
        sizes="280px"
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

export const BrandCertificates: React.FC<BrandCertificatesSectionProps> = ({
  data = DEFAULT_BRAND_CERTIFICATES_DATA,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const centerIndex = Math.floor(data.certificates.length / 2);

  // The strip is wider than the screen: start with the middle card centred, like the Figma frame.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const card = scroller?.children[centerIndex] as HTMLElement | undefined;
    if (!scroller || !card) return;

    scroller.scrollLeft = card.offsetLeft - (scroller.clientWidth - card.offsetWidth) / 2;
  }, [centerIndex]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>("[data-certificate-card]");
    if (!scroller || !card) return;

    const gap = parseFloat(getComputedStyle(scroller).columnGap) || 0;
    scroller.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  }, []);

  return (
    <section id="certificates" className="relative w-full overflow-hidden bg-ink-surface">
      <ScrollReveal direction="up" delay={0.05}>
        <div className="flex flex-col items-center gap-2 px-4 py-12 md:px-12 md:py-16 lg:px-[161px] lg:py-20">
          <p className="font-google-sans text-base leading-[1.6] text-ink-muted lg:text-lg">{data.eyebrow}</p>
          <h2 className="max-w-[1118px] text-center font-sans font-semibold leading-[1.3] text-black [font-size:clamp(28px,3.34vw,48px)]">
            <span className="text-brand-text">{data.headlineHighlight}</span>
            {data.headlineRest}
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
        <div className="relative">
          <div
            ref={scrollerRef}
            className="hide-scrollbar relative flex snap-x snap-mandatory gap-5 overflow-x-auto px-[calc(50%-121px)] md:px-[calc(50%-151px)]"
          >
            {data.certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>

          {/* Fade the strip out at both edges */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-ink-surface to-transparent md:w-40 lg:w-[300px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ink-surface to-transparent md:w-40 lg:w-[300px]"
          />
        </div>
      </ScrollReveal>

      <div className="flex items-center justify-center gap-2 pb-12 pt-10 md:pb-16">
        <CarouselArrow label={data.prevLabel} direction="prev" onClick={() => scrollByCard(-1)} />
        <CarouselArrow label={data.nextLabel} direction="next" onClick={() => scrollByCard(1)} />
      </div>
    </section>
  );
};

export default BrandCertificates;
