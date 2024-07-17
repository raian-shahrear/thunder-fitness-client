import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const HomeFeaturedProducts = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10 xxl:px-0 mb-20">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
        Our Best Sellers
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="shadow-lg rounded-tl-md rounded-tr-md">
          <div>
            <img
              src="../../../src/assets/home/categories/Strength Training/Weight Benches.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center rounded-tl-md rounded-tr-md"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Weight Benches</p>
            <p className="mt-3 mb-4">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button className="py-1 px-2 h-auto bg-gray-900 rounded">
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
        <div className="shadow-lg rounded-tl-md rounded-tr-md">
          <div>
            <img
              src="../../../src/assets/home/categories/Strength Training/Dumbbells.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center rounded-tl-md rounded-tr-md"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Dumbbells</p>
            <p className="mt-3 mb-4">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button className="py-1 px-2 h-auto bg-gray-900 rounded">
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
        <div className="shadow-lg rounded-tl-md rounded-tr-md">
          <div>
            <img
              src="../../../src/assets/home/categories/Heavy Machine/Multi-Gyms.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center rounded-tl-md rounded-tr-md"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Multi-Gyms</p>
            <p className="mt-3 mb-4">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button className="py-1 px-2 h-auto bg-gray-900 rounded">
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
        <div className="shadow-lg rounded-tl-md rounded-tr-md">
          <div>
            <img
              src="../../../src/assets/home/categories/Functional Fitness/Punching Bags.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center rounded-tl-md rounded-tr-md"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Punching Bags</p>
            <p className="mt-3 mb-4">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button className="py-1 px-2 h-auto bg-gray-900 rounded">
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
        <div className="shadow-lg rounded-tl-md rounded-tr-md">
          <div>
            <img
              src="../../../src/assets/home/categories/Cardio Equipment/Stationary Bikes.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center rounded-tl-md rounded-tr-md"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Stationary Bikes</p>
            <p className="mt-3 mb-4">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button className="py-1 px-2 h-auto bg-gray-900 rounded">
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
        <div className="shadow-lg rounded-tl-md rounded-tr-md">
          <div>
            <img
              src="../../../src/assets/home/categories/Cardio Equipment/Treadmills.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center rounded-tl-md rounded-tr-md"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Treadmills</p>
            <p className="mt-3 mb-4">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button className="py-1 px-2 h-auto bg-gray-900 rounded">
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Button className="bg-red-300 text-gray-900 h-fit py-2 px-3 rounded transition-all duration-300 hover:bg-gray-900 hover:text-white">
          <Link to="/products">Explore More</Link>
        </Button>
      </div>
    </section>
  );
};

export default HomeFeaturedProducts;
