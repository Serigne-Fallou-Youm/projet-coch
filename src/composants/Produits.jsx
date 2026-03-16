import React from "react";

const produits = [
  {
    id: 1,
    titre: "BMW Série 3",
    description: "Berline sportive, boîte automatique, faible kilométrage.",
    prix: 1850000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600"
  },
  {
    id: 2,
    titre: "Mercedes Classe C",
    description: "Élégante et confortable, intérieur cuir, toit ouvrant.",
    prix: 22000000,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600"
  },
  {
    id: 3,
    titre: "Audi A4",
    description: "Moteur diesel économique, équipement haut de gamme.",
    prix: 1980000,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600"
  },
  {
    id: 4,
    titre: "Peugeot 308",
    description: "Citadine polyvalente, écran tactile, faible consommation.",
    prix: 12500000,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600"
  },
  {
    id: 5,
    titre: "Renault Clio",
    description: "Petite voiture pratique, idéale en ville, très économique.",
    prix: 9900000,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600"
  },
  {
    id: 6,
    titre: "Toyota Corolla",
    description: "Fiable et économique, idéale pour la ville et les longs trajets.",
    prix: 1450000,
    image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=600"
  },
];

function Produits() {
  return (
    <div className="produits" id="produits">
      <h2 className="produits-h2">Nos Voitures</h2>

      <div className="produits-autres">
        {produits.map((voiture) => (
          <div className="voiture" key={voiture.id}>
            <img src={voiture.image} alt={voiture.titre} className="voiture-img" />

            <div className="voiture-body">
              <h3 className="voiture-titre">{voiture.titre}</h3>
              <p className="voiture-desc">{voiture.description}</p>
              <p className="voiture-prix">
                {voiture.prix.toLocaleString()} CFA
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Produits