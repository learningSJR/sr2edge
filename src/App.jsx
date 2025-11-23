import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import CategoryDetails from "./pages/CategoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "category", element: <Category /> },
      { path: "categoryDetails/:categoryId", element: <CategoryDetails /> },
      {
        path: "categoryDetails/:categoryId/ProductDetail/:productId",
        element: <ProductDetail />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
