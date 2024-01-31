import React from "react";
import * as Styled from "./styled";

const text = 'Lorem ipsum dolor sit amet, consectetur'; 

export const SecondaryContentArea = () => {
    return (
        <Styled.SecondaryContentArea>

            <Styled.SecondaryLeftBox>

                <Styled.SecondaryLeft>
                <Styled.SecondaryLeftPicture/>
                    <Styled.SecondaryLeftText>{text}</Styled.SecondaryLeftText>   
                </Styled.SecondaryLeft>

                <Styled.SecondaryLeftSplit/>

                <Styled.SecondaryLeft>
                <Styled.SecondaryLeftPicture/>
                    <Styled.SecondaryLeftText>{text}</Styled.SecondaryLeftText>  
                </Styled.SecondaryLeft>

            </Styled.SecondaryLeftBox>

            <Styled.SecondaryRightBox>

                <Styled.ColumnRight>
                    <Styled.SecondaryRight>
                    <Styled.SecondaryRightPicture/>
                        <Styled.SecondaryRightText>{text}</Styled.SecondaryRightText>
                    </Styled.SecondaryRight>
                    <Styled.SecondaryRight>
                    <Styled.SecondaryRightPicture/>
                        <Styled.SecondaryRightText>{text}</Styled.SecondaryRightText>
                    </Styled.SecondaryRight>
                    <Styled.SecondaryRight>
                    <Styled.SecondaryRightPicture/>  
                        <Styled.SecondaryRightText>{text}</Styled.SecondaryRightText>
                    </Styled.SecondaryRight>
                </Styled.ColumnRight>

                <Styled.ColumnRight>
                    <Styled.SecondaryRight>
                    <Styled.SecondaryRightPicture/>  
                        <Styled.SecondaryRightText>{text}</Styled.SecondaryRightText>
                    </Styled.SecondaryRight>
                    <Styled.SecondaryRight>
                    <Styled.SecondaryRightPicture/> 
                        <Styled.SecondaryRightText>{text}</Styled.SecondaryRightText>
                    </Styled.SecondaryRight>
                    <Styled.SecondaryRight>
                    <Styled.SecondaryRightPicture/>
                        <Styled.SecondaryRightText>{text}</Styled.SecondaryRightText>
                    </Styled.SecondaryRight>
                </Styled.ColumnRight>

            </Styled.SecondaryRightBox>

        </Styled.SecondaryContentArea>
    );
}