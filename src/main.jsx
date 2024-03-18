import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/root";
import Home from "./compontents/Home";
import Login from "./compontents/Login";

import App from "./App";
import SignIn from "./compontents/SignIn";
import { UserProvider } from "./compontents/UserContext";
import Card from "./compontents/card/card";
import Product_select from "./compontents/Product_select/product_select_1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/login-page",
        element: <Login />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/product_select_1",
        element: <Product_select />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
