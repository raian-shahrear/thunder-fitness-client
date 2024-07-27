import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import Select from "react-select";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useGetAllProductsQuery } from "../../redux/api/productApi";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApi";
import defaultImage from "../../assets/default_image.jpg";
import Loading from "../../utils/Loading";

const Products = () => {
  const navigate = useNavigate();
  const { state: selectedCategory } = useLocation();

  // show category for select
  const { data: categoryData, isLoading: isLoadingCategory } =
    useGetAllCategoriesQuery(undefined);
  const categoryOptions = categoryData?.data?.map((option) => ({
    value: option?._id,
    label: option?.name,
  }));

  // search/filter
  const [search, setSearch] = useState("");
  const [filterByCategory, setFilterByCategory] = useState([
    selectedCategory && {
      value: selectedCategory?._id,
      label: selectedCategory?.name,
    },
  ]);
  const [filterByMinPrice, setFilterByMinPrice] = useState("");
  const [filterByMaxPrice, setFilterByMaxPrice] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");

  const filterObj: {
    searchTerm?: string;
    categories?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: string;
  } = {};
  if (search) {
    filterObj.searchTerm = search;
  }
  if (filterByCategory.length && filterByCategory[0] !== null) {
    filterObj.categories = filterByCategory.map((val) => val.value).join(",");
  }
  if (filterByMinPrice) {
    filterObj.minPrice = parseFloat(filterByMinPrice);
  }
  if (filterByMaxPrice) {
    filterObj.maxPrice = parseFloat(filterByMaxPrice);
  }
  if (sortByPrice) {
    filterObj.sort = sortByPrice;
  }
  const { data: productData, isLoading } = useGetAllProductsQuery(filterObj);

  const handleAllFilterToReset = () => {
    setSearch("");
    setFilterByCategory([]);
    setFilterByMinPrice("");
    setFilterByMaxPrice("");
    setSortByPrice("");
  };

  const handleDetails = (dataId: string) => {
    navigate(`/products/${dataId}`, { state: dataId });
  };

  if (isLoading || isLoadingCategory) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[65vh]">
      <section className="mb-20">
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_96px] gap-2">
          <div>
            <input
              type="text"
              name="search"
              id="search"
              className="border border-gray-300 w-full h-fit px-2 py-2 text-sm rounded-sm placeholder:text-black outline-none"
              placeholder="Search by name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              name="minPrice"
              className="border border-gray-300 w-full h-fit px-2 py-2 text-sm rounded-sm placeholder:text-black outline-none"
              placeholder="Min Price"
              onChange={(e) => setFilterByMinPrice(e.target.value)}
            />
            <input
              type="number"
              name="maxPrice"
              className="border border-gray-300 w-full h-fit px-2 py-2 text-sm rounded-sm placeholder:text-black outline-none"
              placeholder="Max Price"
              onChange={(e) => setFilterByMaxPrice(e.target.value)}
            />
          </div>
          <div>
            <select
              name="sorting"
              id="sorting"
              className="border border-gray-300 w-full px-2 py-2 text-sm rounded-sm"
              onChange={(e) => setSortByPrice(e.target.value)}
            >
              <option value="">Sort by price</option>
              <option value="-price">High Price</option>
              <option value="price">Low Price</option>
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
            className="py-2 w-24 h-fit rounded"
            onClick={handleAllFilterToReset}
          >
            <FaArrowRotateLeft /> <span className="ml-2">Reset</span>
          </Button>
        </form>
      </section>
      {productData?.data?.length ? (
        <section className="mb-20">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {productData?.success &&
              productData?.data?.map((product) => (
                <div key={product?._id} className="grid grid-cols-2 gap-6">
                  <div>
                    <img
                      src={product?.image ? product?.image : defaultImage}
                      alt="gym product"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-xl">{product?.name}</p>
                    <p className="font-semibold text-sm mb-2">
                      {product?.category?.name}
                    </p>
                    <p className="font-semibold text-3xl mb-4">
                      $<span>{product?.price}</span>
                    </p>
                    <Button
                      onClick={() => handleDetails(product?._id)}
                      className="py-1 px-2 h-auto bg-gray-900 rounded"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ) : (
        <div className="flex justify-center items-center h-[30vh] mb-20">
          <p className="font-bold text-4xl text-gray-300">No Product Found</p>
        </div>
      )}
    </div>
  );
};

export default Products;
