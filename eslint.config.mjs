import nextPlugin from "@next/eslint-plugin-next";
import js from "@eslint/js";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  {
    ignores: ["node_modules/", ".next/", "out/"]
  },
  js.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
  {
    rules: {
      "react/jsx-key": "off"
    }
  }
];

export default config;
