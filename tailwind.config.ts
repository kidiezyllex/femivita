import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "360px",
			sm: "568px",
			md: "768px",
			lg: "992px",
			xl: "1280px",
			xxl: "1560px",
			xxxl: "1920px",
		},
		extend: {
			fontWeight: {
				thin: "100",
				light: "300",
				normal: "400",
				medium: "500",
				semibold: "600",
				bold: "700",
				extrabold: "800",
				black: "900",
			},
			fontFamily: {
				sans: ["Mona Sans Variable", "ui-sans-serif", "system-ui"],
				mono: ["Mona Sans Variable", "ui-monospace", "SFMono-Regular"],
				times: ["Times New Roman", "Times", "serif"],
				// Femivita fonts. Google Sans is not on Google Fonts, so it falls back to Inter until the font files are added.
				inter: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
				"google-sans": ['"Google Sans"', "var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			boxShadow: {
				"light-grey": "0 4px 6px rgba(211, 211, 211, 0.6)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: {
					DEFAULT: "#D79E2E",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "#F8DE77",
					foreground: "hsl(var(--secondary-foreground))",
				},
				mainBackgroundV1: "#440300",
				mainCardV1: "#FFFFFF",
				darkCardV1: "#1B233D",
				creamBackgroundV1: "#FFFCEF",
				primaryV1: "#3D4A3A",
				secondaryV1: "#5E634D",
				eerieBlackV1: "#1F1C17",
				accentV1: "#C6893F",
				supportV1: "#9D432C",
				// Femivita palette (Figma variables: Color/Brand/Secondary, Purple-W, text/icon #1E1E1E)
				brand: {
					DEFAULT: "#77519F",
					light: "#957FCD",
					text: "#A05DB1", // Figma: Color/Text/Brand
					border: "#E3DDE4",
					surface: "#FAF9FF",
					lavender: "#C3B2E8",
					pink: "#F4EEF6",
				},
				ink: {
					DEFAULT: "#1E1E1E",
					dark: "#161616", // Figma: Cod Gray
					muted: "#535353",
					soft: "#4E4C4C",
					line: "#E6E6E6", // Figma: Mercury, used for dividers and outlines
				},
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "#cb9b51",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
				background: '#F9F9FC',
			},
			fontSize: {
				"16": "1rem",
				"34": "2.125em",
			},
			width: {
				"100": "6.25em",
				"200": "12.5em",
				"300": "18.75em",
				"400": "25em",
				"500": "31.25em",
			},
			maxWidth: {
				"100": "6.25em",
				"200": "12.5em",
				"300": "18.75em",
				"400": "25em",
				"500": "31.25em",
			},
			minWidth: {
				"100": "6.25em",
				"200": "12.5em",
				"300": "18.75em",
				"400": "25em",
				"500": "31.25em",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				"logo-cloud": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - 4rem))" },
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
				p5: {
					"100%": { backgroundSize: "120% 100%" },
				},
				"text-rotation": {
					to: { transform: "rotate(360deg)" },
				},
				"cyber-shine": {
					"0%": { "WebkitMaskPosition": "160%" },
					"100%": { "WebkitMaskPosition": "-50%" },
				},
				glint: {
					"0%": { transform: "translate(-70%, -70%) rotate(45deg)" },
					"100%": { transform: "translate(70%, 70%) rotate(45deg)" },
				},
			gradient: {
				"0%, 100%": { transform: "translateX(0%)" },
				"50%": { transform: "translateX(100%)" },
			},
			"gold-shimmer": {
				"0%": { backgroundPosition: "200% center" },
				"100%": { backgroundPosition: "-200% center" },
			},
			marquee: {
				"0%": { transform: "translateX(0)" },
				"100%": { transform: "translateX(-50%)" },
			},
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			"logo-cloud": "logo-cloud 30s linear infinite",
			"caret-blink": "caret-blink 1.2s ease-out infinite",
			p5: "p5 2s infinite steps(6)",
			"text-rotation": "text-rotation 8s linear infinite",
			"cyber-shine": "cyber-shine 2s infinite",
			glint: "glint 0.6s ease-in-out",
			gradient: "gradient 5s ease infinite",
			"gold-shimmer": "gold-shimmer 3s linear infinite",
			marquee: "marquee 40s linear infinite",
		},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }: any) {
			const newUtilities = {
				".scrollbar-thin": {
					scrollbarWidth: "1px",
					scrollbarColor: "#c1c1c1",
				},
				".scrollbar-webkit": {
					"&::-webkit-scrollbar": {
						width: "2px",
					},
					"&::-webkit-scrollbar-track": {
						background: "white",
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "rgb(31 41 55)",
						borderRadius: "20px",
						border: "1px solid white",
					},
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		}),
		require("tailwindcss-animate"),
	],
};
export default config;
