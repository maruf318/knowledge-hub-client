// import { useEffect, useState } from "react";

import "../../src/App.css";
// import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const Categories = () => {
  // const [categories, setCategories] = useState([]);
  const axios = useAxios();
  const getCategories = async () => {
    const res = await axios.get("/categories");
    return res;
  };
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
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
  // useEffect(() => {
  //   fetch("categories.json")
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);
  // console.log(categories);
  return (
    <div className="max-w-7xl mx-auto min-h-screen my-10">
      <h1 className="text-5xl text-center font-bold my-10 text-black dark:text-white">
        Top Selection of Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories?.data.map((category, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[250px] w-full "
                src={category.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-2xl text-primary capitalize text-center">
                {category.category_name}
              </h2>

              <div className="card-actions flex justify-end">
                <Link to={`/category/${category.category_name}`}>
                  <button className="btn btn-secondary capitalize text-primary-content dark:text-white">
                    Explore <FiArrowRight></FiArrowRight>
                  </button>
                </Link>
                {/* <Link to={"/addproduct"}>
                  <button
                    style={{ "--clr": "#ff1867" }}
                    className="buttonBody "
                  >
                    <span>Explore</span> <i></i>
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
