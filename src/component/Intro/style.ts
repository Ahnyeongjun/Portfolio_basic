import styled from 'styled-components';
import { HoverSway, FallenBlock, shakeAA } from './animation';
export const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
`;
export const Intro = styled.div`
    height: 100vh;
    width: 100%;
    background: #1d1d1d;
`;
export const IntroWrapper = styled.div`
    // background: white;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 30vw;
    width: 30vw;
    margin: 10vw 0vw 0vw 15vw;
`;
export const AnimationWrapper = styled.div`
    display: flex;
    padding-top: 10vw;
`;
export const BlockWrapper = styled.div`
    padding-top: 10vw;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30vw;
    min-height: 1000px;
`;
export const header = styled.header`
    height: 8vh;
    width: 100vw;
    background: skyblue;
`;
export const BtnWrapper = styled.div`
    color: white;
`;
export const TextWrapper = styled.div`
    padding: 10vw 3vw 10vw 10vw;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 40vw;
    min-height: 1000px;
`;

export const scene = styled.div<{ boxNum: number }>`
    width: 180px;
    height: 180px;
    perspective: 600px;
    margin-left: 30px;
    position: relative;

    :hover {
        animation: ${HoverSway} 0.3s linear infinite both;
    }
    &.fallen {
        animation: ${(props) => FallenBlock(props.boxNum)} 1s linear 0s forwards;
    }
`;
export const Title = styled.div`
    position: relative;
    margin-bottom: 2vh;
    font-weight: bold;
    color: white;
    font-size: 5rem;
`;
export const Content = styled.div`
    color: white;
    line-height: 1.5rem;
`;

export const cube = styled.div<{ rotateY: number; rotateX: number }>`
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: ${(props) => `translateZ(-80px) rotateY(${props.rotateY}deg) rotateX(${props.rotateX}deg)`};
    &.fallen {
        animation: ${(props) => shakeAA()} 2s linear 0s forwards;
    }
`;

export const FloorWrapper = styled.div`
    margin: 0 auto;
    display: flex;
`;
export const cube__face = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 2.5em;
    font-family: monospace;
    display: flex;
    justify-content: center;
    align-items: center;

    &.front {
        background: rgba(98, 206, 203);
        transform: rotateY(0deg) translateZ(90px);
    }

    &.back {
        background: rgba(98, 155, 206);
        transform: rotateY(180deg) translateZ(90px);
    }

    &.right {
        background: rgba(98, 101, 206);
        transform: rotateY(90deg) translateZ(90px);
    }

    &.left {
        background: rgba(149, 98, 206);
        transform: rotateY(-90deg) translateZ(90px);
    }

    &.top {
        background: rgba(203, 98, 206);
        transform: rotateX(90deg) translateZ(90px);
    }

    &.bottom {
        background: rgba(206, 98, 155);
        transform: rotateX(-90deg) translateZ(90px);
    }
`;
