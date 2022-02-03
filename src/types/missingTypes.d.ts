declare module 'quill-markdown-shortcuts';
declare module 'remark';
declare module 'remark-html';
declare module 'remark-highlight.js';
declare module 'remark-breaks';
declare module 'remark-slug';
declare module 'remark-math';
declare module 'remark-rehype';
declare module 'rehype-katex';
declare module 'remark-parse';
declare module 'rehype-stringify';
declare module 'rehype-raw';
declare module 'unist-util-visit';
declare module 'strip-markdown';
declare module 'just-detect-adblock';

declare module 'rehype-highlight';
declare module 'rehype-sanitize';

declare module 'remark-heading-id';
declare module 'rehype-autolink-headings';

declare module '@vcarl/remark-headings';
declare module 'remark-stringify';

declare module '*.md' {
    const value: string;
    export default value;
}

declare module '@/*' {
    export const dark: Object;
    export const light: Object;
}

declare module '/*' {}

declare module 'lib/theme' {
    const lib = import('./lib/theme').then(res => res.default);
    console.log(lib);
    export const dark: Object = lib.dark;
    export const light: Object = lib.light;
}

declare module 'react-toc';
declare module 'remark-gfm';
