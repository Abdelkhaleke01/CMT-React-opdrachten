import React, { useState } from 'react';
 
const Book = ({title, desc, img}) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

    const verhoogTeller = () => {
        setAantalKeerGelezen(aantal => aantal + 1);
    };

    return (
        <section className="Books-container">
            <img src={img} alt={title} />
            <p>{desc}</p>
            <h1>{title}</h1>
            <button onClick={verhoogTeller}>
                Keer gelezen: {aantalKeerGelezen}
            </button>
        </section>
     );
}
 
export default Book