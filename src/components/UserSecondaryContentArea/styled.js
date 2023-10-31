import styled from "styled-components";

export const SecondaryContentArea = styled.div`
    width: calc(0.75 * var(--main--area-width));
    height: calc(50vw - var(--margin-value));
    max-width: 1071px;
    max-height: 721px;
    position: absolute;
    top: var(--secondary--area-position);
    margin-left: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

`;

export const SecondaryLeftBox = styled.div`
    height: 100%;
    max-width: calc(50% - 23px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex:1;
    overflow: hidden;
    border: 1px dashed lightgray;
`;

export const SecondaryRightBox = styled.div`
    height: 100%;
    max-width:calc(50% - 23px);
    row-gap: 5%;
    display: flex;
    flex-direction: column;
    border: 1px dashed lightgray;
`;

export const SecondaryLeft = styled.div`
    width: 100%;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
`;

export const SecondaryLeftPicture = styled.div`
    width: 100%;
    height: 70%;
    max-height: 196px;
    background-color: lightgray;
    border: 1px dashed grey; 
`;

export const SecondaryLeftText = styled.div`
    width: 100%;
    height: 30%;
    flex: 1;
    text-decoration: none;   
`;

export const SecondaryLeftSplit = styled.div`
    height: 8%;
    background-color: transparent;
`;

export const SecondaryRight = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    overflow: hidden;
`;

export const SecondaryRightPicture = styled.div`
    width: 30%;
    background-color: lightgray;
    border: 1px dashed grey;
`;

export const SecondaryRightText = styled.div`
    margin-left: 4%;
    justify-content: center;
    align-items: center;
    text-align: left;
    text-decoration: none;
`;

export const ColumnRight = styled.div`
    height: 45%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
