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
      <li className="hidden lg:block">
        <Link
          to="/cart"
          aria-label="Cart"
          title="Cart"
          className="font-medium tracking-wide text-red-300 transition-all duration-300 hover:text-secondary relative"
        >
          <span className="text-xl">
            <IoIosCart />
          </span>
          <span className="bg-red-700 w-[19px] h-[19px] text-[9px] text-white flex justify-center items-center rounded-full absolute top-[-10px] right-[-8px]">99+</span>
        </Link>
      </li>
    </>
  );
};

export default NavbarItems;
