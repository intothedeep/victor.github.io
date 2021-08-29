import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router';


import { 
    PageNotFound, 
    CounterPage, 
    HomePage, 
    HousePage, 
    SignInPage,
    SignUpPage
} from './pages';

export default function MainRouter(): ReactElement {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/@:username" component={HousePage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />

            <Route path={'/counter'} component={CounterPage} />
            <Route component={PageNotFound} />
        </Switch>
    )
}
