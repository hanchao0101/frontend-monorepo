import "../assets/css/reset.less";
import { createApp } from "vue";
import { registerMicroApps, start } from "qiankun";
import App from "./App.vue";

createApp(App).mount("#app");
const microConfigs = [
  {
    name: "sub-vue",
    entry: "http://127.0.0.1:9001",
    container: "#container",
    activeRule: "/base/vue",
  },
  {
    name: "sub-react",
    entry: "http://127.0.0.1:9002",
    container: "#container",
    activeRule: "/base/react",
  },
];
registerMicroApps(microConfigs, {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app) => {
    console.log("+++++++++++beforeLoad+++++++++++", app.name);
    return Promise.resolve();
  },
  beforeMount: (app) => {
    console.log("----------beforeMount----------", app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app) => {
    console.log("============afterMount============", app.name);
    return Promise.resolve();
  },
  afterUnmount: (app) => {
    console.log("===+++++----afterUnmount===+++++----", app.name);
    return Promise.resolve();
  },
});
start({
  prefetch: false, // 开启预加载
  sandbox: {
    experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
  },
});
