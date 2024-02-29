import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        box: 'box 2s ease-in-out infinite',
      },
      keyframes: {
        box: {
          '0%': { boxShadow: '0px 0px 2px 0px rgba(128, 128, 128, 0.2)' },
          '50%': { boxShadow: '0px 0px 2px 2px rgba(128, 128, 128, 0.2)' },
          '100%': { boxShadow: '0px 0px 2px 0px rgba(128, 128, 128, 0.2)' },
        },
      },
      spacing: {
        '1/3': '33.333333%',
      },
      width: {
        'var-block': 'var(--block)',
        '10var-block': 'calc(10 * var(--block))',
      },
      height: {
        'var-block': 'var(--block)',
        '10var-block': 'calc(10 * var(--block))',
      },
      lineHeight: {
        'var-block': 'var(--block)',
      },
      borderRadius: {
        'var-block': 'var(--block)',
      },
      padding: {
        'var-block': 'var(--block)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
