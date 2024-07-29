import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { useGetAllProductsQuery } from "../../redux/api/productApi";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApi";
import defaultImage from "../../assets/default_image.jpg";
import Loading from "../../utils/Loading";
import { TCategory, TCategoryOption, TProduct } from "../../types";
import ProductsFilter from "./ProductsFilter";
import { productFilterFun } from "./product.utils";
import useDebounce from "../../hooks/useDebounce";

const Products = () => {
  const navigate = useNavigate();
  // get category info from diff components for filtering
  const { state: selectedCategory } = useLocation();

  // get all categories for select
  const { data: categoryData, isLoading: isLoadingCategory } =
    useGetAllCategoriesQuery(undefined);
  // create category array as per react-select
  const categoryOptions: TCategoryOption[] = categoryData?.data?.map(
    (option: TCategory) => ({
      value: option?._id,
      label: option?.name,
    })
  );

  // search/filter
  const [search, setSearch] = useState("");
  const [filterByCategory, setFilterByCategory] = useState<TCategoryOption[]>(
    selectedCategory
      ? [{ value: selectedCategory?._id, label: selectedCategory?.name }]
      : []
  );
  const [filterByMinPrice, setFilterByMinPrice] = useState("");
  const [filterByMaxPrice, setFilterByMaxPrice] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");

  // Use the debounce hook with a delay of 300ms
  const debouncedSearch = useDebounce(search, 300);

  // get filter data from the utility
  const filterObj = productFilterFun(
    debouncedSearch,
    filterByCategory,
    filterByMinPrice,
    filterByMaxPrice,
    sortByPrice
  );
  // get all product data by using filter data
  const { data: productData, isLoading } = useGetAllProductsQuery(filterObj);

  // navigate to product details page
  const handleDetails = (dataId: string) => {
    navigate(`/products/${dataId}`, { state: dataId });
  };

  if (isLoading || isLoadingCategory) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[65vh]">
      <ProductsFilter
        categoryOptions={categoryOptions}
        setSearch={setSearch}
        setFilterByCategory={setFilterByCategory}
        setFilterByMinPrice={setFilterByMinPrice}
        setFilterByMaxPrice={setFilterByMaxPrice}
        setSortByPrice={setSortByPrice}
        filterByCategory={filterByCategory}
      />
      {productData?.data?.length ? (
        <section className="pt-5 mb-10">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {productData?.success &&
              productData?.data?.map((product: TProduct) => (
                <div key={product?._id} className="grid grid-cols-2 gap-6">
                  <div>
                    <img
                      src={product?.image ? product?.image : defaultImage}
                      alt="gym product"
                      className="w-full h-full object-cover object-center rounded-md"
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
