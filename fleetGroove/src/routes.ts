import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Schools from "./pages/Schools";
import Vendors from "./pages/Vendors";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "how-it-works", Component: HowItWorks },
      { path: "schools", Component: Schools },
      { path: "vendors", Component: Vendors },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
