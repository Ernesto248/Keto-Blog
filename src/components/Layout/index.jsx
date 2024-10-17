import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {children}
      <Analytics />
    </div>
  );
};

export default Layout;
