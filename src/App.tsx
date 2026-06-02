import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-wrapper">Application</div>
      <Footer />
    </div>
  );
}
