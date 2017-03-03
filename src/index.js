import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configs/Store";
import Main from "./app/screens/Main";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Main />
  </Provider>,
  document.getElementById("root")
);