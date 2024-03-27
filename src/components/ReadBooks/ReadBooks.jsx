import { useEffect, useState } from "react";
import { getBooks } from "../Utility/LocalStorage";
import ReadBook from "./ReadBook";
import { useLoaderData } from "react-router-dom";



const ReadBooks = () => {
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

                {/* name is :{book.length} */}

               <div>
               {
                    book.map(books => <ReadBook key={books.bookId} books={books}></ReadBook>)
                }
               </div>
            </div>
        </div>
    );
};

export default ReadBooks;