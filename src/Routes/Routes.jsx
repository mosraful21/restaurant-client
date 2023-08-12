import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu/>
      },
      {
        path: 'order/:category',
        element: <OrderPage/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      },
      {
        path: '/secret',
        element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
      }
    ],
  },
]);
