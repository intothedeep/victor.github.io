// TODO: delete
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = number

const initialState: CounterState = 0

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => state + action.payload,
    },
})
// now available:
counter.actions.increment(2)
// also available:
counter.caseReducers.increment(0, { type: 'increment', payload: 5 })

export default counter