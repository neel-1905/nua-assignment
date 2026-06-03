import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

const RootLayout = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-wrapper">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
