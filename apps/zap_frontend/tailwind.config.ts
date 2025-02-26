import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
