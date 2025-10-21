import { createBrowserRouter } from "react-router"; // fixed import
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Pages/Home";
import CategoryNews from "../components/Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: '/', // Main route (root)
    element: <HomeLayout></HomeLayout>, // Layout used for home and nested pages
    children: [
      {
        path: "", // Default child route (renders Home component)
        element: <Home></Home>
      },
      {
        path: "category/:id", // Dynamic route for category pages (fixed)
        element: <CategoryNews></CategoryNews>
        lo
      }
    ]
  },
  {
    path: '/auth', // Route for authentication pages
    element: <h2>Authentication Layout</h2>
  },
  {
    path: '/news', // Route for news layout
    element: <h2>News Layout</h2>
  },
  {
    path: '*', // Fallback route (Error 404)
    element: <h2>Error 404</h2>
  }
]);

export default router;
