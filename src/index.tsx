import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./main.css";

const container = document.getElementById("root");
const root = createRoot(container!);

if (!root) throw new Error("No root element found");

root.render(<App />);
