import React, { ReactElement } from 'react';

import { RouteComponentProps } from 'react-router';
import { useParams } from 'react-router-dom';

export interface SeriesPageProps extends RouteComponentProps<{
    username: string;
    urlSlug: string;
}> { }

export default function SeriesPage(): ReactElement {
    // const { username, urlSlug } = match.params;
    const params = useParams();
    console.log('seriespage: ', params);

    return (
        <>
            시리즈fdasfdsafdsa
            {/* 페이지 {username} {urlSlug} */}
        </>
    )
}
