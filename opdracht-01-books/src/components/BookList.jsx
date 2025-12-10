import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import data from "../data";

const BookList = () => {
  // 🔹 Boeken uit data laden
  const [books] = useState(data);

  // 🔹 Zoekinput opslaan
  const [searchInput, setSearchInput] = useState("");

  // 🔹 Input handler
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // 🔹 Filter boeken (niet hoofdlettergevoelig)
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="container">

      {/* 🔍 Zoekbalk */}
      <div className="search">
        <input
          type="text"
          placeholder="Zoek een titel..."
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
      </div>

    
      <BookCounter aantal={filteredBooks.length} />

      
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
