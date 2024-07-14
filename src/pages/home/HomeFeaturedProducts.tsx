import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const HomeFeaturedProducts = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10 xxl:px-0 mb-20">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
        Featured Products
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="shadow-lg">
          <div>
            <img
              src="../../../src/assets/home/products/Barbells and Plates.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Barbells and Plates</p>
            <p className="my-3">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button>
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img
              src="../../../src/assets/home/products/Dumbbells.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Dumbbells</p>
            <p className="my-3">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button>
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img
              src="../../../src/assets/home/products/Multi-Gyms.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Multi-Gyms</p>
            <p className="my-3">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button>
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img
              src="../../../src/assets/home/products/Punching Bags.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Punching Bags</p>
            <p className="my-3">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button>
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img
              src="../../../src/assets/home/products/Stationary Bikes.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Stationary Bikes</p>
            <p className="my-3">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button>
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
        <div className="shadow-lg">
          <div>
            <img
              src="../../../src/assets/home/products/Treadmills.jpg"
              alt="featured product"
              className="w-full h-60 object-cover object-center"
            />
          </div>
          <div className="p-6">
            <p className="font-semibold text-lg">Treadmills</p>
            <p className="my-3">
              Short short short description. Short short short description.
              Short short short description.
            </p>
            <Button>
              <Link to="/">View Details</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Button variant="outline">
          <Link to="/products">Explore More</Link>
        </Button>
      </div>
    </section>
  );
};

export default HomeFeaturedProducts;
