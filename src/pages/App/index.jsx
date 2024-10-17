import { useRoutes, BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import HomePage from "../Home";
import ReviewsPage from "../Reviews";
import KetoFacilPage from "../Reviews/KetoFacil";
import Mcn from "../../components/Reviews/Mcn";
import KetoMorfosisPage from "../Reviews/KetoMorfosis";
import GettingStartedPage from "../Articles/GettingStarted";
import BeneficiosPage from "../Articles/Beneficios";
import MitosRealidadesPage from "../Articles/MitosRealidades";
import KetoVsDietasPage from "../Articles/KetoVsDietas";
import CulturaPopKetoPage from "../Articles/CulturaPopKeto";
import RendimientoDeportivoKetoPage from "../Articles/RendimientoDeportivoKeto";
import AdaptarKetoPage from "../Articles/AdaptarKeto";
import RecetasFacilesPage from "../Articles/RecetasFaciles";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/articles/getting-started", element: <GettingStartedPage /> },
    { path: "/articles/beneficios", element: <BeneficiosPage /> },
    { path: "/articles/mitos-realidades", element: <MitosRealidadesPage /> },
    { path: "/articles/keto-vs-dietas", element: <KetoVsDietasPage /> },
    { path: "/articles/cultura-pop-keto", element: <CulturaPopKetoPage /> },
    {
      path: "/articles/rendimiento-deportivo-keto",
      element: <RendimientoDeportivoKetoPage />,
    },
    { path: "/articles/adaptar-keto", element: <AdaptarKetoPage /> },
    { path: "/articles/recetas-faciles", element: <RecetasFacilesPage /> },
    { path: "/reviews/", element: <ReviewsPage /> },
    { path: "/reviews/keto-facil", element: <KetoFacilPage /> },
    { path: "/reviews/mcn", element: <Mcn /> },
    { path: "/reviews/ketomorfosis", element: <KetoMorfosisPage /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
      <Analytics />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
