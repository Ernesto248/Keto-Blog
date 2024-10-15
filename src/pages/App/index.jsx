import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HomePage from "../Home";
import GettingStartedPage from "../Articles/GettingStarted";
import BeneficiosPage from "../Articles/Beneficios";
import KetoFacilPage from "../Reviews/KetoFacil";
import ReviewsPage from "../Reviews";
import MitosRealidadesPage from "../Articles/MitosRealidades";
import Mcn from "../../components/Reviews/Mcn";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/articles/getting-started", element: <GettingStartedPage /> },
    { path: "/articles/beneficios", element: <BeneficiosPage /> },
    { path: "/articles/mitos-realidades", element: <MitosRealidadesPage /> },
    { path: "/reviews/", element: <ReviewsPage /> },
    { path: "/reviews/keto-facil", element: <KetoFacilPage /> },
    { path: "/reviews/mcn", element: <Mcn /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
