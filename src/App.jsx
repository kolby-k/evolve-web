// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import About from "./screens/About";
import Download from "./screens/Download";
import Pricing from "./screens/Pricing";

function App() {
  const SCREENS = ["home", "pricing", "about", "download"];

  return (
    <Router>
      <Header buttonLabels={SCREENS} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<Download />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
