import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import Select from "react-select";
import { FaArrowRotateLeft } from "react-icons/fa6";

const categoryOptions = [
  { value: "Cardio Equipment", label: "Cardio Equipment" },
  { value: "Functional Fitness", label: "Functional Fitness" },
  { value: "Heavy Machine", label: "Heavy Machine" },
  { value: "Strength Training", label: "Strength Training" },
  { value: "Storage Solutions", label: "Storage Solutions" },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [filterByCategory, setFilterByCategory] = useState([
    categoryOptions[2],
    categoryOptions[3],
  ]);
  const [filterByPrice, setFilterByPrice] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  console.log({ search, filterByCategory, filterByPrice, sortByPrice });

  const handleAllFilterToReset = () => {
    setSearch("");
    setFilterByCategory([]);
    setFilterByPrice("");
    setSortByPrice("");
  };

  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[65vh]">
      <section className="mb-20">
        <form className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_96px] gap-2">
          <div>
            <input
              type="text"
              name="search"
              id="search"
              className="border border-gray-300 w-full px-2 py-2 text-sm rounded-sm placeholder:text-black outline-none"
              placeholder="Search by name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <select
              name="price-range"
              id="price-range"
              className="border border-gray-300 w-full px-2 py-2 text-sm rounded-sm"
              onChange={(e) => setFilterByPrice(e.target.value)}
            >
              <option value="">Select price range</option>
              <option value="100">Below 100</option>
              <option value="101-300">101 to 300</option>
              <option value="301-500">301 to 500</option>
              <option value="501">Above 500</option>
            </select>
          </div>
          <div>
            <select
              name="sorting"
              id="sorting"
              className="border border-gray-300 w-full px-2 py-2 text-sm rounded-sm"
              onChange={(e) => setSortByPrice(e.target.value)}
            >
              <option value="">Sort by price</option>
              <option value="price">Top Price</option>
              <option value="-price">Below Price</option>
            </select>
          </div>
          <div>
            <Select
              value={filterByCategory}
              isMulti
              name="categories"
              options={categoryOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select categories"
              onChange={(selectedOptions) =>
                setFilterByCategory(selectedOptions)
              }
            />
          </div>
          <Button
            type="reset"
            className="py-2jkjhg h-auto w-24 h-fit rounded-sm"
            onClick={handleAllFilterToReset}
          >
            <FaArrowRotateLeft /> <span className="ml-2">Reset</span>
          </Button>
        </form>
      </section>
      <section className="mb-20">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <img
                src="../../../src/assets/home/categories/Cardio Equipment/Ellipticals.jpg"
                alt="gym product"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <p className="font-semibold text-xl">Ellipticals</p>
              <p className="font-semibold text-sm mb-2">Cardio Equipment</p>
              <p className="font-semibold text-3xl mb-4">
                $ <span>400</span>
              </p>
              <Button className="py-1 px-2 h-auto bg-gray-900">
                <Link to="/products/1">View Details</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <img
                src="../../../src/assets/home/categories/Cardio Equipment/Stationary Bikes.jpg"
                alt="gym product"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <p className="font-semibold text-xl">Stationary Bikes</p>
              <p className="font-semibold text-sm mb-2">Cardio Equipment</p>
              <p className="font-semibold text-3xl mb-4">
                $ <span>360</span>
              </p>
              <Button className="py-1 px-2 h-auto bg-gray-900">
                <Link to="/products/1">View Details</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <img
                src="../../../src/assets/home/categories/Functional Fitness/Punching Bags.jpg"
                alt="gym product"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <p className="font-semibold text-xl">Punching Bags</p>
              <p className="font-semibold text-sm mb-2">Functional Fitness</p>
              <p className="font-semibold text-3xl mb-4">
                $ <span>120</span>
              </p>
              <Button className="py-1 px-2 h-auto bg-gray-900">
                <Link to="/products/1">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
