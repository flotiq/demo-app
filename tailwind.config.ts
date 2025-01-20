import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D3D3D',
        red: '#FF0000',
        gray: '#8f8f8f',
        'light-gray': '#F9F9F9',
      },
    },
  },
  plugins: [],
} satisfies Config;
