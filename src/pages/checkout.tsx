import checkedCircle from "../assets/icon/check-circle.png";
import radioMarked from "../assets/icon/radiobox-marked.png";
import radioDisabled from "../assets/icon/radiobox-marked-disabled.png";
import backButton from "../assets/icon/back-button.png";
import paypal from "../assets/icon/paypal.png";
import masterCard from "../assets/icon/mastercard.png";
import visa from "../assets/icon/visa.png";
import Button from "../components/button";
import abMug from "../assets/images/products/abMugSmall.png";

const Checkout = () => {
  const dateInputFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // Remove any non-numeric characters
    input = input.replace(/\D/g, '');

    // Add the slash after the first two digits
    if (input.length >= 2) {
        input = input.slice(0, 2) + '/' + input.slice(2);
    }

    // Limit the length to 5 characters (MM/YY)
    if (input.length > 5) {
        input = input.slice(0, 5);
    }

    e.target.value = input;
  }
  return (
    <>
      <div className="max-w-screen flex items-center justify-between lg:justify-center p-3 bg-timbuBlack text-timbuWhite text-[10px]">
        <div className="flex items-center justfy-center flex-col">
          <img src={checkedCircle} alt="" />
          <p>Order Summary</p>
        </div>
        <div className="w-[20%]">
          <hr className="h-px border-0 bg-timbuGrey w-full" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src={radioMarked} alt="" />
          <p>Payment</p>
        </div>
        <div className="w-[20%]">
          <hr className="h-px border-0 bg-timbuGrey w-full" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src={radioDisabled} alt="" />
          <p>Confirmation</p>
        </div>
      </div>
      <p className="font-semiboold flex text-base mt-5 ml-3 lg:text-2xl">
        <img src={backButton} alt="" className="mr-2" />
        Checkout
      </p>
      <div className="flex items-start justify-center md:justify-around">
        <div>
          <div className="w-[90%] mx-auto flex items-start justify-start flex-col mt-7 border-b border-b-timbuGrey lg:border-0 pb-10 mb-10">
            <h3 className="font-semibold text-base">Payment Method</h3>
            <p className="text-sm">Choose your preferred payment method</p>
            <form className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input type="radio" name="payment-type" id=" visa" checked />
                <img src={visa} alt="" className="ml-3" />
              </div>
              <div className="flex items-center mx-10">
                <input type="radio" name="payment-type" id="mastercard" />
                <img src={masterCard} alt="" className="ml-3" />
              </div>
              <div className="flex items-center">
                <input type="radio" name="payment-type" id="paypal" />
                <img src={paypal} alt="" className="ml-3" />
              </div>
            </form>
          </div>
          <div className="w-[90%] mx-auto">
            <h3 className="font-semibold text-base mb-2">Payment Details</h3>
            <form className="border-b border-timbuGrey pb-7 mb-7 lg:border-0">
              <label htmlFor="cardName" className="text-sm font-medium">
                Name on Card <br />
                <input
                  type="text"
                  id="cardName"
                  placeholder="John Johnson"
                  className="w-full py-2 pr-[120px] pl-[5px] border border-timbuBlack rounded-md"
                />
              </label>
              <br />
              <label htmlFor="cardNumber" className="text-sm font-medium">
                Card Number <br />
                <input
                  type="number"
                  id="cardNumber"
                  placeholder="**** **** **** 3434"
                  className="w-full py-2 pr-[120px] pl-[5px] border border-timbuBlack rounded-md"
                />
              </label>
              <br />
              <label htmlFor="expiryDate" className="text-sm font-medium">
                Expiry Date <br />
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/YY"
                  onInput={dateInputFormat}
                  className="w-1/3 py-2 pl-[5px] border border-timbuBlack rounded-md"
                />
              </label>
              <br />
              <label htmlFor="cvv" className="text-sm font-medium">
                CVV <br />
                <input
                  type="number"
                  id="cvv"
                  placeholder="123"
                  className="w-1/4 py-2 pl-[5px] border border-timbuBlack rounded-md"
                />
              </label>
            </form>
            <h3 className="font-semibold text-base mb-2">Shipping Address</h3>
            <form className="border-b border-timbuGrey pb-7 mb-7">
              <label htmlFor="name" className="text-sm font-medium">
                Name <br />
                <input
                  type="text"
                  id="name"
                  className="w-full py-2 pr-[120px] pl-[5px] border border-timbuBlack rounded-md"
                />
              </label>
              <br />
              <label htmlFor="address" className="text-sm font-medium">
                Address <br />
                <input
                  type="text"
                  id="address"
                  className="w-full pr-[120px] py-2 pl-[5px] border border-timbuBlack rounded-md"
                />
              </label>
              <br />
              <label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number <br />
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full py-2 pr-[120px] pl-[5px] border border-timbuBlack rounded-md"
                />
              </label>
              <br />
              <label htmlFor="city" className="text-sm font-medium">
                City <br />
                <input
                  type="text"
                  id="city"
                  className="w-1/2 py-2 pl-[5px] border border-timbuBlack rounded-md"
                />
              </label>
              <br />
              <label htmlFor="state" className="text-sm font-medium">
                State <br />
                <input
                  type="number"
                  id="state"
                  className="w-1/2 py-2 pl-[5px] border border-timbuBlack rounded-md"
                />
              </label>
              <br />
              <label htmlFor="zip" className="text-sm font-medium">
                Zip <br />
                <input
                  type="number"
                  id="zip"
                  className="w-1/2 py-2 pl-[5px] border border-timbuBlack rounded-md mb-5"
                />
              </label>
              <Button content="Pay now" width="w-full" />
            </form>
          </div>
        </div>
        {/* don't include */}
        <div className="lg:flex items-start justify-center">
          <div className="font-semibold border-2 border-timbuGrey lg:border-0 p-2 my-7 w-[90%] mx-auto rounded-md lg:mr-2">
            <h2 className="rounded-md text-center bg-timbuBlue font-semibold text-base p-3 mb-7 lg:text-2xl">
              Order Summary
            </h2>
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
          <div className="flex items-center justify-start border border-timbuGrey p-5 my-7 w-[90%] mx-auto rounded-md lg:border-0 lg:p-0">
            <div className="mr-1">
              <img src={abMug} alt="product ab mug" />
            </div>
            <div>
              <div>
                <p>Classic AB Mug</p>
                <p className="text-timbuRed font-semibold">N7499.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
