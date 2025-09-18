import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import FAQ from "./pages/faq";
import ContactPage from "./pages/contactpages";
import Lowtahun from "./pages/low/lowtahun";
import Kategori24 from "./pages/low/2024/kategori24";
import Kategori25 from "./pages/low/2025/kategori25";
import Jenjangonl25 from "./pages/low/2025/jenjangonl25";
import Jenjangoff25 from "./pages/low/2025/jenjangoff25";
// import HomeRegist from "./pages/registration/homeregist";
// import HomeIndo from "./pages/registration/homeindo";
// import HomeInter from "./pages/registration/homeinter";
// import IndonesiaOffline from "./pages/registration/indo-offline";
// import IndonesiaOnline from "./pages/registration/indo-online";
// import InternationalOffline from "./pages/registration/inter-offline";
// import InternationalOnline from "./pages/registration/inter-online";
import Thankyouinter from "./pages/registration/thankyouinter";
// import ContactPage from "./pages/contactpages";
// import Faq from "./pages/faq";
// import PosterPage from "./pages/posterlayoutpages";
import ListNews from "./pages/news/listnews";

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
  {
    path: "/kategori25",
    element: <Kategori25 />
  },
  {
    path: "/jenjangonl25",
    element: <Jenjangonl25 />
  },
  {
    path: "/jenjangoff25",
    element: <Jenjangoff25 />
  },
  {
    path: "/listnews",
    element: <ListNews />
  },
  // {
  //   path: "/homeregist",
  //   element: <HomeRegist />
  // },
  // {
  //   path: "/homeindo",
  //   element: <HomeIndo />
  // },
  // {
  //   path: "/homeinter",
  //   element: <HomeInter />
  // },
  // {
  //   path: "/indo-offline",
  //   element: <IndonesiaOffline />
  // },
  // {
  //   path: "/indo-online",
  //   element: <IndonesiaOnline />
  // },
  // {
  //   path: "/inter-offline",
  //   element: <InternationalOffline />
  // },
  // {
  //   path: "/inter-online",
  //   element: <InternationalOnline />
  // },
  {
    path: "/thankyouinter",
    element: <Thankyouinter />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
