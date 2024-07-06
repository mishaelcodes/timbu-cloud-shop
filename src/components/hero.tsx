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
      </section>
    </>
  );
};
export default Hero;
