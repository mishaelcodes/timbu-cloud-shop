import abMug from "../assets/images/products/AB-mug.png";
import blueMonday from "../assets/images/products/blue-monday-ab-mug.png";
import classicAbMugPink from "../assets/images/products/classic-ab-mug-pink.png";
import classicAbMugBrown from "../assets/images/products/classic-ab-mug-brown.png";
import classicAbMugYellow from "../assets/images/products/classic-ab-mug-yellow.png";
import heartCup from "../assets/images/products/heart-cup.png";

import arrowLeft from "../assets/icon/arrow-left.png";
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
      productName: "Classic AB Mug",
      productImage: heartCup,
      productPrice: "7,499.99",
      productRating: "4.2",
    },
    {
      productName: "Classic AB Mug",
      productImage: classicAbMugBrown,
      productPrice: "7,499.99",
      productRating: "4.2",
    },
    {
      productName: "Classic AB Mug",
      productImage: classicAbMugPink,
      productPrice: "7,499.99",
      productRating: "4.2",
    },
    {
      productName: "Classic AB Mug",
      productImage: classicAbMugYellow,
      productPrice: "7,499.99",
      productRating: "4.2",
    },
    {
      productName: "Classic AB Mug",
      productImage: blueMonday,
      productPrice: "7,499.99",
      productRating: "4.2",
    },
  ];
  return (
    <div className="w-80 mx-auto">
      <h2 className="font-semibold text-2xl mb-2">Products Category</h2>
      <select
        name="products"
        id="products"
        className="border-4 border-timbuGrey w-1/2 px-3 py-2 rounded-md"
      >
        <option value="mug">Mugs</option>
      </select>
      <div className="grid grid-cols-2 mt-10 gap-3">
        {arrayOfProducts.map((product, index) => (
          <div key={index} className="border-2 border-timbuGrey rounded-md">
            <img src={product.productImage} alt="" />
            <p>{product.productName}</p>
            <p>{product.productPrice}</p>
            <p>{product.productRating}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between my-10">
        <img src={arrowLeft} alt="" />
        <Button content="Next Page" />
        <p>Page 1 of 7</p>
      </div>
    </div>
  );
};
export default Products;
