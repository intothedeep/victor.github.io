import React, { ReactElement } from 'react'

import { RouteComponentProps } from 'react-router';
import { useParams } from 'react-router-dom';

export interface PostPageProps extends RouteComponentProps<{
    username: string;
    urlSlug: string;
}> { }

export default function PostPage(): ReactElement {
    // const { username } = match.params;
    const params = useParams();
    console.log('PostPage', params);

    return (
        <>
            포스트 페이지
            {/* {username} {urlSlug} */}
        </>
    )
}
