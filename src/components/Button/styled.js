import styled from 'styled-components'

const StyledButton = styled.button` 
flex-shrink: 0;
justify-content: center;
align-items: center;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
width: ${(props) => {
    if (props.size === 'small') {
        return '137px';
    } else if (props.size === 'large') {
        return '130px';
    } else if (props.size === 'long') {
        return '246px';
    }
}};
height: ${(props) => {
    if (props.size === 'small' || props.size ==='long') {
        return '32px';
    } else if (props.size === 'large') {
        return '42px';
    }
}};
font-size: ${(props) => {
    if (props.size === 'small' || props.size === 'long') {
        return '12px';
    } else if (props.size === 'large') {
        return '14px';
    }
}};
line-height: ${(props) => {
    if (props.size === 'small') {
        return '17px';
    } else if (props.size === 'large') {
        return '19px';
    } else if (props.size === 'long') {
        return '15.626px';
    }
}};
color: ${(props) => {
    if (props.state === 'regular' && props.variant === 'vote') {
        return '#D72130';
    } else if (props.state === 'disabled' && props.variant === 'vote') {
        return 'rgba(215, 33, 48, 0.11)';
    } else {
        return '#FFF';
    }
}};
border: ${(props) => {
    if (props.state === 'regular' && props.variant === 'vote') {
        return '1px solid #C63638';
    } else if (props.state === 'disabled' && props.variant === 'vote') {
        return '1px solid #F7D3D6';
    } else {
        return 'none';
    }
}};
background: ${(props) => {
    if (props.state === 'regular' && props.variant === 'vote') {
      return 'none';
    }  else if (props.state === 'disabled' && props.variant === 'vote') {
      return 'none';
    } else if (props.state === 'regular') {
      return '#D72130';
    } else if (props.state === 'hover') {
      return '#E02232';
    } else if (props.state === 'pressed') {
      return '#C80515';
    } else if (props.state === 'disabled') {
      return 'rgba(215, 33, 48, 0.11)';
    }
  }};
`

export default StyledButton;