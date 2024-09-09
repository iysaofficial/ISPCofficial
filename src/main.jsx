import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import FAQ from "./pages/faq";
import ContactPage from "./pages/contactpages";
import Lowtahun from "./pages/low/lowtahun";
import Kategori24 from "./pages/low/2024/kategori24";
// import ContactPage from "./pages/contactpages";
// import Faq from "./pages/faq";
// import PosterPage from "./pages/posterlayoutpages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/faq",
    element: <FAQ />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/lowtahun",
    element: <Lowtahun />
  },
  {
    path: "/kategori24",
    element: <Kategori24 />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
