import type { Config } from "tailwindcss";
// tailwind отслеживает все, что находиться в src директории
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [],
};
export default config;
