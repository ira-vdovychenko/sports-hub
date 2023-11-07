import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/UserLayout/UserLayout"; 
import AdminLayout from "./components/AdminLayout/AdminLayout";
import ProfileNavigation from "./components/ProfileMenuPages/ProfileMenuNavigation/ProfileNavigation";
import Personal from "./components/ProfileMenuPages/PersonalPage/Personal";
import ChangePassword from "./components/ProfileMenuPages/ChangePasswordPage/ChangePassword";
import MySurveys from './components/ProfileMenuPages/MySurveysPage/MySurveys';
import TeamHub from "./components/ProfileMenuPages/TeamHubPage/TeamHub"


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />} />
          <Route path="profile" element={<ProfileNavigation />} >
            <Route index element={<Personal />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="surveys" element={<MySurveys />} />
            <Route path="team-hub" element={<TeamHub />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />} />
        </Routes>
      </Router>
    );
  }
export default App;
