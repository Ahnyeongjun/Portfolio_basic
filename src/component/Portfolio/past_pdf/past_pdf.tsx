import React, { useMemo, useState } from 'react';
import * as S from './style';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { portFolio_pdf } from '../../../asset/portfolio';

const past_pdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    const onIncreasePageNumber = () => {
        if (pageNumber < numPages) setPageNumber(pageNumber + 1);
    };
    const onDecreasePageNumber = () => {
        if (pageNumber != 1) setPageNumber(pageNumber - 1);
    };
    useMemo(() => {
        if (pageNumber > 6) setPageNumber(6);
    }, []);
    return (
        <S.Past_pdf>
            <S.Flex_row>
                <S.leftPageBtn color={pageNumber == 1 ? '#FAFAFA' : 'gray'} onClick={onDecreasePageNumber}>
                    <S.automargin>
                        <S.btnAtag color={pageNumber == 1 ? '#E5E5E5' : 'black'}>{'<'}</S.btnAtag>
                    </S.automargin>
                </S.leftPageBtn>
                <Document file={portFolio_pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <S.rightPageBtn color={pageNumber == numPages ? '#FAFAFA' : 'gray'} onClick={onIncreasePageNumber}>
                    <S.automargin>
                        <S.btnAtag color={pageNumber == numPages ? '#E5E5E5' : 'black'}>{'>'}</S.btnAtag>
                    </S.automargin>
                </S.rightPageBtn>
            </S.Flex_row>
            <S.PageNum>
                {'<'} Page {pageNumber} of {numPages} {'>'}
            </S.PageNum>
        </S.Past_pdf>
    );
};

export default past_pdf;
