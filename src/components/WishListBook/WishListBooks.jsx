import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";


const WishListBooks = ({ books }) => {
    const { bookName, author, totalPages, image, rating, category, publisher, tags, yearOfPublishing } = books
    return (
        <div>
            <div className='p-[30px]'>
                <div className="flex border border-gray-300 rounded-lg p-7 gap-10">
                    <div className='h-[250px] pl-[80px] pt-4 rounded-2xl w-[342px] bg-[#1313130D] '>
                        <img className=" h-[202px] rounded-2xl w-[164px] mt-2 mb-2 ml-2 mr-2" src={image} alt="" />
                    </div>
                    <div>
                        <div className="ml-4 lg:mb-0 mb-5">
                            <div>
                                <h2 className="card-title font-extrabold text-[20px] mb-2">{bookName}</h2>
                                <p className="mb-2 font-medium">By : {author}</p>
                            </div>
                            <div className="flex gap-5 text-center items-center my-5">

                                <p><span className=' font-bold text-base'>Tag</span></p>

                                <div className='bg-[#23BE0A0D] text-[#23BE0A] w-[125px] font-bold h-[43px] text-center pt-2 rounded-full '>#{tags[0]}</div>

                                <div className='bg-[#23BE0A0D] text-[#23BE0A] font-bold w-[125px] h-[43px] text-center pt-2 rounded-full '>#{tags[1]}</div>

                                <div className='flex gap-2 items-center'>
                                    <div className='text-xl'><CiLocationOn /></div>
                                    <p className=''>Year of Publishing : {yearOfPublishing}</p>
                                </div>
                            </div>

                            <div className='flex gap-14 mb-4'>
                                <div className='flex items-center gap-2'>
                                    <div className=' text-2xl'>
                                        <IoMdContacts />
                                    </div>
                                    <p>Publisher : {publisher}</p>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <div className=' text-2xl'><FaRegFileAlt /></div>
                                    <p>Page : {totalPages}</p>
                                </div>
                            </div>

                            <hr />

                            <div className="flex gap-5 text-center items-center my-5">
                                <div className='bg-[#328EFF26] text-[#328EFF] w-[165px] font-bold h-[43px] text-center pt-2 rounded-full '>Category : {category}</div>

                                <div className='bg-[#23BE0A0D] text-[#23BE0A] font-bold w-[125px] h-[43px] text-center pt-2 rounded-full '>Rating : {rating}</div>
                                <div>
                                    <a href="#_" className="relative rounded-full px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                        <span className="relative">View Details</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishListBooks.propTypes = {
    books: PropTypes.object
}


export default WishListBooks;