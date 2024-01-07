import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAxios from "../hooks/useAxios";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import { useState } from "react";

const AllBooks = () => {
  const axios = useAxios();
  const [showAvailableBooks, setShowAvailableBooks] = useState(false);

  const getBooks = async () => {
    const res = await axios.get("/allbooks", { withCredentials: true });
    return res;
  };
  const {
    data: books,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });
  // console.log(books?.data);
  if (isLoading) {
    return (
      <p className="text-center text-7xl">LOADING........................</p>
    );
  }
  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }
  console.log(books);
  console.log(showAvailableBooks);
  // const handleQuantity = (e) => {
  //   e.preventDefault();
  //   // setQuantity(1);
  // };
  // console.log(quantity);
  const filteredBooks = showAvailableBooks
    ? books?.data.filter((book) => book?.quantity > 0)
    : books?.data;
  // console.log(filteredBooks);
  const toggleShowAvailableBooks = () => {
    setShowAvailableBooks(!showAvailableBooks);
  };
  return (
    <div className="max-w-7xl mx-auto space-y-5 my-4 md:my-10">
      <h1 className="text-center text-6xl dark:text-white">
        Total Number of Books: {filteredBooks?.length}
      </h1>
      <div className="flex justify-center">
        <button
          onClick={toggleShowAvailableBooks}
          className="btn btn-primary dark:text-white "
        >
          {showAvailableBooks
            ? "Show All books"
            : "Filter: Show Available books"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks?.map((book) => (
          <div key={book?._id}>
            <div className="card group card-compact  bg-base-100 shadow-xl h-[500px]">
              <figure>
                <img
                  className="w-full group-hover:scale-110 h-[300px] object-cover"
                  src={book?.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{book?.name}</h2>
                <p>Author: {book?.author}</p>
                <p>Quantity: {book?.quantity}</p>
                <p>Category: {book?.category}</p>
                <p className="flex">
                  Feedback Rating:
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={parseInt(book?.rating)}
                    readOnly={true}
                  />
                </p>

                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Update</button> */}
                  <Link to={`/updateBook/${book?._id}`}>
                    <button className="btn btn-primary dark:text-white">
                      Update Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
