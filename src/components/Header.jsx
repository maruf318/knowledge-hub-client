import { Link, NavLink } from "react-router-dom";
import pic from "../../src/assets/book-plant.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  // const user = true;
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-extrabold border-2 border-y-gray-600"
              : "bg-secondary font-semibold"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-extrabold border-2 border-y-gray-600"
              : "bg-secondary font-semibold"
          }
          to={user ? "/addbook" : "/login"}
        >
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          // className={
          //   " border-t-4 hover:bg-white rounded-lg px-2 py-4 bg-secondary text-white font-bold"
          // }
          className={({ isActive }) =>
            isActive
              ? "font-extrabold border-2 border-y-gray-600"
              : "bg-secondary font-semibold"
          }
          to={user ? "/borrowedbooks" : "/login"}
        >
          Borrowed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          // className={
          //   " border-t-4 hover:bg-white rounded-lg px-2 py-4 bg-secondary text-white font-bold"
          // }
          className={({ isActive }) =>
            isActive
              ? "font-extrabold border-2 border-y-gray-600"
              : "bg-secondary font-semibold"
          }
          to={user ? "/allbooks" : "/login"}
        >
          All Books
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100 relative">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className=" flex items-center normal-case text-pink-700 text-2xl font-extrabold">
            <span className="">
              <img src={pic} alt="" />
            </span>
            Knowledge<span className="text-gray-700">Hub</span>
          </a>
        </div>
        <div className="navbar-center z-10 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut} className="btn bg-black text-white">
              LOGOUT
            </button>
          ) : (
            <Link to={"/login"}>
              <a className="btn bg-black text-white">Sign In</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
