const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('read-book')
    if (storedReadBook) {
        return JSON.parse(storedReadBook)
    }
}

const SaveReadBook = bookId => {
    const storedReadBooks = getStoredReadBook()
    const exists = storedReadBooks.find(readBookId => readBookId === bookId)
    if (!exists) {
        storedReadBooks.push(bookId)
        localStorage.setItem('read-book', JSON.stringify(storedReadBooks))
    }
}

export { getStoredReadBook, SaveReadBook }