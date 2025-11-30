import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";

const BookList = () => {
  const [books, setBooks] = useState([
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      image: "images/book-1.png",
    },
    {
      title: "Fantasia VI",
      author: "Geronimo Stilton",
      image: "images/book-2.png",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      image: "images/book-3.png",
    },
  ]);

  return (
    <section className="container">
      {/* 🔹 Hier toon je het totaal aantal boeken */}
      <BookCounter aantal={books.length} />

      {/* 🔹 Hier toon je elk boek */}
      {books.map((book, index) => (
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
