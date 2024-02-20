import React from "react";
import * as Styled from "./styled.js";

export const UserLeftSidebar = () => {
    return (
        <div>
            <Styled.UserLeftSidebarMenu>
                <Styled.UserLeftSidebarList>
                    <Styled.UserListItem>List of menu items</Styled.UserListItem>
                </Styled.UserLeftSidebarList>
            </Styled.UserLeftSidebarMenu>

            <Styled.UserLeftMenuIcons>Icons: fb, G, twitter, youtube</Styled.UserLeftMenuIcons>
        </div>
    );
}
