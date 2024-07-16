import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product } from "./products";
import Header from "../components/header";
import minus from "../assets/icon/minus.png";
import plus from "../assets/icon/plus.png";
import useCounter from "../hooks/counter-hook";
import Button from "../components/button";
import BackButton from "../components/backButton";
import Loader from "../loader/loader";

//
interface ModifiedProduct extends Product {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  current_price: any;
}

import { CartItem } from "./products";
/* window.addEventListener('load', () => {
  localStorage.clear()
}) */
const ProductDetails = () => {
  const { url_slug } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [product, setProduct] = useState<ModifiedProduct | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { increase, decrease, count } = useCounter();
  const [, setCart] = useState<CartItem[]>([]);
  // const [error, setError] = useState(false);


  const addToCart = () => {
    if(product){
      try {
        const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
        const productIndex = cartItems.findIndex(
          (item: { id: string }) => item.id === product.unique_id
        );

        if (productIndex !== -1) {
          console.log("Product already in cart");
          // Display a message like "Product already added to cart"
          return;
        }

        cartItems.push({ ...product, quantity: 1 });
        setCart(cartItems);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        // Display a success message like "Added to cart!"
      } catch (error) {
        console.error("Error adding product to cart:", error);
        // Handle potential errors during JSON parsing or local storage
      }
    }
  };

  const API_KEY = "90aec84e95284d7f8ce7ac982ad916a920240712130613816586";
  const APP_ID = "RT6WUUXGARFTKO0";
  const ORGANIZATION_ID = "7dbe45f8639b411bb715356cc3c02b37";
  const url = `/api/products/${url_slug}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`;

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        // fetch the api
        const response = await fetch(url);
        // check if response status is not in the green
        if (!response.ok) {
          console.error(response.status, response.statusText);
          throw new Error("Network response not ok");
        }
        // convert response data to json
        const data = await response.json();
        console.log(data);
        // assign product to the data fetched
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [url]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="w-[95%] mx-auto min-h-[55vh]">
            <BackButton context="Product details" />
            <div className="lg:flex items-start justify-between">
              {/* {error && (
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] rounded-md shadow-md bg-timbuWhite p-4">
                  Please be patient with us as we fix this error. In the
                  meantime, you can add your item to cart from the product
                  listing page
                </p>
              )} */}
              <div className=" lg:w-3/4 lg:mr-20 flex items-center justify-center">
                <img
                  src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
                  alt=""
                />
              </div>
              <div>
                <div className="mb-2 lg:mb-7 lg:w-1/2">
                  {/* product rating */}
                  <h1 className="font-medium text-2xl mt-2">{product?.name}</h1>
                  <p className="font-regular text-base my-2">
                    {product?.description}
                  </p>
                  <p className="font-regular text-base text-[#B9B4B4] lg:mb-3">
                    {product?.available_quantity} in stock
                  </p>
                </div>
                <div className="mb-3 lg:mb-7">
                  <p className="font-medium text-2xl text-timbuRed mb-2">
                    N{product?.current_price}
                  </p>
                  <div className="flex items-center justify-evenly text-center border-2 border-timbuGrey rounded-md w-1/4">
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
                <div className="lg:flex items-start justify-between flex-col">
                  <div
                    /* onClick={() => {
                      setError(true);
                      setTimeout(() => {
                        setError(false);
                      }, 7000);
                    }} */
                    onClick={addToCart}
                    className="lg:w-1/2"
                  >
                    <Button content="Add to cart" width="w-full lg:w-full" />
                  </div>
                  <button className="w-full lg:w-1/2 mt-4 text-sm py-2 px-8 text-center bg-timbuWhite text-timbuBlack font-regular rounded-md border-2 border-timbuBlack hover:bg-timbuBlue hover:font-semibold transition-all">
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ProductDetails;
