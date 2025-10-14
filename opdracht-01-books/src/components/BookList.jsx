import { useState } from "react";
import Book from "./Book";

const BookList = () => {
    const [books,setBooks] = useState([
{
    title : "Harry potter",
    author: "J.K Rowling",
    Image: "images/book-1.png",
},
{
    title: 'Fantasia VI',
    author: 'geronimo stilton',
    image: './images/book-2.png',
},

{
    title: 'the Hunger games',
    author: 'suzanne collins',
    image: './images/book-3.png'
}

])
    return ( 
         <section classname='container'>
            {books.map((book) => (
                <Book title={book.title} desc={book.author} img={book.image}/>
            ))}
    </section>
     );
}
 
export default BookList;