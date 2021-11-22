import React from 'react';
import { useSelector } from 'react-redux';
import {
    blog_logo_portfolio,
    portfolio_camera_logo_portfolio,
    portfolio_sticky_logo_portfolio,
    streaming_logo_portfolio,
    upgrade_log_portfolio,
    weleper_logo_portfolio,
} from '../../../asset/portfolio';
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
            img: blog_logo_portfolio,
            title: 'MyBlog',
            site: 'https://youngjun.site/',
            github: 'https://github.com/Ahnyeongjun/MyBlog',
            id: 0,
            content: '2021에 만들게 된 블로그',
            period: '2021-08 ~ 2021-10',
            involvement: '100%',
            member_count: 1,
            language: 'Typescript',
            color: '#9CC0F5',
            tool: ['react', 'redux', 'redux-saga', 'redux-toolkit', 'webpack', 'swiper', 'quill', 'koa', 'mysql', 'aws'],
        },
        {
            img: portfolio_camera_logo_portfolio,
            title: 'Portfolio_2021',
            id: 1,
            github: 'https://github.com/Ahnyeongjun/Portfolio_basic',
            content: '2021에 만들게 된 포트폴리오',
            period: '2021-10 ~ 2021-11',
            involvement: '100%',
            member_count: 1,
            color: '#C99CF5',
            language: 'Typescript',
            tool: ['react', 'webpack', 'cloudfront', 'aws'],
        },
        {
            img: streaming_logo_portfolio,
            title: 'Streaming_2021',
            github: '비공개',
            id: 2,
            content: '소켓과 영상처리를 목표로 시작한 개인 프로젝트',
            period: '2021-10 ~ 진행 중 (회사 업무로 잠시 중단)',
            involvement: '진행 중 (회사 업무로 잠시 중단)',
            member_count: 1,
            color: '#768CD1',
            language: 'Typescript',
            tool: [
                'react',
                'redux',
                'redux-saga',
                'redux-toolkit',
                'webpack',
                'socket.io',
                'ffmpeg',
                'koa',
                'mysql',
                'aws',
                'node-mediaServer',
            ],
        },
        {
            img: portfolio_sticky_logo_portfolio,
            github: 'https://github.com/portfolio-postit',
            title: 'PortFolio_sticky',
            id: 3,
            content: 'S',
            period: '2021-02 ~ 2021-06',
            involvement: 'backend 100%',
            member_count: 1,
            language: 'Javascript',
            tool: ['SpringBoot', 'aws', 'react', 'mysql'],
            color: '#FFDC00',
        },
        {
            img: weleper_logo_portfolio,
            github: 'https://github.com/DSM-welper',
            title: 'Welper',
            id: 4,
            content: '3학년때의 마지막 팀프로젝트',
            period: '2021-02 ~ 2021-06',
            involvement: 'backend 100%',
            member_count: 3,
            language: 'Kotlin',
            tool: ['SpringBoot', 'aws', 'mysql'],
            color: '#802457',
        },
        {
            img: upgrade_log_portfolio,
            github: 'https://github.com/DSM-Upgrade',
            title: 'Upgrade (ver1)',
            id: 5,
            content: '동아리 관리 팀프로젝트',
            period: '2021-02 ~ 2021-08',
            involvement: 'backend 25% (공지사항, 투표, 권한)',
            member_count: 6,
            language: 'Java',
            tool: ['SpringBoot', 'aws', 'mysql'],
            color: '#232323',
        },
    ];
    return (
        <S.Modal onClick={() => props.onClick()}>
            <S.ProjectDetailPage>
                <S.autoMargin>
                    <S.titleWrapper>
                        <S.projectImg src={projectArray[id].img} />
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
                                <S.gridContent>
                                    {projectArray[id].tool.pop()}
                                    {projectArray[id].tool.map((e) => ', ' + e)}
                                </S.gridContent>
                            </S.gridContentWrapper>
                        </S.gridItem>
                    </S.gridTemplete>
                    <div>상세정보는 후에 추가 예정입니다.</div>
                </S.autoMargin>
            </S.ProjectDetailPage>
        </S.Modal>
    );
};

export default ProjectDetail;
