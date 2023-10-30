import styled from "styled-components";

export const SecondaryContentArea = styled.div`
    position: absolute;
    top: 1001px;
    left: 253px;
    max-width: 1071px;
    display: flex;
    flex-direction: row;
    height: 721px;
    width: 816px;
    padding-left: 50px;//забрати
    align-items: center;
    max-height: 721px;
    justify-content: space-between;
    overflow: hidden;

`;

export const SecondaryLeftBox = styled.div`
    height: 100%;
    display: flex;
    max-width: 390px;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    overflow: hidden;
    border: 1px dashed #B2B2B2;
`;

export const SecondaryRightBox = styled.div`
    row-gap: 5%;
    height: 100%;
    display: flex;
    width: 392px;
    flex-direction: column;
    border: 1px dashed #B2B2B2;
`;

export const SecondaryLeft = styled.div`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
`;

export const SecondaryLeftPicture = styled.div`
    background-color: lightgray;
    border: 1px dashed #B2B2B2;
    width: 100%;
    height: 70%;
    max-height: 196px;
`;

export const SecondaryLeftText = styled.div`
    height: 30%;
    flex: 1;
    text-decoration: none;
    width: 100%;
`;

export const SecondaryLeftSplit = styled.div`
    height: 8%;
    background-color: transparent;
`;

export const SecondaryRight = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    overflow: hidden;
`;

export const SecondaryRightPicture = styled.div`
    background-color: lightgray;
    border: 1px dashed #B2B2B2;
    width: 30%;
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
    display: flex;
    width: 100%;
    flex-direction: column;
`;
