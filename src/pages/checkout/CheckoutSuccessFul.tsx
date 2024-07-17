import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const CheckoutSuccessFul = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[65vh] mb-10">
      <div className="flex justify-center items-center min-h-[65vh]">
        <div className="w-6/12 mx-auto p-8 shadow-lg rounded-md text-center bg-gray-900 text-white">
          <h2 className="text-2xl font-bold mb-4">Congratulation!</h2>
          <p className="text-lg font-semibold">Order placed successfully.</p>
          <div className="mt-10">
            <Link to="/">
              <Button className="bg-red-300 text-gray-900 h-fit py-2 px-2 rounded transition-all duration-300 hover:bg-red-300 hover:text-gray-900">
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessFul;
