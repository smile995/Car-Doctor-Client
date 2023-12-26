import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Layout from "../LayOut/Layout";
import HomePage from "../Pages/HomePage/HomePage";

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
      ],
    },
  ]);
  export default router;