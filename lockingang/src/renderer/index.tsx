import React from "react";
import ReactDOM from "react-dom/client";
import VectorGraphScreen from "./screens/VectorGraphScreen";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <VectorGraphScreen />
  </React.StrictMode>,
);
