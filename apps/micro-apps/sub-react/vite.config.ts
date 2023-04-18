import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";
import reactRefresh from "@vitejs/plugin-react-refresh";

const useDevMode = false;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...(useDevMode ? [
    //   react({
    //     // Exclude storybook stories
    //     exclude: /\.stories\.(t|j)sx?$/,
    //     // Only .tsx files
    //     include: '**/*.tsx',
    //   }),
    // ]:[reactRefresh()]),
    // [reactRefresh()],
    reactRefresh(),
    qiankun("sub-react", {
      useDevMode: true,
    }),
  ],
  server: {
    host: "localhost",
    port: 9002,
    origin: "//localhost:9002",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    cors: true,
  },
});
