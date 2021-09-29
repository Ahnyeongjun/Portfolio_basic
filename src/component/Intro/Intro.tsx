import React from 'react';
import * as S from './style';
const Intro = () => {
    var winH = window.innerHeight;
    const onclick = (num: number) => {
        document.getElementById(`scene${num}`).classList.add('fallen');
        document.getElementById(`cube${num}`).classList.add('fallen');

        switch (num) {
            case 3:
                document.getElementById(`scene1`).classList.add('fallen');
                document.getElementById(`cube1`).classList.add('fallen');
                break;
            case 4:
                document.getElementById(`scene1`).classList.add('fallen');
                document.getElementById(`scene2`).classList.add('fallen');
                document.getElementById(`cube1`).classList.add('fallen');
                document.getElementById(`cube2`).classList.add('fallen');
                break;
            case 5:
                document.getElementById(`scene2`).classList.add('fallen');
                document.getElementById(`cube2`).classList.add('fallen');
                break;
            case 6:
                if (
                    document.getElementById(`scene3`).classList.contains(`fallen`) ||
                    document.getElementById(`scene4`).classList.contains('fallen')
                ) {
                    document.getElementById(`scene3`).classList.add('fallen');
                    document.getElementById(`cube3`).classList.add('fallen');

                    break;
                } else if (document.getElementById(`scene1`).classList.contains(`fallen`)) {
                    document.getElementById(`scene3`).classList.add('fallen');
                    document.getElementById(`cube3`).classList.add('fallen');

                    break;
                } else if (document.getElementById(`scene2`).classList.contains(`fallen`)) {
                    document.getElementById(`scene1`).classList.add('fallen');
                    document.getElementById(`scene3`).classList.add('fallen');
                    document.getElementById(`scene4`).classList.add('fallen');
                    document.getElementById(`cube1`).classList.add('fallen');
                    document.getElementById(`cube3`).classList.add('fallen');
                    document.getElementById(`cube4`).classList.add('fallen');

                    break;
                } else document.getElementById(`scene1`).classList.add('fallen');
                document.getElementById(`scene2`).classList.add('fallen');
                document.getElementById(`scene3`).classList.add('fallen');
                document.getElementById(`scene4`).classList.add('fallen');
                document.getElementById(`scene5`).classList.add('fallen');
                document.getElementById(`cube1`).classList.add('fallen');
                document.getElementById(`cube2`).classList.add('fallen');
                document.getElementById(`cube3`).classList.add('fallen');
                document.getElementById(`cube4`).classList.add('fallen');
                document.getElementById(`cube5`).classList.add('fallen');
                break;
            case 7:
                if (document.getElementById('scene4').classList.contains(`fallen`)) {
                    break;
                } else document.getElementById(`scene1`).classList.add('fallen');
                document.getElementById(`scene2`).classList.add('fallen');
                document.getElementById(`scene3`).classList.add('fallen');
                document.getElementById(`scene4`).classList.add('fallen');
                document.getElementById(`scene5`).classList.add('fallen');
                document.getElementById(`cube1`).classList.add('fallen');
                document.getElementById(`cube2`).classList.add('fallen');
                document.getElementById(`cube3`).classList.add('fallen');
                document.getElementById(`cube4`).classList.add('fallen');
                document.getElementById(`cube5`).classList.add('fallen');
                break;
            case 8:
                if (document.getElementById('scene5').classList.contains(`fallen`)) {
                    break;
                } else if (document.getElementById(`scene2`).classList.contains(`fallen`)) {
                    document.getElementById(`scene5`).classList.add('fallen');
                    document.getElementById(`cube5`).classList.add('fallen');
                    break;
                } else if (document.getElementById(`scene1`).classList.contains(`fallen`)) {
                    document.getElementById(`scene2`).classList.add('fallen');
                    document.getElementById(`scene4`).classList.add('fallen');
                    document.getElementById(`scene5`).classList.add('fallen');
                    document.getElementById(`cube2`).classList.add('fallen');
                    document.getElementById(`cube4`).classList.add('fallen');
                    document.getElementById(`cube5`).classList.add('fallen');
                    break;
                }

                document.getElementById(`scene1`).classList.add('fallen');
                document.getElementById(`scene2`).classList.add('fallen');
                document.getElementById(`scene3`).classList.add('fallen');
                document.getElementById(`scene4`).classList.add('fallen');
                document.getElementById(`scene5`).classList.add('fallen');
                document.getElementById(`cube1`).classList.add('fallen');
                document.getElementById(`cube2`).classList.add('fallen');
                document.getElementById(`cube3`).classList.add('fallen');
                document.getElementById(`cube4`).classList.add('fallen');
                document.getElementById(`cube5`).classList.add('fallen');
                break;
        }
    };
    return (
        <S.Intro>
            <S.Wrapper>
                <S.AniMationWrapper>
                    <S.FloorWrapper>
                        <S.scene boxNum={1} id={'scene1'} onClick={() => onclick(1)}>
                            <S.cube rotateX={10} rotateY={10} id={'cube1'}>
                                <S.cube__face className="front">HI</S.cube__face>
                                <S.cube__face className="back">HI</S.cube__face>
                                <S.cube__face className="right">HI</S.cube__face>
                                <S.cube__face className="left">HI</S.cube__face>
                                <S.cube__face className="top">HI</S.cube__face>
                                <S.cube__face className="bottom">HI</S.cube__face>
                            </S.cube>
                        </S.scene>
                        <S.scene boxNum={1} id={'scene2'} onClick={() => onclick(2)}>
                            <S.cube rotateX={10} rotateY={10} id={'cube2'}>
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
                        <S.scene boxNum={2} id={'scene3'} onClick={() => onclick(3)}>
                            <S.cube rotateX={10} rotateY={10} id={'cube3'}>
                                <S.cube__face className="front">Ahn</S.cube__face>
                                <S.cube__face className="back">I</S.cube__face>
                                <S.cube__face className="right">I</S.cube__face>
                                <S.cube__face className="left">I</S.cube__face>
                                <S.cube__face className="top">I</S.cube__face>
                                <S.cube__face className="bottom">I</S.cube__face>
                            </S.cube>
                        </S.scene>
                        <S.scene boxNum={2} id={'scene4'} onClick={() => onclick(4)}>
                            <S.cube rotateX={10} rotateY={10} id={'cube4'}>
                                <S.cube__face className="front">Young</S.cube__face>
                                <S.cube__face className="back">A</S.cube__face>
                                <S.cube__face className="right">A</S.cube__face>
                                <S.cube__face className="left">A</S.cube__face>
                                <S.cube__face className="top">A</S.cube__face>
                                <S.cube__face className="bottom">A</S.cube__face>
                            </S.cube>
                        </S.scene>
                        <S.scene boxNum={2} id={'scene5'} onClick={() => onclick(5)}>
                            <S.cube rotateX={10} rotateY={0} id={'cube5'}>
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
                        <S.scene boxNum={3} id={'scene6'} onClick={() => onclick(6)}>
                            <S.cube rotateX={7} rotateY={-20} id={'cube6'}>
                                <S.cube__face className="front">JAVA</S.cube__face>
                                <S.cube__face className="back" />
                                <S.cube__face className="right" />
                                <S.cube__face className="left" />
                                <S.cube__face className="top" />
                                <S.cube__face className="bottom" />
                            </S.cube>
                        </S.scene>
                        <S.scene boxNum={3} id={'scene7'} onClick={() => onclick(7)}>
                            <S.cube rotateX={10} rotateY={0} id={'cube7'}>
                                <S.cube__face className="front">JS</S.cube__face>
                                <S.cube__face className="back" />
                                <S.cube__face className="right" />
                                <S.cube__face className="left" />
                                <S.cube__face className="top" />
                                <S.cube__face className="bottom" />
                            </S.cube>
                        </S.scene>
                        <S.scene boxNum={3} id={'scene8'} onClick={() => onclick(8)}>
                            <S.cube rotateX={7} rotateY={20} id={'cube8'}>
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
                <S.AniMationWrapper>
                    <svg width="153" height="154" viewBox="0 0 153 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 1" filter="url(#filter0_d)">
                            <g id="left_arms">
                                <path
                                    id="Vector"
                                    d="M48.4999 68.9472C50.2028 65.3568 42.3118 58.049 30.8749 52.6246C19.438 47.2003 8.78617 45.7136 7.08331 49.304C5.38045 52.8943 13.2714 60.2022 24.7083 65.6266C36.1452 71.0509 46.797 72.5376 48.4999 68.9472Z"
                                    fill="#2F2E41"
                                />
                            </g>
                            <g id="right_arms">
                                <path
                                    id="right_arms_2"
                                    d="M142.889 105.927C145.936 103.376 141.819 93.4406 133.693 83.7352C125.567 74.0299 116.509 68.2301 113.463 70.7811C110.416 73.3321 114.533 83.2678 122.659 92.9732C130.785 102.679 139.843 108.478 142.889 105.927Z"
                                    fill="#2F2E41"
                                />
                            </g>
                            <g id="right_legs">
                                <path id="Vector_2" d="M98.8231 116.37H84.8974V141.32H98.8231V116.37Z" fill="#2F2E41" />
                                <path
                                    id="Vector_3"
                                    d="M87.2183 145.962C93.6274 145.962 98.8231 144.013 98.8231 141.61C98.8231 139.206 93.6274 137.258 87.2183 137.258C80.8092 137.258 75.6136 139.206 75.6136 141.61C75.6136 144.013 80.8092 145.962 87.2183 145.962Z"
                                    fill="#2F2E41"
                                />
                            </g>
                            <g id="right_legs_2">
                                <path id="Vector_4" d="M70.9717 116.37H57.0461V141.32H70.9717V116.37Z" fill="#2F2E41" />
                                <path
                                    id="Vector_5"
                                    d="M59.367 145.382C65.7761 145.382 70.9717 143.433 70.9717 141.03C70.9717 138.626 65.7761 136.678 59.367 136.678C52.9579 136.678 47.7622 138.626 47.7622 141.03C47.7622 143.433 52.9579 145.382 59.367 145.382Z"
                                    fill="#2F2E41"
                                />
                            </g>
                            <g id="body">
                                <path
                                    id="Vector_6"
                                    d="M79.4213 126.234C104.737 126.234 125.26 105.711 125.26 80.3951C125.26 55.0791 104.737 34.5565 79.4213 34.5565C54.1053 34.5565 33.5826 55.0791 33.5826 80.3951C33.5826 105.711 54.1053 126.234 79.4213 126.234Z"
                                    fill="#2F2E41"
                                />
                                <path
                                    id="Vector_7"
                                    d="M65.0282 22.7745C69.1212 6.29098 87.1886 -3.40927 105.383 1.10847C123.577 5.62621 135.008 22.6512 130.915 39.1348C126.822 55.6184 113.243 55.6716 95.0486 51.1538C76.8544 46.636 60.9352 39.2582 65.0282 22.7745Z"
                                    fill="#6C63FF"
                                />
                                <path
                                    id="Vector_8"
                                    d="M72.5683 86.0054C81.0087 86.0054 87.8509 79.1631 87.8509 70.7228C87.8509 62.2824 81.0087 55.4402 72.5683 55.4402C64.128 55.4402 57.2857 62.2824 57.2857 70.7228C57.2857 79.1631 64.128 86.0054 72.5683 86.0054Z"
                                    fill="white"
                                />
                            </g>
                            <g id="eye">
                                <path
                                    id="Vector_9"
                                    d="M66.2872 70.339C69.1006 70.339 71.3814 68.0582 71.3814 65.2448C71.3814 62.4313 69.1006 60.1506 66.2872 60.1506C63.4737 60.1506 61.193 62.4313 61.193 65.2448C61.193 68.0582 63.4737 70.339 66.2872 70.339Z"
                                    fill="#3F3D56"
                                />
                            </g>
                            <g id="mouse">
                                <path
                                    id="mouse_2"
                                    d="M82.1554 102.563C82.637 105.221 82.0437 107.961 80.506 110.181C78.9683 112.401 76.6121 113.92 73.955 114.404C71.2979 114.887 68.5575 114.296 66.336 112.76C64.1146 111.224 62.5938 108.869 62.108 106.213V106.213L62.1044 106.193C61.102 100.656 65.383 98.6967 70.9199 97.6944C76.4568 96.6921 81.1531 97.0263 82.1554 102.563Z"
                                    fill="white"
                                />
                            </g>
                        </g>
                        <defs>
                            <filter
                                id="filter0_d"
                                x="0"
                                y="0"
                                width="152.406"
                                height="153.962"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </S.AniMationWrapper>
            </S.Wrapper>
        </S.Intro>
    );
};

export default Intro;
