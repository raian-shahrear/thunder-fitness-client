import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
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
              Experience top-tier fitness equipment where quality and innovation
              meet to elevate your workout.
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
              <p className="flex items-center gap-2">
                <span>
                  <MdOutlineMail />
                </span>
                <span>contact@thunder.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <HiOutlinePhone />
                </span>
                <span>+01293474032</span>
              </p>
              <div className="mt-4">
                <p className="font-semibold mb-2">Social</p>
                <div className="flex items-center gap-3">
                  <a
                    href="/"
                    target="_blank"
                    className="text-white transition-all duration-300 hover:text-blue-600"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="text-white transition-all duration-300 hover:text-fuchsia-600"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="text-white transition-all duration-300 hover:text-red-600"
                  >
                    <FaPinterestP />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="text-white transition-all duration-300 hover:text-violet-600"
                  >
                    <FaTiktok />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="text-white transition-all duration-300 hover:text-cyan-600"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
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
