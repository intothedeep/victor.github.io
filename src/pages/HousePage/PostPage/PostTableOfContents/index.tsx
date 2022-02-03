import React from 'react';

import { Box } from '@mui/material';

import TableOfContents from './TableOfContents';

export interface PostTableOfContentsProps {
  md: string;
}

function PostTableOfContents({ md }: PostTableOfContentsProps) {
  return (
    <Box
      sx={{
        // display: { xs: 'none', sm: 'block' },
        position: 'sticky',
        top: 100,
        minWidth: 240,
        width: 'auto',
        ml: { xs: 0, md: 2 },
        mt: 5,


        // TODO
        border: '2px solid green',
        height: 100,
        zIndex: 'tooltip'
      }}>
      <TableOfContents md={md} />
    </Box>
  );
}

export default PostTableOfContents;
