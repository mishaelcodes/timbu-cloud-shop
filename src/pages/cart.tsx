import backButton from "../assets/icon/back-button.png";
import trash from "../assets/icon/trash.png";
import plus from "../assets/icon/plus.png";
import minus from "../assets/icon/minus.png";
import abMug from "../assets/images/products/abMugSmall.png";
import Button from "../components/button";
import { useState } from "react";
const CartComponent = () => {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div className="w-[90%] mx-auto mb-5 font-semibold min-h-[50vh] lg:min-h-[60vh]">
      <div className="md:flex items-start justify-between mt-5">
        {/* cart section */}
        <div className="md:w-[45%] lg:w-[60%] items-center justify-between">
          {/* cart header */}
          <div className="flex items-center justify-between">
            {/* cart icon */}
            <div className="flex items-center justify-between">
              <img src={backButton} alt="" /> <p>Cart</p>
            </div>
            <p>1 item</p>
          </div>
          {/* cart order */}
          {/* desktop only */}
          <div className="flex items-center justify-between mt-10 -mb-5 text-[#1b1c1d80]">
            <p>
              <input type="checkbox" />
              PRODUCTS
            </p>
            <p>QUANTITY</p>
            <p>Price</p>
            <p>Remove</p>
          </div>
          <div className="lg:h-28 flex items-center lg:items-start justify-between mt-10 border-t border-b border-timbuGrey rounded-md p-2">
            <div className="flex items-center justify-center lg:w-full lg:h-full">
              <div className="mr-1">
                <img src={abMug} alt="product ab mug" />
              </div>
              {/* mobile */}
              <div className="lg:hidden">
                <div>
                  <p>Classic AB Mug</p>
                  <p className="text-timbuRed font-semibold">N7499.99</p>
                </div>
                <div className="flex items-center justify-evenly text-center border-2 border-timbuGrey rounded-md mt-4">
                  <img
                    src={minus}
                    alt=""
                    onClick={decrease}
                    className="active:scale-90 transition-all"
                  />
                  <p>{count}</p>
                  <img
                    src={plus}
                    alt=""
                    onClick={increase}
                    className="active:scale-90 transition-all"
                  />
                </div>
              </div>
              {/* desktop */}
              <div className="hidden lg:flex items-start justify-between h-full w-full pr-3">
                <p>Classic AB Mug</p>
                <p className="text-timbuRed font-semibold">N7499.99</p>
                <div className="flex items-center justify-evenly text-center border-2 border-timbuGrey rounded-md w-1/4">
                  <img
                    src={minus}
                    alt=""
                    onClick={decrease}
                    className="active:scale-90 transition-all"
                  />
                  <p>{count}</p>
                  <img
                    src={plus}
                    alt=""
                    onClick={increase}
                    className="active:scale-90 transition-all"
                  />
                </div>
                <img
                  src={trash}
                  alt="delete icon"
                  className="hidden lg:block"
                />
              </div>
            </div>
            <img src={trash} alt="delete icon" className="lg:hidden" />
          </div>
        </div>
        <div className="border-2 border-timbuGrey rounded-md mt-14 md:mt-0 p-[10px]">
          <h2 className="rounded-md text-center bg-timbuBlue font-semibold text-base p-3 mb-7">
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
                padding="py-4 px-7 max-[375px]:px-6"
              />
            </div>
          </form>
          <div className="font-semibold border-t border-timbuGrey pt-5 my-7">
            <div className="flex items-center justify-between w-full pt-2">
              <p>Subtotal</p>
              <p>N7,999.99</p>
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
              <p>N9,999.99</p>
            </div>
          </div>
          <Button content="Checkout" width="w-full" padding="py-2 px-[30px]" />
        </div>
      </div>
    </div>
  );
};
export default CartComponent;
