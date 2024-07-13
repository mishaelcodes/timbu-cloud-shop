// import backButton from "../assets/icon/back-button.png";
import trash from "../assets/icon/trash.png";
import plus from "../assets/icon/plus.png";
import minus from "../assets/icon/minus.png";
import abMug from "../assets/images/products/abMugSmall.png";
import Button from "../components/button";
import { Link } from "react-router-dom";
import useCounter from "../hooks/counter-hook";
import Header from "../components/header";
import BackButton from "../components/backButton";
const CartComponent = () => {
  const { increase, decrease, count } = useCounter();
  return (
    <>
      <Header />
      <div className="w-[90%] mx-auto mb-5 font-semibold min-h-[50vh] lg:min-h-[60vh]">
        <div className="md:flex items-start justify-between mt-5">
          {/* cart section */}
          <div className="md:w-[45%] lg:w-[60%] items-center justify-between">
            {/* cart header */}
            <div className="flex items-center justify-between">
              {/* cart icon */}
              <BackButton context="Cart"/>
              <p>1 item</p>
            </div>
            {/* cart order */}
            {/* desktop only */}
            <div className="hidden lg:flex items-center justify-between mt-10 -mb-5 text-[#1b1c1d80] text-base xl:text-2xl">
              <p className="mr-12 flex items-center">
                <input type="checkbox" className="mr-2 w-5 h-5 rounded-md" />
                PRODUCTS
              </p>
              <p className="ml-12">QUANTITY</p>
              <p className="xl:ml-10">PRICE</p>
              <p>REMOVE</p>
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
                      className="active:scale-75 transition-all"
                    />
                    <p>{count}</p>
                    <img
                      src={plus}
                      alt=""
                      onClick={increase}
                      className="active:scale-75 transition-all"
                    />
                  </div>
                </div>
                {/* desktop */}
                <div className="hidden lg:flex items-start justify-between h-full w-full pr-3">
                  <p>Classic AB Mug</p>
                  <div className="flex items-center justify-evenly text-center border-2 border-timbuGrey rounded-md w-1/5">
                    <img
                      src={minus}
                      alt=""
                      onClick={decrease}
                      className="active:scale-75 transition-all"
                    />
                    <p>{count}</p>
                    <img
                      src={plus}
                      alt=""
                      onClick={increase}
                      className="active:scale-75 transition-all"
                    />
                  </div>
                  <p className="text-timbuRed font-semibold">N7499.99</p>
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
            <Link to="/checkout">
              <Button
                content="Checkout"
                width="w-full"
                padding="py-2 px-[30px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartComponent;
