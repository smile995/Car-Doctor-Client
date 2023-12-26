import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Layout from "../LayOut/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/service',
            element:<Service></Service>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        }
      ],
    },
  ]);
  export default router;