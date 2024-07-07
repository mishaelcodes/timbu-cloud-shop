import shopImage from "../assets/images/shopImage.png";
const Footer = () => {
  return (
    <footer className="bg-timbuGrey mt-12 p-6">
      <section>
        <div>
          <h3 className="font-semibold">Address</h3>
          <p>
            16, Clementine Street <br />
            NW Bariga, <br />
            Lagos, Nigeria
          </p>
        </div>
        <div className="mt-5">
          <h3 className="font-semibold">Contact</h3>
          <p>
            <p>support@timbucloudshop.com</p>
            <p>help@timbucloudshop.com</p>
            <p className="font-semibold">01-234567, 01-99952</p>
          </p>
        </div>
        <div className="flex items-center justify-center flex-col mt-7 mb-20 text-center">
          <img src={shopImage} alt="shop image" className="rounded-full" />
          <h2 className="font-semibold my-3">TimbuCloudShop</h2>
          <p>
            From precision knives to stylish coffee makers, we&apos;ve got everything
            you need to elevate your cooking experience.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <sub>Copyright 2024 Timbu Company - All rights reserved</sub>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
