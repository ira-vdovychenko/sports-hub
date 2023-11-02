import styled from "styled-components";


export const AdditionalContentArea = styled.div`
    width: calc(0.75 * var(--main--area-width));
    height: calc(65vw - var(--margin-value));
    max-width: 1071px;
    max-height: 784px;
    position: absolute;
    top: calc(var(--secondary--area-position) + 750px );
    margin-left: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 46px;
    align-items: center;
    flex:1;
    justify-content: space-between;
    overflow: hidden;
`;

export const PhotoOfADayBox = styled.div`
    width: 100%;
    height: 450px;
    background-color: lightgray;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px dashed lightgray;
    flex: 1;
    overflow: hidden;
`;

export const PhotoOfADayDescription = styled.div`
    top: 85%;
    left: 16px;
    position: relative;
    margin-bottom: 0;
    display: flex;
    flex: 1;
    text-align: left;
    text-decoration: none;
`;

export const AdditionalNewsBox = styled.div`
    width: 100%;
    height: 40%;
    flex-direction: row;
    display: flex;
    border: 1px dashed lightgray;
`;

export const NewsBoxRow = styled.div`
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const NewsSmallBox = styled.div`
    width: 100%;
    height: 33%;
    display: flex;
    flex: 1;
    overflow: hidden;
`;

export const NewsSmallBoxPhoto = styled.div`
    width:  40%;
    height: 100%;
    border: 1px dashed grey;
    background-color: lightgray;   
`;

export const NewsSmallBoxText = styled.div`
    text-align: center;
    text-decoration: none;
`;