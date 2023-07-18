import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled.js';
import {StyleSheetManager} from 'styled-components';

const Button = ({size, state, variant, children, onClick}) => {
    
    return (
    
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'size' && prop !== 'state' && prop !== 'variant'}>
            <StyledButton size={size} state={state} variant={variant} onClick={onClick}>
            {children}  
            </StyledButton>
        </StyleSheetManager>
    
    )
}
Button.propTypes = {
    size: PropTypes.oneOf(['small', 'large', 'long']),
    state: PropTypes.oneOf(['regular', 'hover', 'pressed', 'disabled']),
    variant: PropTypes.oneOf(['vote', 'submit']),
    children: PropTypes.node,
    onClick: PropTypes.func, 
  };

export default Button;