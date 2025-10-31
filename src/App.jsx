import { Route, Routes, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import WebDesignPage from "./pages/WebDesignPage";
import PortraitPage from "./pages/PortraitPage";
import StillLifePage from "./pages/StillLifePage";
import MotocrossPage from "./pages/MotocrossPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/portfolio/graphic-design"
          element={<GraphicDesignPage />}
        />
        <Route path="/portfolio/web-design" element={<WebDesignPage />}></Route>
        <Route
          path="/portfolio/photograph/portrait"
          element={<PortraitPage />}
        ></Route>
        <Route
          path="/portfolio/photograph/still-life"
          element={<StillLifePage />}
        ></Route>
        <Route
          path="/portfolio/photograph/motocross"
          element={<MotocrossPage />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
