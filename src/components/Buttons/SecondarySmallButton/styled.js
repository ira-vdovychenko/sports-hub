import styled from "styled-components";

export const SecondarySmallButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size || '107px'};
  height: 32px;
  font-style: normal;
  line-height: 17px;
  font-family: Open Sans, sans-serif; 
  font-size: 12px; 
  font-weight: 600; 
  border: 1px solid #D72130;

  background-color: ${props => {
        switch (props.backgroundColor) {
             case 'hover':
                return '#E02232';
            case 'active':
                return '#C80515'; 
            case 'disabled':
                return '#FFFFFF';
            default:
                return '#FFFFFF';
        }
      }};
  color:  ${props => {
        switch (props.color) {
             case 'hover':
                return '#FFFFFF';
            case 'active':
                return '#FFFFFF'; 
            case 'disabled':
                return '#F7D3D6';
            default:
                return '#D72130';
        }
      }};

  &:hover {
    color: #FFFFFF; 
    background-color: #E02232;       
    }
  &:active {
    color: #FFFFFF;
    background-color: #C80515;
  }
  &:disabled {
    color: #F7D3D6; 
    background-color: #FFFFFF;
    border: 1px solid #F7D3D6;
  }
`;