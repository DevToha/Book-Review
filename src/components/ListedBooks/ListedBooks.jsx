// import { Link } from "react-router-dom";
import ReadAndWishlistBooks from "../ReadBooks and Wishlist Books/ReadAndWishlistBooks";

const ListedBooks = () => {
    return (
        <div>
            <div className="text-center bg-[#1313130D] h-[120px] rounded-xl p-[39px] mx-5 mt-10">
                <p className="font-bold text-2xl ">Books</p>
            </div>

            {/* <div className="text-center mt-10">
                <ul className="menu lg:menu-horizontal text-white rounded-box lg:mb-64 bg-[#23BE0A]">
                    <li>
                        <details open>
                            <summary>Sort By</summary>
                            <ul>
                                <li><a>Sort By</a></li>
                                <Link><li><a>Rating</a></li></Link>
                                <li><a>Number of Pages:</a></li>
                                <li><a>Year of Publishing:</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div> */}
            <div className="mt-7">
                <ReadAndWishlistBooks></ReadAndWishlistBooks>
            </div>
        </div>
    );
};

export default ListedBooks;