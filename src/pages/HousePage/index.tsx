import React, { ReactElement } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router'
import { Link } from 'react-router-dom';
import PostPage from './PostPage';
import SeriesPage from './SeriesPage';
import UserPage from './UserPage';

export interface HousePageProps extends RouteComponentProps<{ username: string; }> {

}

export default function HousePage({ match }: HousePageProps): ReactElement {
    const { username } = match.params;

    return (
        <>
        {username}
        <Link to="/@victor"> 하우스 </Link>
        <Link to="/@victor/123-타임">포스트 </Link>
        <Link to="/@victor/series/1-series">시리즈 </Link>
        <Switch>
            <Route
                path={['/@:username', '/:tab(series|about)']}
                component={UserPage}
                exact
            />
            <Route path="/@:username/series/:urlSlug" component={SeriesPage} />
            <Route path="/@:username/:urlSlug" component={PostPage} />
        </Switch>
        </>
    );
}
