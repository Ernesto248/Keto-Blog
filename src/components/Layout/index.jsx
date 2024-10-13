import LogoImage from "../LogoImage";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Blog de la Dieta Keto</h1>
            <p className="mt-2">Tu guía para un estilo de vida más saludable</p>
          </div>
          <LogoImage />
        </div>
      </header>
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
