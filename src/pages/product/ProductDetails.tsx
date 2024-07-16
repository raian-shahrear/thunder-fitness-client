import { useState } from "react";
import { Button } from "../../components/ui/button";
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoIosCart } from "react-icons/io";

const ProductDetails = () => {
  const [quantityCount, setQuantityCount] = useState(0);
  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[65vh]">
      <section className="mb-10 grid md:grid-cols-2 gap-x-10 gap-y-6">
        <div>
          <img
            src="../../../src/assets/home/categories/Cardio Equipment/Ellipticals.jpg"
            alt="gym product"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div>
          <p className="font-bold text-2xl">Ellipticals</p>
          <p className="font-semibold text-sm">Cardio Equipment</p>
          <p className="text-lg my-3">
            dvklsdj ailsdhauifhdsa sdfbdfszbfzdsvb r fdvbgafd gf fdg fdsgfbdes
            db dfvzcbdfbd tjdykmxdfgf dfjhsrghbzd gjnsxfd gasdf dfghefhbaefgwae
            fgvbag fgafdsbazfvgb gaefgvbasgv.
          </p>
          <p className="font-bold text-4xl mb-4">
            $ <span>400</span>
          </p>
          <div>
            <span className="font-semibold mb-2 block">Quantity:</span>
            <div className="flex gap-2">
              <Button
                className="px-2 py-2 h-fit"
                onClick={() => setQuantityCount(quantityCount - 1)}
              >
                <TiMinus />
              </Button>
              <input
                type="number"
                name="quantity"
                value={quantityCount}
                className="border border-gray-300 w-12 px-2 py-1 text-sm rounded-sm placeholder:text-black outline-none"
              />
              <Button
                className="px-2 py-2 h-fit"
                onClick={() => setQuantityCount(quantityCount + 1)}
              >
                <TiPlus />
              </Button>
            </div>
          </div>
          <div className="mt-8">
            <Button>
              <span className="text-xl mr-2">
                <IoIosCart />
              </span>
              Add to cart
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
