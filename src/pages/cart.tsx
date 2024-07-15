// import backButton from "../assets/icon/back-button.png";
import trash from "../assets/icon/trash.png";
import Button from "../components/button";
import { Link } from "react-router-dom";
import Header from "../components/header";
import BackButton from "../components/backButton";
import { Product } from "./products";
import { useEffect, useState } from "react";

interface CartItem extends Product {
  quantity: number;
}
const CartComponent = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCost] = useState(2000);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      const total = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.current_price[0].NGN[0],
        0
      );
      setTotalPrice(total);
    };
    calculateTotal();
  }, [cartItems]);

  const handleRemoveItem = (productId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedCart = cartItems.filter((item: any) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedCart = cartItems.map((item: any) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Header />
      <div className="w-[90%] mx-auto mb-5 font-semibold min-h-[50vh] lg:min-h-[60vh] lg:flex">
        <div className="md:flex items-start lg:w-[90%] justify-between">
          {/* cart section */}
          <div className="md:w-[50%] lg:w-[80%] items-center justify-between">
            {/* cart header */}
            <div className="flex items-center justify-between">
              {/* cart icon */}
              <BackButton context="Cart" />
              <p>{cartItems.length} item(s)</p>
            </div>
            {/* Desktop Only */}
            <div className="hidden lg:flex items-center justify-between mt-10 -mb-5 text-[#1b1c1d80] text-base xl:text-2xl">
              <p className="mr-12 flex items-center w-[40%]">
                <input type="checkbox" className="mr-2 w-5 h-5 rounded-md" />
                PRODUCTS
              </p>
              <p>QUANTITY</p>
              <p>PRICE</p>
              <p>REMOVE</p>
            </div>
            <div className="mt-5">
              {cartItems.length === 0 ? (
                <div className="w-full min-h-[40vh] flex items-center justify-evenly flex-col">
                  <p>Your cart is empty</p>
                  <Link to="/">
                    <Button content="Back to shop" width="w-full" />
                  </Link>
                </div>
              ) : (
                <div>
                  {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                  {cartItems.map((item: any) => (
                    <div
                      key={item.id}
                      className="flex items-center lg:items-start justify-between mt-5 border border-timbuGrey rounded-md p-2"
                    >
                      <div className="flex items-center justify-center lg:w-full lg:h-full">
                        <div>
                          <img
                            src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`}
                            alt="product image"
                            className="w-[250px]"
                          />
                        </div>
                        <div className="lg:hidden">
                          <div className="mb-3">
                            <p>{item.name}</p>
                            <p className="text-timbuRed font-semibold mt-1">
                              N{item.current_price[0].NGN[0]}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity === 1}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                        {/* desktop */}
                        <div className="hidden lg:flex items-start justify-between h-full w-full pr-3">
                          <p className="w-1/3">{item.name}</p>
                          <div className="flex items-center">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity === 1}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                          <p className="text-timbuRed font-semibold">
                            N{item.current_price[0].NGN[0]}
                          </p>
                          <img
                            src={trash}
                            alt="delete icon"
                            className="hidden lg:block"
                            onClick={() => handleRemoveItem(item.id)}
                          />
                        </div>
                        <button onClick={() => handleRemoveItem(item.id)}>
                          <img
                            src={trash}
                            alt="delete icon"
                            className="scale-150 lg:hidden"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-2 border-timbuGrey rounded-md mt-14 md:mt-0 p-[10px] h-fit">
          <h2 className="rounded-md text-center bg-timbuBlue font-semibold text-base p-3 mb-7 lg:text-2xl">
            Order Summary
          </h2>
          <form className="flex items-center justify-evenly mb-3">
            <label htmlFor="promoCode">
              Enter promo code
              <br />
              <input
                type="text"
                id="promoCode"
                className="p-3 border-2 border-timbuGrey rounded-md max-[344px]:w-40  max-[320px]:w-44 w-56 mt-2"
                placeholder="Promo code"
              />
            </label>
            <div className="self-end">
              <Button
                content="Apply"
                width="w-fit"
                padding="py-4 px-5 max-[375px]:px-5"
              />
            </div>
          </form>
          <div className="font-semibold border-t border-timbuGrey pt-5 my-7">
            <div className="flex items-center justify-between w-full pt-2">
              <p>Subtotal</p>
              <p>N{totalPrice}</p>
            </div>
            <div className="flex items-center justify-between w-full pt-2">
              <p>Shipping cost</p>
              <p>N2000</p>
            </div>
            <div className="flex items-center justify-between w-full pt-2">
              <p>Discount</p>
              <p>N/A</p>
            </div>
            <div className="flex items-center justify-between w-full pt-2">
              <p>Total</p>
              <p>{totalPrice + shippingCost}</p>
            </div>
          </div>
          <Link to="/checkout">
            <Button
              content="Checkout"
              width="w-full"
              padding="py-2 px-[30px]"
            />
          </Link>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default CartComponent;
