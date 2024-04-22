import styled from "styled-components";

export const SmallButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size || '107px'};
  height: 32px;
  color: #FFFFFF;
  font-style: normal;
  line-height: 17px;
  font-family: Open Sans, sans-serif; 
  font-size: 12px; 
  font-weight: 400; 
  border: none;
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
