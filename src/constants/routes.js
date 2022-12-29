const ROUTES = Object.freeze({
  INDEX: {
    path: "/",
    name: "Index",
  },
  CART: {
    path: "/cart",
    name: "Cart",
  },
  DETAILED: {
    path: "/detailed/:id",
    name: "Detailed",
  },
  NOTFOUND: {
    path: "*",
    name: "NotFound",
  },
});
export default ROUTES;
