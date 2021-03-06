import React from 'react';
import * as S from './style';
const about = () => {
    return (
        <S.AboutWrapper>
            <S.About>
                <S.inner>
                    <S.FrontCard>
                        <S.topWrapper>
                            <S.BoldKoreanFont>안영준</S.BoldKoreanFont>
                            <S.NotoSansThinFont>Ahn-Young-Jun</S.NotoSansThinFont>
                        </S.topWrapper>

                        <S.middleWrapper>
                            <S.ItemWrapper>
                                <S.Image></S.Image>
                                <S.content>https://github.com/Ahnyeongjun</S.content>
                            </S.ItemWrapper>
                            <S.ItemWrapper>
                                <S.Image></S.Image>
                                <S.content>010. 7670. 3833</S.content>
                            </S.ItemWrapper>
                            <S.ItemWrapper>
                                <S.Image></S.Image>
                                <S.content>anh479512@gmail.com</S.content>
                            </S.ItemWrapper>
                            <S.ItemWrapper>
                                <S.Image></S.Image>
                                <S.content>https://youngjun.site</S.content>
                            </S.ItemWrapper>
                        </S.middleWrapper>
                    </S.FrontCard>
                    <S.BackCard>
                        <S.topWrapper>
                            <S.BoldKoreanFont>안영준</S.BoldKoreanFont>
                            <S.NotoSansThinFont>Ahn-Young-Jun</S.NotoSansThinFont>
                        </S.topWrapper>
                        <S.middleWrapper>
                            <S.ItemWrapper2>
                                <S.content2>대덕소프트웨어마이스터고등학교</S.content2>
                                <S.content2>2010. 03 ~ 2022. 03</S.content2>
                            </S.ItemWrapper2>
                            <S.ItemWrapper2>
                                <S.content2>한컴인스페이스</S.content2>
                                <S.content2>2021. 07 ~ 현재 진행중</S.content2>
                            </S.ItemWrapper2>
                            <S.ItemWrapper2>
                                <S.content2>한밭대학교</S.content2>
                                <S.content2>2022. 03 ~ 현재 진행중</S.content2>
                            </S.ItemWrapper2> 
                        </S.middleWrapper>
                    </S.BackCard>
                </S.inner>
            </S.About>
            <S.BottomWrapper>
                <S.BottomContent>2021. Profile - basic</S.BottomContent>
            </S.BottomWrapper>
        </S.AboutWrapper>
    );
};
export default about;
