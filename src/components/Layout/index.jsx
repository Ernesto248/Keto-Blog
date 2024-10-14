import LogoImage from "../LogoImage";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {children}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Blog: Dieta Keto. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
