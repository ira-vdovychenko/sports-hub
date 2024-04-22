import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { UserHeader, UserContentArea, UserLeftSidebar, UserRightSidebar, UserFooter } from "./index.js";
import { ProfileMenuPage } from "../../../pages/User/ProfileMenu/ProfileMenuPage.jsx";
import { CategoryPage } from "../../../pages/User/CategoryPage/CategoryPage.jsx";

export const UserLayout = () => {
  const isAuthenticated = useSelector((state) => state.auth.token);
  const location = useLocation();

  return (
    <>
      <UserHeader />
      <UserLeftSidebar />
      <Routes>
        <Route index element={<UserContentArea />} />
        <Route path={"/:category"} element={<CategoryPage />} />
        {isAuthenticated && (
          <Route path={"/profile/*"} element={<ProfileMenuPage />} />
        )}
      </Routes>
      {location.pathname.startsWith("/profile") ? null : (
        <>
          <UserRightSidebar />
          <UserFooter />
        </>
      )}
    </>
  );
};
