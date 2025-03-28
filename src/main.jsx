import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App.jsx";
import HomePage from "./Pages/Homepage/HomePage.jsx";
import SingleBusinessPage from "./Pages/SingleBusinessPage/SingleBusinessPage.jsx";
import ExploreBusinessPage from "./Pages/ExploreBuinesses/ExploreBusinessPage.jsx";

const router = createBrowserRouter([
  { index: true, path: "/", element: <HomePage /> },
  { path: "/explore-businesses", element: <ExploreBusinessPage /> },
  { path: "/stripe", element: <SingleBusinessPage /> },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
