import React, { useState } from 'react';

import * as S from './styles';

const HamburgerMenu = (props: any) => {
    const [isOpen, SetIsOpen] = useState(false);

    const UpdateIsOpen = () => {
        SetIsOpen(!isOpen);
    };
    const onClickforHome = () => {
        window.scrollTo({
            top: 0,
        });
    };
    const onClickforAbout = () => {
        window.innerWidth > 500
            ? window.scrollTo({
                  top: 900,
              })
            : window.scrollTo({
                  top: 600,
              });
    };
    const onClickforSkill = () => {
        window.innerWidth > 500
            ? window.scrollTo({
                  top: 1800,
              })
            : window.scrollTo({
                  top: 1500,
              });
    };
    const onClickforProject = () => {
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
            <S.HambugerWrapper onClick={UpdateIsOpen}>
                {isOpen == true ? (
                    <S.OpenWrapper>
                        <S.Habuger_line className="active"></S.Habuger_line>
                        <S.Menu scroll={props.scrollPosition} className="active">
                            <S.Menu_list>
                                <S.Menu_Item>
                                    <S.Category_a onClick={onClickforHome}> Home</S.Category_a>
                                </S.Menu_Item>
                                <S.Menu_Item>
                                    <S.Category_a onClick={onClickforAbout}> About</S.Category_a>
                                </S.Menu_Item>
                                <S.Menu_Item>
                                    <S.Category_a onClick={onClickforSkill}> Skill</S.Category_a>
                                </S.Menu_Item>{' '}
                                <S.Menu_Item>
                                    <S.Category_a onClick={onClickforProject}> Project</S.Category_a>
                                </S.Menu_Item>
                            </S.Menu_list>
                        </S.Menu>
                    </S.OpenWrapper>
                ) : (
                    <S.CloseWrapper>
                        <S.Habuger_line></S.Habuger_line>
                    </S.CloseWrapper>
                )}
            </S.HambugerWrapper>
        </>
    );
};

export default HamburgerMenu;
