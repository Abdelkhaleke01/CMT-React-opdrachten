import { useState } from "react";

function Book({ title, author, image, category, description, year, pages }) {
  const [liked, setLiked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <article
      className={`book ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="book-inner">
        {/* VOORKANT */}
        <div className="book-front">
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{category}</p>

          <div className="favorite-section">
            <button onClick={toggleLike}>
              {liked ? "❤️" : "🤍"}
            </button>

            {liked && (
              <p className="favorited-text">
                Toegevoegd aan favorieten
              </p>
            )}
          </div>
        </div>

        {/* ACHTERKANT */}
        <div className="book-back">
          <h2>Details</h2>
          <p><strong>Publicatiejaar:</strong> {year}</p>
          <p><strong>Pagina’s:</strong> {pages}</p>
          <p>{description}</p>
          <p>Klik om terug te gaan</p>
        </div>
      </div>
    </article>
  );
}

export default Book;
