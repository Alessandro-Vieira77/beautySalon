import { createBrowserRouter } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { Hair } from "./pages/Hair";
import { Mekeup } from "./pages/Makeup";
import { Spa } from "./pages/Spa";
import { Nails } from "./pages/Nails";

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
    path: "/Spa",
    element: <Spa />,
  },
  {
    path: "/nails",
    element: <Nails />,
  },
]);

export { router };
