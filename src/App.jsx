import { useState } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="font-Montserrat">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
