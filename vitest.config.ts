/// <reference types="vitest" />

import { resolve as pathResolve } from "node:path";

import { defineConfig } from "vitest/config";

const resolve = (path: string) => pathResolve(__dirname, path);

// eslint-disable-next-line import/no-default-export -- default export
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {},
  },
  test: {
    globals: true,
    environment: "node",
    include: ["./src/**/*.test.{ts,tsx}"],
    exclude: ["/node_modules/"],
    coverage: {
      provider: "v8",
      reporter: ["html"],
      include: ["src/**/*.tsx"],
    },
  },
});
