import React, { useState } from 'react';
import Ellipse from '../../assets/Header/Ellipse.png';
import { 
    UserContainer,
    UserAvatar, 
    MenuButton, 
    DropdownMenu, 
    DropdownMenuItem,
    DropdownUserNameItem,
    DropdownEmailItem,
    UpIcon,
    DownIcon
} from './styled';


const UserMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const mySurveys = <DropdownMenuItem>My Surveys</DropdownMenuItem>;
  const userPage = <DropdownMenuItem>My Profile</DropdownMenuItem>;
  const userPassword = <DropdownMenuItem>Change Password</DropdownMenuItem>;

  return (
   
    <UserContainer>
      <MenuButton onClick={toggleDropdown}>
        <UserAvatar src={Ellipse} alt='Ivan Baloh' />
        Ivan Baloh
       {open ? <UpIcon /> : <DownIcon />} 
      </MenuButton>
      {open && (
        <DropdownMenu>
        <DropdownUserNameItem>Ivan Baloh</DropdownUserNameItem>
        <DropdownEmailItem>ivanbalog@gmail.com</DropdownEmailItem>
          {userPage}
          {userPassword}
          {mySurveys}
          <DropdownMenuItem>Team Hub</DropdownMenuItem>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenu>
      )}
    </UserContainer>
  );
};

export default UserMenu;
