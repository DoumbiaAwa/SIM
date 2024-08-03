import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Menu/Navbar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Shop_details from './components/Shop/Shop_details/Shop_details';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail" element={<Shop_details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card" element={<Cart />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </main>
      < Footer/>

    </Router>
  );
}


export default App;
