import { useState } from "react"  
import Navbar from "./composants/Navbar"
import Footer from "./composants/Footer"
import Hero from "./composants/Hero"
import Produits from "./composants/Produits"
import Utilisateur from "./composants/Utilisateur"
const App = () => {
 

  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Hero/>
        <Produits/>
        <Utilisateur/>
        
      </main>
      <Footer />
    </div>
  )
}

export default App;