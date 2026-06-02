import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import ProductDetailPage from "./components/product-detail-page/product-detail-page";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <ProductDetailPage />

      <Footer />
    </div>
  );
}
