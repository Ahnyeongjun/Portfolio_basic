import React from 'react';
import * as S from './style';

const past = () => {
    return (
        <S.past>
            <S.pastContentWrapper>
                <S.pastTitle>Past</S.pastTitle>
                <S.pastContent>과거 포트폴리오를 보시고 싶으시다면 눌러주세요. (2021 이전 프로젝트)</S.pastContent>
                <S.pastBtnWrapper onClick={() => (location.href = '/past')}>
                    <S.pastBtnContent>바로가기</S.pastBtnContent>
                </S.pastBtnWrapper>
            </S.pastContentWrapper>
        </S.past>
    );
};
export default past;
