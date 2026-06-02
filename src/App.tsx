import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import ProductDetailPage from "./components/product-detail-page/product-detail-page";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <ProductDetailPage />

        <Footer />
      </div>
    </Router>
  );
}
