import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";

import Home from "../pages/Home";
import BorrowedBook from "../pages/BorrowedBook";
import AllBooks from "../pages/AllBooks";
import Login from "../pages/Login";
import AddBook from "../pages/AddBook";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <BorrowedBook></BorrowedBook>
          </PrivateRoute>
        ),
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
    ],
  },
]);
export default router;
