import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
export default Cart;
