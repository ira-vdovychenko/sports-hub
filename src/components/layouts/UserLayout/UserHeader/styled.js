import styled from "styled-components";

export const UserHeader = styled.header`
  width: 100%;
  top: 0;
  z-index: 12;
  position: fixed;
`;

export const UserHeaderNavbar = styled.nav`
  display: flex;
  height: 83px;
  width: 100%;
  justify-content: space-between;
  background-color: #FFFFFF;
  border-bottom: 1px solid #ededed;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 253px;
  margin-right: auto;
  background-color: #fbe7c4;
`;

export const UserSearch = styled.div`
  width: 456px;
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  background-color: #f9f3a7;
`;

export const UserSocialMedia = styled.div`
  width: 317px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #dee9bf;
`;

export const UserProfile = styled.div`
  width: 262px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
`;

export const UserLanguages = styled.div`
  width: 150px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #d7e5f1;
`;
