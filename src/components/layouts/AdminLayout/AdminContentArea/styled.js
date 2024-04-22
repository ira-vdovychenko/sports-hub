import styled from "styled-components";
   
export const ContentArea = styled.div`
    width: calc(100% - 2 * var(--margin-value));
    height: calc(100% - var(--margin-value));
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: var(--margin-value);
    border: 1px dashed #B2B2B2;
    background: rgba(237, 237, 237, 0.3);
`;