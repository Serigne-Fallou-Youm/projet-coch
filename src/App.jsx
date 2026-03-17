import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Utilisateur from "./components/Utilisateur.jsx";

import Accueil from "./pages/Accueil.jsx"; // ← correction ici
import Produits from "./pages/Produits.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Hero />
        <Utilisateur />
      </main>
      <Footer />
    </>
  );
}

export default App;