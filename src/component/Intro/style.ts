import styled from 'styled-components';
import { HoverSway } from './animation';
export const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
`;
export const Intro = styled.div`
    width: 100%;
    background: linear-gradient(40deg, rgba(92, 150, 242, 1) 36%, rgba(217, 136, 148, 1) 80%);
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
export const AniMationWrapper = styled.div`
    margin-top: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    min-height: 1000px;
`;
export const scene = styled.div`
    width: 160px;
    height: 160px;
    perspective: 600px;
    margin-left: 30px;
    :hover {
        animation: ${HoverSway} 0.3s linear infinite both;
    }
`;
export const Title = styled.div`
    position: relative;
    font-weight: bold;
    color: white;
    font-size: 3rem;
`;

export const cube = styled.div<{ rotateY: number; rotateX: number }>`
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;

    transform: ${(props) => `translateZ(-80px) rotateY(${props.rotateY}deg) rotateX(${props.rotateX}deg)`};
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
        transform: rotateY(0deg) translateZ(80px);
    }

    &.back {
        background: rgba(98, 155, 206);
        transform: rotateY(180deg) translateZ(80px);
    }

    &.right {
        background: rgba(98, 101, 206);
        transform: rotateY(90deg) translateZ(80px);
    }

    &.left {
        background: rgba(149, 98, 206);
        transform: rotateY(-90deg) translateZ(80px);
    }

    &.top {
        background: rgba(203, 98, 206);
        transform: rotateX(90deg) translateZ(80px);
    }

    &.bottom {
        background: rgba(206, 98, 155);
        transform: rotateX(-90deg) translateZ(80px);
    }
`;
