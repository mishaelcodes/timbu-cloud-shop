import cart from "../assets/icon/cart-outline.png"
// import Button from "./button";
const Hero = () => {
  return (
    <>
      <nav className="w-screen flex items-center justify-between p-8 bg-timbuBlack">
        <h1 className="font-semibold text-timbuWhite">TimbuCloudShop</h1>
        <img src={cart} alt="cart-icon" />
      </nav>
      
    </>
  );
};
export default Hero;
