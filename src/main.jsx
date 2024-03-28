import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PageToRead from './components/PageToRead/PageToRead';
import ReadBooks from './components/ReadBooks/ReadBooks';
import WishListBook from './components/WishListBook/WishListBook';
import TopRatedBook from './components/Top Rated Book/TopRatedBook';
import OurTopAuthor from './components/Our Top Author/OurTopAuthor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../book.json')

      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('../book.json')
          },
          {
            path: 'WishListBook',
            element: <WishListBook></WishListBook>,
            loader: () => fetch('../book.json')
          },
        ]
      },
      {
        path: '/PagesRead',
        element: <PageToRead></PageToRead>
      },
      {
        path: '/TopRatedBook',
        element: <TopRatedBook></TopRatedBook>
      },
      {
        path: '/TopRatedAuthor',
        element: <OurTopAuthor></OurTopAuthor>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
