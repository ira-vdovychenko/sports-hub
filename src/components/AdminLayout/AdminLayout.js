import React from "react"
import AdminHeader from './AdminHeader/AdminHeader';
import AdminLeftSideBar from './AdminLeftSideBar/AdminLeftSideBar';
import AdminContentArea from './AdminContentArea/AdminContentArea'; 

export default function AdminLayout() {
    return (
        <div >
            <AdminHeader />
            <AdminLeftSideBar />
            <AdminContentArea />  
        </div>
    );
}