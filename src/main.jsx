import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import("preline");
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NewProduct } from "./components/NewProduct.jsx";
import { EditProduct } from "./components/EditProduct.jsx";
import ErrorApp from "./components/ErrorApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorApp />,
  },
  {
    path: "/new",
    element: <NewProduct />,
  },
  {
    path: "/edit/:params",
    element: <EditProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
