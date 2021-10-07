import styled from 'styled-components';

export const Intro = styled.div`
    height: calc(100vh - 70px);
    min-height: 830px; //900px 70은 header
    width: 1300px;
    margin: 0 auto;
    background: white;
`;
export const Header = styled.div`
    height: 70px;
    background: #2c2c2c;
`;
export const SvgBox = styled.div`
    height: 500px;
    width: 500px;
    bottom: 105px;
    right: calc(0.5 * (100vw - 1200px));
    position: absolute;
    @media only screen and (max-height: 900px) {
        top: 310px;
    }
`;
export const widthWrapper = styled.div`
    bottom: 60px;
    height: 5px;
    margin-left: 5px;
    right: calc(0.5 * (100vw - 1300px));
    background: rgb(201, 156, 245);
    position: absolute;
    width: 1300px;
    display: flex;
    @media only screen and (max-height: 900px) {
        top: 850px;
    }
`;
export const ItemWrapper = styled.div`
    height: 70px;
    padding-top: 100px;
    display: flex;
    @media only screen and (max-height: 1000px) {
        padding-top: 90px;
    }
`;
export const BtnWrapper = styled.div`
    display: flex;
    margin-left: 400px;
    justify-content: space-between;
`;
export const Btn = styled.div`
    margin: 0 12px;
    margin-top: 10px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    &.one {
        background: #f5c29c;
    }
    &.two {
        background: #bef59c;
    }
    &.three {
        background: #ee9cf5;
    }
    &.four {
        background: #c99cf5;
    }
`;
export const NotoSansBoldFont = styled.div`
    margin-top: 120px;
    color: #2c2828;
    font-family: NotoSans_Bold !important;
    font-size: 200px;
`;
export const NotoSansThinFont = styled.div`
    color: #2c2828;
    margin-left: 450px;
    font-family: NotoSans_Thin !important;
    font-size: 150px;
`;
export const heightWrapper = styled.div`
    position: absolute;
    height: 65vh;
    width: 5px;
    bottom: 65px;
    right: calc(0.5 * (100vw - 1300px));
    background: rgb(201, 156, 245);
    @media only screen and (max-height: 900px) {
        top: 260px;
        height: 590px;
    }
`;

export const decorate = styled.div`
    width: 240px;
    height: 100%;
    background: rgb(201, 156, 245);
`;
export const decorate2 = styled.div`
    margin-left: 180px;
    width: 150px;
    height: 100%;
    background: rgb(201, 156, 245);
`;

export const widthContent = styled.div`
    font-family: NotoSans_KR !important;
    font-size: 1.1rem;
    width: auto;
    line-height: 10px;
    color: rgb(201, 156, 245);
    padding-right: 20px;
    background: white;
`;
export const heightContent = styled.div`
    height: auto;
    width: 100%;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-family: NotoSans_KR !important;
    font-size: 1.1rem;
    color: rgb(201, 156, 245);
    white-space: nowrap;
    background: white;
    padding-bottom: 20px;
`;
