import { createBrowserRouter } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { Hair } from "./pages/Hair";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hair",
    element: <Hair />,
  },
]);

export { router };
