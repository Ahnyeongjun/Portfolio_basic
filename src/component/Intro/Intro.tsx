import React from 'react';
import * as S from './style';
const Intro = () => {
    var winH = window.innerHeight;
    return (
        <S.Intro>
            <S.Wrapper>
                <S.AniMationWrapper>
                    <S.FloorWrapper>
                        <S.scene boxNum={1}>
                            <S.cube rotateX={10} rotateY={10}>
                                <S.cube__face className="front">HI</S.cube__face>
                                <S.cube__face className="back">HI</S.cube__face>
                                <S.cube__face className="right">HI</S.cube__face>
                                <S.cube__face className="left">HI</S.cube__face>
                                <S.cube__face className="top">HI</S.cube__face>
                                <S.cube__face className="bottom">HI</S.cube__face>
                            </S.cube>
                        </S.scene>
                        <S.scene boxNum={1}>
                            <S.cube rotateX={10} rotateY={10}>
                                <S.cube__face className="front">I'M</S.cube__face>
                                <S.cube__face className="back">I'M</S.cube__face>
                                <S.cube__face className="right">I'M</S.cube__face>
                                <S.cube__face className="left">I'M</S.cube__face>
                                <S.cube__face className="top">I'M</S.cube__face>
                                <S.cube__face className="bottom">I'M</S.cube__face>
                            </S.cube>
                        </S.scene>
                    </S.FloorWrapper>
                    <S.FloorWrapper>
                        <S.scene boxNum={2}>
                            <S.cube rotateX={10} rotateY={10}>
                                <S.cube__face className="front">Ahn</S.cube__face>
                                <S.cube__face className="back">I</S.cube__face>
                                <S.cube__face className="right">I</S.cube__face>
                                <S.cube__face className="left">I</S.cube__face>
                                <S.cube__face className="top">I</S.cube__face>
                                <S.cube__face className="bottom">I</S.cube__face>
                            </S.cube>
                        </S.scene>
                        <S.scene boxNum={2}>
                            <S.cube rotateX={10} rotateY={10}>
                                <S.cube__face className="front">Young</S.cube__face>
                                <S.cube__face className="back">A</S.cube__face>
                                <S.cube__face className="right">A</S.cube__face>
                                <S.cube__face className="left">A</S.cube__face>
                                <S.cube__face className="top">A</S.cube__face>
                                <S.cube__face className="bottom">A</S.cube__face>
                            </S.cube>
                        </S.scene>
                        <S.scene boxNum={2}>
                            <S.cube rotateX={10} rotateY={0}>
                                <S.cube__face className="front">Jun</S.cube__face>
                                <S.cube__face className="back">M</S.cube__face>
                                <S.cube__face className="right">M</S.cube__face>
                                <S.cube__face className="left">M</S.cube__face>
                                <S.cube__face className="top">M</S.cube__face>
                                <S.cube__face className="bottom">M</S.cube__face>
                            </S.cube>
                        </S.scene>
                    </S.FloorWrapper>
                    <S.FloorWrapper>
                        <S.scene boxNum={3}>
                            <S.cube rotateX={7} rotateY={-20}>
                                <S.cube__face className="front">JAVA</S.cube__face>
                                <S.cube__face className="back" />
                                <S.cube__face className="right" />
                                <S.cube__face className="left" />
                                <S.cube__face className="top" />
                                <S.cube__face className="bottom" />
                            </S.cube>
                        </S.scene>
                        <S.scene boxNum={3}>
                            <S.cube rotateX={10} rotateY={0}>
                                <S.cube__face className="front">JS</S.cube__face>
                                <S.cube__face className="back" />
                                <S.cube__face className="right" />
                                <S.cube__face className="left" />
                                <S.cube__face className="top" />
                                <S.cube__face className="bottom" />
                            </S.cube>
                        </S.scene>
                        <S.scene boxNum={3}>
                            <S.cube rotateX={7} rotateY={20}>
                                <S.cube__face className="front">TS</S.cube__face>
                                <S.cube__face className="back" />
                                <S.cube__face className="right" />
                                <S.cube__face className="left" />
                                <S.cube__face className="top" />
                                <S.cube__face className="bottom" />
                            </S.cube>
                        </S.scene>
                    </S.FloorWrapper>
                </S.AniMationWrapper>
                <S.AniMationWrapper></S.AniMationWrapper>
            </S.Wrapper>
        </S.Intro>
    );
};

export default Intro;
