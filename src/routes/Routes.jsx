import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";

import Home from "../pages/Home";
import BorrowedBook from "../pages/BorrowedBook";
import AllBooks from "../pages/AllBooks";
import Login from "../pages/Login";
import AddBook from "../pages/AddBook";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "borrowedbooks",
        element: <BorrowedBook></BorrowedBook>,
      },
      {
        path: "allbooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "addbook",
        element: <AddBook></AddBook>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
