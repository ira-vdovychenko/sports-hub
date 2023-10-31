import styled from "styled-components";

export const UserLeftSidebarMenu = styled.div`
    width:253px;
    height: var(--menu--size);
    position: absolute;
    top: 83px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: #ffff;
`;

export const UserLeftSidebarList = styled.ul`
    width: 100%;
    height: var(--menu--size);
    display: inline-block;
    align-items: stretch;
    justify-content: center;
    margin-top: auto;
    list-style: none;
    background-color: #ecd3e5;   
`;

export const UserListItem = styled.li`
    width: 130px;
`;

export const UserLeftMenuIcons = styled.div`
    width:253px;
    min-height:var(--icon--size);
    top: var(--icon--position);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d7e4f1;  
`;