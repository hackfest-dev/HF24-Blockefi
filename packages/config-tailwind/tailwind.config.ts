import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#1abd9b"
        }
      }
    },
  },
  plugins: [],
};
export default config;
