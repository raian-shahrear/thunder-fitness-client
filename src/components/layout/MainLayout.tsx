import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
