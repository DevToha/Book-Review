import { NavLink } from 'react-router-dom';
import book from '../Images/The-Night-Circus.jpg'


const Banner = () => {
    return (
        <div className="mt-10 lg:ml-[28px] mb-10">
            <div className="lg:w-[1400px] lg:h-[430px] h-[330px] bg-[#1313130D] rounded-2xl flex justify-around items-center">
                <div>
                    <h3 className=' font-bold lg:text-5xl my-5'>Books to freshen</h3>
                    <h3 className=' font-bold lg:text-5xl  my-5 mb-12'>up your bookshelf</h3>
                    <div>
                        <NavLink to="/ListedBooks">
                            <a href="#_" className="relative rounded-md px-5 py-2.5 overflow-hidden group bg-[#23BE0A] relative hover:bg-gradient-to-r hover:from-green-500  mt-10  hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative font-semibold">View Details</span>
                            </a>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <img className='lg:w-[210px] lg:h-[300px] w-[100px] h-[150px]' src={book} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;