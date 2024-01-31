import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { UserLayout } from "./components/UserLayout/UserLayout";
import { AuthPage } from "./pages/AuthPage/Auth.jsx";
import { AdminLayout } from "./components/AdminLayout/AdminLayout";
import { ProfileNavigationPage } from "./components/ProfileMenuPages/ProfileMenuNavigation/ProfileNavigationPage.js";
import { PersonalPage } from "./components/ProfileMenuPages/Personal/PersonaPage.js";
import { ChangePasswordPage } from "./components/ProfileMenuPages/ChangePassword/ChangePasswordPage.js";
import { MySurveysPage } from "./components/ProfileMenuPages/MySurveys/MySurveysPage.js";
import { TeamHubPage } from "./components/ProfileMenuPages/TeamHub/TeamHubPage.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />} />
          <Route path="register" element={<AuthPage isLogin={false} />} />
          <Route path="login" element={<AuthPage isLogin={true} />} />
          <Route path="profile" element={<ProfileNavigationPage />}>
            <Route index element={<PersonalPage />} />
            <Route path="change-password" element={<ChangePasswordPage />} />
            <Route path="surveys" element={<MySurveysPage />} />
            <Route path="team-hub" element={<TeamHubPage />} />
          </Route>
          <Route path="admin/*" element={<AdminLayout />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
