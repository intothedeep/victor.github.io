import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface PostState {
    id: string | null;
    selectedPost: {
        title: string,
        content: string,
    },
    tags: string[]
}

const initialState: PostState = {
    id: 'testId',
    selectedPost: {
        title: 'test',
        content: '--------------------------------------------'
    },
    tags: ['javascript', 'java', 'react', 'algorithm']
}

const post = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPostId(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
    },
})

export const selectPostId = (state: RootState) => state.post.id
export const selectPost = (state: RootState) => state.post
export const selectSelectedPost = (state: RootState) => {
    console.log(state.post)
    return state.post.selectedPost
}
export const selectTags = (state: RootState): string[] => state.post.tags
export default post;