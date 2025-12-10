import { useState } from "react";
import animals from "../component/animals";
import Animal from "../component/Animal";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Zoekfunctie: filter op naam
  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="homepage">
      <h1>Zoo Overzicht</h1>

      {/* 🔍 Zoekbalk */}
      <input
        type="text"
        placeholder="Zoek een dier..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Dierenlijst */}
      <section className="animals-list">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <Animal key={animal.id} animal={animal} />
          ))
        ) : (
          <p>Geen dieren gevonden.</p>
        )}
      </section>
    </section>
  );
};

export default Homepage;
