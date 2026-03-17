import React from "react";

function Produits() {
  const produits = [
    {
      id: 1,
      nom: "Téléphone",
      prix: 100000,
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&h=100&w=100"
    },
    {
      id: 2,
      nom: "Sac à dos",
      prix: 50000,
      img: "https://images.unsplash.com/photo-1593032457861-8e026eb62f82?crop=entropy&cs=tinysrgb&fit=max&h=100&w=100"
    },
    {
      id: 3,
      nom: "Montre",
      prix: 75000,
      img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?crop=entropy&cs=tinysrgb&fit=max&h=100&w=100"
    },
    {
      id: 4,
      nom: "Laptop",
      prix: 400000,
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&h=100&w=100"
    },
    {
      id: 5,
      nom: "Casque Audio",
      prix: 30000,
      img: "https://images.unsplash.com/photo-1518449009441-8c01b6f45fa3?crop=entropy&cs=tinysrgb&fit=max&h=100&w=100"
    },
  ];

  return (
    <div className="produits">
      <h1>Produits</h1>
      <div className="produit-grid">
        {produits.map((p) => (
          <div key={p.id} className="produit-card">
            <img src={p.img} alt={p.nom} />
            <h3>{p.nom}</h3>
            <p>{p.prix.toLocaleString()} FCFA</p>
            <button className="btn-ajouter">Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Produits