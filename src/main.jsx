import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import SingleBusinessPage from "./Pages/SingleBusinessPage/SingleBusinessPage.jsx";
import ExploreBusinessPage from "./Pages/ExploreBuinesses/ExploreBusinessPage.jsx";
import SupportPage from "./Pages/Support/SupportPage.jsx";
import { CategoryPage } from "./Pages/Category/CategoryPage.jsx";
import { BusinessProvider } from "./Pages/SingleBusinessPage/Contexts/SingleBusinessContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/explore-businesses", element: <ExploreBusinessPage /> },
  {
    index: true,
    path: "/stripe",
    element: (
      <BusinessProvider>
        <SingleBusinessPage />
      </BusinessProvider>
    ),
  },
  { path: "/support", element: <SupportPage /> },
  { path: "/business-category", element: <CategoryPage /> },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
