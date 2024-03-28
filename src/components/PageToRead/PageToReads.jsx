// import { LineChart, Line } from 'recharts';
// import PropTypes from 'prop-types';

// const PageToReads = ({ books }) => {

//     const { bookName, totalPages } = books

//     const data = [
//         {
//             "bookId": 1,
//             "bookName": "Pride and Prejudice",
//             "author": "Jane Austen",
//             "image": "https://i.ibb.co/FH17vPB/71-Q1t-Pup-Kj-L-AC-UF1000-1000-QL80.jpg",
//             "review": "A delightful comedy of manners with memorable characters.",
//             "totalPages": 279,
//             "rating": 4.4,
//             "category": "Fiction",
//             "tags": [
//                 "Romance",
//                 "Satire"
//             ],
//             "publisher": "T. Egerton, Whitehall",
//             "yearOfPublishing": 1813
//         },
//         {
//             "bookId": 2,
//             "bookName": "The Great Gatsby",
//             "author": "F. Scott Fitzgerald",
//             "image": "https://i.ibb.co/YB9YMgh/XL.jpg",
//             "review": "A timeless classic that captures the essence of the Jazz Age.",
//             "totalPages": 180,
//             "rating": 4.5,
//             "category": "Fiction",
//             "tags": [
//                 "Classics",
//                 "Romance"
//             ],
//             "publisher": "Scribner",
//             "yearOfPublishing": 1925
//         },
//         {
//             "bookId": 3,
//             "bookName": "To Kill a Mockingbird",
//             "author": "Harper Lee",
//             "image": "https://i.ibb.co/z58L2yj/GUEST-1607358e-8a84-4160-b93f-15b30b146a9f.jpg",
//             "review": "A powerful story that addresses themes of racial injustice and moral growth.",
//             "totalPages": 324,
//             "rating": 4.7,
//             "category": "Fiction",
//             "tags": [
//                 "Classic",
//                 "Social Issues"
//             ],
//             "publisher": "J. B. Lippincott & Co.",
//             "yearOfPublishing": 1960
//         }
//     ]

//     return (
//         <div>
//             <LineChart width={500} height={400} data={data}>
//                 <Line dataKey="totalPages"></Line>
//             </LineChart>
//         </div>
//     );
// };

// PageToReads.propTypes = {
//     books: PropTypes.object
// }

// export default PageToReads;