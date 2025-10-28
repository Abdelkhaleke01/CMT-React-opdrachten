import React from "react";

function Menu({ title, category, price, img, desc }) {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="menu-img" />
      <div className="menu-info">
        <header>
          <h2>{title}</h2>
          <h3>€{price.toFixed(2)}</h3>
        </header>
        <p className="category">{category}</p>
        <p>{desc}</p>
      </div>
    </article>
  );
}

export default Menu;
