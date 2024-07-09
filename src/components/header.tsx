import cart from "../assets/icon/cart-outline.png"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header>
      <nav className="max-w-screen flex items-center justify-between p-8 bg-timbuBlack">
        <Link to="/">
          <h1 className="font-semibold text-timbuWhite">TimbuCloudShop</h1>
        </Link>
        <Link to="/cart" className="lg:hidden">
          <img src={cart} alt="cart-icon" />
        </Link>
        <Link to="/cart" className="hidden lg:flex items-center justify-center text-timbuGrey">
          <img src={cart} alt="cart-icon" /> <p>Cart</p>
        </Link>
      </nav>
    </header>
  );
};
export default Hero;
