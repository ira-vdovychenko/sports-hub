import styled from "styled-components";


export const AdditionalContentArea = styled.div`
    position: absolute;
    top: 1771px;
    left: 253px;
    padding-left: 50px;//забрати
    max-width: 1071px;
    display: flex;
    flex-direction: column;
    height: 1034px;
    width: 816px;
    margin-top: 51px;
    flex:1;
    align-items: center;
    justify-content: space-between;
    row-gap: 46px;
    overflow: hidden;
`;

export const PhotoOfADayBox = styled.div`
    height: 577px;
    width: 100%;
    border: 1px dashed #B2B2B2;
    background-color: lightgray;
    background-repeat: no-repeat;
    background-position: center;
    flex: 1;
    overflow: hidden;
`;

export const PhotoOfADayDescription = styled.div`
    display: flex;
    flex: 1;
    position: relative;
    top: 85%;
    left: 16px;
    text-align:left;
    text-decoration: none;
    margin-bottom: 0;
`;

export const AdditionalNewsBox = styled.div`
    flex-direction: row;
    display: flex;
    width: 100%;
    height: 294px;
    margin-top: 112px;
`;

export const NewsBoxRow = styled.div`
    flex-direction: column;
    height: 100%;
    display: flex;
    flex: 1;
`;

export const NewsSmallBox = styled.div`
    overflow: hidden;
    display: flex;
    flex: 1;
    height: 33%;
    width: 100%;
`;

export const NewsSmallBoxPhoto = styled.div`
    border: 1px dashed #B2B2B2;
    background-color: lightgray;
    height: 100%;
    width:  40%;
`;

export const NewsSmallBoxText = styled.div`
    text-align: center;
    text-decoration: none;
`;