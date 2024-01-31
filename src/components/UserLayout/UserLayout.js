import React from "react";
import { UserHeader } from "../UserHeader/UserHeader";
import { UserLeftSidebar}  from "../UserLeftSidebar/UserLeftSidebar";
import { UserRightSidebar } from "../UserRightSidebar/UserRightSidebar";
import { PrimaryContentArea } from "../UserPrimaryContentArea/PrimaryContentArea"
import { SecondaryContentArea } from "../UserSecondaryContentArea/SecondaryContentArea";
import { AdditionalContentArea } from "../UserAdditionalContentArea/AdditionalContentArea";
import { Footer } from "../UserFooter/Footer"; 

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