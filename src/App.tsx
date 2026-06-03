import { RouterProvider } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import { router } from "./router";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-wrapper">
        <RouterProvider router={router} />
      </div>

      <Footer />
    </div>
  );
}
