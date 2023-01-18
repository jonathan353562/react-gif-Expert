import React from "react";
import "./styles.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import GifExpertApp from "./GifExpertApp";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
