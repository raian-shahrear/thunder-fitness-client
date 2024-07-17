import { CgGym } from "react-icons/cg";

const HomeBenefits = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10 xxl:px-0 mb-20">
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
        <div>
          <img
            src="../../../src/assets/home/benefits.jpg"
            alt="benefits"
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Our Product
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2">
              <CgGym className="text-lg w-6 mt-1" />{" "}
              <span>
                <span className="font-semibold">Top-Quality Materials</span>:
                Crafted from premium materials for durability and long-lasting
                performance.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CgGym className="text-lg w-6 mt-1" />{" "}
              <span>
                <span className="font-semibold">Wide Range of Products</span>:
                Extensive selection to meet all your fitness needs, from
                beginners to advanced athletes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CgGym className="text-lg w-6 mt-1" />{" "}
              <span>
                <span className="font-semibold">Expert Craftsmanship</span>:
                Precision-engineered for optimal functionality and reliability.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CgGym className="text-lg w-6 mt-1" />{" "}
              <span>
                <span className="font-semibold">Competitive Pricing</span>:
                High-quality equipment at affordable prices to fit your budget.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CgGym className="text-lg w-6 mt-1" />{" "}
              <span>
                <span className="font-semibold">
                  Excellent Customer Support
                </span>
                : Dedicated support team ready to assist you with any inquiries
                or issues.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CgGym className="text-lg w-6 mt-1" />{" "}
              <span>
                <span className="font-semibold">Trusted Brands</span>: Featuring
                products from leading and reputable brands in the fitness
                industry.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CgGym className="text-lg w-6 mt-1" />{" "}
              <span>
                <span className="font-semibold">Warranty and Guarantees</span>:
                Comprehensive warranties and satisfaction guarantees to ensure
                peace of mind.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeBenefits;
