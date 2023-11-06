import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";

import Home from "../pages/Home";
import BorrowedBook from "../pages/BorrowedBook";
import AllBooks from "../pages/AllBooks";
import Login from "../pages/Login";
import AddBook from "../pages/AddBook";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateBook from "../pages/UpdateBook";
import BookDetails from "../pages/BookDetails";
import SingleBookDetails from "../pages/SingleBookDetails";
import ReadBook from "../pages/ReadBook";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "borrowedbooks",
        element: (
          <PrivateRoute>
            <BorrowedBook></BorrowedBook>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/allbooks"),
      },
      {
        path: "allbooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "addbook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "category/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "book/:id",
        element: <SingleBookDetails></SingleBookDetails>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "read/:id",
        element: <ReadBook></ReadBook>,
      },
      {
        path: "updateBook/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
]);
export default router;
