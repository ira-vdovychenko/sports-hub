import styled from "styled-components";

export const PrimaryContentArea = styled.div`
    width: var(--main--area-width);
    height: var(--primary--area--height);
    max-width: 1430px;
    max-height: 828px;
    margin-top:200px;
    margin-left:350px;
    row-gap: 30px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const MainArticle = styled.div`
    width: 100%;
    max-height: 460px;
    flex: 1;
    display: flex;
    align-items: center;   
`;

export const MainArticleDescription = styled.div`
    width: 30%;
    height: 50%;
    margin-left: 90%;
    margin-top: 9%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex: 1;
    text-decoration: none;
    overflow: hidden;
    background-color: #fbf7d5;
`;

export const MainArticlePicture = styled.div`
    width: 100%;
    height: 100%;
    max-width: 75%;
    max-height: 460px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-color: lightgray;
    border: 1px dashed lightgray;
    flex: 1;
    overflow: visible;
`;

export const SubArticles = styled.div`
    max-width: 75%;
    column-gap: 46px;
    display: flex;
    flex: 1;    
`;

export const SubArticle = styled.div`
    height: 294px;
    width: 100%;
    flex: 1;
    border: 1px dashed lightgray;
`;

export const SubArticlePicture = styled.img`
    height: 128px;
    width: 100%;
    flex: 1;
    background-color: lightgray;
    border: 1px dashed grey;
`;

export const SubArticleDescription = styled.div`
    text-decoration: none;
`;