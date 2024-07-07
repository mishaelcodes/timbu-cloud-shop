import ellipses from "../assets/icon/ellipses.png"
import cookingPot from "../assets/images/cooking-pot.png"
import hamMenu from "../assets/icon/ham-menu.png";
import heroImg from "../assets/images/hero-img.png";
import Button from "./button";
const Hero = () => {
  return (
    <>
      <nav className="w-screen flex items-center justify-between p-12">
        <h1 className="font-semibold">TimbuCloudShop</h1>
        <img src={hamMenu} alt="hamburger menu" />
      </nav>
      <section className="flex items-center justify-center flex-col">
        <div>
          <img src={heroImg} alt="some things we sell" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <h2 className="font-semibold text-[32px] leading-10">
            Crafted for perfection
          </h2>
          <p className="font-regular text-base my-2 w-80">
            From precision knives to stylish coffee makers, we&apos;ve got
            everything you need to elevate your cooking experience.
          </p>
          <Button content="Shop Now" />
        </div>
        <div className="flex items-center justify-center flex-col bg-timbuBlue w-[95%] rounded-3xl py-2 px-7 my-12">
          <div className="flex items-center justify-between">
            <div className="flex items-start justify-evenly flex-col">
              <p className="text-[8px]">Amazing limited time offer deals</p>
              <p className="text-xs font-semibold my-1">LE CREUSET COOKWARE</p>
              <p className="text-[8px] mb-1">Up to 60% off!</p>
              <p className="text-[6px]">Up to 60% off!</p>
            </div>
            <img src={cookingPot} alt="cooking-pot" />
          </div>
          <img src={ellipses} alt="" />
        </div>
      </section>
    </>
  );
};
export default Hero;
