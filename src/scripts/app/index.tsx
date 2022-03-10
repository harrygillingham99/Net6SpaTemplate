import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "@components/App";
import "../../styles/index.scss";

const Root = (): React.ReactElement => <App />;

let render = (): void => {
  ReactDOM.render(<Root />, document.getElementById("root"));
};

if ((module as any).hot) {
  console.log("HMR enabled");

  const renderApp = render;

  render = (): void => {
    renderApp();
  };

  (module as any).hot.accept("./components/App", (): void => {
    console.log("Module Replaced");
    setTimeout(render);
  });
}

render();
