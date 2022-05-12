import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Clients from "../pages/Clients";
import Services from "../pages/Services";
import Budgets from "../pages/Budgets";
// import Login from "../pages/LoginPage";
// import Register from "../pages/RegisterPage";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/dashborad" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/services" element={<Services />} />
            <Route path="/budgets" element={<Budgets />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
