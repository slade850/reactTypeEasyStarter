import React from "react";
import { render } from "react-dom";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store";

import App from "./App";

const MOUNT_NODE = document.getElementById("app");

render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  MOUNT_NODE
);
