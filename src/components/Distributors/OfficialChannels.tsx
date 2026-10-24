"use client";

import { PillLinkButton } from "@/components/ui/PillLinkButton";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DEFAULT_OFFICIAL_CHANNELS_DATA, OfficialChannel, OfficialChannelsProps } from "./types";

const ChannelCard: React.FC<{ channel: OfficialChannel }> = ({ channel }) => {
  const content = (
    <>
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-white">
        <Image
          src={channel.image.src}
          alt={channel.image.alt}
          fill
          quality={100}
          sizes="900px"
          draggable={false}
          className="object-cover object-top"
        />
      </div>
      <h3 className="line-clamp-1 text-center font-google-sans text-xl font-medium leading-[1.6] text-ink-dark">
        {channel.name}
      </h3>
    </>
  );
  const className =
    "flex flex-col items-center justify-center gap-[10px] rounded-[20px] border border-[#C5C1D1] p-[10px]";

  return channel.href ? (
    <Link
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} transition-colors hover:border-brand-text`}
    >
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
};

export const OfficialChannels: React.FC<OfficialChannelsProps> = ({
  data = DEFAULT_OFFICIAL_CHANNELS_DATA,
}) => (
  <section
    id="official-channels"
    className="w-full bg-ink-surface px-4 py-16 md:px-8 md:py-24 lg:py-[120px]"
  >
    <div className="mx-auto flex max-w-[1344px] flex-col items-center gap-10">
      <ScrollReveal direction="up" delay={0.05} className="w-full lg:px-[calc(100%/6)]">
        <div className="flex flex-col items-center text-center">
          <p className="font-google-sans text-lg leading-[1.6] text-ink-muted">{data.eyebrow}</p>
          <h2 className="font-sans font-bold leading-[1.3] text-gray-700 [font-size:clamp(32px,3.34vw,48px)]">
            {data.headlineStart}
            <br />
            <span className="text-brand-text">{data.headlineHighlight}</span>
          </h2>
          <div className="flex flex-col pt-6 font-google-sans text-base leading-[1.6] text-[#141414]/60">
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollStagger
        className="grid w-full gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
        staggerDelay={0.1}
      >
        {data.channels.map((channel) => (
          <ScrollStaggerItem key={channel.id}>
            <ChannelCard channel={channel} />
          </ScrollStaggerItem>
        ))}
      </ScrollStagger>

      <PillLinkButton href={data.moreHref} label={data.moreLabel} variant="brand" />
    </div>
  </section>
);

export default OfficialChannels;
