import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MON====SITE</div>

      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/produits">Produits</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="btn-login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar