import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const Cart = () => {
  return (
    <>
      {window.location.pathname === "/" ? (
        <Header />
      ) : window.location.pathname === "/cart" ? (
        <Header />
      ) : (
        ""
      )}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Cart;
