import "rxjs";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configs/Store";
import Main from "./app/screens/Main";
import ComponentsTester from "./app/screens/ComponentsTester";

ReactDOM.render(
  <Provider store={configureStore()}>
    <ComponentsTester />
  </Provider>,
  document.getElementById("root")
);