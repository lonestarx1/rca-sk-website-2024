import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnderConstructionBanner from "./components/UnderConstructionBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Announcements from "./pages/Announcements";
import Businesses from "./pages/Businesses";

function App() {
  return (
    <Router>
      <div className="App">
        <UnderConstructionBanner />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/businesses" element={<Businesses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
