import React from "react";
import * as Styled from "./styled";

const text = 'Lorem ipsum dolor sit amet, consectetur';

export const AdditionalContentArea = () => {
    return (
        <Styled.AdditionalContentArea>

            <Styled.PhotoOfADayBox>
                <Styled.PhotoOfADayDescription>{text}</Styled.PhotoOfADayDescription>
            </Styled.PhotoOfADayBox>

            <Styled.AdditionalNewsBox>

                <Styled.NewsBoxRow>

                    <Styled.NewsSmallBox>
                        <Styled.NewsSmallBoxPhoto/>
                        <Styled.NewsSmallBoxText>{text}</Styled.NewsSmallBoxText>
                    </Styled.NewsSmallBox>
                    <Styled.NewsSmallBox>
                        <Styled.NewsSmallBoxPhoto/>
                        <Styled.NewsSmallBoxText>{text}</Styled.NewsSmallBoxText>
                    </Styled.NewsSmallBox>
                    <Styled.NewsSmallBox>
                        <Styled.NewsSmallBoxPhoto/>
                        <Styled.NewsSmallBoxText>{text}</Styled.NewsSmallBoxText>
                    </Styled.NewsSmallBox>

                </Styled.NewsBoxRow>
                
                <Styled.NewsBoxRow>

                    <Styled.NewsSmallBox>
                        <Styled.NewsSmallBoxPhoto/>
                        <Styled.NewsSmallBoxText>{text}</Styled.NewsSmallBoxText>
                    </Styled.NewsSmallBox>
                    <Styled.NewsSmallBox>
                        <Styled.NewsSmallBoxPhoto/>
                        <Styled.NewsSmallBoxText>{text}</Styled.NewsSmallBoxText>
                    </Styled.NewsSmallBox>
                    <Styled.NewsSmallBox>
                        <Styled.NewsSmallBoxPhoto/>
                        <Styled.NewsSmallBoxText>{text}</Styled.NewsSmallBoxText>
                    </Styled.NewsSmallBox>

                </Styled.NewsBoxRow>



            </Styled.AdditionalNewsBox>

        </Styled.AdditionalContentArea>
    )
}