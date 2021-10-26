import React from 'react';
import Skill from '../component/portfolio/skill/skill';
import About from '../component/portfolio/about/about';
import Intro from '../component/portfolio/intro/intro';
import Project from '../component/portfolio/project/project';
import Footer from '../component/portfolio/footer/footer';
import Header from '../component/portfolio/header/HeaderContainer';
import * as S from './style';

const portfolioPage = () => {
    return (
        <S.portfolio>
            <Header />
            <S.autoMargin>
                <Intro />
                <About />
                <Skill />
                <Project />
            </S.autoMargin>
            <Footer />
        </S.portfolio>
    );
};

export default portfolioPage;
