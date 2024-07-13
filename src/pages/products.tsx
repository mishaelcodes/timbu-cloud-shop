/* // mobile images
import abMug from "../assets/images/products/abMug.png";
import blueMonday from "../assets/images/products/blueMondayMug.png";
import classicAbMugPink from "../assets/images/products/peachMug.png";
import classicAbMugBrown from "../assets/images/products/brownMug.png";
import classicAbMugYellow from "../assets/images/products/yellowMug.png";
import heartCup from "../assets/images/products/heartMug.png";
import yellowAndOrangeMug from "../assets/images/products/yellowAndOrangeMug.png";
import smileyFaceMug from "../assets/images/products/smileyMug.png";
import plainWhiteMug from "../assets/images/products/plainWhiteMug.png";
import bestBossMug from "../assets/images/products/bestBossMug.png";
import whiteMetalMug from "../assets/images/products/whiteMetalMug.png";
import winkyFaceMug from "../assets/images/products/winkyFaceMug.png";
import breakfastMug from "../assets/images/products/breakfastMug.png";
import blackWideMug from "../assets/images/products/blackWideMug.png";
import worldsBestBossMug from "../assets/images/products/world'sBestBossMug.png";
import slimYellowMug from "../assets/images/products/slimYellowMug.png";
import theBossMug from "../assets/images/products/theBossMug.png";
import blueCoffeeMug from "../assets/images/products/blueCoffeeMug.png";
import whiteWideLipMug from "../assets/images/products/whiteWideLipMug.png";
import whiteWideMug from "../assets/images/products/whiteWideMug.png";
 */
//icons

// import star from "../assets/icon/star.png";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/header";

export interface Product {
  name: string;
  unique_id: string;
  url_slug: string;
  available_quantity: number;
  description: string;
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
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const API_KEY = "90aec84e95284d7f8ce7ac982ad916a920240712130613816586";
  const APP_ID = "RT6WUUXGARFTKO0";
  const ORGANIZATION_ID = "7dbe45f8639b411bb715356cc3c02b37";
  const url = `/api/products?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setNumberOfProducts(data.items.length);
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <Header />
      <div className="w-[85%] mx-auto mb-5">
        <h2 className="font-semibold text-base mt-3 mb-6 md:mt-12 md:mb-8">
          Products list{" "}
          <span className="text-gray-400">({numberOfProducts})</span>
        </h2>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
            {products.map((product: Product) => (
              <div
                key={product.unique_id}
                className="border-2 border-timbuGrey rounded-md py-[10px] px-1"
              >
                <img
                  src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
                  alt=""
                />
                <Link
                  to={`/product/${product.url_slug}`}
                  className="mb-1 min-h-24 max-h-24 flex items-start justify-between flex-col"
                >
                  <p className="font-semibold text-sm mt-1">{product.name}</p>
                  <p className="text-timbuRed font-medium text-sm my-1">
                    N{product.current_price[0].NGN[0]}
                  </p>
                  {/* <p className="font-semibold flex items-center justify-start">
                <img src={star} alt="star icon" /> {product.productRating}
              </p> */}
                </Link>
                <Link to="/cart">
                  <Button content="Add to cart" width="w-full" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Products;
