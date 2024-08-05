import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
<header >


        {/* <!-- Navbar start --> */}
       
<div className="container-fluid fixed-top">
<div className="drapeau">
        <div className="rouge"></div>
        <div className="jaune"></div>
        <div className="vert"></div>
</div>
            <div className="container topbar bg-primary d-none d-lg-block" style={{height:40}}>

                <div className="d-flex justify-content-between">
                    <div >                
                        <h1 className="sim">Système d'Information sur les marchés en Guinée</h1>
                    </div>

                </div>
            </div>

            {/* //menu */}
            <div className="container px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                <img src={require('./logo.png')} className="logo" alt="logo"/>
                    {/* <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button> */}
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <nav className="navbar-nav mx-auto">
                        <NavLink to="/" exact className="nav-item nav-link" activeClassName="active">Accueil</NavLink>
                         <NavLink to="/shop" className="nav-item nav-link" activeClassName="active">Produits</NavLink>
                          <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
                          <NavLink to="/about" className="nav-item nav-link" activeClassName="active">A Propos</NavLink>

                        </nav>
                        <img src={require('./ANASA.jfif')} style={{width:100}} alt="logo"/>
                        
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar End --> */}





      
   </header>

  )
}
