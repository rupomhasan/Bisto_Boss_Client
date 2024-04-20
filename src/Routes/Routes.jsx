import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import MenuService from "../Pages/MenuService/MenuService";
import Order from "../Pages/Order/Order/Order";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <MenuService />,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
    ],
  },
]);
