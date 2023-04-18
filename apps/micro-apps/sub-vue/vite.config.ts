import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun("sub-vue", {
      useDevMode: true,
    }),
  ],
  server: {
    host: "localhost",
    port: 9001,
    // origin: `http://localhost:${port}`,
    headers: {
      "Access-Control-Allow-Origin": "*", // 主应用获取子应用时跨域响应头
    },
    cors: true,
    // proxy: {
    //   '/api/': {
    //     target: proxyIp,
    //     ws: false,
    //     changeOrigin: true,
    //   },
    // },
  },
});
