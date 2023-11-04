import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginAnimation from "../assets/loginAnimation.json";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {};
  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-gray-500 md:my-10">
        Login now!
      </h1>
      <p className="py-6 text-center text-gray-500 md: my-5">
        Welcome back! Log in to continue your journey and access your
        personalized experience.
      </p>
      <div className=" flex justify-center mx-auto mb-10">
        <div className="flex p-4 gap-4 md:flex-row flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-secondary">Login</button>
              </div>
            </form>
            <p className="text-center border-y-2 mb-4">OR</p>
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-secondary
           w-1/2 mx-auto capitalize"
            >
              SignIn By<FcGoogle className="text-2xl"></FcGoogle>
            </button>
            <p className="text-black text-center my-4">
              Create a account here
              <Link
                to={"/register"}
                className="font-bold text-red-800 underline "
              >
                Register
              </Link>
            </p>
          </div>
          <div className="">
            <Lottie animationData={loginAnimation}></Lottie>
            {/* <img className="w-[500px]" src={animation} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
