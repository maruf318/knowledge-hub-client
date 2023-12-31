import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from "../assets/registrationgirl.json";
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const notifyRegisterSuccess = () =>
    toast.success("Account Created. Please Login Now", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyError = (error) =>
    toast.error(error, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  // const [errorText, setErrorText] = useState(null);
  // const { signUp, googleSignIn, logOut } = useContext(AuthContext);
  // const navigate = useNavigate(null);
  const { signUp, logOut } = useContext(AuthContext);
  const navigate = useNavigate(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(email, password);
    if (password.length < 6) {
      // alert("less");
      // swal("Try Agin", "Password must be at least 6 characters ", "error");
      notifyError("Password must be at least 6 characters");
      // alert("less than 6");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      // swal(
      //   "Try Again",
      //   "Password must contain at least one Upper Case letter  ",
      //   "error"
      // );
      notifyError("Password must contain at least one Upper Case letter");
      return;
      // eslint-disable-next-line no-useless-escape
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':",.<>?]/.test(password)) {
      // swal(
      //   "Try Again",
      //   "Password must contain at least one special character  ",
      //   "error"
      // );
      notifyError("Password must contain at least one special character");
      return;
    }
    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("profile updated"))
          .catch();
        notifyRegisterSuccess();
        logOut().then().catch();
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        // setErrorText(error.message);
        // swal("Error", errorText, "error");
        notifyError(error.message);
      });
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
