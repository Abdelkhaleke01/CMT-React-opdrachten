import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import data from "../data";

const BookList = () => {
  // 🔹 Boeken laden
  const [books] = useState(data);

  // 🔹 Zoekinput
  const [searchInput, setSearchInput] = useState("");

  // 🔹 Gekozen categorie
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  // 🔹 Categorieën
  const categories = [
    "Alle",
    "Fantasy",
    "Avontuur",
    "Sciencefiction",
    "Thriller",
    "Romance"
  ];

  // 🔹 Zoek handler
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // 🔹 Filter handler
  const filterHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  // 🔹 Combineer zoek + categorie-filter
  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .filter((book) => {
      if (selectedCategory === "Alle") return true;
      return book.category === selectedCategory;
    });

  return (
    <section className="container">

      {/* 🔍 Zoekveld */}
      <div className="search">
        <input
          type="text"
          placeholder="Zoek een titel..."
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
      </div>

      {/* 🔽 Filter dropdown */}
      <div className="filter">
        <label htmlFor="category">Filter op categorie: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={filterHandler}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* 📊 Counter */}
      <BookCounter aantal={filteredBooks.length} />

      {/* 📚 Boeken tonen */}
      {filteredBooks.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          desc={book.author}
          img={book.image}
          category={book.category} // ← niet vergeten!
        />
      ))}

    </section>
  );
};

export default BookList;
