import { AiOutlinePlus } from "react-icons/ai";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";

const AddBook = () => {
  const axios = useAxios();
  const notifySuccess = () =>
    toast.success("Added the Product Successfully", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;

    const description = form.description.value;
    const author = form.author.value;
    const newbook = {
      name,
      category,
      image,
      quantity,
      rating,
      description,
      author,
    };
    // console.log(newbook);
    axios.post("/addbooks", newbook).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        // alert("successfully added book");
        notifySuccess();
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-5xl text-gray-500  font-bold my-10">
        Add a book
      </h2>

      <form onSubmit={handleAdd} className="p-4">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              // for="first_name"
              className="block mb-2 text-sm font-medium text-pink-600  dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="book_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Book Name"
              name="name"
              required
            />
          </div>
          <div>
            <label
              // for="last_name"
              className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
            >
              Category Name
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-5000"
              name="category"
              id=""
            >
              <option value="mystery">Mystery</option>
              <option value="comics">Comics</option>
              <option value="entertainment">Entertainment</option>
              <option value="romance">Romance</option>
              <option value="fantasy">Fantasy</option>
              <option value="biography">Biography</option>
              <option value="history">History</option>
              <option value="travel">Travel</option>
            </select>
          </div>

          <div>
            <label
              // for="image"
              className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Image Url"
              name="image"
              required
            />
          </div>
          <div>
            <label
              // for="author"
              className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
            >
              Author Name
            </label>
            <input
              type="text"
              id="author"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Author Name"
              name="author"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            // for="price"
            className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
          >
            Quantity Amount
          </label>
          <input
            type="number"
            id="quantity"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Quantity Amount"
            name="quantity"
            min="0"
            required
          />
        </div>

        <div className="mb-6">
          <label
            // for="rating"
            className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
          >
            Rating Out of 5
          </label>
          <input
            type="number"
            id="rating"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•• out of 5"
            name="rating"
            min="1"
            max="5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            // for="Short Description"
            className="block mb-2 text-sm font-medium text-pink-600 dark:text-white"
          >
            Short Description
          </label>
          <input
            type="text"
            id="short_description"
            className="bg-gray-50 h-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            name="description"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            // for="remember"
            className="ml-2 text-sm font-medium text-pink-600 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions.
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="flex justify-center items-center mx-auto text-white bg-secondary-focus hover:bg-primary-focus focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-24 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <AiOutlinePlus></AiOutlinePlus> Add Book
          <AiOutlinePlus></AiOutlinePlus>
        </button>
      </form>
      {/* <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
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
        <button className="btn btn-primary">Login</button>
      </div>
    </form> */}
    </div>
  );
};

export default AddBook;
