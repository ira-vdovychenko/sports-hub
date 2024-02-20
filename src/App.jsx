import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { UserLayout } from "./components/UserLayout/UserLayout.jsx";
import { AuthPage } from "./pages/Auth/AuthPage.jsx";
import { AdminLayout } from "./components/AdminLayout/AdminLayout.jsx";
import { ProfileNavigationPage } from "./components/ProfileMenuPages/ProfileMenuNavigation/ProfileNavigationPage.jsx";
import { PersonalPage } from "./components/ProfileMenuPages/Personal/PersonaPage.jsx";
import { ChangePasswordPage } from "./components/ProfileMenuPages/ChangePassword/ChangePasswordPage.jsx";
import { MySurveysPage } from "./components/ProfileMenuPages/MySurveys/MySurveysPage.jsx";
import { TeamHubPage } from "./components/ProfileMenuPages/TeamHub/TeamHubPage.jsx";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />} />
          <Route path="register" element={<AuthPage />} />
          <Route path="login" element={<AuthPage  />} />
          <Route path="forgot-password" element={<AuthPage />} />
          <Route path="reset-password" element={<AuthPage />} />
          <Route path="profile" element={<ProfileNavigationPage />}>
            <Route index element={<PersonalPage />} />
            <Route path="change-password" element={<ChangePasswordPage />} />
            <Route path="surveys" element={<MySurveysPage />} />
            <Route path="team-hub" element={<TeamHubPage />} />
          </Route>
          <Route path="admin/*" element={<AdminLayout />} />
        </Routes>
      </Router>
  );
}
export default App;
