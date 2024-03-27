// import toast from "react-hot-toast"
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const getBooks = () => {
    // let book = []
    const storedBooks = localStorage.getItem('book')
    if (storedBooks) {
        return JSON.parse(storedBooks)
    }
    return []
}
// save
export const saveBook = bookId => {
    let storedBook = getBooks()
    const exists = storedBook.find(readBookId => readBookId === bookId)
    if (!exists) {
        storedBook.push(bookId)
        localStorage.setItem('book', JSON.stringify(storedBook))

    }
    
}