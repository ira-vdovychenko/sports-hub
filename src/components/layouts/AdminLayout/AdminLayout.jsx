import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AdminHeader, AdminLeftSideBar, AdminContentArea} from "./index.js";
import { IAPage } from "../../../pages/Admin/InformationArchitecture/IAPage.jsx";
import { TeamsPage } from "../../../pages/Admin/Teams/TeamsPage.jsx";

export const AdminLayout = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const isAuthenticated = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); 
    } else if (isAuthenticated && !isAdmin) {
      navigate('/'); 
    }
  }, [isAuthenticated, isAdmin, navigate]);

  return (
    <React.Fragment>
      {isAdmin && (
        <div>
          <AdminHeader />
          <AdminLeftSideBar />
          <Routes>
            <Route index element={<AdminContentArea />} />
            <Route path={"information-architecture"} element={<IAPage />} />
            <Route path={"teams"} element={<TeamsPage />} />
          </Routes>
        </div>
      )}
    </React.Fragment>
  );
};
