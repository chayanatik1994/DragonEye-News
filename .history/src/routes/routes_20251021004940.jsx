import { createBrowserRouter } from "react-routernpm run";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Pages/Home";
import CategoryNews from "../components/Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '', element: <Home /> }, // default child
      { path: 'category/:id', element: <CategoryNews /> } // fixed dynamic route
    ]
  },
  { path: '/auth', element: <h2>Authentication Layout</h2> },
  { path: '/news', element: <h2>News Layout</h2> },
  { path: '*', element: <h2>Error 404 - Page Not Found</h2> } // fallback
]);

export default router;
