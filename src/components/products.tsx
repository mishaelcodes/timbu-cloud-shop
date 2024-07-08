// mobile images
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

//icons

import star from "../assets/icon/star.png";
import Button from "./button";
const Products = () => {
  const arrayOfProducts = [
    {
      productName: "Classic AB Mug",
      productImage: abMug,
      productPrice: "7,499.99",
      productRating: "4.2",
    },
    {
      productName: "Red heart white mug",
      productImage: heartCup,
      productPrice: "6,500.00",
      productRating: "4.1",
    },
    {
      productName: "Cool brown mug",
      productImage: classicAbMugBrown,
      productPrice: "5,500.00",
      productRating: "4.5",
    },
    {
      productName: "Peach mug",
      productImage: classicAbMugPink,
      productPrice: "7,500.00",
      productRating: "4.9",
    },
    {
      productName: "Happy yellow mug",
      productImage: classicAbMugYellow,
      productPrice: "7,000.00",
      productRating: "4.5",
    },
    {
      productName: "Yellow & orange mug",
      productImage: yellowAndOrangeMug,
      productPrice: "8,000.00",
      productRating: "4.8",
    },
    {
      productName: "Blue monday mug",
      productImage: blueMonday,
      productPrice: "9,000.00",
      productRating: "4.0",
    },
    {
      productName: "Smiley face mug",
      productImage: smileyFaceMug,
      productPrice: "8,000.00",
      productRating: "4.4",
    },
    {
      productName: "Plain white mug",
      productImage: plainWhiteMug,
      productPrice: "4,000.00",
      productRating: "4.5",
    },
    {
      productName: '"Best boss ever" mug',
      productImage: bestBossMug,
      productPrice: "6,000.00",
      productRating: "4.1",
    },
    {
      productName: "White metal mug",
      productImage: whiteMetalMug,
      productPrice: "5,500.00",
      productRating: "4.1",
    },
    {
      productName: "Winky face mug",
      productImage: winkyFaceMug,
      productPrice: "6,500.00",
      productRating: "3.1",
    },
    {
      productName: "Breakfast mug",
      productImage: breakfastMug,
      productPrice: "4,500.00",
      productRating: "3.8",
    },
    {
      productName: "Black wide mug",
      productImage: blackWideMug,
      productPrice: "4,000.00",
      productRating: "3.9",
    },
    {
      productName: "World's best boss",
      productImage: worldsBestBossMug,
      productPrice: "5,000.00",
      productRating: "4.0",
    },
    {
      productName: "Slim yellow mug",
      productImage: slimYellowMug,
      productPrice: "6,000.00",
      productRating: "3.6",
    },
    {
      productName: "The Boss mug",
      productImage: theBossMug,
      productPrice: "3,000.00",
      productRating: "3.6",
    },
    {
      productName: "Blue coffee mug",
      productImage: blueCoffeeMug,
      productPrice: "6,800.00",
      productRating: "3.7",
    },
    {
      productName: "White wide lip mug",
      productImage: whiteWideLipMug,
      productPrice: "6,200.00",
      productRating: "3.8",
    },
    {
      productName: "White wide mug",
      productImage: whiteWideMug,
      productPrice: "6,400.00",
      productRating: "4.8",
    },
  ];
  return (
    <div className="w-[85%] mx-auto mb-5">
      <h2 className="font-semibold text-base mt-3 mb-6 md:mt-12 md:mb-8">
        Products list <span className="text-gray-400">(20)</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {arrayOfProducts.map((product, index) => (
          <div
            key={index}
            className="border-2 border-timbuGrey rounded-md py-[10px]"
          >
            <img src={product.productImage} alt="" />
            <div className="pl-1 mb-1">
              <p className="font-semibold text-sm mt-1">{product.productName}</p>
              <p className="text-timbuRed font-medium text-sm my-1">
                N{product.productPrice}
              </p>
              <p className="font-semibold flex items-center justify-start">
                <img src={star} alt="star icon" /> {product.productRating}
              </p>
            </div>
            <div className="px-1">
              <Button content="Add to cart" width="w-full"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
