// import toast from "react-hot-toast"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getBooks = () => {
    let book = []
    const storedBooks = localStorage.getItem('book')
    if (storedBooks) {
        book = JSON.parse(storedBooks)
    }
    return book
}
// save
export const saveBook = books => {
    let book = getBooks()
    const isExist = book.find(b => b.id === books.bookId)
    if (isExist) {
        return toast.error('already')

    }
    book.push(books)
    localStorage.setItem('book', JSON.stringify(book))
    toast.success('success ')
}