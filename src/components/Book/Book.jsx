import PropTypes from 'prop-types';



const Book = ({ book }) => {

    const { bookName, author, image } = book;

    return (
        <div className='mb-10 '>
            <div className="w-[450px] border rounded-2xl">
                <div className='h-[310px] p-10 w-[402px] mt-7 rounded-2xl ml-[23px] bg-[#1313130D]'>
                    <img className='h-[230px] w-[] ' src={image} alt="" />
                </div>
                <div className="card-body ">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;