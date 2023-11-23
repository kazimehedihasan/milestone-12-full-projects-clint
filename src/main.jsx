import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <AuthProvider>
 <HelmetProvider>
      <div className="max-w-7xl	mx-auto">
        <RouterProvider router={Router} />
      </div>
    </HelmetProvider>
 </AuthProvider>
  </React.StrictMode>
);
