import * as S from './style';
import React, { useState } from 'react';

interface projectItemProps {
    backVerColor:string;
    frontVerColor:string;
    projectScreenimg : string;
    projectImg : string;
    name:string;
    projectTag : string[];
    onClick : Function;
}

const ProjectItem = (props:projectItemProps) => {
    return (  
        <S.projectItemWrapper onClick={() => props.onClick()}>
            <S.backVer background={props.backVerColor}>
                <S.ProjectTitle>{props.name}</S.ProjectTitle>
                <S.ProjectTagWrapper>
                    {props.projectTag.length > 0 &&  props.projectTag.map(item => <S.ProjectTag> {item} </S.ProjectTag>)}
                </S.ProjectTagWrapper>
                <S.projectScreenImg src={props.projectScreenimg} />
            </S.backVer>
            <S.frontVer background={props.frontVerColor}>
                <S.projectImg src={props.projectImg} />
            </S.frontVer>
        </S.projectItemWrapper>
    )
};
export default ProjectItem;
