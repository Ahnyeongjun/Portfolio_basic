import React from 'react';
import { Route, Switch } from 'react-router-dom';
import pastPortfolioPage from './page/past_portfolio/pastPortfolioPage';
import MainPage from './page/portfolio/portfolioPage';

const Routing = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/past" component={pastPortfolioPage} />
        </Switch>
    );
};
export default Routing;
