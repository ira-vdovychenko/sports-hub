import React from "react";
import * as Styled from "./styled.js";

const text = 'Lorem ipsum dolor sit amet, consectetur';

export const PrimaryContentArea = () => {
    return (
        <Styled.PrimaryContentArea>
            <Styled.MainArticle>
                <Styled.MainArticlePicture>
                    <Styled.MainArticleDescription>Title, Subtitle, publishing date, CTA</Styled.MainArticleDescription>
                </Styled.MainArticlePicture>   
            </Styled.MainArticle>

            <Styled.SubArticles>
                <Styled.SubArticle>
                    <Styled.SubArticlePicture/>
                    <Styled.SubArticleDescription>{text}</Styled.SubArticleDescription>
                </Styled.SubArticle>

                <Styled.SubArticle>
                    <Styled.SubArticlePicture/>
                    <Styled.SubArticleDescription>{text}</Styled.SubArticleDescription>
                </Styled.SubArticle>

                <Styled.SubArticle>
                    <Styled.SubArticlePicture/>
                    <Styled.SubArticleDescription>{text}</Styled.SubArticleDescription>
                </Styled.SubArticle>

                <Styled.SubArticle>
                    <Styled.SubArticlePicture/>
                    <Styled.SubArticleDescription>{text}</Styled.SubArticleDescription>
                </Styled.SubArticle>
            </Styled.SubArticles>

        </Styled.PrimaryContentArea>
    )
}