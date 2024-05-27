import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserLayout } from "./components/layouts/UserLayout/UserLayout.jsx";
import { AuthPage } from "./pages/Auth/AuthPage.jsx";
import { AdminLayout } from "./components/layouts/AdminLayout/AdminLayout.jsx";

function App() {
  return (
      <Routes>
        <Route path="*" element={<UserLayout />} />
        <Route path="register" element={<AuthPage />} />
        <Route path="login" element={<AuthPage />} />
        <Route path="forgot-password" element={<AuthPage />} />
        <Route path="reset-password" element={<AuthPage />} />
        <Route path="admin/*" element={<AdminLayout />} />
      </Routes>
  );
}
export default App;
