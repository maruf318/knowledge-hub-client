import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import cat from "../assets/cat.json";
import Lottie from "lottie-react";

const BorrowedBook = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const [loadedData, setData] = useState([]);
  const notifySuccess = () =>
    toast.success("Returned Successfully !!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  useEffect(() => {
    // fetch("https://knowledge-hub-server-delta.vercel.app/allbooks", {
    //   credentials: "include",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data);
    //   });
    if (user) {
      axios
        .get("/allbooks", { withCredentials: true })
        .then((res) => setData(res.data));
    }
  }, [axios, user]);
  // const loadedData = useLoaderData();
  // console.log(loadedData);

  //https://knowledge-hub-server-delta.vercel.app/cart?email=library@gmail.com

  // const [showAvailableBooks, setShowAvailableBooks] = useState(false);

  const getCarts = async () => {
    const res = await axios.get(`/cart?email=${user.email}`, {
      withCredentials: true,
    });
    return res;
  };
  const {
    data: cart,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCarts,
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
  // console.log(cart.data);
  const handleDelete = (_id, name) => {
    // console.log(_id);
    // fetch(`https://knowledge-hub-server-delta.vercel.app/cart/${_id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     refetch();
    //     if (data.acknowledged) {
    //       notifySuccess();
    //     }
    //   });
    axios.delete(`/cart/${_id}`, { withCredentials: true }).then((res) => {
      console.log(res.data);

      if (res.data.deletedCount > 0) {
        notifySuccess();
      }
      refetch();
    });
    // console.log(_id, name);

    //patch quantity
    const data = loadedData?.find((load) => load.name == name);
    // console.log(data);
    const quantity = { quantity: parseInt(data?.quantity) + 1 };
    // console.log(quantity);
    // console.log(name);
    // fetch(
    //   `https://knowledge-hub-server-delta.vercel.app/cart/${name}`,
    //   {
    //     method: "PATCH",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(quantity),
    //   },
    //   { credentials: "include" }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     refetch();
    //   });
    axios
      .patch(
        `https://knowledge-hub-server-delta.vercel.app/cart/${name}`,
        quantity,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        refetch();
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-semibold text-gray-400 mt-10">
        {/* This is borrowed book section of {user?.email} */}
        Your Books
      </h2>
      {cart.data.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
          {cart?.data?.map((book) => (
            <div key={book._id}>
              <div className="card bg-base-100 shadow-xl min-h-[600px]">
                <figure className="px-10 pt-10">
                  <img
                    className="rounded-lg h-[250px] w-full"
                    src={book.image}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{book.name}</h2>
                  <p>
                    Category:{" "}
                    <span className="capitalize">{book.category}</span>
                  </p>
                  <p>Borrowed Date: {book.borrowedDate}</p>
                  <p className="text-red-600 font-bold">
                    Return Date: {book.returnDate}
                  </p>
                  <div className="card-actions">
                    <button
                      onClick={() => handleDelete(book._id, book.name)}
                      className="btn btn-primary"
                    >
                      Return
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="min-h-[70vh] mt-10">
          <h1 className="text-center text-2xl font-bold ">
            You Have not Borrowed any books yet!!! Please borrow some
          </h1>
          <div className="w-1/2 h-1/2 flex justify-center items-center mx-auto">
            <Lottie animationData={cat}></Lottie>
          </div>
        </div>
      )}
    </div>
  );
};

export default BorrowedBook;
