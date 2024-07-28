import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useGetAllProductsQuery } from "../../redux/api/productApi";
import { FaArrowRight } from "react-icons/fa6";
import defaultImage from "../../assets/default_image.jpg";
import Loading from "../../utils/Loading";
import { TProduct } from "../../types";

const HomeFeaturedProducts = () => {
  const navigate = useNavigate();
  const { data: productData, isLoading } = useGetAllProductsQuery(undefined);
  // create an array with the featured products 
  const featuredProductData = productData?.data.filter(
    (product: TProduct) => product.isFeaturedProduct === true
  );

  // navigate to product details page
  const handleDetails = (dataId: string) => {
    navigate(`/products/${dataId}`, { state: dataId });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {featuredProductData?.length && (
        <section
          className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-10 mb-10"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
            Our Best Sellers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProductData.map((product: TProduct) => (
              <div
                key={product?._id}
                className="shadow-lg rounded-tl-md rounded-tr-md"
              >
                <div>
                  <img
                    src={product?.image ? product?.image : defaultImage}
                    alt="featured product"
                    className="w-full h-60 object-cover object-center rounded-tl-md rounded-tr-md"
                  />
                </div>
                <div className="p-6">
                  <p className="font-semibold text-lg">{product?.name}</p>
                  <p className="mt-3 mb-4">
                    {product?.description.length > 80
                      ? product?.description.slice(0, 80) + "..."
                      : product?.description}
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
          <div className="mt-10 flex justify-center">
            <Link to="/products">
              <Button className="bg-red-300 text-gray-900 h-fit py-2 px-3 rounded transition-all duration-300 hover:bg-gray-900 hover:text-white">
                <span className="mr-2">Explore More</span> <FaArrowRight />
              </Button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default HomeFeaturedProducts;
