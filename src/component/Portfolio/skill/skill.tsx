import React from 'react';
import * as S from './style';
import {
    docker_portfolio,
    javascript_portfolio,
    java_portfolio,
    kotlin_portfolio,
    nodejs_portfolio,
    react_portfolio,
    springboot_portfolio,
    typescript_portfolio,
} from '../../../asset/portfolio';
import SkillItem from './skillItem';
const skill = () => {
    return (
        <S.Skill>
            <S.BigSkillWraper>
                <S.ProjectContentWrapper>
                    <S.projectContent>I can do</S.projectContent>
                </S.ProjectContentWrapper>
                <S.SkillWrapper>
                    <SkillItem imgSrc = {typescript_portfolio} content = " TypeScript - 90%" width = "90%" background={'#3B96D4'}/>
                    <SkillItem imgSrc = {docker_portfolio} content = "  docker - study" width = "0%" background={'#D0E9CF'}/>
                    <SkillItem imgSrc = {java_portfolio} content = " java - 90%" width = "90%" background={'#EBD7BA'}/>
                    <SkillItem imgSrc = {javascript_portfolio} content = " javaScript - 90%" width = "90%" background={'#F4E45C'}/>
                </S.SkillWrapper>
                <S.SkillWrapper>
                    <SkillItem imgSrc = {react_portfolio} content = " react - 90%" width = "90%" background={'#FFC898'}/>
                    <SkillItem imgSrc = {springboot_portfolio} content = " springboot - 90%" width = "90%" background={'#FFDAC7'}/>
                    <SkillItem imgSrc = {nodejs_portfolio} content = " nodejs - 90%" width = "90%" background={'#FFDEFA'}/>
                    <SkillItem imgSrc = {kotlin_portfolio} content = " Kotlin - study" width = "0%" background={'#CEC7FA'}/>
                </S.SkillWrapper>
            </S.BigSkillWraper>
            <S.BottomWrapper>
                <S.BottomContent>2021. Skill</S.BottomContent>
            </S.BottomWrapper>
        </S.Skill>
    );
};
export default skill;
