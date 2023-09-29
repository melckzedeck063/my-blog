import Home from "./components/Home";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/Services";
import { StickyNavbar } from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
