import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ClassesPage from "./Pages/Classes";
import PricingPage from "./Pages/Pricing";
import SchedulePage from "./Pages/Schedule";
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <div className="font-Montserrat">
      <NavBar />
      <Routes>
        <Route path="/gymlarious/home" element={<HomePage />} />
        <Route path="/gymlarious/about" element={<AboutPage />} />
        <Route path="/gymlarious/classes" element={<ClassesPage />} />
        <Route path="/gymlarious/pricing" element={<PricingPage />} />
        <Route path="/gymlarious/schedule" element={<SchedulePage />} />
        <Route path="/gymlarious/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
