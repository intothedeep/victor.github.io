import React, { ReactElement } from 'react'
import { RouteComponentProps } from 'react-router';


export interface PostPageProps extends RouteComponentProps<{
    username: string;
    urlSlug: string;
}> {}

export default function PostPage({ match }: PostPageProps): ReactElement {
    const { username, urlSlug } = match.params;

    return (
        <>
            포스트 페이지 {username} {urlSlug}
        </>
    )
}
