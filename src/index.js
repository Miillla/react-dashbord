import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOM from "react-dom/client";
import Error from "./pages/Error";
import { routes } from "./router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={<Error />} />
);
