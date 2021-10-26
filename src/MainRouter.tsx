import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './page/portfolioPage';

const Routing = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
        </Switch>
    );
};
export default Routing;
