import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';

import MainRouter from './MainRouter';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <MainRouter />
        </BrowserRouter>
    );
};

export default App;
