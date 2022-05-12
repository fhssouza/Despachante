import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";

const AuthRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AuthRoutes;
