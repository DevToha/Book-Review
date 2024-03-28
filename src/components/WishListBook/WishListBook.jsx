import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooks } from "../Utility/LocalStorage";
import WishListBooks from "./WishListBooks";

const WishListBook = () => {
    const loadBooks = useLoaderData()
    const [book, setBook] = useState([])

    useEffect(() => {
        const storedBook = getBooks()
        if (loadBooks.length > 0) {


            const bookLoad = [];
            for (const bookId of storedBook) {
                const loadBook = loadBooks.find(loadBook => loadBook.bookId === bookId)
                if (loadBook) {
                    bookLoad.push(loadBook)
                }
            }

            setBook(bookLoad)

            // const bookLoad = loadBooks.filter(loadBook => storedBook.includes(loadBook.bookId))


            // console.log(loadBooks, storedBook, bookLoad)
        }
    }, [])
    return (
        <div>

            <div>
               {
                    book.map(books => <WishListBooks key={books.bookId} books={books}></WishListBooks>)
                }
               </div>
        </div>
    );
};

export default WishListBook;