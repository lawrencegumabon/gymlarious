import { useState } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Classes from "./components/Classes";

function App() {
  return (
    <div className="font-Montserrat">
      <NavBar />
      <Home />
      <About />
      <Classes />
    </div>
  );
}

export default App;
