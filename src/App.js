import Home from "./components/Home";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/Services";
import { StickyNavbar } from "./components/NavBar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


function App() {
  return (
    <BrowserRouter>
    <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
