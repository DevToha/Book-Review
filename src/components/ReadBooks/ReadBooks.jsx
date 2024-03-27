import { useEffect, useState } from "react";
import { getBooks } from "../Utility/LocalStorage";
import ReadBook from "./ReadBook";



const ReadBooks = () => {
    const [book, setBook] = useState([])

    useEffect(() => {
        const storedBook = getBooks()
        setBook(storedBook)
    }, [])

    return (
        <div>
            {/* ReadBooks:{book[1]} */}
            {/* name:{book[1]} */}
            <div>
                {
                    book.map(books => <ReadBook key={books.bookId} books={books}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;