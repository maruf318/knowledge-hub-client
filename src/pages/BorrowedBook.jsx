import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

const BorrowedBook = () => {
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  console.log(loadedData);
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

  //http://localhost:5000/cart?email=library@gmail.com
  const axios = useAxios();
  // const [showAvailableBooks, setShowAvailableBooks] = useState(false);

  const getCarts = async () => {
    const res = await axios.get(`/cart?email=${user.email}`);
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
  console.log(cart.data);
  const handleDelete = (_id, name) => {
    // console.log(_id);
    fetch(`http://localhost:5000/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        if (data.acknowledged) {
          notifySuccess();
        }
      });
    console.log(_id, name);

    //patch quantity
    const data = loadedData.find((load) => load.name == name);
    // console.log(data);
    const quantity = { quantity: parseInt(data.quantity) + 1 };
    console.log(quantity);
    // console.log(name);
    fetch(`http://localhost:5000/cart/${name}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(quantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center">
        This is borrowed book section of {user.email}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cart?.data?.map((book) => (
          <div key={book._id}>
            <div className="card bg-base-100 shadow-xl min-h-[600px]">
              <figure className="px-10 pt-10">
                <img className="rounded-lg h-[250px]" src={book.image} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{book.name}</h2>
                <p>
                  Category: <span className="capitalize">{book.category}</span>
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
    </div>
  );
};

export default BorrowedBook;
