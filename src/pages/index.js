import React from "react";
import ROUTES from "../constants/routes";

import Layout from "./pageLayout/PageLayout";
import Main from "./main/Main";
import Cart from "./cart/Cart";
import Detailed from "./detailed/Detailed";
import NotFound from "./404/404";

const PAGES = [
  {
    element: <Layout />,
    children: [
      {
        name: ROUTES.INDEX.name,
        path: ROUTES.INDEX.path,
        element: <Main />,
      },
      {
        name: ROUTES.CART.name,
        path: ROUTES.CART.path,
        element: <Cart />,
      },
      {
        name: ROUTES.DETAILED.name,
        path: ROUTES.DETAILED.path,
        element: <Detailed age={10} />,
      },
    ],
  },
  {
    name: ROUTES.NOTFOUND.name,
    path: ROUTES.NOTFOUND.path,
    element: <NotFound />,
  },
];

export default PAGES;
