import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const SingleBookDetails = () => {
  const axios = useAxios();
  const params = useParams();
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
        This is single book details
      </h1>

      <div className="flex h-full mx-auto border border-pink-500 justify-center items-center  p-2 gap-4 flex-col lg:flex-row">
        <div className="flex-1  lg:h-full">
          <img className="lg:h-full" src={book.data.image} alt="" />
        </div>
        <div className="flex-1 text-gray-500 space-y-2 md:space-y-4">
          <h2 className="text-5xl text-center text-secondary font-extrabold">
            {book.data.name}
          </h2>
          <h2 className="text-3xl text-center font-bold">
            category: {book.data.category}
          </h2>
          <h2 className="text-2xl text-center">Author: {book.data.author}</h2>
          {/* <h2 className="font-bold text-center">Car Type: {loadedCar.type}</h2> */}
          <button
            // onClick={handleCart}
            className="btn  btn-ghost bg-primary text-white w-full"
          >
            Borrow
            {/* <BsCarFront></BsCarFront> */}
          </button>
          <button
            // onClick={handleCart}
            className="btn  btn-ghost bg-secondary text-white w-full"
          >
            Read
            {/* <BsCarFront></BsCarFront> */}
          </button>
        </div>
      </div>
      {/* <h2 className="text-xl text-gray-500">
        Description: {book.data.description}
      </h2> */}
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
