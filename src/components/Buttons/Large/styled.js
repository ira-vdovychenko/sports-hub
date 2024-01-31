import styled from "styled-components";

export const LargeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width || '130px'};
    height: 42px;
    background-color: #D72130;
    color: #FFF;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px; 
    letter-spacing: 0.8px;
    /* text-transform: uppercase; */
    border: none;
    padding: 0;

    &:hover {
    background-color: #E02232;
    }

    &:active {
    background-color: #C80515;
    }
`;