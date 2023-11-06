import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";
import { useRef } from "react";
import generatePDF from "react-to-pdf";

const ReadBook = () => {
  const axios = useAxios();
  const params = useParams();
  const targetRef = useRef();
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
    <div ref={targetRef} className="max-w-7xl mx-auto p-2">
      {/* <h2>This is read book page</h2> */}
      <div className="card lg:card-side bg-base-100 shadow-xl my-6">
        <figure className="flex-1">
          <img className="w-full h-full" src={book?.data.image} alt="Album" />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title">{book?.data.name}</h2>
          <p className="flex">
            <Rating
              style={{ maxWidth: 100 }}
              value={parseInt(book.data.rating)}
              readOnly={true}
            />
          </p>
          <p>{book.data.description}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
              className="btn btn-primary capitalize"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-secondary border-y-2 text-3xl font-bold my-6">
          Our Popular Books
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/Tn1bc4M.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/unyJ63L.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/NfqB7Hc.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/KIWajkL.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/o65uB3f.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/uMJ4pMp.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/Sx1XwLH.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/FlbWssp.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/9LXsFrd.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/ahL0m1O.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/m1DWjpg.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.imgur.com/qz8Zy9j.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
