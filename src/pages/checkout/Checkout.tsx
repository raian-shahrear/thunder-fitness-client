import { FormEvent, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { usePlaceOrderMutation } from "../../redux/api/orderApi";
import { clearProductCart } from "../../redux/features/productCart/productCartSlice";
import { toast } from "sonner";
import Loading from "../../utils/Loading";

const Checkout = () => {
  const navigate = useNavigate();
  const reduxDispatch = useAppDispatch();
  const { orderedProducts } = useAppSelector(
    (state: RootState) => state.cartProducts
  );
  const [placeOrder, { isLoading }] = usePlaceOrderMutation();

  const orderList =
    orderedProducts && orderedProducts.length > 0
      ? orderedProducts.map((item) => ({
          product: item.productId,
          quantity: item.quantity,
          productCost: item.quantity * item.unitPrice!,
        }))
      : [];
  // total all product cost
  const grandTotal =
    orderedProducts && orderedProducts.length > 0
      ? orderList.reduce((total, item) => {
          return total + item.productCost;
        }, 0)
      : 0;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    if (orderedProducts && orderedProducts.length > 0) {
      const isConfirmed = confirm("Are you sure to place the order?");
      if (isConfirmed) {
        const newOrder = {
          customerName: formData.get("name") as string,
          customerEmail: formData.get("email") as string,
          customerPhone: formData.get("phone") as string,
          deliveryAddress: formData.get("address") as string,
          orderedProducts: orderList,
          totalCost: grandTotal,
          paymentMethod: formData.get("payment") as string,
        };
        placeOrder(newOrder);
        navigate("/checkout-successful", { replace: true });
        reduxDispatch(clearProductCart());
        toast.success("Order has been placed.");
      }
    }
  };

  // Prevent navigating back to the checkout page
  useEffect(() => {
    if (window.history.state && window.history.state.idx > 0) {
      window.history.replaceState({}, "");
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[65vh] mb-10">
      <div className="flex justify-center items-center min-h-[65vh]">
        <form
          className="w-6/12 mx-auto p-8 shadow-lg rounded-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
            Checkout
          </h2>
          <section className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">
                Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="border py-2 px-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">
                Email <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="border py-2 px-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-semibold">
                Phone Number <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="border py-2 px-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="font-semibold">
                Delivery Address <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your delivery address"
                className="border py-2 px-2 rounded"
                required
              />
            </div>
            <div>
              <label className="font-semibold">
                Payment Method <span className="text-red-700">*</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="payment"
                  value="Cash on Delivery"
                  id="payment"
                  required
                />
                <label htmlFor="payment">Cash on Delivery</label>
              </div>
            </div>
          </section>
          <section className="mt-6">
            <div>
              <Button
                type="submit"
                variant="default"
                className="py-2 px-2 h-fit rounded"
              >
                <span className="text-lg">
                  <MdShoppingCartCheckout />
                </span>
                <span className="ml-2">Place Order</span>
              </Button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
