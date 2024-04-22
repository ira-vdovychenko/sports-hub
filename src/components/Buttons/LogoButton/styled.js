import styled from "styled-components";

export const LogoButton = styled.button`
    width: 253px;
    height: 83px;
    background: ${props => props.backgroundColor || '#D72130'};  
    color: #FFFBFB;
    font-style: normal;
    line-height: 28px;  
    font-family: Open Sans, sans-serif; 
    font-size: 22px; 
    font-weight: 600;  
    border: 0;
`;