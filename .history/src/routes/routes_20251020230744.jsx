// react-router থেকে createBrowserRouter ইম্পোর্ট করা হচ্ছে
import { createBrowserRouter } from "react-router";

// লেআউট এবং পেজ কম্পোনেন্টগুলো ইম্পোর্ট করা
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Pages/Home";
import CategoryNews from "../components/Pages/CategoryNews";

// createBrowserRouter দিয়ে রাউটার তৈরি করা হচ্ছে
const router = createBrowserRouter([
    {
        // মূল route বা root path
        path: '/',
        // মূল layout — এতে header, navbar ইত্যাদি থাকতে পারে
        element: <HomeLayout></HomeLayout>,

        // এই layout এর child routes
        children: [
            {
                // ফাঁকা path মানে root URL '/' এর জন্য ডিফল্ট child route
                path: "",
                element: <Home></Home>  // Home কম্পোনেন্ট রেন্ডার হবে
            },
            {
                // ডাইনামিক route (যেমন /category/1 বা /category/5)
                // ⚠️ এখানে তোমার লেখা "/category:id" আসলে ভুল, এটা হওয়া উচিত "/category/:id"
                path: "/category:id",
                element: <CategoryNews></CategoryNews> // নির্দিষ্ট ক্যাটাগরির নিউজ পেজ
            }
        ]
    },

    {
        // Authentication layout route
        path: '/auth',
        element: <h2> Authentication Layout</h2>
    },

    {
        // News layout route
        path: '/news',
        element: <h2> News Layout</h2>
    },

    {
        // Error 404 route
        // ⚠️ এটাও ভুল, এখানে path হওয়া উচিত '*'
        path: '/',
        element: <h2>Error 404</h2>
    }
]);

// router এক্সপোর্ট করা হচ্ছে যাতে App.jsx বা main.jsx এ ব্যবহার করা যায়
export default router;
