import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const BookDetails = () => {
  const axios = useAxios();
  const params = useParams();
  // console.log(params.id);
  const getCategory = async () => {
    const res = await axios.get(`/category/${params.id}`,{withCredentials:true});
    return res;
  };
  const {
    data: category,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });
  if (isLoading) {
    return (
      <p className="text-center text-7xl">LOADING........................</p>
    );
  }
  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }
  // console.log(category.data);

  return (
    <div className="max-w-7xl mx-auto my-4">
      <h1 className="text-center text-3xl font-bold my-8 dark:text-white">
        We have {category.data.length} books related to:
        <span className="capitalize ml-1">{params.id}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {category?.data?.map((cat) => (
          <div key={cat._id}>
            <div className="card card-compact  bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-[250px] w-full "
                  src={cat.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cat.name}</h2>
                <p>Author: {cat.author}</p>
                <p>Quantity: {cat.quantity}</p>
                <p>
                  Category: <span className="capitalize">{cat.category}</span>
                </p>
                <p className="flex">
                  Rating:
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={parseInt(cat.rating)}
                    readOnly={true}
                    className="text-pink-500"
                  />
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/book/${cat._id}`}>
                    <button className="btn btn-primary dark:text-white">
                      Check Details
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

export default BookDetails;
