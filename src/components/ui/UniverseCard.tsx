import { cn } from "@/lib/utils";
import { mdiCurrencyUsd, mdiFire, mdiPackageVariant } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import React from 'react';
import { Badge } from './badge';
import { Skeleton } from './skeleton';

interface UniverseCardProps {
  name: string;
  category: string;
  desc: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  img: string;
  icon: string;
  className?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  isHot?: boolean;
  variants?: {
    title: string;
    list: {
      text: string;
      [key: string]: any;
    }[];
  };
}

export const UniverseCardSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={cn(
      "w-full h-full rounded-[20px] bg-[#1b233d] p-[5px] overflow-hidden flex flex-col",
      className
    )}>
      <div className="relative h-[180px] shrink-0 rounded-[15px] overflow-hidden">
        <Skeleton className="w-full h-full bg-[#252d4a]" />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-center mb-2">
          <Skeleton className="h-6 w-3/4 bg-[#252d4a]" />
        </div>
        <div className="space-y-2 mb-4">
          <Skeleton className="h-6 w-full bg-[#252d4a]" />
          <Skeleton className="h-6 w-5/6 bg-[#252d4a] mx-auto" />
        </div>
        <div className="flex justify-between items-center mt-auto border-t border-primaryV1/20 pt-4">
          <Skeleton className="h-6 w-20 bg-[#252d4a]" />
          <Skeleton className="h-6 w-12 bg-[#252d4a] rounded-full" />
        </div>
        <div className='mt-4'>
          <Skeleton className="h-10 w-full bg-[#252d4a]" />
        </div>
      </div>
    </div>
  );
};

const UniverseCard = ({
  name,
  category,
  desc,
  price,
  originalPrice,
  discount = "5%",
  img,
  icon,
  className,
  children,
  isLoading,
  isHot = false,
  variants
}: UniverseCardProps) => {
  if (isLoading) return <UniverseCardSkeleton className={className} />;

  return (
    <div className={cn(
      "group w-full h-full rounded-[20px] bg-[#1b233d] p-1 pt-2 overflow-hidden shadow-[rgba(100,100,111,0.2)_0px_7px_20px_0px] transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] flex flex-col cursor-pointer",
      className
    )}>
      <div className="relative h-[180px] shrink-0 rounded-[15px] flex flex-col overflow-hidden before:content-[''] before:absolute before:top-[30px] before:left-0 before:bg-transparent before:h-[15px] before:w-[15px] before:rounded-tl-[15px] before:shadow-[-5px_-5px_0_2px_#1b233d] before:z-20 ">
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          quality={100}
          className="object-cover transition-all duration-700 select-none group-hover:scale-110"
          style={{ imageRendering: 'auto' }}
        />

        {/* Light sweep effect triggered by card hover (group-hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[200%] h-[200%] -top-[50%] -left-[50%] group-hover:animate-glint" />
        </div>

        <div className="relative h-[30px] w-[130px] bg-[#1b233d] rounded-br-[10px] -skew-x-[40deg] origin-top-left shadow-[-10px_-10px_0_0_#1b233d] before:content-[''] before:absolute before:w-[15px] before:h-[15px] before:top-0 before:-right-[15px] before:bg-transparent before:rounded-tl-[10px] before:shadow-[-5px_-5px_0_2px_#1b233d] z-20 ">
        </div>

        <div className="absolute top-0 left-1 w-full z-30 flex items-center gap-2">
          {isHot ? (
            <Badge variant="orange">
              <Icon path={mdiFire} size={0.8} />
              Hot
            </Badge>
          ) : (
            <Badge variant="sky">
              <Icon path={mdiPackageVariant} size={0.8} />
              Còn hàng
            </Badge>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <span className="block text-base font-semibold text-white text-center line-clamp-1 mb-2">
          {name}
        </span>
        <p className="text-sm text-neutral-400 text-center mb-2 line-clamp-3">
          {desc}
        </p>
        <div className="flex flex-wrap gap-1 mb-4 justify-center">
          {variants?.list?.map((variant, index) => (
            <Badge key={index} variant="neutral">
              {variant.text}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto border-t border-primaryV1/20 pt-4">
          <div className="flex items-center">
            <Icon path={mdiCurrencyUsd} size={0.8} className="text-secondary" />
            <span className="text-lg font-semibold text-secondary leading-none">{price}</span>
            {originalPrice && (
              <span className="text-sm text-neutral-400 line-through leading-none">{originalPrice}</span>
            )}
          </div>
        </div>
        <div className='mt-4'>
          {children}
        </div>
      </div>

    </div>
  );
};

export default UniverseCard;
