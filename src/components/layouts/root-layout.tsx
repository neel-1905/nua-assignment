import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { CartProvider } from "../../context/cart-context";

const RootLayout = () => {
  return (
    <CartProvider>
      <div className="app-wrapper">
        <Navbar />
        <div className="content-wrapper">
          <Outlet />
        </div>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default RootLayout;
