"use client";

import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import React from "react";

export interface BecomeDistributorData {
  eyebrow: string;
  headlineStart: string;
  headlineHighlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export const DEFAULT_BECOME_DISTRIBUTOR_DATA: BecomeDistributorData = {
  eyebrow: "Đồng hành cùng Femivita",
  headlineStart: "Trở thành",
  headlineHighlight: "Nhà phân phối",
  description:
    "Hãy cùng chúng tôi lan tỏa giải pháp chăm sóc tiên tiến, nâng tầm sức khỏe thân mật và mang lại sự tự tin trọn vẹn cho hàng triệu phụ nữ Việt!",
  ctaLabel: "Liên hệ",
  ctaHref: "/distributors",
  image: "/images/brand/distributor.webp",
  imageAlt:
    "Trụ sở ENBIOSCIENCE cùng các chứng nhận Thuần chay an toàn, GMP Hàn Quốc và FDA Hoa Kỳ",
};

interface BecomeDistributorSectionProps {
  data?: BecomeDistributorData;
}

/** "Trở thành Nhà phân phối" banner: text on the left, the head-office photo behind it (Figma 1440 x 637). */
export const BecomeDistributor: React.FC<BecomeDistributorSectionProps> = ({
  data = DEFAULT_BECOME_DISTRIBUTOR_DATA,
}) => (
  <section
    id="become-distributor"
    className="relative w-full overflow-hidden bg-white px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
  >
    <ScrollReveal direction="up" delay={0.05}>
      <div className="relative overflow-hidden rounded-2xl bg-ink-line md:min-h-[400px] lg:min-h-[597px]">
        <div className="absolute inset-0 z-0">
          <img
            src={data.image}
            alt={data.imageAlt}
            draggable={false}
            className="h-full w-full object-cover object-right"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-6 pb-6 pt-10 md:px-16 md:py-16 lg:px-[113px] lg:py-20">
          <div className="flex max-w-[437px] flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">
                {data.eyebrow}
              </p>
              <h2 className="font-sans font-bold leading-[1.3] text-gray-700 [font-size:clamp(32px,3.34vw,48px)]">
                {data.headlineStart}
                <br />
                <span className="text-brand-text">{data.headlineHighlight}</span>
              </h2>
            </div>
            <p className="whitespace-pre-line font-google-sans text-base leading-[1.6] text-[#171717]/60">
              {data.description}
            </p>
            <div>
              <PillLinkButton href={data.ctaHref} label={data.ctaLabel} />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default BecomeDistributor;
