import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const SingleBookDetails = () => {
  const axios = useAxios();
  const params = useParams();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const getBook = async () => {
    const res = await axios.get(`/book/${params.id}`);
    return res;
  };
  const {
    data: book,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["book"],
    queryFn: getBook,
  });

  if (isLoading) {
    return (
      <p className="text-center text-7xl">LOADING........................</p>
    );
  }
  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }
  // console.log(book?.data);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center font-semibold border-y-4 my-4 text-gray-500 border-red-900">
        Today is {date}
      </h1>

      <div className="flex h-full mx-auto border border-pink-400 rounded-lg justify-center items-center  p-2 gap-4 lg:gap-12 flex-col lg:flex-row">
        <div className="flex-1  lg:h-full">
          <img
            className="lg:h-[70vh] w-full  rounded-lg"
            src={book.data.image}
            alt=""
          />
        </div>
        <div className="flex-1 text-gray-500 space-y-2 md:space-y-4">
          <h2 className="text-5xl text-center text-secondary font-extrabold">
            {book.data.name}
          </h2>
          <h2 className="text-3xl text-center font-bold">
            Category: <span className="capitalize">{book.data.category}</span>
          </h2>
          <h2 className="text-2xl text-center">Author: {book.data.author}</h2>
          <h2 className="text-2xl text-center">
            Available Copies: {book.data.quantity}
          </h2>

          {parseInt(book.data.quantity) ? (
            // <button className="btn  btn-ghost bg-primary text-white w-full">
            //   Borrow
            // </button>
            <div>
              <button
                className="btn  btn-ghost bg-primary text-white w-full"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Borrow
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-center mb-4">
                    Please Choose a return date
                  </h3>
                  <input
                    className="flex mx-auto text-2xl bg-secondary text-white p-2 rounded-lg "
                    type="date"
                    name="date"
                    id=""
                  />
                  <p className="py-4">
                    Note: We charge $5 per day for late submission
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn bg-primary text-white">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          ) : (
            <button
              disabled
              // onClick={handleCart}
              className="btn cursor-not-allowed btn-ghost bg-primary text-white w-full"
            >
              Borrow
            </button>
          )}
          <Link to={`/read/${book.data._id}`}>
            <button className="btn mt-4  btn-ghost bg-secondary text-white w-full">
              Read
            </button>
          </Link>
        </div>
      </div>

      {/* newslater email subscribe */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden  p-8 ">
        <div className="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-white p-14">
          <div className="flex flex-col items-center">
            <span className="-rotate-1 rounded-lg bg-yellow-100 py-px px-2 text-sm text-yellow-800">
              117+ people joined this week
            </span>
            <h3 className="mt-2 max-w-2xl text-center text-2xl font-bold  md:text-4xl ">
              Want to receive notification about new books? Then why not
              subscribe the newsletter
            </h3>
            <form
              action=""
              className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
            >
              <input
                type="email"
                name="email"
                id="email"
                className="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
                placeholder="Email Address"
              />
              <button
                type="submit"
                className="rounded bg-primary px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookDetails;
