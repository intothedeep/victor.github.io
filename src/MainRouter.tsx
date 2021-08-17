import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router';

import PageNotFound from './pages/ErrorPage/PageNotFound';
import CounterPage from './pages/CounterPage';
import HousePage from './pages/HousePage';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import * as Page from './pages/ErrorPage';

export default function MainRouter(): ReactElement {
    console.log('Page', Page);
    return (
        <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/@:username" component={HousePage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />


            <Route path={'/counter'} component={CounterPage} />
            <Route component={PageNotFound} />
        </Switch>
    )
}
