import PropTypes from 'prop-types';


const ReadBook = ({ books }) => {
    const { bookName } = books
    return (
        <div>
            name:{bookName}
        </div>
    );
};

ReadBook.propTypes = {
    books: PropTypes.object
}

export default ReadBook;