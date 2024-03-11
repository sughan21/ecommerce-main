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
        path: "/contact",
        element: <h1>Hello contact</h1>,
      },
      {
        path: "/login-page",
        element: <Login />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
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
