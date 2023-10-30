import styled from "styled-components";

export const PrimaryContentArea = styled.div`
    height: 768px;
    max-height: 828px;
    row-gap: 30px;
    display: flex;
    width: 1059px;
    max-width: 1430px;
    margin-top: 164px;
    margin-left: 254px;
    padding-left: 50px;//забрати
    flex-direction: column;
    overflow: hidden;
`;

export const MainArticle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-height: 460px;
    flex: 1;
`;

export const MainArticleDescription = styled.div`
    background-color: #fbf7d5;
    width: 421px;
    margin-left: 638px;
    margin-top: 86px;
    display: flex;
    height: 291px;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex: 1;
    text-decoration: none;
    overflow: hidden;
`;

export const MainArticlePicture = styled.div`
    overflow: visible;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    height: 100%;
    background-color: lightgray;
    border: 1px dashed #B2B2B2;
    max-width: 76.8%;
    height: 460px;
    flex: 1;
`;

export const SubArticles = styled.div`
    overflow: visible;
    width: 815px;
    height: 294px;
    display: flex;
    column-gap: 36px;
    flex: 1;
    
   /*  margin-left: 13px;
    max-width: 75%; */
`;

export const SubArticle = styled.div`
    width: 100%;
    flex: 1;
    height: 294px;
`;

export const SubArticlePicture = styled.img`
    background-color: lightgray;
    border: 1px dashed #B2B2B2;
    width: 100%;
    flex: 1;
    height: 128px;
`;

export const SubArticleDescription = styled.div`
    text-decoration: none;
`;