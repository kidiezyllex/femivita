"use client";

import BlackButton from "@/components/ui/BlackButton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <div className="flex h-screen min-h-screen flex-col items-center justify-center text-center">
        <Link
          href="/"
          className="relative block h-[76px] max-h-[76px] cursor-pointer transition-transform"
        >
          <Image
            src="/images/large_logo.png"
            alt="Musase"
            height={301}
            width={1205}
            className="h-full w-auto object-contain"
            quality={100}
            draggable={false}
            priority
          />
        </Link>
        <h1 className="my-5 text-xl font-semibold text-[#C9C7B2] sm:text-2xl md:text-3xl lg:text-4xl">
          Trang bạn đang xem không tồn tại!
        </h1>
        <BlackButton className="min-w-[400px] py-4" text="Quay lại" onClick={() => router.back()} />
      </div>
    </div>
  );
}
