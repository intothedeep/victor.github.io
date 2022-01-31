import React, { ReactElement } from 'react';

import { useParams } from 'react-router-dom';
import Blog from '../../components/Blog/Blog';

export default function UserPage(): ReactElement {
    // const { username, urlSlug } = match.params;
    const params = useParams();
    console.log('UserPage: ', params);

    return (
        <>
            <Blog />
        </>
    )
}
