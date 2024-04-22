import styled from "styled-components";

export const SmallTextButton = styled.button`
  width: ${(props) => props.size || "57px"};
  height: 19px;
  color:  ${props => {
        switch (props.color) {
             case 'hover':
                return '#e02232';
            case 'active':
                return '#c80515'; 
            case 'disabled':
                return '#F7D3D6';
            default:
              return '#d72130';
        }
      }};
  background-color: transparent;
  flex-shrink: 0;
  font-style: normal;
  white-space: nowrap;
  text-align: left; 
  font-family: Open Sans, sans-serif; 
  font-size: 12px; 
  font-weight: 600; 
  line-height: 17px;
  border: none;

  &:hover {
    color: #e02232;
  }

  &:active {
    color: #c80515;
  }

  &:disabled {
    color: #f7d3d6;
  }
`;
export const createItemButton = styled(SmallTextButton)`
  width: 160px;
  height: 32px;
  border: 0.5px dashed #b2b2b2;
  text-align: center;
  color: #b2b2b2;
  padding: 0;
  justify-content: center;

  &:hover {
    color: #b2b2b2;
  }

  &:active {
    color: #b2b2b2;
  }
`;
