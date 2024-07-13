import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product } from "./products";
import Header from "../components/header";
import minus from "../assets/icon/minus.png";
import plus from "../assets/icon/plus.png";
import useCounter from "../hooks/counter-hook";
import Button from "../components/button";
const ProductDetails = () => {
  const { url_slug } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [product, setProduct] = useState<Product | null>(null);
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
        // const response = await fetch(`/api/products/${productId}`);
        const response = await fetch(url);
        if (!response.ok) {
          console.error(response.status, response.statusText);
          throw new Error("Network response not ok");
        }
        const data = await response.json();
        console.log(data);
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
            <img
              src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
              alt=""
            />
            <div>
              {/* product rating */}
              <h1>{product?.name}</h1>
              <p>{/*product description */}</p>
              <p>{product?.available_quantity} in stock</p>
            </div>
            <div>
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
        </>
      )}
    </>
  );
};
export default ProductDetails;
