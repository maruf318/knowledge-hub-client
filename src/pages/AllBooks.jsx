import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import useAxios from "../hooks/useAxios";
import { Rating } from "@smastrom/react-rating";

const AllBooks = () => {
  const axios = useAxios();
  const getBooks = async () => {
    const res = await axios.get("/allbooks");
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
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-6xl">
        Total Number of Books: {books.data.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books?.data.map((book) => (
          <div key={book._id}>
            <div className="card card-compact  bg-base-100 shadow-xl h-[500px]">
              <figure>
                <img
                  className="w-full h-[300px]"
                  src={book.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{book.name}</h2>
                <p>Author: {book.author}</p>
                <p>Category: {book.category}</p>
                <p className="flex">
                  Feedback Rating:
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={parseInt(book.rating)}
                    readOnly={true}
                  />
                </p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Details</button>
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
