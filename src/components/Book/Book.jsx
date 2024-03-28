import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Book = ({ book }) => {

    const {bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className='mb-10'>
                    <div className="lg:w-[450px] border  p-[23px] rounded-2xl">
                        <div className='h-[310px] pt-[50px] lg:w-[402px] w-[255px] rounded-2xl bg-[#1313130D]'>
                            <img className='h-[210px] lg:ml-[122px] ml-[55px] rounded-xl ' src={image} alt="" />
                        </div>
                        <div className=' flex gap-5 mt-6 font-bold text-base text-[#23BE0A]'>
                            <div className='bg-[#23BE0A0D] w-[125px] h-[43px] text-center pt-2 rounded-full '>{tags[0]}</div>
                            <div className='bg-[#23BE0A0D] w-[125px] h-[43px] text-center pt-2 rounded-full '>{tags[1]}</div>
                        </div>
                        <div className="">
                            <h2 className=" font-bold text-3xl my-3">{bookName}</h2>
                            <p className=' font-medium text-base my-4'>By : {author}</p>
                            <hr />
                        </div>

                        <div className='flex justify-between my-4  font-medium text-base'>
                            <div>
                                {category}
                            </div>
                            <div className='flex gap-3 items-center'>
                                {rating}
                                <div className='text-2xl'> <CiStar /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;