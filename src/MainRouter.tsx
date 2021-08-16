import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router'

import PageNotFound from './pages/404/PageNotFound'
import CounterPage from './pages/CounterPage'
import HousePage from './pages/HousePage'
import SignInPage from './pages/SignInPage'
import MainPage from './pages/MainPage'

export default function MainRouter(): ReactElement {
    return (
        <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/@:username" component={HousePage} />
            <Route path="/signin" component={SignInPage} />


            <Route path={'/counter'} component={CounterPage} />
            <Route component={PageNotFound} />
        </Switch>
    )
}
