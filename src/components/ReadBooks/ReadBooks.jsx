import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../Utility/LocalStorage";


const ReadBooks = () => {
    const Books = useLoaderData();

    useEffect(() => {
        const storedReadBookIds = getStoredReadBook()
        if (Books.length > 0) {
            const bookRead = Books.filter(readBook => storedReadBookIds.includes(readBook.bookId))
            console.log(bookRead)
        }
    }, [])

    return (
        <div>
            ReadBooks:
        </div>
    );
};

export default ReadBooks;