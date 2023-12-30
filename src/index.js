import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TripsList from "./components/TripsList";
import Home from "./components/Home";
import "./App.css";
import Nav from "./components/Nav";
import TripDetail from "./components/TripDetail";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Home />
      </div>
    ),
  },

  {
    path: "/triplist",
    element: (
      <div>
        <Nav />
        <TripsList />,
      </div>
    ),
  },
  {
    path: "/tripdetail/:tripId",
    element: (
      <div>
        <Nav />
        <TripDetail />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
