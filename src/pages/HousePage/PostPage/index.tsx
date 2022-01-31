import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async';

import { RouteComponentProps } from 'react-router';
import { useParams } from 'react-router-dom';
import PostContent from './PostContent';

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
            <Helmet></Helmet>
            {/* <GoodBadWidget />
            <PostHeader />
            <TableOfContents /> */}
            <PostContent />
            {/* <UserInfoBlock />
            <ShareButtonsBlock />
            <PrevNextPosts />
            <RelatedPosts />
            <Comment /> */}
        </>
    )
}
