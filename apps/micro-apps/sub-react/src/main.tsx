import React from "react";
import ReactDOM from "react-dom/client";
import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("sub-react") as HTMLElement
);
function render() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
renderWithQiankun({
  bootstrap() {
    console.log("react bootstrap");
  },
  mount(_props) {
    render();
    console.log("react mount", _props);
  },
  unmount(_props) {
    root.unmount();
    console.log("react unmount", _props);
  },
  update(props: QiankunProps): void | Promise<void> {
    console.log("react update", props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
