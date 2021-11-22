import * as S from './style';
import React from 'react';
import Past_pdf from '../../component/portfolio/past_pdf/past_pdf';
import Header from '../../component/portfolio/header/HeaderContainer';

const pastPortfolioPage = () => {
    return (
        <>
            <Header />
            <S.pastWrapper>
                <Past_pdf />
            </S.pastWrapper>
        </>
    );
};
export default pastPortfolioPage;
