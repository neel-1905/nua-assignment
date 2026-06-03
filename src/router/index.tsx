import { createBrowserRouter } from "react-router-dom";
import ProductDetailPage from "../components/product-detail-page/product-detail-page";
import RootLayout from "../components/layouts/root-layout";
import NotFound from "../components/not-found/not-found";
import Home from "../components/home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, // "index: true" means this renders at the base path ("/")
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "*", // "*" matches absolutely anything else
        element: <NotFound />,
      },
    ],
  },
]);
