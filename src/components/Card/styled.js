import styled from "styled-components";

export const CardWrapper = styled.div`
    width: ${(props) => {
        if (props.size === "small") {
            return "390px"
        } else if (props.size === "medium") {
            return "202px"
        } else if (props.size === "large") {
            return "826px"
        }
    }};
    height: ${(props) => {
        if (props.size === "small") {
            return "98px"
        } else if (props.size === "medium") {
            return "294px"
        } else if (props.size === "large") {
            return "182px"
        }
    }};
    flex-shrink: 0;
    background: #FFF;
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.11);
    display: ${(props) => {
        if (props.size === "small") {
            return "flex"
        } else if (props.size === "medium") {
            return "block"
        } else if (props.size === "large") {
            return "flex"
        } 
    }};
`;

export const CardContent = styled.div`
    width: ${(props) => {
        if (props.size === "small") {
            return "150px"
        } else if (props.size === "medium") {
            return "152px"
        } else if (props.size === "large") {
            return "427px"
        }
    }};
    display: flex;
    align-items: flex-start;
    flex-direction: column; 
`;

export const CardTitle = styled.h2`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #2B2F43;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
`;

export const CardDescription = styled.p`
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #7F7B7B;
    text-align: left;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
`;

export const CardImageWrapper = styled.div`
    width: ${(props) => {
        if (props.size === "small") {
            return "150px"
        } else if (props.size === "medium") {
            return "178px"
        } else if (props.size === "large") {
            return "258px"
        }
    }};
    height: ${(props) => {
        if (props.size === "small") {
            return "97px"
        } else if (props.size === "medium") {
            return "128px"
        } else if (props.size === "large") {
            return "158px"
        }
    }};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardImage = styled.img`
    width: 90%;
    height: 90%;
    object-fit: cover;
`;

export const CardGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 390px;
  height: 294px;
  justify-content: space-between;
`;






 
  



