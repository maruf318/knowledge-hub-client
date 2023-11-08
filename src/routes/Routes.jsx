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
        // loader: () => fetch("https://knowledge-hub-c55c9.web.app/allbooks"),
      },
      {
        path: "allbooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <SingleBookDetails></SingleBookDetails>
          </PrivateRoute>
        ),
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
          fetch(`https://knowledge-hub-c55c9.web.app/book/${params.id}`),
      },
    ],
  },
]);
export default router;
