import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooks } from "../Utility/LocalStorage";
import WishListBooks from "./WishListBooks";

const WishListBook = () => {
    const loadBooks = useLoaderData()
    const [WishBook, setWishBook] = useState([])

    useEffect(() => {
        const storedWishBook = getBooks()
        if (loadBooks.length > 0) {


            const bookLoad = [];
            for (const bookId of storedWishBook) {
                const loadBook = loadBooks.find(loadBook => loadBook.bookId === bookId)
                if (loadBook) {
                    bookLoad.push(loadBook)
                }
            }

            setWishBook(bookLoad)
        }
    }, [])
    return (
        <div>

            <div>
               {
                    WishBook.map(books => <WishListBooks key={books.bookId} books={books}></WishListBooks>)
                }
               </div>
        </div>
    );
};

export default WishListBook;