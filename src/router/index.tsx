import { createBrowserRouter } from "react-router-dom";
import ProductDetailPage from "../components/product-detail-page/product-detail-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <>Home</>,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
]);
