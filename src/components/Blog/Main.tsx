import * as React from 'react';

import { Divider, Grid, Typography } from '@mui/material';

import Markdown from './Markdown';

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, idx) => (
        <Markdown className="markdown" key={idx + ' ' + post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}
