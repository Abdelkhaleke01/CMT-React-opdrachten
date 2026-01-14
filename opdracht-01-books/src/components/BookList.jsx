import { useState } from "react";
import Book from "./Book";
import BookCounter from "./bookcounter";
import booksData from "../book-data";

const BookList = () => {
  const [books] = useState(booksData);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const categories = [
    "Alle",
    "Fantasy",
    "Avontuur",
    "Sciencefiction",
    "Thriller",
    "Romance",
  ];

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
      <input
        type="text"
        placeholder="Zoek een titel..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>

      <BookCounter aantal={filteredBooks.length} />

      <div className="book-grid">
        {filteredBooks.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
            category={book.category}
            description={book.description}
            year={book.year}
            pages={book.pages}
          />
        ))}
      </div>
    </section>
  );
};

export default BookList;
