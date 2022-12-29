// import { ROUTES } from "./constants/routes";
import { useRoutes } from "react-router-dom";
import PAGES from "./pages/index";

function App() {
  const pages = useRoutes(PAGES);

  return pages;
}

export default App;
