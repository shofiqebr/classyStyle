import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Route/Routes";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <HelmetProvider>

    <RouterProvider router={Routes}></RouterProvider>
      </HelmetProvider>
      <ToastContainer position="bottom-right" />
  </React.StrictMode>
);
