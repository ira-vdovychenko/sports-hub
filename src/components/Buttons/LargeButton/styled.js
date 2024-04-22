import styled from "styled-components";

export const LargeButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    width: ${props => props.size || '130px'}; 
    background-color: ${props => {
        switch (props.backgroundColor) {
             case 'hover':
                return '#E02232';
            case 'active':
                return '#C80515'; 
            case 'disabled':
                return 'F7D3D6';
            default:
                return '#D72130';
        }
    }};
    color: #FFF;
    font-family: ${props => props.fontFamily || 'Open Sans, sans-serif'}; 
    font-size: ${props => props.fontSize || '12px'}; 
    font-weight: ${props => props.fontWeight || 700}; 
    line-height: 14px; 
    font-style: normal;
    line-height: 14px; 
    border: none;
    padding: 0;
    
    &:hover {
        background-color: #E02232;
    }

    &:active {
        background-color: #C80515;
    }

    &:disabled {
        background-color: #F7D3D6;
    }
`;