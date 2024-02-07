import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Layout from "./pages/layout/Layout";

const App = () => {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Category />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
};

export default App;
