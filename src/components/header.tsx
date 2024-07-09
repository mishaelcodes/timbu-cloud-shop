import cart from "../assets/icon/cart-outline.png"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header>
      <nav className="w-screen flex items-center justify-between p-8 bg-timbuBlack">
        <h1 className="font-semibold text-timbuWhite">TimbuCloudShop</h1>
        <Link to="/cart">
          <img src={cart} alt="cart-icon" />
        </Link>
      </nav>
    </header>
  );
};
export default Hero;
