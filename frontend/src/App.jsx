import { Routes, Route } from "react-router";
import NavBar from "./components/ui_components/NavBar";
import Footer from "./components/ui_components/Footer";
import Home from "./components/pages/Home";
import Sell from "./components/pages/Sell";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <NavBar
        content={
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact/:productId?" element={<ContactUs />} />
          </Routes>
        }
      />
      <Footer />
    </>
  );
}

export default App;
