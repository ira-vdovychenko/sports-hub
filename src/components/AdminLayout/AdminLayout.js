import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'; 

import { AdminHeader } from './AdminHeader/AdminHeader';
import { AdminLeftSideBar } from './AdminLeftSideBar/AdminLeftSideBar';
import { AdminContentArea } from './AdminContentArea/AdminContentArea'; 
import { IAPage } from "../../pages/Admin/InformationArchitecture/IAPage";

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
                <Navigate to="/"/>
            )}
        </React.Fragment>
    );
}
