import Header from "@/components/Header";
import Footter from "@/components/Footer";
import MainContextProvider from "@/contexts/MainContext";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <MainContextProvider>
      {/* <AuthenContextProvider> */}
      <div className="page-wrapper">
        <Header />
        <Outlet />
        <Footter />
      </div>
      {/* </AuthenContextProvider> */}
    </MainContextProvider>
  );
}

export default MainLayout;
