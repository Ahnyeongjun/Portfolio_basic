import styled from 'styled-components';

export const past = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 1300px;
    margin: auto;
    padding-top: 140px;
    @media only screen and (max-width: 1300px) {
        width: 100vw;
    }
    @media only screen and (max-width: 1100px) {
        margin: 0;
    }
`;
export const pastBtnWrapper = styled.div`
    margin-top:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 200px;
    border-radius: 20px;
    border: rgb(201, 156, 245) solid 1px;
    :hover{
        cursor: pointer;
    }
`;
export const pastBtnContent = styled.a`
    height: auto;
    width: auto;
    text-align: center;
    font-size:20px;
    font-family: NotoSansKR_Thin !important;
    color: #3a3a3a;
`;
export const pastContentWrapper = styled.div`
    color: #3a3a3a;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 10vh;
    @media only screen and (max-width: 750px) {
        font-size: 60px;
        margin: auto;
    }
`;
export const pastTitle = styled.a`
    text-align: center;    
    font-size: 70px;
    color: #3a3a3a;
    font-family: NotoSans_Bold !important;
`;
export const pastContent = styled.a`
    text-align: center;
    margin-top: 30px;
    font-size:25px;
    font-family: NotoSansKR_Thin !important;
    color: #3a3a3a;
`;