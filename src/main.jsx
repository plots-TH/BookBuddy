import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
//import "./index.css";
//import App from "./App.jsx";
//import { BrowserRouter } from "react-router-dom";
//
//createRoot(document.getElementById("root")).render(
//  <StrictMode>
//    <BrowserRouter>
//      <App />
//    </BrowserRouter>
//  </StrictMode>
//);
