import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
<header >


        {/* <!-- Navbar start --> */}
       
<div className="container-fluid fixed-top">

            <div className="container topbar bg-primary d-none d-lg-block" style={{height:40,}}>

                <div className="d-flex justify-content-between">
                    <div >                
                        <h1 className="sim">Système d'Information sur les Marchés en Guinée</h1>
                    </div>

                </div>
            </div>

            {/* //menu */}
            <div className="container px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                <img src={require('./logo.png')} className="logo" alt="logo"/>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <nav className="navbar-nav mx-auto">
                        <NavLink to="/home" exact className="nav-item nav-link" activeClassName="active">Accueil</NavLink>
                         <NavLink to="/shop" className="nav-item nav-link" activeClassName="active">Produits</NavLink>
                         <NavLink to="/marche" className="nav-item nav-link" activeClassName="active">Marchés</NavLink>
                          <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
                          <NavLink to="/about" className="nav-item nav-link" activeClassName="active">À propos</NavLink>

                        </nav>
                        <img src={require('./ANASA.jfif')} style={{width:100}} alt="logo"/>
                        
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar End --> */}
<Link to="/marche" style={{ textDecoration: 'none', color: 'inherit' }}>

<motion.button href="#" className="floating-button" whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}>
        <i className="fa fa-store"></i>Marché
        </motion.button>
</Link>
      

      
   </header>

  )
}
