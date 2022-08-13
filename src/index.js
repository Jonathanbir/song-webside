import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// Logger with default options
import logger from "redux-logger";
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(logger))}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
