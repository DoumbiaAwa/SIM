import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="container-fluid fixed-top">
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <img src={require('./logo.png')} className="logo" alt="logo"/>
                        <button
                            className="navbar-toggler py-2 px-3"
                            type="button"
                            onClick={toggleNavbar}
                        >
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className={`collapse navbar-collapse bg-white ${isOpen ? 'show' : ''}`} id="navbarCollapse">
                            <nav className="navbar-nav mx-auto">
                                <NavLink to="/home" exact className="nav-item nav-link" activeClassName="active" onClick={toggleNavbar}>Accueil</NavLink>
                                <NavLink to="/shop" className="nav-item nav-link" activeClassName="active" onClick={toggleNavbar}>Produits</NavLink>
                                <NavLink to="/marche" className="nav-item nav-link" activeClassName="active" onClick={toggleNavbar}>Marchés</NavLink>
                                <NavLink to="/contact" className="nav-item nav-link" activeClassName="active" onClick={toggleNavbar}>Contact</NavLink>
                                <NavLink to="/about" className="nav-item nav-link" activeClassName="active" onClick={toggleNavbar}>À propos</NavLink>
                            </nav>
                            <img src={require('./ANASA.jfif')} style={{ width: 100 }} alt="logo"/>
                        </div>
                    </nav>
                </div>
            </div>
            <Link to="/marche" style={{ textDecoration: 'none', color: 'inherit' }}>

<motion.button href="#" className="floating-button" whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}>
        <i className="fa fa-store"></i>Marché
        </motion.button>
</Link>
     
        </header>
    );
}
