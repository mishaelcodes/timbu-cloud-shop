import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Cart;
