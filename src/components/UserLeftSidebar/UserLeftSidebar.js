import React from "react";
import * as Styled from "./styled";

export default function UserLeftSidebar() {
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
