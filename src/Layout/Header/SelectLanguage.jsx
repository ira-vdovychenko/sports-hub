import React, { useState } from 'react';
import {
    LanguageContainer,  
    LanguageMenuButton, 
    LanguageDropdownMenu,
    LanguageDropdownMenuItem,
    UpIcon,
    DownIcon
} from './styled';

const SelectLanguage = () => {
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };

    return (
       
         <LanguageContainer>
          <LanguageMenuButton onClick={handleClick}>
          <LanguageDropdownMenuItem>EN</LanguageDropdownMenuItem>
            {open ? <UpIcon /> : <DownIcon />} 
          </LanguageMenuButton>
          {open && (
            <LanguageDropdownMenu>
              <LanguageDropdownMenuItem>UA</LanguageDropdownMenuItem>
              <LanguageDropdownMenuItem>DE</LanguageDropdownMenuItem>
              <LanguageDropdownMenuItem>FR</LanguageDropdownMenuItem>
            </LanguageDropdownMenu>
          )}
          </LanguageContainer>
        
      );
    };
    
export default SelectLanguage;
