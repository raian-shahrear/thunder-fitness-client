import { useNavigate } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApi";
import defaultImage from "../../assets/default_image.jpg";
import Loading from "../../utils/Loading";
import { TCategory } from "../../types";

const HomeCategory = () => {
  const navigate = useNavigate();
  const { data: categoryData, isLoading } = useGetAllCategoriesQuery(undefined);

  // navigate to product page with category info for filtering
  const handleDetails = (data: TCategory) => {
    navigate(`/products`, { state: data });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {categoryData?.data?.length && (
        <section className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-10 mb-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categoryData?.data?.map((category: TCategory) => (
              <div key={category?._id}>
                <button onClick={() => handleDetails(category)}>
                  <img
                    src={category?.image ? category?.image : defaultImage}
                    alt="category"
                    className="w-full object-cover object-center rounded-md"
                  />
                  <p className="font-semibold text-lg mt-3 text-center">
                    {category?.name}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default HomeCategory;
