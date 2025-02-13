import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home";
import { PATHS } from "./constant/path";
import Dashboard from "./pages/dashboard-page";
import "./index.css";
import ManageCustomer from "./pages/manage-customer";
import StaffPage from "./pages/staff-page";
import DashboardStatistic from "./pages/dashboard-statistics";
import ServicePage from "./pages/service-page";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
function App() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={PATHS.DASHBOARD} element={<Dashboard />}>
        <Route path={PATHS.MANAGE_CUSTOMER} element={<ManageCustomer />} />
        <Route path={PATHS.MANAGE_STAFF} element={<StaffPage />} />
        <Route path={""} element={<DashboardStatistic />} />
        <Route path={PATHS.SERVICE_PAGE} element={<ServicePage />} />
       
      </Route>
      <Route path={PATHS.LOGIN_PAGE} element={<LoginPage />} />
      <Route path={PATHS.REGISTER_PAGE} element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
