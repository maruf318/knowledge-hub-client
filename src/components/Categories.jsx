import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div className="max-w-7xl mx-auto min-h-screen my-10">
      <h1 className="text-5xl text-center font-bold my-10">
        8 Book categories here
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
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

              <div className="card-actions justify-end">
                <button className="btn btn-secondary capitalize text-white w-full">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
