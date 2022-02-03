import React from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import PostContent from './PostContent';

export interface PostSectionProps {
  md: string;
}

function PostSection({ md }: PostSectionProps) {
  const params = useParams();
  console.log('PostSection: ', params);

  return <Box sx={{
    position: 'relative',
  }}>
    {/* <PostHeader /> */}
    <PostContent md={md} />
    {/* <UserInfoBlock /> */}
    {/* <ShareButtonsBlock /> */}
    {/* <PrevNextPosts /> */}
    {/* <Comment /> */}
    {/* <RelatedPosts /> */}
  </Box>;
}

export default PostSection;
