import { useEffect, useState } from "react";
import cart from "../assets/icon/cart-outline.png";
import { Link } from "react-router-dom";
import { Product } from "../pages/products";

interface CartItem extends Product {
  quantity: number
}
const Hero = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    setCartItemCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]);

  return (
    <header>
      <nav className="max-w-screen flex items-center justify-between p-8 bg-timbuBlack mb-7">
        <Link to="/">
          <h1 className="font-semibold text-timbuWhite">TimbuCloudShop</h1>
        </Link>
        <Link to="/cart" className="lg:hidden flex">
          <img src={cart} alt="cart-icon" />
          {cartItemCount > 0 && (
            <span className="relative -top-3 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-timbuRed rounded-full">
              {cartItemCount}
            </span>
          )}
        </Link>
        <Link
          to="/cart"
          className="hidden lg:flex items-center justify-center text-timbuGrey"
        >
          <img src={cart} alt="cart-icon" /> <p>Cart ({cartItemCount})</p>
        </Link>
      </nav>
    </header>
  );
};
export default Hero;
