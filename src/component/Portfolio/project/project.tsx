import * as S from './style';
import React, { useState } from 'react';
import {
    blog_logo_portfolio,
    blog_screen_portfolio,
    portfolio_camera_logo_portfolio,
    portfolio_camera_screen_portfolio,
    portfolio_sticky_logo_portfolio,
    portfolio_sticky_screen_portfolio,
    streaming_logo_portfolio,
    streaming_screen_portfolio,
    upgrade_log_portfolio,
    upgrade_screen_portfolio,
    weleper_logo_portfolio,
    welper_screen_portfolio,
} from '../../../asset/portfolio';
import ProjectDetail from '../projectDetail/ProjectDetail';
import ProjectItem from "./projectItem";

const project = () => {
    const [projectDetail, setProjectDetail] = useState(false);
    const [number, setNumber] = useState(0);
    const closeDetailModal = () => {
        setProjectDetail(false);
    };
    const OpenDetailModal =  (num: number) => {
         setNumber(num);
         setProjectDetail(true);
    };
    return (
        <>
            {projectDetail == true ? (
                <ProjectDetail projectNumber={number} onClick={closeDetailModal} />
            ) : (
                <S.Project>
                    <S.ProjectContentWrapper>
                        <S.projectContent>Project (Running)</S.projectContent>
                    </S.ProjectContentWrapper>

                    <S.projectWrapper>
                        <ProjectItem onClick = {() => OpenDetailModal(0)} name = "MyBlog" backVerColor = '#4DB387' frontVerColor = '#55C696' projectScreenimg ={blog_screen_portfolio} projectImg={blog_logo_portfolio} projectTag = {["관여도 100%"]}/>
                        <ProjectItem onClick = {() => OpenDetailModal(1)} name = "Portfolio_2021" backVerColor = '#4DB3B3' frontVerColor = '#55C6C6' projectScreenimg ={portfolio_camera_screen_portfolio} projectImg={portfolio_camera_logo_portfolio} projectTag = {["관여도 100%"]}/>
                        <ProjectItem onClick = {() => OpenDetailModal(2)} name = "Streaming_2021" backVerColor = '#4D75B3' frontVerColor = '#5582c6' projectScreenimg ={streaming_screen_portfolio} projectImg={streaming_logo_portfolio} projectTag = {[" 토이 프로젝트","HLS, Socket"]}/>
                    </S.projectWrapper>
                    <S.projectWrapper>
                        <ProjectItem onClick = {() => OpenDetailModal(3)} name = "PortFolio_stick" backVerColor = '#4D5DB3' frontVerColor = '#5567C6' projectScreenimg ={portfolio_sticky_screen_portfolio} projectImg={portfolio_sticky_logo_portfolio} projectTag = {["관여도 100%","첫 프론트앤드"]}/>
                        <ProjectItem onClick = {() => OpenDetailModal(4)} name = "Welper" backVerColor = '#B3A94D' frontVerColor = '#C6BB55' projectScreenimg ={welper_screen_portfolio} projectImg={weleper_logo_portfolio} projectTag = {["백앤드 100%"]}/>
                        <ProjectItem onClick = {() => OpenDetailModal(5)} name = "Upgrade" backVerColor = '#98B34D' frontVerColor = '#A9C655' projectScreenimg ={upgrade_screen_portfolio} projectImg={upgrade_log_portfolio} projectTag = {["백앤드 30%","숙제, 투표 개발"]}/>
                    </S.projectWrapper>
                    <S.BottomWrapper>
                        <S.BottomContent>2021. Project</S.BottomContent>
                    </S.BottomWrapper>
                </S.Project>
            )}
        </>
    );
};
export default project;
