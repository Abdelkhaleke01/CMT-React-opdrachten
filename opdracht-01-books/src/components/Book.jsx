import React, { useState } from 'react';
 
const Book = ({ title, desc, img, category }) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

    const verhoogTeller = () => {
        setAantalKeerGelezen(aantal => aantal + 1);
    };

    return (
        <section className="Books-container">
            <img src={img} alt={title} />
            <p>{desc}</p>
            <h1>{title}</h1>

            {/* 🔹 Nieuwe categorie regel */}
            <p>Categorie: {category}</p>

            <button onClick={verhoogTeller}>
                Keer gelezen: {aantalKeerGelezen}
            </button>
        </section>
    );
}
 
export default Book;
