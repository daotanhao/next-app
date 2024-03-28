import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            focus: "#006FEE",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
        },
        dark: {
          colors: {
            background: "#000",
            foreground: "#ECEDEE",
            primary: {
              50: "#FCFFEB",
              100: "#F8FED8",
              200: "#EFFEB2",
              300: "#E2FC8C",
              400: "#D6F96F",
              500: "#C2F640",
              600: "#9FD32E",
              700: "#7FB120",
              800: "#608E14",
              900: "#4B760C",
              DEFAULT: "#C2F640",
              foreground: "#000",
            },
            secondary: {
              DEFAULT: "#7440F6",
              foreground: "#ECEDEE",
            },
            success: {
              DEFAULT: "#52CE58",
              foreground: "#000",
            },
            warning: {
              DEFAULT: "#FFA800",
              foreground: "#000",
            },
            danger: {
              DEFAULT: "#FF4D4F",
              foreground: "#000",
            },
            content1: {
              DEFAULT: "#1D1D1D",
            },
            content2: {
              DEFAULT: "#222222",
            },
            content3: {
              DEFAULT: "#242424",
            },
            content4: {
              DEFAULT: "#282828",
            },
            focus: "#9FD32E",
          },
        },
      },
    }),
  ],
};
export default config;
