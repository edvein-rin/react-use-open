import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig(({ command, mode }) => {
  if (mode === "test") {
    return {
      plugins: [react()],
      test: {
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
      },
    };
  }

  if (command === "serve") {
    return {
      plugins: [react()],
      root: path.resolve(__dirname, "dev"),
      build: {
        outDir: path.resolve(__dirname, "dist"),
      },
      test: {
        environment: "jsdom",
      },
    };
  }

  if (command === "build") {
    return {
      plugins: [react(), dts()],
      build: {
        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: "useOpen",
          formats: ["es", "umd"],
          fileName: (format) => `react-use-open.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  }

  throw new Error("Unhandled command");
});
