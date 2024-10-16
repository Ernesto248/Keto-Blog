import LogoImage from "../LogoImage";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">{children}</div>
  );
};

export default Layout;
