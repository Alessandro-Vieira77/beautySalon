import { createBrowserRouter } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { Hair } from "./pages/Hair";
import { Mekeup } from "./pages/Makeup";
import { CS } from "./pages/CS";
import { Nails } from "./pages/Nails";
import { AllServices } from "./pages/AllServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hair",
    element: <Hair />,
  },
  {
    path: "/mekeup",
    element: <Mekeup />,
  },
  {
    path: "/cs",
    element: <CS />,
  },
  {
    path: "/nails",
    element: <Nails />,
  },
  {
    path: "/allservices",
    element: <AllServices />,
  },
]);

export { router };
