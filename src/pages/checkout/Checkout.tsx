import { FormEvent } from "react";
import { Button } from "../../components/ui/button";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target;

    const newOrder = {
      customerName: form.name.value,
      customerEmail: form.email.value,
      customerPhone: form.phone.value,
      deliveryAddress: form.address.value,
      orderedProducts: [
        {
          product: "",
          quantity: 5,
        },
      ],
      paid: true,
      paymentMethod: form.payment.value,
    };

    console.log(newOrder);
    navigate("/checkout-successful");
  };
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
