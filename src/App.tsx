import { createBrowserRouter } from "react-router-dom";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Layout from "./pages/layout";

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
    ],
  },
]);

export default App;
