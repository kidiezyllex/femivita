"use client"

import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

// Radix (Dialog, Sheet...) sets this attribute on <body> while it locks page scroll.
const SCROLL_LOCK_ATTRIBUTE = "data-scroll-locked";

const LENIS_OPTIONS = {
	autoRaf: true,
	// Smooth-scroll in-page anchor links (e.g. href="#faq") instead of jumping.
	anchors: true,
	// Let nested scrollable areas (admin modals, dashboard panels, mobile menu) scroll natively.
	allowNestedScroll: true,
};

// Lenis scrolls the window from JS, so it would keep scrolling the page behind an open modal.
const ScrollLockSync = () => {
	const lenis = useLenis();

	useEffect(() => {
		if (!lenis) return;

		const sync = () => {
			if (document.body.hasAttribute(SCROLL_LOCK_ATTRIBUTE)) lenis.stop();
			else lenis.start();
		};

		sync();
		const observer = new MutationObserver(sync);
		observer.observe(document.body, { attributes: true, attributeFilter: [SCROLL_LOCK_ATTRIBUTE] });
		return () => observer.disconnect();
	}, [lenis]);

	return null;
};

export const LenisProvider = ({ children }: { children: React.ReactNode }) => (
	<ReactLenis root options={LENIS_OPTIONS}>
		<ScrollLockSync />
		{children}
	</ReactLenis>
);
