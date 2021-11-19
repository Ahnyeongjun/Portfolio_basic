import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: gray;
  z-index: 1000;
  align-items: center;
  overflow-y: scroll;
  justify-content: center;  
`
export const ProjectDetailPage = styled.div`
 min-height: 90vh;
 margin-top:5vh;
 width: 1300px;
 background: white;
`

export const autoMargin = styled.div`
width:1200px;
margin:auto;
display: flex;
flex-direction:column;
`;
export const closeBtnWrapper = styled.div`
  width: 50px;
  width: 40px;
`;
export const projectImg = styled.img`
    object-fit: contain;

    height: 100px  ;
    
`;
export const titleWrapper = styled.div`
  align-items: center;
  padding-top:80px;
  height: 160px;
  display: flex;
`;
export const title = styled.div <{ color: string }>`  
  margin-left: 15px;
  font-size:55px;
  color: ${props => props.color};  
  width: auto;
  font-family: NotoSansKRFont_Bold !important;
`;
export const gridTemplete = styled.div<{ color: string }>`
margin-top: 30px;
  display: flex;
  flex-direction:column;
  border: ${props => props.color} solid 1px;
`;
export const gridItem = styled.div <{ color: string }>`
  display:flex;
  height: 70px;
  color:gray;
  border-bottom: ${props => props.color} solid 1px;
  align-items:center;
  font-size:23px;
  line-height: 26px;
  :last-child {
    border-bottom: none;
  }
`;
export const gridTitleWrapper = styled.div <{ color: string }>`
  width: 40%;
  height: 100%;
  display: flex;
  border-right: ${props => props.color} solid 1px;
  align-items: center;
  font-family: NotoSansKR_Thin !important;
`;
export const gridContentWrapper = styled.div`
  width:60%;

  display: flex;
  align-items: center;
  height: 100%;
`;

export const gridTitle = styled.a`
margin-left: 20px;
`;
export const gridContent = styled.a`
:visited {
  color : gray;
}

margin-left: 20px;
`;
export const intro = styled.a`
  font-size:30px;
  margin-left:15px;
  color: #9CC0F5;  
  margin-top:25px;
  font-family: NotoSansKRFont_Bold !important;
  :link,:visited ,:active {
    text-decoration: none;
  }
  :hover {
    text-decoration: underline;
  }
`;