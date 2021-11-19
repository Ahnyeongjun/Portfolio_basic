import React from 'react';
import { useSelector } from 'react-redux';
import { blog_logo_portfolio } from '../../../asset/portfolio';
import * as S from '.';

type ProjectDetailProps = {
    projectNumber: number;
    onClick: Function;
};

type ProjectDetail = {
    title: string;
    github?: string;
    id: number;
    content: string;
    period: string;
    involvement: string;
    member_count: number;
    language?: string;
    tool?: string[];
    site?: string;
    img?: any;
    color?: string;
};

const ProjectDetail = (props: ProjectDetailProps) => {
    const id: number = props.projectNumber;
    const projectArray: ProjectDetail[] = [
        {
            title: 'MyBlog',
            site: 'https://youngjun.site/',
            github: 'https://github.com/Ahnyeongjun/MyBlog',
            id: 0,
            content: '2021에 만들게 된 블로그',
            period: '2021-10 ~ 2021-11',
            involvement: '100%',
            member_count: 1,
            language: 'Typescript',
            color: '#9CC0F5',
            tool: ['react', 'redux', 'redux-saga', 'redux-toolkit', 'webpack', 'swiper', 'quill', 'koa', 'mysql', 'aws'],
        },
        { title: 'Portfolio_2021', id: 1, content: 'S', period: 'S', involvement: 'S', member_count: 1 },
        { title: 'Streaming_2021', id: 2, content: 'S', period: 'S', involvement: 'S', member_count: 1 },
        { title: 'PortFolio_sticky', id: 3, content: 'S', period: 'S', involvement: 'S', member_count: 1 },
        { title: 'Welper', id: 4, content: 'S', period: 'S', involvement: 'S', member_count: 1 },
        { title: 'Upgrade', id: 5, content: 'S', period: 'S', involvement: 'S', member_count: 1 },
    ];
    return (
        <S.Modal onClick={() => props.onClick()}>
            <S.ProjectDetailPage>
                <S.autoMargin>
                    <S.titleWrapper>
                        <S.projectImg src={blog_logo_portfolio} />
                        <S.title color={projectArray[id].color}>{projectArray[id].title} </S.title>
                        {projectArray[id].site && <S.intro href={projectArray[id].site}>- ({projectArray[id].site})</S.intro>}
                    </S.titleWrapper>
                    <S.gridTemplete color={projectArray[id].color}>
                        <S.gridItem color={projectArray[id].color}>
                            <S.gridTitleWrapper color={projectArray[id].color}>
                                <S.gridTitle>프로젝트명</S.gridTitle>
                            </S.gridTitleWrapper>
                            <S.gridContentWrapper>
                                <S.gridContent> {projectArray[id].title}</S.gridContent>
                            </S.gridContentWrapper>
                        </S.gridItem>
                        <S.gridItem color={projectArray[id].color}>
                            <S.gridTitleWrapper color={projectArray[id].color}>
                                <S.gridTitle>레포지터리 주소 </S.gridTitle>
                            </S.gridTitleWrapper>
                            <S.gridContentWrapper>
                                <S.gridContent href={projectArray[id].github}> {projectArray[id].github}</S.gridContent>
                            </S.gridContentWrapper>
                        </S.gridItem>
                        <S.gridItem color={projectArray[id].color}>
                            <S.gridTitleWrapper color={projectArray[id].color}>
                                <S.gridTitle>개발 기간</S.gridTitle>
                            </S.gridTitleWrapper>
                            <S.gridContentWrapper>
                                <S.gridContent> {projectArray[id].period}</S.gridContent>
                            </S.gridContentWrapper>
                        </S.gridItem>
                        <S.gridItem color={projectArray[id].color}>
                            <S.gridTitleWrapper color={projectArray[id].color}>
                                <S.gridTitle>개발 관여도</S.gridTitle>
                            </S.gridTitleWrapper>
                            <S.gridContentWrapper>
                                <S.gridContent>
                                    {projectArray[id].member_count}명 / {projectArray[id].involvement}
                                </S.gridContent>
                            </S.gridContentWrapper>
                        </S.gridItem>
                        <S.gridItem color={projectArray[id].color}>
                            <S.gridTitleWrapper color={projectArray[id].color}>
                                <S.gridTitle>언어</S.gridTitle>
                            </S.gridTitleWrapper>
                            <S.gridContentWrapper>
                                <S.gridContent> {projectArray[id].language}</S.gridContent>
                            </S.gridContentWrapper>
                        </S.gridItem>
                        <S.gridItem color={projectArray[id].color}>
                            <S.gridTitleWrapper color={projectArray[id].color}>
                                <S.gridTitle>라이브러리</S.gridTitle>
                            </S.gridTitleWrapper>
                            <S.gridContentWrapper>
                                <S.gridContent> {projectArray[id].tool.map((e) => e + ', ')}</S.gridContent>
                            </S.gridContentWrapper>
                        </S.gridItem>
                    </S.gridTemplete>
                </S.autoMargin>
            </S.ProjectDetailPage>
        </S.Modal>
    );
};

export default ProjectDetail;
