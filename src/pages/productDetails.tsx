import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product } from "./products";
import Header from "../components/header";
import minus from "../assets/icon/minus.png";
import plus from "../assets/icon/plus.png";
import useCounter from "../hooks/counter-hook";
import Button from "../components/button";
import backButton from "../assets/icon/back-button.png";

//
interface ModifiedProduct extends Product {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  current_price: any;
}
const ProductDetails = () => {
  const { url_slug } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [product, setProduct] = useState<ModifiedProduct | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { increase, decrease, count } = useCounter();

  const API_KEY = "90aec84e95284d7f8ce7ac982ad916a920240712130613816586";
  const APP_ID = "RT6WUUXGARFTKO0";
  const ORGANIZATION_ID = "7dbe45f8639b411bb715356cc3c02b37";
  const url = `/api/products/${url_slug}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`;

  // const url2 = "https:/api.timbu.cloud/products/TI191875P?organization_id=7dbe45f8639b411bb715356cc3c02b37";
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
        <p>Loading...</p>
      ) : (
        <>
          <Header />
          <div className="w-[90%] mx-auto">
            <p className="font-semiboold flex text-base mt-5 mb-5 ml-3 lg:text-2xl">
              <img src={backButton} alt="" className="mr-2" />
              Checkout
            </p>
            <div>
              <img
                src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
                alt=""
              />
              <div className="mb-2">
                {/* product rating */}
                <h1 className="font-medium text-2xl mt-2">{product?.name}</h1>
                <p className="font-regular text-base my-2">{product?.description}</p>
                <p className="font-regular text-base text-[#B9B4B4]">
                  {product?.available_quantity} in stock
                </p>
              </div>
              <div className="mb-3">
                <p className="font-medium text-2xl text-timbuRed mb-2">
                  N{product?.current_price}
                </p>
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
              </div>
              <div>
                <Button content="Add to cart" width="w-full" />
                <button className="w-full mt-4 text-sm py-2 px-8 text-center bg-timbuWhite text-timbuBlack font-regular rounded-md border-2 border-timbuBlack hover:bg-timbuBlue hover:font-semibold transition-all">
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ProductDetails;
