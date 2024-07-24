import { useNavigate } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApi";

const HomeCategory = () => {
  const navigate = useNavigate();
  const { data: categoryData, isLoading } = useGetAllCategoriesQuery(undefined);

  const handleDetails = (data) => {
    navigate(`/products`, { state: data });
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    <>
      {categoryData?.data?.length && (
        <section className="container mx-auto px-4 lg:px-10 xxl:px-0 mb-20">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categoryData?.data?.map((category) => (
              <div key={category?._id}>
                <button onClick={() => handleDetails(category)}>
                  <img
                    src={category?.image}
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
