
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const data = [
    {
        "bookId": 1,
        "bookName": "Pride and Prejudice",
        "author": "Jane Austen",
        "image": "https://i.ibb.co/FH17vPB/71-Q1t-Pup-Kj-L-AC-UF1000-1000-QL80.jpg",
        "review": "A delightful comedy of manners with memorable characters.",
        "totalPages": 279,
        "rating": 4.4,
        "category": "Fiction",
        "tags": [
            "Romance",
            "Satire"
        ],
        "publisher": "T. Egerton, Whitehall",
        "yearOfPublishing": 1813
    },
    {
        "bookId": 2,
        "bookName": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "image": "https://i.ibb.co/YB9YMgh/XL.jpg",
        "review": "A timeless classic that captures the essence of the Jazz Age.",
        "totalPages": 180,
        "rating": 4.5,
        "category": "Fiction",
        "tags": [
            "Classics",
            "Romance"
        ],
        "publisher": "Scribner",
        "yearOfPublishing": 1925
    },
    {
        "bookId": 3,
        "bookName": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "image": "https://i.ibb.co/z58L2yj/GUEST-1607358e-8a84-4160-b93f-15b30b146a9f.jpg",
        "review": "A powerful story that addresses themes of racial injustice and moral growth.",
        "totalPages": 324,
        "rating": 4.7,
        "category": "Fiction",
        "tags": [
            "Classic",
            "Social Issues"
        ],
        "publisher": "J. B. Lippincott & Co.",
        "yearOfPublishing": 1960
    },
    {
        "bookId": 4,
        "bookName": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "image": "https://i.ibb.co/kM4mgFc/b38578624-84881.jpg",
        "review": "A compelling narrative of teenage angst and rebellion.",
        "totalPages": 224,
        "rating": 4.3,
        "category": "Fiction",
        "tags": [
            "Coming of Age",
            "Literary Fiction"
        ],
        "publisher": "Little, Brown and Company",
        "yearOfPublishing": 1951
    },
    {
        "bookId": 5,
        "bookName": "1984",
        "author": "George Orwell",
        "image": "https://i.ibb.co/GP2Fc3b/61-NAx5pd6-XL-AC-UF1000-1000-QL80.jpg",
        "review": "A dystopian masterpiece that explores the dangers of totalitarianism.",
        "totalPages": 328,
        "rating": 4.6,
        "category": "Fiction",
        "tags": [
            "Dystopian",
            "Political"
        ],
        "publisher": "Secker & Warburg",
        "yearOfPublishing": 1949
    },
    {
        "bookId": 6,
        "bookName": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "image": "https://i.ibb.co/BT5BQgY/44661897330718.jpg",
        "review": "An enchanting adventure set in the world of Middle-earth.",
        "totalPages": 310,
        "rating": 4.8,
        "category": "Fantasy",
        "tags": [
            "Adventure",
            "Epic Fantasy"
        ],
        "publisher": "George Allen & Unwin",
        "yearOfPublishing": 1937
    }
]

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PageToRead = () => {

    return (
        <div className='mt-10 lg:ml-14'>
            <div>
                <BarChart width={1200} height={400} data={data}>
                    {/* <Line dataKey="totalPages"></Line> */}
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" label={{ position: 'top' }} shape={<TriangleBar />}>{data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}</Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default PageToRead;