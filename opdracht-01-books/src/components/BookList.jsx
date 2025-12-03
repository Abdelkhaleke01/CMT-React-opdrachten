import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import data from "../data";

const BookList = () => {
  // 🔹 Boeken binnen je component
  const [books, setBooks] = useState(data);

  // 🔹 Zoekinput bewaren
  const [searchInput, setSearchInput] = useState("");

  // 🔹 Veranderingen in input opslaan
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // 🔹 Filteren op titel (niet hoofdlettergevoelig)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="container">

      {/* 🔹 Zoekbalk */}
      <div className="search">
        <input
          type="text"
          placeholder="Zoek een titel..."
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
      </div>

      {/* 🔹 Totaal aantal boeken (gefilterd) */}
      <BookCounter aantal={filteredBooks.length} />

      {/* 🔹 Gefilterde boeken weergeven */}
      {filteredBooks.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          desc={book.author}
          img={book.image}
        />
      ))}

    </section>
  );
};

export default BookList;
