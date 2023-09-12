import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2.js";
import App3 from "./App3.js";
import App4 from "./App4.js";
import App5 from "./App5.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App5 />);
