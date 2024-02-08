import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ClassesPage from "./Pages/Classes";

function App() {
  return (
    <div className="font-Montserrat">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/classes" element={<ClassesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
