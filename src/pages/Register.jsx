import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from "../assets/registrationgirl.json";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="box mx-auto">
        <span></span>
        <h2 className="text-5xl font-bold text-center text-gray-500 md:my-10">
          Register now!
        </h2>
      </div>

      <p className="py-6 text-center text-gray-500 md:my-4">
        Welcome! Register and explore the Library of knowledge
      </p>
      <div className=" flex justify-center mx-auto mb-10">
        <div className="flex p-4 md:flex-row flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
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
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-secondary">Create Account</button>
              </div>
              <p className="text-black">
                Already have an account?
                <Link
                  to={"/login"}
                  className="font-bold text-red-800 underline"
                >
                  Login Here
                </Link>
              </p>
            </form>
          </div>
          <div className="justify-center items-center flex">
            <Lottie animationData={registerAnimation}></Lottie>
            {/* <img className="w-[500px]" src={animation} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
