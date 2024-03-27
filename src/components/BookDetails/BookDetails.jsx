import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook } from "../Utility/LocalStorage";

const BookDetails = () => {
    const books = useLoaderData();

    const { bookId } = useParams()
    const bookIdInt = parseInt(bookId)
    const book = books.find(book => book.bookId === bookIdInt)
    console.log(book)

    const handleReadBook = books => {

        saveBook(bookIdInt)
        console.log(books)
        // toast('Read Book')
    }

    const handleWishlist = () => {
        toast('Added to Wishlist')
    }

    return (
        <div className="flex justify-center gap-32 mt-10">
            <div>
                <img className="w-[400px] h-[570px] rounded-md" src={book.image} alt="" />
            </div>

            <div>
                <div className="font-bold text-4xl">{book.bookName}</div>
                <p className=' font-medium text-base my-4'>By : {book.author}</p>
                <hr />
                <p className=' font-medium text-base my-4'>{book.category}</p>
                <hr />
                <p className="mt-5"><span className=' font-bold text-base'>Review : </span>{book.review}</p>
                <div className="flex gap-5 text-center items-center my-10">
                    <p><span className=' font-bold text-base'>Tag</span></p>
                    <div className='bg-[#23BE0A0D] text-[#23BE0A] w-[125px] font-bold h-[43px] text-center pt-2 rounded-full '>#{book.tags[0]}</div>
                    <div className='bg-[#23BE0A0D] text-[#23BE0A] font-bold w-[125px] h-[43px] text-center pt-2 rounded-full '>#{book.tags[1]}</div>
                </div>
                <hr />
                <div className="my-5">
                    <p>Number of Pages : <span className="ml-10 text-base font-bold">{book.totalPages}</span></p>
                    <p className="my-4">Publisher : <span className="ml-24 text-base font-bold">{book.publisher}</span></p>
                    <p>Year of Publishing : <span className="ml-9 text-base font-bold">{book.yearOfPublishing}</span></p>
                    <p className="my-4">Rating : <span className="ml-[118px] text-base font-bold">{book.rating}</span></p>
                    <hr />
                </div>
                <div className="flex gap-7">
                    <button onClick={() => handleReadBook(books)} className="btn w-[96px] btn-outline border-gray-300">Read</button>
                    <button onClick={handleWishlist} className="btn bg-[#50B1C9] w-[120px] text-white">Wishlist</button>
                </div>
                <ToastContainer />

            </div>


        </div>
    );
};

export default BookDetails;