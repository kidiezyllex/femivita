"use client";

import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Thuộc tính mà các thư viện như Radix (Dialog, Sheet, Drawer) gắn vào <body> khi khóa cuộn
const SCROLL_LOCK_ATTRIBUTE = "data-scroll-locked";

/**
 * Cấu hình Lenis Smooth Scrolling với hiệu ứng DELAY / QUÁN TÍNH TRÔI RÕ RỆT:
 * - Sử dụng lerp (Linear Interpolation): thay vì dịch chuyển tức thì, trang sẽ trôi chậm
 *   phía sau con lăn chuột một nhịp (delay/inertia lag) cực kỳ mượt mà.
 * - lerp: 0.05 là mức lý tưởng để thấy rõ độ trôi bồng bềnh chuẩn Locomotive Scroll/Awwwards.
 * - wheelMultiplier: 1.15 giúp tăng đà lướt để cảm nhận rõ hiệu ứng delay.
 */
export const LENIS_CONFIG: LenisOptions = {
	// Độ mượt và độ trễ (delay) vật lý:
	// - 0.04: Siêu trễ (Heavy floating delay)
	// - 0.05: Trễ mượt mà rõ rệt (Khuyên dùng - Chuẩn cinematic lag)
	// - 0.08: Trễ nhẹ, nhạy hơn
	lerp: 0.05,

	// Hệ số lực cuộn của con lăn chuột: tăng nhẹ để tạo đà lướt dài hơn, thấy rõ độ delay
	wheelMultiplier: 1.15,

	// Hướng cuộn chính
	orientation: "vertical",
	gestureOrientation: "vertical",

	// Kích hoạt làm mượt con lăn
	smoothWheel: true,

	// Hệ số cho trackpad / thao tác chạm
	touchMultiplier: 1.5,

	// Giữ scroll gốc tự nhiên trên mobile để không bị lag thao tác vuốt màn hình
	syncTouch: false,

	// Tự động đồng bộ requestAnimationFrame
	autoRaf: true,

	// In-page anchor links (#id) với độ trượt êm ái
	anchors: {
		offset: -90,
		lerp: 0.06,
	},

	// Cho phép các container cuộn lồng nhau (modal, table, dropdown) cuộn tự nhiên
	allowNestedScroll: true,

	// Tự động tính toán lại kích thước DOM
	autoResize: true,

	// Tôn trọng thiết lập giảm chuyển động của hệ điều hành
	respectReducedMotion: true,
};

// Đồng bộ trạng thái khóa cuộn khi mở Modal, Sheet, Dialog
const ScrollLockSync = () => {
	const lenis = useLenis();

	useEffect(() => {
		if (!lenis) return;

		const sync = () => {
			const isLocked =
				document.body.hasAttribute(SCROLL_LOCK_ATTRIBUTE) ||
				document.body.style.overflow === "hidden" ||
				document.documentElement.style.overflow === "hidden";

			if (isLocked) {
				lenis.stop();
			} else {
				lenis.start();
			}
		};

		sync();
		const observer = new MutationObserver(sync);
		observer.observe(document.body, {
			attributes: true,
			attributeFilter: [SCROLL_LOCK_ATTRIBUTE, "style"],
		});

		return () => observer.disconnect();
	}, [lenis]);

	return null;
};

// Tự động cuộn lên đầu trang hoặc tới hash anchor khi chuyển route trong Next.js
const RouteChangeScrollReset = () => {
	const pathname = usePathname();
	const lenis = useLenis();

	useEffect(() => {
		if (!lenis) return;

		if (typeof window !== "undefined" && window.location.hash) {
			const hash = window.location.hash;
			lenis.scrollTo(hash, { offset: -90, duration: 1.2 });
		} else {
			lenis.scrollTo(0, { immediate: true });
		}
	}, [pathname, lenis]);

	return null;
};

export const LenisProvider = ({ children }: { children: React.ReactNode }) => (
	<ReactLenis root options={LENIS_CONFIG}>
		<ScrollLockSync />
		<RouteChangeScrollReset />
		{children}
	</ReactLenis>
);
