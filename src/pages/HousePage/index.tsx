import React, { ReactElement } from 'react';

import { RouteComponentProps } from 'react-router';
import { Link, Routes, Route, useParams } from 'react-router-dom';

import PostPage from './PostPage';
import SeriesPage from './SeriesPage';
import UserPage from './UserPage';

export interface HousePageProps { };

export default function HousePage(props: HousePageProps): ReactElement {
    // const { username } = match.params;
    const params = useParams();
    console.log('HousePage', params, 'props', props);

    return (
        <>
            <ul>
                <li>
                    <Link to=""> 하우스 </Link>
                </li>
                <li>
                    <Link to="series">시리즈 </Link>
                </li>
                <li>
                    <Link to="123-타임">포스트 </Link>
                </li>
                <li>
                    <Link to="series/1-series">시리즈리스트/시리즈 </Link>
                </li>
            </ul>
            <Routes>
                <Route path=":urlSlug" element={<PostPage />} />
                <Route path="/series/:urlSlug" element={<SeriesPage />} />
                <Route path="about" element={<UserPage />} />
                <Route path="series" element={<UserPage />} />
                <Route path="" element={<UserPage />} />
            </Routes>
        </>
    );
}
