import React from 'react';

import Toc from "react-toc";


export interface TableOfContentsProps {
    md: string;
}

function TableOfContents({ md }: TableOfContentsProps) {
    return <Toc markdownText={md} />;
}

export default TableOfContents;
