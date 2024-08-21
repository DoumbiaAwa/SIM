import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Menu/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
import Shop_details from './components/Shop/Shop_details/Shop_details';
import Marche from './components/Marche/Marche';
import Market_detail from './components/Market_details/Market_detail';
import Magasin_details from './components/Magasin/Magasin_details';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/shop" element={
          <>
            <Navbar />
            <Shop />
            <Footer />
          </>
        } />
        <Route path="/detail" element={
          <>
            <Navbar />
            <Shop_details />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        } />
         <Route path="/marche" element={
          <>
            <Navbar />
            <Marche />
            <Footer />
          </>
        } />
         <Route path="/marche-details/:id_marche" element={
          <>
            <Navbar />
            <Market_detail />
            <Footer />
          </>
        } />
         <Route path="/magasin-details/:id_magasin" element={
          <>
            <Navbar />
            <Magasin_details />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
