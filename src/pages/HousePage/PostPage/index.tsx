import React, { ReactElement } from 'react'
import { RouteComponentProps } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import PostTableOfContents from './PostTableOfContents';
import PostLikeShare from './PostLikeShare';
import PostSection from './PostSection';

import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

import remarkHeadings from '@vcarl/remark-headings';
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";

export interface PostPageProps extends RouteComponentProps<{
    username: string;
    urlSlug: string;
}> { }

export default function PostPage(): ReactElement {
    // const { username } = match.params;
    const params = useParams();
    console.log('PostPage', params);


    const [md, setMd] = React.useState<string>('');

    React.useEffect(() => {
        // async function fetchData() {
        //   const res = await fetch(post1).then(res => res.text());
        //   setMd(res);
        // }
        // fetchData();

        import(`./PostSection/blog-post.1.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(async text => {
                        console.log('test: ', text);
                        const processor = unified()
                            .use(remarkParse)
                            .use(remarkStringify)
                            .use(remarkHeadings);
                        const vfile = await processor.process(text);
                        console.log('vfile', vfile.data.headings);

                        return text;
                    })
                    .then(res => setMd(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <>
            <Helmet></Helmet>
            <Box sx={{
                display: 'flex',
                flexDirection: { sm: 'column', md: 'row' },
                justifyContent: 'center',
                position: 'relative',
                mx: 2,
            }}>
                <PostLikeShare />
                <PostSection md={md} />
                <PostTableOfContents md={md} />
            </Box>

        </>
    )
}
