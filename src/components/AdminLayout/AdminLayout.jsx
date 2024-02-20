import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AdminHeader } from "./AdminHeader/AdminHeader.jsx";
import { AdminLeftSideBar } from "./AdminLeftSideBar/AdminLeftSideBar.jsx";
import { AdminContentArea } from "./AdminContentArea/AdminContentArea.jsx";
import { IAPage } from "../../pages/Admin/InformationArchitecture/IAPage.jsx";

export const AdminLayout = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <React.Fragment>
      {isAdmin ? (
        <div>
          <AdminHeader />
          <AdminLeftSideBar />
          <Routes>
            <Route index element={<AdminContentArea />} />
            <Route path={"information-architecture"} element={<IAPage />} />
          </Routes>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </React.Fragment>
  );
};
