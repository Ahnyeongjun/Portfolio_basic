import React from 'react';
import { useSelector } from 'react-redux';
import * as S from '.';

type ProjectDetailProps = {
    projectNumber: number;
    onClick: Function;
};

const ProjectDetail = (props: ProjectDetailProps) => {
    const id: number = props.projectNumber;
    return (
        <S.Modal onClick={() => props.onClick()}>
            <div>{id}</div>
        </S.Modal>
    );
};

export default ProjectDetail;
