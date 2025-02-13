import { TiMinus, TiPlus } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  removeSingleProduct,
  updateQuantity,
} from "../../redux/features/productCart/productCartSlice";
import { toast } from "sonner";
import { useGetAllProductsQuery } from "../../redux/api/productApi";
import Loading from "../../utils/Loading";
import { getProductStock } from "./cart.utils";

const Cart = () => {
  const navigate = useNavigate();
  const reduxDispatch = useAppDispatch();
  const { orderedProducts: productList } = useAppSelector(
    (state: RootState) => state.cartProducts
  );
  const [quantities, setQuantities] = useState(
    productList.map((product) => product.quantity)
  );
  const { data: productData, isLoading } = useGetAllProductsQuery(undefined);

  // update quantity
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const availableStock = getProductStock(productId, productData?.data);
    if (newQuantity < 1 || newQuantity > availableStock) return; // Prevent negative or overstock quantities
    const newQuantities = productList.map((product, idx) => {
      if (product.productId === productId) {
        return newQuantity;
      }
      return quantities[idx];
    });
    setQuantities(newQuantities);
    reduxDispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  // total all product cost
  const grandTotal = productList.reduce((total, product, idx) => {
    return total + quantities[idx] * product.unitPrice!;
  }, 0);

  // delete ordered product
  const handleDeleteItem = (itemId: string) => {
    const isConfirmed = confirm("Are you sure to delete?");
    if (isConfirmed) {
      reduxDispatch(removeSingleProduct(itemId));
      toast.warning("Product has been deleted!");
    }
  };

  // navigate to checkout
  const handleCheckout = () => {
    const isConfirmed = confirm("Are you sure to checkout?");
    if (isConfirmed) {
      navigate("/checkout");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[65vh] relative">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[65vh] mb-10">
      {productList?.length ? (
        <div>
          <section className="mb-6">
            <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
              Product Cart
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">SL</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="">Unit Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Subtotal</TableHead>
                  <TableHead className="w-[100px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productList &&
                  productList.map((product, idx) => (
                    <TableRow key={product.productId}>
                      <TableCell className="font-medium">{idx + 1}</TableCell>
                      <TableCell>{product.productName}</TableCell>
                      <TableCell>${product.unitPrice!.toFixed(2)}</TableCell>
                      <TableCell className="">
                        <div className="flex gap-2">
                          <Button
                            className="px-1 py-2 h-fit rounded"
                            onClick={() =>
                              handleQuantityChange(
                                product.productId,
                                quantities[idx] - 1
                              )
                            }
                            disabled={quantities[idx] <= 1}
                          >
                            <TiMinus />
                          </Button>
                          <input
                            type="number"
                            name="quantity"
                            value={quantities[idx]}
                            className="border border-gray-300 w-12 px-2 py-1 text-sm rounded-sm placeholder:text-black outline-none"
                            onChange={(e) =>
                              handleQuantityChange(
                                product.productId,
                                parseInt(e.target.value, 10)
                              )
                            }
                          />
                          <Button
                            className="px-1 py-2 h-fit rounded"
                            onClick={() =>
                              handleQuantityChange(
                                product.productId,
                                quantities[idx] + 1
                              )
                            }
                            disabled={
                              quantities[idx] >=
                              getProductStock(
                                product.productId,
                                productData?.data
                              )
                            }
                          >
                            <TiPlus />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="">
                        ${(quantities[idx] * product.unitPrice!).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <div>
                          <Button
                            className="px-1 py-2 h-fit bg-red-700 rounded"
                            onClick={() => handleDeleteItem(product.productId)}
                          >
                            <RiDeleteBin5Line />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4} className="text-right">
                    Grand Total:
                  </TableCell>
                  <TableCell colSpan={2}>${grandTotal.toFixed(2)}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </section>
          <div className="flex justify-center">
            <Button
              className="bg-red-300 text-gray-900 h-fit py-2 px-3 rounded transition-all duration-300 hover:bg-gray-900 hover:text-white"
              onClick={handleCheckout}
            >
              <span className="mr-2">Checkout</span> <FaArrowRight />
            </Button>
          </div>
        </div>
      ) : (
        <div className="min-h-[30vh] mb-20 flex flex-col gap-10 justify-center items-center">
          <p className="font-bold text-4xl text-gray-300">Cart Is Empty!</p>
          <Link to="/products">
            <Button className="py-2 px-2 h-fit">Visit Our Products</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
