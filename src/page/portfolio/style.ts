import styled, { keyframes } from 'styled-components';

export const portfolio = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    background: white;
    @media only screen and (max-width: 1400px) {
        width: 100vw;
    }
`;
export const autoMargin = styled.div`
    width: 1300px;
    margin: 0 auto;
    @media only screen and (max-width: 1400px) {
        width: 100vw;
    }
`;

export const PastBtnWrapper = styled.div`  
    margin: 0 auto;
    margin-top: 200px;
    display: flex;
    justify-content: right;
    width: 1300px; 
    height: 100px;
    @media only screen and (max-width: 1400px) {
        width: 100vw;
    }   
`;

export const PastBtn = styled.div`
    width:  300px;
    height: 100px;
    border : #727272 1px solid;
    @media only screen and (max-width: 1400px) {
        width: 100vw;
    }  
`;
