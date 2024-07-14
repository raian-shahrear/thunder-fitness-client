import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Products from "../pages/product/Products";
import ProductManagement from "../pages/productManagement/ProductManagement";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import AboutUs from "../pages/aboutUs/AboutUs";
import CheckoutSuccessFul from "../pages/checkout/CheckoutSuccessFul";
import ProductDetails from "../pages/product/ProductDetails";
import Error from "../pages/errorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/product-management",
        element: <ProductManagement />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/checkout-successful",
        element: <CheckoutSuccessFul />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
