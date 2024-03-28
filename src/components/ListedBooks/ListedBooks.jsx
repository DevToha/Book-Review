
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <div className="text-center bg-[#1313130D] h-[120px] rounded-xl p-[39px] mx-5 mt-10">
                <p className="font-bold text-2xl ">Books</p>
            </div>

            <div className="text-center mt-10">
                <ul className="menu lg:menu-horizontal rounded-box mb-10 bg-[#23BE0A]">
                    <li>
                        <details open>
                            <summary>Sort By</summary>
                            <ul>
                                <Link><li><a>Rating</a></li></Link>
                                <li><a>Number of Pages</a></li>
                                <li><a>Year of Publishing</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>

            <div className="mt-7">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">

                    <Link onClick={() => setTabIndex(0)}

                        to=""

                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>

                        <span>Read Books</span>

                    </Link>

                    <Link onClick={() => setTabIndex(1)}

                        to={`WishListBook`}

                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>

                        <span>Wishlist Books</span>

                    </Link>
                </div>
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default ListedBooks;