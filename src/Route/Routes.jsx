import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Product from "../Pages/product/Product";
import Cart from "../Pages/cart/Cart";
import CheckOut from "../Pages/checkout/CheckOut";
import Landing from "../Pages/landing/Landing";
import Login from "../Pages/login/Login";
import Registration from "../Pages/registration/Registration";
import Category from "../Pages/category/Category";
import AllCategory from "../Pages/allCategory/AllCategory";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import Form from '../Pages/landing/files/From'
import { loader } from "../utilities/loader";
import Profile from "../Pages/profile/Profile";
// import ErrorPage from "../Pages/errorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loader,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/item/:name",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/allCategory",
        element: <AllCategory />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/landing/:name",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
     
    ],
  },
]);

export default Routes;
