import { createApp } from "vue";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.vue";

const app = createApp(App);
function render() {
  app.mount("#sub-vue");
}
renderWithQiankun({
  bootstrap() {
    console.log("vue bootstrap");
  },
  mount(_props) {
    render();
    console.log("vue mount", _props);
  },
  unmount(_props) {
    app.unmount();
    console.log("vue unmount", _props);
  },
  update(props: QiankunProps): void | Promise<void> {
    console.log("vue update", props);
  },
});
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
