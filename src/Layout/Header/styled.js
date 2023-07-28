import styled  from "styled-components";
import IconSearch from '../../assets/Header/IconSearch.svg';
import FB from '../../assets/Header/FB.svg';
import Gmail from '../../assets/Header/Gmail.svg';
import Twitter from '../../assets/Header/Twitter.svg';
import upicon from '../../assets/Header/UpIcon.svg';
import downicon from '../../assets/Header/DownIcon.svg';

export const HeaderContainer = styled.header`
width: 100%;
height: 84px;
background-color: #FFF;
border: 1px solid #EDEDED;
display: flex;
justify-content: space-between;
align-items: center;
min-width: 1440px;
`;
//лого
export const Logo = styled.div`
flex-shrink: 0;
background-color: #D72130;
width: 253px;
height: 84px;
display: flex;
justify-content: center;
align-items: center;
span {
color: #FFFBFB;
font-family: Open Sans;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: 28px;
display: flex;
justify-content: center;
align-items: center;
width: 119px;
height: 28px;
}
`;
//пошук
export const SearchContainer = styled.div`
background: #FFF;
flex: 0.316;
height: 83px;
display: flex;
align-items: center;
border-right: 1px solid #EdEdEd;
`;
export const SearchIcon = styled.svg`
display: flex;
justify-content: center;
align-items: center;
width: 14px;
height: 14px;
background-image: url(${IconSearch});
background-size: cover;
`;
export const SearchInput = styled.input`
width: 250px;
border: #FFF;
margin-left: 20px;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
color: #000;
`;
//соц мережі
export const SocialShareContainer = styled.div`
background: #FFF;
flex: 0.22;
height: 83px;
display: flex;
justify-content: space-betweeen;
align-items: center;
border-right: 1px solid #EdEdEd;
`;
export const ShareText = styled.p`
display: flex;
justify-content: center;
align-items: center;
width: 48px;
height: 19px;
flex-shrink: 0;
color: #7F8899;
`;
export const FBIcon = styled.svg`
display: flex;
justify-content: center;
align-items: center;
width: 9px;
height: 19px;
flex-shrink: 0;
margin-left: 33px;
background-image: url(${FB});
background-size: cover;
`;
export const GmailIcon = styled.svg`
display: flex;
justify-content: center;
align-items: center;
width: 21px;
height: 19px;
flex-shrink: 0;
margin-left: 33px;
background-image: url(${Gmail});
background-size: cover;
`;
export const TwitterIcon = styled.svg`
width: 20px;
height: 19px;
flex-shrink: 0;
margin-left: 33px;
background-image: url(${Twitter});
background-size: cover;
`;
//меню користувача
export const UserMenuContainer = styled.div`
height: 83px;
background-color: #FFF;
display: flex;
justify-content: space-around;
align-items: center;
flex: 0.286;
border-right: 1px solid #EdEdEd;
`;
export const UserContainer = styled.div`
display: flex;
margin-left: 14px;
`;
export const UserAvatar = styled.img`
width: 34px;
height: 34px;
margin-right: 10px;
display: flex;
align-items: center;
justify-content: center;
`;
export const MenuButton = styled.button`
background-color: #FFF;
border: none;
font-family: Open Sans;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
align-items: center;  
`;
export const DropdownMenu = styled.div`
position: absolute;
top: 70px;
right: 85px;
background-color: #ffffff;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
width: 178.186px;
height: 286px;
z-index: 10; 
`;
export const DropdownMenuItem = styled.div`
padding: 12px 26.1px;
&:hover {
background-color: rgba(215, 33, 48, 0.11);
}
&:last-child {
border-top: 1px solid #EDEDED; 
}
`;
export const  DropdownUserNameItem = styled.div`
padding: 20px 26.1px 0px ;
font-family: Open Sans;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
color: #000;
`;
export const DropdownEmailItem = styled.div`
padding: 0px 26.1px 5px ;
font-family: Open Sans;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 19px;
color: #7F7B7B;
`;
export const UpIcon = styled.svg`
width: 13px;
height: 8px;
flex-shrink: 0;
margin-left: 6px;
background-image: url(${upicon});
background-size: cover;
`;
export const DownIcon = styled.svg`
width: 13px;
height: 8px;
flex-shrink: 0;
margin-left: 6px;
background-image: url(${downicon});
background-size: cover;
`;
//language
export const LanguageContainer = styled.div`
min-width: 50px;
height: 83px;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 66px;
margin-left: 82px;
`;
export const LanguageMenuButton = styled.button`
background-color: #fff;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
`;
export const LanguageDropdownMenu = styled.div`
position: absolute;
top: 65px;
right: 73px;
background-color: #ffffff;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
width: 56px; 
height: 120px;
z-index: 10;
`;
export const LanguageDropdownMenuItem = styled.div`
padding: 8px;
cursor: pointer;
&:hover {
background-color: rgba(215, 33, 48, 0.11);
}
`;

    


  
