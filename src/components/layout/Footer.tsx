import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 pt-6 text-white">
      <div className="container mx-auto px-4 lg:px-10 xxl:px-0 py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
          <div>
            <a
              href="/"
              aria-label="Thunder Fitness"
              title="Thunder Fitness"
              className=""
            >
              <span className="text-xl font-bold tracking-wide text-white uppercase">
                Thunder <span className="text-red-300">Fitness</span>
              </span>
            </a>
            <p className="mt-3">
              We offer best product where quality is our main concern
            </p>
          </div>
          <div>
            <p className="text-lg mb-3 font-semibold">Quick Links</p>
            <nav>
              <ul className="flex flex-col gap-y-1">
                <li>
                  <Link
                    to="/"
                    className="transition-all duration-300 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="transition-all duration-300 hover:underline"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product-management"
                    className="transition-all duration-300 hover:underline"
                  >
                    Product Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="transition-all duration-300 hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="transition-all duration-300 hover:underline"
                  >
                    My Cart
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <p className="text-lg mb-3 font-semibold">Contact Us</p>
            <div>
              <p>Email: contact@thunder.com</p>
              <p>Phone: +0193474032</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-6 mt-10">
        <p className="text-gray-400 text-sm">
          Copyright &copy; 2024, Thunder Fitness
        </p>
      </div>
    </footer>
  );
};

export default Footer;
