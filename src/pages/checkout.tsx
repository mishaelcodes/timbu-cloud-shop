import checkedCircle from "../assets/icon/check-circle.png";
import radioMarked from "../assets/icon/radiobox-marked.png";
import radioDisabled from "../assets/icon/radiobox-marked-disabled.png";
import paypal from "../assets/icon/paypal.png";
import masterCard from "../assets/icon/mastercard.png";
import visa from "../assets/icon/visa.png";
import Button from "../components/button";
import BackButton from "../components/backButton";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  photos: [
    {
      url: string;
    }
  ];
  current_price: [
    {
      NGN: {
        0: number;
        1: null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        2: any[];
      };
    }
  ];
  quantity: number; // Assuming quantity is part of the CartItem interface
}

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");
  // handle form change/input events
  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value);
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const dateInputFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // Remove any non-numeric characters
    input = input.replace(/\D/g, "");

    // Add the slash after the first two digits
    if (input.length >= 2) {
      input = input.slice(0, 2) + "/" + input.slice(2);
    }

    // Limit the length to 5 characters (MM/YY)
    if (input.length > 5) {
      input = input.slice(0, 5);
    }

    e.target.value = input;
  };

  const getCartItems = () => {
    // get items frommlocal storage
    const storedCart = localStorage.getItem("cart");
    // return the items in an object format if they exist
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const calculateTotals = () => {
    // if no items in the cart prices are 0
    if (!cartItems || cartItems.length === 0) {
      return { totalPrice: 0, shippingCost: 0 };
    }

    const totalPrice = cartItems.reduce((acc, item) => {
      const price = Array.isArray(item.current_price)
        ? item.current_price[0]?.NGN?.[0]
        : item.current_price;
      return acc + (price || 0) * item.quantity;
    }, 0);
    const shippingCost = 2000;
    return { totalPrice, shippingCost };
  };
  const { totalPrice, shippingCost } = calculateTotals();

  const payFunction = () => {
    if (
      cardName &&
      cvv &&
      cardNumber &&
      name &&
      address &&
      phoneNumber &&
      city &&
      state &&
      zip
    ) {
      localStorage.clear();
      navigate("/confirmation");
    } else {
      setError("Please fill in all fields");
    }
  };
  useEffect(() => {
    const cartItemsFromStorage = getCartItems();
    setCartItems(cartItemsFromStorage);
  }, []);
  return (
    <>
      <div className="max-w-screen flex items-center justify-between lg:justify-center p-3 mb-7  bg-timbuBlack text-timbuWhite text-[10px]">
        <div className="flex items-center justfy-center flex-col">
          <img src={checkedCircle} alt="" />
          <p>Order Summary</p>
        </div>
        <div className="w-[20%]">
          <hr className="h-px border-0 bg-timbuGrey w-full hidden lg:block" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src={radioMarked} alt="" />
          <p>Payment</p>
        </div>
        <div className="w-[20%]">
          <hr className="h-px border-0 bg-timbuGrey w-full hidden lg:block" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <img src={radioDisabled} alt="" />
          <p>Confirmation</p>
        </div>
      </div>
      <BackButton context="Checkout" />
      <div className="md:flex items-start justify-center md:justify-around">
        <div>
          <div className="w-[90%] mx-auto flex items-start justify-start flex-col mt-7 border-b border-b-timbuGrey lg:border-0 pb-10 mb-10">
            <h3 className="font-semibold text-base">Payment Method</h3>
            <p className="text-sm">Choose your preferred payment method</p>
            <form className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input type="radio" name="payment-type" id=" visa" />
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
            <p className="text-timbuRed" id="error">
              {error ? error : ""}
            </p>
            <form className="border-b border-timbuGrey pb-7 mb-7 lg:border-0">
              <label htmlFor="cardName" className="text-sm font-medium">
                Name on Card <br />
                <input
                  type="text"
                  id="cardName"
                  placeholder="John Johnson"
                  onChange={handleCardNameChange}
                  className="w-full py-2 pl-[5px] border border-timbuBlack rounded-md"
                  required
                />
              </label>
              <br />
              <label htmlFor="cardNumber" className="text-sm font-medium">
                Card Number <br />
                <input
                  type="number"
                  id="cardNumber"
                  placeholder="**** **** **** 3434"
                  onChange={handleCardNumberChange}
                  className="w-full py-2 pl-[5px] border border-timbuBlack rounded-md"
                  required
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
                  required
                />
              </label>
              <br />
              <label htmlFor="cvv" className="text-sm font-medium">
                CVV <br />
                <input
                  type="number"
                  id="cvv"
                  placeholder="123"
                  maxLength={3}
                  onChange={handleCvvChange}
                  className="w-1/4 py-2 pl-[5px] border border-timbuBlack rounded-md"
                  required
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
                  onChange={handleNameChange}
                  className="w-full py-2 pl-[5px] border border-timbuBlack rounded-md"
                  required
                />
              </label>
              <br />
              <label htmlFor="address" className="text-sm font-medium">
                Address <br />
                <input
                  type="text"
                  id="address"
                  onChange={handleAddressChange}
                  className="w-full py-2 pl-[5px] border border-timbuBlack rounded-md"
                  required
                />
              </label>
              <br />
              <label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number <br />
                <input
                  type="tel"
                  id="phoneNumber"
                  onChange={handlePhoneNumberChange}
                  className="w-full py-2 pr-[120px] pl-[5px] border border-timbuBlack rounded-md"
                />
              </label>
              <br />
              <div className="lg:flex lg:gap-2">
                <label htmlFor="city" className="text-sm font-medium">
                  City <br />
                  <input
                    type="text"
                    id="city"
                    onChange={handleCityChange}
                    className="w-1/2 lg:w-full py-2 pl-[5px] border border-timbuBlack rounded-md"
                  />
                </label>
                <br />
                <label htmlFor="state" className="text-sm font-medium">
                  State <br />
                  <input
                    type="number"
                    id="state"
                    onChange={handleStateChange}
                    className="w-1/2 lg:w-full py-2 pl-[5px] border border-timbuBlack rounded-md"
                  />
                </label>
              </div>
              <label htmlFor="zip" className="text-sm font-medium">
                Zip <br />
                <input
                  type="number"
                  id="zip"
                  onChange={handleZipChange}
                  className="w-1/2 py-2 pl-[5px] border border-timbuBlack rounded-md mb-5"
                  required
                />
              </label>
              <br />
              <div className="w-full" onClick={payFunction}>
                <Button content="Pay now" width="w-full" />
              </div>
            </form>
          </div>
        </div>
        <div className="lg:flex items-start justify-center lg:flex-col">
          <div className="font-semibold border-2 border-timbuGrey lg:border-0 p-2 my-7 w-[90%] mx-auto rounded-md lg:mr-2">
            <h2 className="rounded-md text-center bg-timbuBlue font-semibold text-base p-3 mb-7 lg:text-2xl">
              Order Summary
            </h2>
            <div className="flex items-center justify-between w-full pt-2">
              <p>Subtotal</p>
              <p>N{totalPrice}</p>
            </div>
            <div className="flex items-center justify-between w-full pt-2">
              <p>Shipping cost</p>
              <p>N{shippingCost}</p>
            </div>
            <div className="flex items-center justify-between w-full pt-2">
              <p>Discount</p>
              <p>N/A</p>
            </div>
            <div className="flex items-center justify-between w-full pt-2">
              <p>Total</p>
              <p>N{totalPrice + shippingCost}</p>
            </div>
          </div>
          <div className="flex items-center justify-start flex-col border border-timbuGrey p-5 my-7 w-[90%] mx-auto rounded-md lg:border-0 lg:p-0">
            {cartItems?.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-start mb-3"
              >
                <div className="mr-1">
                  <img
                    src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`}
                    alt=""
                  />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p className="text-timbuRed font-semibold">
                    N
                    {Array.isArray(item.current_price)
                      ? item.current_price[0]?.NGN?.[0]
                      : item.current_price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
