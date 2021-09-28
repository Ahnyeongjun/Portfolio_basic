import { keyframes } from 'styled-components';

export const HoverSway = keyframes`

    0% {
        position:absolute;
        bottom:50px;
      -webkit-transform: translate(0);
              transform: translate(0);
    }
    20% {
        position:absolute;
        bottom:50px;
      -webkit-transform: translate(-2px, 2px);
              transform: translate(-2px, 2px);
    }
    40% {
        position:absolute;
        bottom:50px;
      -webkit-transform: translate(-2px, -2px);
              transform: translate(-2px, -2px);
    }
    60% {
        position:absolute;
        bottom:50px;
      -webkit-transform: translate(2px, 2px);
              transform: translate(2px, 2px);
    }
    80% {
        position:absolute;
        bottom:50px;
      -webkit-transform: translate(2px, -2px);
              transform: translate(2px, -2px);
    }
    100% {
        position:absolute;
        bottom:50px;
      -webkit-transform: translate(0);
              transform: translate(0);
    }
  `;
export const FallenBlock = (y: number) => keyframes`
     0%{
         top:30px ;
         left: ${Math.random() * 30}px;
         right:  ${Math.random() * 30}px;

     }
     10%{
         top: 10px;
     }
    20%{
         top:90px;
         
        } 30%{
         top: 120px;
     } 40%{
         top:${y != 3 && '150px'};
         left: ${Math.random() * 60}px;
         right:  ${Math.random() * 60}px;
         
     } 50%{
        top:${y != 3 && '160px'};
     } 60%{
        visibility: ${y == 2 && 'hidden'}

        top:${y != 3 && '210px'};
         left: ${Math.random() * 90}px;
         right:  ${Math.random() * 90}px;
     }
    70%{
        top:${y != 3 && '240px'};
     } 80%{
        top:${y != 3 && '270px'};
     } 90%{
        top:${y != 3 && '300px'};

         left: ${Math.random() * 200}px;
         right:  ${Math.random() * 200}px;

     }
100%{
    visibility: hidden;
    top:${y != 3 && '360px'};
}

`;
export const shakeAA = (y: number) => keyframes`
0%{
    transform: translateZ(-100px) rotate3d(0,0,0)  rotateY(0) rotateX(0);
}
50%{
    transform: ${`translateZ(-100px) rotate3d(1,0,1,${Math.random() * 500}deg)`};
}
`;
