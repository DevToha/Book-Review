import book from '../Images/The-Night-Circus.jpg'


const Banner = () => {
    return (
        <div className="mt-10 ml-[28px] mb-10">
            <div className="w-[1400px] h-[430px] bg-[#1313130D] rounded-2xl flex justify-around items-center">
                <div>
                    <h3 className=' font-bold text-5xl my-5'>Books to freshen</h3>
                    <h3 className=' font-bold text-5xl my-5'>up your bookshelf</h3>
                    <button className='btn bg-[#23BE0A] mt-10 text-white'>View The List</button>
                </div>
                <div>
                    <img className='w-[210px] h-[300px]' src={book} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;