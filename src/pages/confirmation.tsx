import { Link } from "react-router-dom";
import bigCheckCircle from "../assets/icon/big-check-circle.png";
import checkedCircle from "../assets/icon/check-circle.png";
import Button from "../components/button";

const Confirmation = () => {
  return (
    <div className="min-h-screen" id="top">
      <div className="max-w-screen flex items-center justify-between lg:justify-center p-3 bg-timbuBlack text-timbuWhite text-[10px]">
        <div className="flex items-center justfy-center flex-col">
          <img src={checkedCircle} alt="" />
          <p>Order Summary</p>
        </div>
        <div className="w-[20%]">
          <hr className="h-px border-0 bg-timbuGrey w-full hidden lg:block" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src={checkedCircle} alt="" />
          <p>Payment</p>
        </div>
        <div className="w-[20%]">
          <hr className="h-px border-0 bg-timbuGrey w-full hidden lg:block" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src={checkedCircle} alt="" />
          <p>Confirmation</p>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center w-[90%] mx-auto">
        <div className="w-full md:w-96 flex items-center justify-evenly flex-col mt-10 border-2 border-timbuGrey rounded-md p-2">
          <img src={bigCheckCircle} alt="" />
          <h1 className="mb-4 font-semibold text-2xl">Payment Successful</h1>
          <p className="mb-2">You have successfully placed your order</p>
          <a href="#" className="mb-14 underline text-[#1B1C1D80]">
            View your tracking details
          </a>
          <Link to="/" className="w-full">
            <Button content="Back to shop" width="w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
