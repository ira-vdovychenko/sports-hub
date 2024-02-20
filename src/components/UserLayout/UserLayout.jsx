import React from "react";
import { UserHeader } from "../UserHeader/UserHeader.jsx";
import { UserLeftSidebar}  from "../UserLeftSidebar/UserLeftSidebar.jsx";
import { UserRightSidebar } from "../UserRightSidebar/UserRightSidebar.jsx";
import { PrimaryContentArea } from "../UserPrimaryContentArea/PrimaryContentArea.jsx"
import { SecondaryContentArea } from "../UserSecondaryContentArea/SecondaryContentArea.jsx";
import { AdditionalContentArea } from "../UserAdditionalContentArea/AdditionalContentArea.jsx";
import { Footer } from "../UserFooter/Footer.jsx"; 

export const UserLayout = () => (
    <>
        <UserHeader/>
        <PrimaryContentArea />
        <SecondaryContentArea />
        <AdditionalContentArea /> 
        <UserLeftSidebar />
        <UserRightSidebar />
        <Footer />   
    </>
);