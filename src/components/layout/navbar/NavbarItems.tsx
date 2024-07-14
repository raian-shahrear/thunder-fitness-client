import { IoIosCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const NavbarItems = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          aria-label="Home"
          title="Home"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-gray-900 lg:text-white transition-all duration-300 lg:hover:text-white"
              : "font-medium tracking-wide text-gray-500 lg:text-gray-400 transition-all duration-300 lg:hover:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          aria-label="Products"
          title="Products"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-gray-900 lg:text-white transition-all duration-300 lg:hover:text-white"
              : "font-medium tracking-wide text-gray-500 lg:text-gray-400 transition-all duration-300 lg:hover:text-white"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/product-management"
          aria-label="Product Management"
          title="Product Management"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-gray-900 lg:text-white transition-all duration-300 lg:hover:text-white"
              : "font-medium tracking-wide text-gray-500 lg:text-gray-400 transition-all duration-300 lg:hover:text-white"
          }
        >
          Product Management
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          aria-label="About us"
          title="About us"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide text-gray-900 lg:text-white transition-all duration-300 lg:hover:text-white"
              : "font-medium tracking-wide text-gray-500 lg:text-gray-400 transition-all duration-300 lg:hover:text-white"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <Link
          to="/cart"
          aria-label="Cart"
          title="Cart"
          className="font-medium tracking-wide text-red-700 lg:text-red-300 transition-all duration-300 hover:text-secondary"
        >
          <span className="text-xl">
            <IoIosCart />
          </span>
        </Link>
      </li>
    </>
  );
};

export default NavbarItems;
