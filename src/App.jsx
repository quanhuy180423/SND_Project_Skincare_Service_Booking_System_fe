// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import MainLayout from "./layouts/MainLayout";
// import HomePage from "./pages/home";
// import { PATHS } from "./constant/path";
// import Dashboard from "./pages/dashboard-page";
// import "./index.css";
// import ManageCustomer from "./pages/manage-customer";
// import StaffPage from "./pages/staff-page";
// import DashboardStatistic from "./pages/dashboard-statistics";
// import ServicePage from "./pages/service-page";
// import LoginPage from "./pages/login-page";
// import RegisterPage from "./pages/register-page";
// import BlogPage from "./pages/blog-page";
// import RatingPage from "./pages/rating-page";
// import ViewSpecialist from "./pages/view-specialist-calendar-page";
// import ManageTherapist from "./pages/manage-therapist";
// import { ToastContainer } from "react-toastify";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path={PATHS.HOME} element={<MainLayout />}>
//           <Route index element={<HomePage />} />
//         </Route>
//         <Route path={PATHS.DASHBOARD} element={<Dashboard />}>
//           <Route path={PATHS.MANAGE_CUSTOMER} element={<ManageCustomer />} />
//           <Route path={PATHS.MANAGE_STAFF} element={<StaffPage />} />
//           <Route path={PATHS.MANAGE_THERAPIST} element={<ManageTherapist />} />
//           <Route path={""} element={<DashboardStatistic />} />
//           <Route path={PATHS.SERVICE_PAGE} element={<ServicePage />} />
//           <Route path={PATHS.BlogPage} element={<BlogPage />} />
//           <Route path={PATHS.RatingPage} element={<RatingPage />} />
//           <Route path={PATHS.ViewSpecialist} element={<ViewSpecialist />} />
//         </Route>
//         <Route path={PATHS.LOGIN_PAGE} element={<LoginPage />} />
//         <Route path={PATHS.REGISTER_PAGE} element={<RegisterPage />} />
//       </Routes>
//       <ToastContainer />
//     </>
//   );
// }

// export default App;

//Lấy path trên xuống bỏ vào tương ứng để phân quyền nha

import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import { selectUser } from "./redux/features/authSlice";
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
import { useSelector } from "react-redux";
import RegisterPage from "./pages/register-page";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";
// import PriceListPage from "./pages/prices-list-page";
// import CheckoutPage from "./pages/checkout-page";
// import AppointmentPage from "./pages/appointment-page";

function App() {
  const user = useSelector(selectUser);

  const PrivateRoute = ({ children }) => {
    if (user == null) {
      toast.error("Bạn cần đăng nhập");
      return <Navigate to="/login" />;
    }
    return children;
  };

  const AdminRoute = ({ children }) => {
    if (user == null) {
      toast.error("Bạn cần đăng nhập tài khoản admin trước");
      return <Navigate to="/login" />;
    } else if (user.role !== "ADMIN") {
      toast.error("Bạn không phải là Admin!");
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: PATHS.HOME,
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: PATHS.ABOUT, element: <AboutPage /> },
        { path: PATHS.CONTACT, element: <ContactPage /> },
        // { path: PATHS.PRICE_LIST, element: <PriceListPage /> },
      ],
    },

    {
      path: PATHS.DASHBOARD,
      element: (
        <AdminRoute>
          <Dashboard />
        </AdminRoute>
      ),
      children: [
        { path: PATHS.MANAGE_CUSTOMER, element: <ManageCustomer /> },
        { path: PATHS.MANAGE_STAFF, element: <StaffPage /> },
        { index: true, element: <DashboardStatistic /> },
        { path: PATHS.SERVICE_PAGE, element: <ServicePage /> },
      ],
    },
    {
      path: PATHS.LOGIN_PAGE,
      element: <LoginPage />,
    },
    {
      path: PATHS.REGISTER_PAGE,
      element: <RegisterPage />,
    },
  ]);
  return (
    // <Routes>
    //   <Route path={PATHS.HOME} element={<MainLayout />}>
    //     <Route index element={<HomePage />} />
    //   </Route>
    //   <Route path={PATHS.DASHBOARD} element={<Dashboard />}>
    //     <Route path={PATHS.MANAGE_CUSTOMER} element={<ManageCustomer />} />
    //     <Route path={PATHS.MANAGE_STAFF} element={<StaffPage />} />
    //     <Route path={""} element={<DashboardStatistic />} />
    //     <Route path={PATHS.SERVICE_PAGE} element={<ServicePage />} />
    //     <Route path={PATHS.PRICE_LIST} element={<PriceListPage />} />
    // <Route path={PATHS.CHECKOUT} element={<CheckoutPage />} />
    //   </Route>
    //   <Route path={PATHS.LOGIN_PAGE} element={<LoginPage />} />
    //   <Route path={PATHS.REGISTER_PAGE} element={<LoginPage />} />
    // </Routes>

    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
