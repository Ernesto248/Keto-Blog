import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "../Home";
import GettingStartedPage from "../Articles/GettingStarted";
import BeneficiosPage from "../Articles/Beneficios";
import KetoFacilPage from "../Reviews/KetoFacil";
import NavBar from "../../components/NavBar";
import ReviewsPage from "../Reviews";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/articles/getting-started", element: <GettingStartedPage /> },
    { path: "/articles/beneficios", element: <BeneficiosPage /> },
    { path: "/reviews/", element: <ReviewsPage /> },
    { path: "/reviews/keto-facil", element: <KetoFacilPage /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
