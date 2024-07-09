import { createBrowserRouter } from "react-router-dom";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Layout from "./pages/layout";
import Checkout from "./pages/checkout";
import Confirmation from "./pages/confirmation";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);

export default App;
