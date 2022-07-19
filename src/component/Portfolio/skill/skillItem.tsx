import React from 'react';
import * as S from './style';

interface skillItemProps {
    imgSrc:string;
    content:string;
    width : string;
    background : string;
}

const skillItem = (prop:skillItemProps) => {
    return (
        <S.skillItem>
            <S.SkillImage src={prop.imgSrc} />
            <S.SkillContentWrapper>
                <S.SkillContent>{prop.content}</S.SkillContent>
            </S.SkillContentWrapper>
            <S.SkillProgressWrapper>
                <S.SkillProgress width={prop.width} background={prop.background} />
            </S.SkillProgressWrapper>
        </S.skillItem>
    );
};
export default skillItem;
