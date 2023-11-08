import { Link, NavLink } from "react-router-dom";
import pic from "../../src/assets/book-plant.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import icon from "../../src/assets/avatar.gif";
import { useTheme } from "../hooks/useTheme";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

const Header = () => {
  const { changeTheme, mode } = useTheme();
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-extrabold dark:text-white  border-2 border-y-gray-600"
              : "bg-secondary dark:text-white font-semibold"
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
              ? "font-extrabold dark:text-white border-2 border-y-gray-600"
              : "bg-secondary dark:text-white font-semibold"
          }
          // to={user ? "/addbook" : "/login"}
          to={"/addbook"}
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
              ? "font-extrabold dark:text-white border-2 border-y-gray-600"
              : "bg-secondary dark:text-white font-semibold"
          }
          // to={user ? "/borrowedbooks" : "/login"}
          to={"/borrowedbooks"}
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
              ? "font-extrabold dark:text-white border-2 border-y-gray-600"
              : "bg-secondary dark:text-white font-semibold"
          }
          to={"/allbooks"}
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
      <div className="navbar  relative">
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
          <a className=" flex items-center normal-case text-pink-700 text-2xl  lg:text-3xl font-extrabold">
            <span className="">
              <img src={pic} alt="" />
            </span>
            Knowledge<span className="text-gray-700 dark:text-white">Hub</span>
          </a>
        </div>
        <div className="navbar-center z-10 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end grid space-y-2 items-center content-center">
          <div>
            {user?.displayName ? (
              <p className="text-gray-500 border-x-2 text-center">
                User: {user.displayName}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="justify-center  items-center mx-auto flex md:gap-4">
            <button
              className="dark:text-white md:text-2xl"
              onClick={changeTheme}
            >
              {mode === "dark" ? (
                <MdOutlineLightMode></MdOutlineLightMode>
              ) : (
                <MdOutlineNightlight></MdOutlineNightlight>
              )}
            </button>
            <div className="avatar">
              <div className="w-8 rounded-full">
                {/* <img src={icon} /> */}
                {user?.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <img src={icon} />
                )}
              </div>
            </div>
            <div>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="bg-primary text-xs px-1 py-2 md:btn md:btn-primary rounded-lg dark:text-white  text-black"
                >
                  LOGOUT
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="btn bg-black text-white">Sign In</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
