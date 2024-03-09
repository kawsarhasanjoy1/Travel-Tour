import Header from "../shered/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shered/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
