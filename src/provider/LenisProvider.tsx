"use client";

import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Thuộc tính mà các thư viện như Radix (Dialog, Sheet, Drawer) gắn vào <body> khi khóa cuộn
const SCROLL_LOCK_ATTRIBUTE = "data-scroll-locked";

/**
 * Cấu hình Lenis dựa trên https://www.quakerschool.org/ (đọc từ window.lenis.options, Lenis 1.3.25):
 * wheelMultiplier 1, touchMultiplier 1 (mặc định của Lenis), stopInertiaOnNavigate bật.
 * Riêng lerp đặt 0.05 (trang gốc dùng 0.1): một cú lăn chuột 100px dừng ở 50% sau ~225ms, 90% sau ~750ms.
 */
export const LENIS_CONFIG: LenisOptions = {
	// Độ trễ vật lý: lerp càng nhỏ trang càng trôi lâu, càng "nặng tay".
	// 0.1 = mặc định, êm nhưng phản hồi nhanh (quakerschool.org); 0.07 ≈ gần mặc định nhưng bớt trôi.
	lerp: 0.1,

	// Hệ số lực cuộn của con lăn chuột (1 = đúng quãng đường con lăn gửi lên)
	wheelMultiplier: 1,

	// Hướng cuộn chính
	orientation: "vertical",
	gestureOrientation: "vertical",

	// Kích hoạt làm mượt con lăn
	smoothWheel: true,

	// Hệ số cho trackpad / thao tác chạm
	touchMultiplier: 1,

	// Giữ scroll gốc tự nhiên trên mobile để không bị lag thao tác vuốt màn hình
	syncTouch: false,

	// Tự động đồng bộ requestAnimationFrame
	autoRaf: true,

	// In-page anchor links (#id) với độ trượt êm ái
	anchors: {
		offset: -90,
		lerp: 0.1,
	},

	// Dừng quán tính đang chạy khi bấm link nội bộ (giống quakerschool.org)
	stopInertiaOnNavigate: true,

	// Cho phép các container cuộn lồng nhau (modal, table, dropdown) cuộn tự nhiên
	allowNestedScroll: true,

	// Tự động tính toán lại kích thước DOM
	autoResize: true,

	// Khi Windows/macOS bật "giảm chuyển động" (prefers-reduced-motion), Lenis mặc định tắt hẳn hiệu ứng trễ.
	// Đặt false để luôn giữ smooth scroll như quakerschool.org (bản Lenis 1.3.25 chưa có tùy chọn này).
	respectReducedMotion: false,
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

// Từ breakpoint này trở lên mới bật Lenis; dưới đó dùng scroll gốc của trình duyệt (khớp MOBILE_BREAKPOINT trong use-mobile.ts)
const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
	// Mặc định tắt để khớp SSR; bật sau khi mount nếu không phải mobile.
	// Lenis được render như sibling (root) nên children không bị remount khi bật/tắt;
	// useLenis ở các component con vẫn lấy được instance qua root store.
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		const mql = window.matchMedia(DESKTOP_MEDIA_QUERY);
		const update = () => setEnabled(mql.matches);

		update();
		mql.addEventListener("change", update);
		return () => mql.removeEventListener("change", update);
	}, []);

	return (
		<>
			{enabled && (
				<>
					<ReactLenis root options={LENIS_CONFIG} />
					<ScrollLockSync />
					<RouteChangeScrollReset />
				</>
			)}
			{children}
		</>
	);
};
