import styled from 'styled-components';

export const Past_pdf = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    margin: auto;
    padding-top: 100px;
    @media only screen and (max-width: 1300px) {
        width: 100vw;
    }
    @media only screen and (max-width: 1100px) {
        margin: 0;
    }
 
`;

export const PageNum = styled.div`
    margin-top: 25px;
    font-size: 18px;
    text-align: center;
`;

export const Flex_row = styled.div`
    align-items: center;
    display:flex;
    height: auto;
    width: auto;
    margin: auto;
    canvas{
        margin: auto;
        max-width: 70vw;
    }
`;

export const leftPageBtn = styled.div<{ color: string }>` 
    left:0;
    top:60px;;
    width: 15vw;
    position: fixed;
    z-index: 1000;
    justify-content: center;
    flex-direction: column;
    display: flex;
    height: calc(100vh - 60px);
    font-size: 50px;
    :hover{
        cursor: pointer;
        background: ${props => props.color};
    }
`;

export const rightPageBtn = styled.div<{ color: string }>` 
    right:0;
    top:60px;;
    width: 15vw;
    position: fixed;
    z-index: 1000;
    justify-content: center;
    flex-direction: column;
    display: flex;
    height: calc(100vh - 60px);
    font-size: 50px;
    :hover{
        cursor: pointer;
        background: ${props => props.color};
    }
`;
export const automargin = styled.div`
height:20vh;
width:100%;
display: flex;
align-items: center;
`;
export const btnAtag = styled.a <{ color: string }>`
    font-size: 50px;
    width: 100%;
    color :${props => props.color};
    text-align: center;
`;