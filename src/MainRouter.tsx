import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router'
import PageNotFound from './pages/404/PageNotFound'
import CounterPage from './pages/CounterPage'
import HomePage from './pages/HomePage'
import HousePage from './pages/HousePage'
import LogInPage from './pages/LogInPage'

export default function MainRouter(): ReactElement {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/@:username" component={HousePage} />
            <Route path="/login" component={LogInPage} />


            <Route path={'/counter'} component={CounterPage} />
            <Route component={PageNotFound} />
        </Switch>
    )
}
