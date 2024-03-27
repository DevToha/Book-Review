import PropTypes from 'prop-types';


const ReadBook = ({ books }) => {
    const { bookId, bookName, author, image, rating, category, tags, yearOfPublishing } = books
    return (
        <div>
            {/* name:{bookName} */}

            <div className='p-[30px]'>
                <div className="flex border border-black rounded-lg  gap-10">
                    <div>
                        <img className=" h-[210px] rounded-2xl w-[302px] mt-2 mb-2 ml-2 mr-2" src={image} alt="" />
                    </div>
                    <div>
                        <div className=" lg:pt-6 pt-7 ml-4 lg:mb-0 mb-5">
                            <div>
                                <h2 className="card-title font-extrabold text-[20px] mb-2">{bookName}</h2>
                                <p className="mb-2">By : {author}</p>
                            </div>
                            <div className="flex gap-5 text-center items-center my-5">
                                <p><span className=' font-bold text-base'>Tag</span></p>
                                <div className='bg-[#23BE0A0D] text-[#23BE0A] w-[125px] font-bold h-[43px] text-center pt-2 rounded-full '>#{tags[0]}</div>
                                <div className='bg-[#23BE0A0D] text-[#23BE0A] font-bold w-[125px] h-[43px] text-center pt-2 rounded-full '>#{tags[1]}</div>
                                <div>
                                    <p>Year of Publishing : {yearOfPublishing}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    books: PropTypes.object
}

export default ReadBook;