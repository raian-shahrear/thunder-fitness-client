import { useState } from "react";
import { Button } from "../../components/ui/button";
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoIosCart } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
} from "../../redux/api/productApi";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/productCart/productCartSlice";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { state: productId } = useLocation();
  const { data: productData, isLoading } = useGetSingleProductQuery(productId);
  const { data: productDataByCategory, isLoading: isLoadingCategoryProduct } =
    useGetProductsByCategoryQuery(productData?.data?.category?._id);
  const reduxDispatch = useAppDispatch();
  const [quantityCount, setQuantityCount] = useState(1);

  const viewCategoryProduct = productDataByCategory?.data.filter(
    (product) => product?._id !== productId
  );

  const handleDetails = (dataId: string) => {
    navigate(`/products/${dataId}`, { state: dataId });
  };

  const handleAddToCart = (data, qty: number) => {
    const orderedProduct = {
      productId: data._id,
      productName: data.name,
      unitPrice: data.price,
      quantity: qty,
    };
    reduxDispatch(addToCart(orderedProduct));
  };

  if (isLoading || isLoadingCategoryProduct) {
    return "Loading...";
  }
  return (
    <>
      <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[65vh]">
        {productData?.data ? (
          <section className="mb-20 grid md:grid-cols-2 gap-x-10 gap-y-6">
            <div>
              <img
                src={productData?.data?.image}
                alt="gym product"
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
            <div>
              <p className="font-bold text-2xl">{productData?.data?.name}</p>
              <p className="font-semibold text-sm">
                {productData?.data?.category?.name}
              </p>
              <p className="text-lg my-3">{productData?.data?.description}</p>
              <p className="font-bold text-4xl mb-4">
                $<span>{productData?.data?.price}</span>
              </p>
              <div>
                <span className="font-semibold mb-2 block">Quantity:</span>
                <div className="flex gap-2">
                  <Button
                    className="px-2 py-2 h-fit rounded"
                    onClick={() => setQuantityCount(quantityCount - 1)}
                  >
                    <TiMinus />
                  </Button>
                  <input
                    type="number"
                    name="quantity"
                    value={quantityCount}
                    className="border border-gray-300 w-12 px-2 py-1 text-sm rounded placeholder:text-black outline-none"
                  />
                  <Button
                    className="px-2 py-2 h-fit rounded"
                    onClick={() => setQuantityCount(quantityCount + 1)}
                  >
                    <TiPlus />
                  </Button>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <Button
                  className="h-fit py-2 px-2 rounded"
                  onClick={() =>
                    handleAddToCart(productData?.data, quantityCount)
                  }
                >
                  <span className="text-lg mr-2">
                    <TiPlus />
                  </span>
                  Add to cart
                </Button>
                <Link to="/cart">
                  <Button className="bg-red-300 text-gray-900 h-fit py-2 px-2 rounded transition-all duration-300 hover:bg-gray-900 hover:text-white">
                    <span className="text-lg mr-2">
                      <IoIosCart />
                    </span>
                    Visit cart
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[30vh] mb-20 flex justify-center items-center">
            <p className="font-bold text-4xl text-gray-300">No Product Found</p>
          </div>
        )}
        <section className="mb-20">
          <h2 className="text-start text-2xl font-bold text-gray-900 border-b pb-3 mb-10">
            You May Also Like
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {viewCategoryProduct?.map((product) => (
              <div key={product?._id}>
                <button onClick={() => handleDetails(product?._id)}>
                  <img
                    src={product?.image}
                    alt="product"
                    className="w-full object-cover object-center rounded-md"
                  />
                  <p className="font-semibold text-lg mt-3 text-center">
                    {product?.name}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
