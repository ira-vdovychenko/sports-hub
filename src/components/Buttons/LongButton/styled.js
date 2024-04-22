import styled from "styled-components";

export const LongButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: ${props => props.size || '246px'}; 
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
    font-family: Open Sans, sans-serif; 
    font-size: 12px; 
    font-weight: 600; 
    line-height: 14px; 
    font-style: normal;
    line-height: 15.63px; 
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