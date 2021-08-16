import React, { ReactElement } from 'react'
import { RouteComponentProps } from 'react-router'

export interface SeriesPageProps extends RouteComponentProps<{
    username: string;
    urlSlug: string;
}> { }


export default function SeriesPage({ match }: SeriesPageProps): ReactElement {
    const { username, urlSlug } = match.params;

    return (
        <>
            시리즈
            페이지 {username} {urlSlug}
        </>
    )
}
