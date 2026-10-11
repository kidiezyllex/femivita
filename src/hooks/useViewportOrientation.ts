import * as React from "react";

export function useIsPortraitViewport() {
	const [isPortrait, setIsPortrait] = React.useState(false);

	React.useEffect(() => {
		const checkOrientation = () => {
			setIsPortrait(window.innerHeight > window.innerWidth);
		};

		checkOrientation();

		window.addEventListener("resize", checkOrientation);
		return () => window.removeEventListener("resize", checkOrientation);
	}, []);

	return isPortrait;
}
