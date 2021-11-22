import React from 'react';
import * as S from './styles';

import HamburgerMenu from '../HambugerMenu/HamburgerMenu';

const HeaderContainer = () => {
    const onClickforHome = () => {
        if (location.href != location.origin + '/') location.href = '/';
        window.scrollTo({
            top: 0,
        });
    };
    const onClickforAbout = () => {
        if (location.href != location.origin + '/') location.href = '/';
        window.innerWidth > 500
            ? window.scrollTo({
                  top: 900,
              })
            : window.scrollTo({
                  top: 600,
              });
    };
    const onClickforSkill = () => {
        if (location.href != location.origin + '/') location.href = '/';
        window.innerWidth > 500
            ? window.scrollTo({
                  top: 1800,
              })
            : window.scrollTo({
                  top: 1500,
              });
    };
    const onClickforProject = () => {
        if (location.href != location.origin + '/') location.href = '/';
        window.innerWidth > 500
            ? window.scrollTo({
                  top: 3000,
              })
            : window.scrollTo({
                  top: 2700,
              });
    };
    return (
        <>
            <S.Header onClick={() => (location.href = '/')}>
                <S.Blog_Link>HappyGuy's PortFolio</S.Blog_Link>
                <S.Blog_Category>
                    <S.Category_item>
                        <S.Category_a onClick={onClickforHome}> Home</S.Category_a>
                    </S.Category_item>
                    <S.Category_item>
                        <S.Category_a onClick={onClickforAbout}> About</S.Category_a>
                    </S.Category_item>
                    <S.Category_item>
                        <S.Category_a onClick={onClickforSkill}> Skill</S.Category_a>
                    </S.Category_item>
                    <S.Category_item>
                        <S.Category_a onClick={onClickforProject}> Project</S.Category_a>
                    </S.Category_item>
                </S.Blog_Category>
                <HamburgerMenu />
            </S.Header>
        </>
    );
};
export default HeaderContainer;
