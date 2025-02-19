import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amber:{
          700:"#ff4f00"
        },
        slate:{
          100:"#ebe9df"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
