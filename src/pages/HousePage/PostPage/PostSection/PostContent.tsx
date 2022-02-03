import React from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';


import Markdown from './Markdown';

export interface PostContentProps {
    md: string;
}

function PostContent({ md }: any) {
    const params = useParams();
    console.log('PostContent: ', params);


    return <Box sx={{
        position: 'relative',
        width: { sm: 1, md: 768 },
        // mx: 2,
        // px: { md: 'auto', sm: 2 }
    }}>
        <Markdown md={md} />
    </Box>;
}

export default PostContent;
