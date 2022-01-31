import React from 'react';
import { useParams } from 'react-router-dom';
import Markdown from '../../../../components/Blog/Markdown';

import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

function PostContent() {
  const params = useParams();
  console.log('PostContent: ', params);
  const [md, setMd] = React.useState([] as any);
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(post1).then(res => res.text());
      setMd(res);
    }
    fetchData();
    const im = import('./blog-post.1.md').then(async result => (console.log('test: ', (await result)), result));

  }, [])

  return <Markdown>{md}</Markdown>;
}

export default PostContent;
