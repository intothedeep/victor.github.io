import { combineReducers } from 'redux';
import { History, createBrowserHistory } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import { all } from 'redux-saga/effects';

import home, { HomeState } from './home';
import post, { PostState } from './post';
import error, { ErrorState } from './error';
import header, { HeaderState } from './header';
// import counter, { CounterState } from './counter';
import { CounterState, counterSlice as counter } from '../features/counter/counterSlice';

export interface RootState {
    [home.name]: HomeState;
    [post.name]: PostState;
    [header.name]: HeaderState;
    [error.name]: ErrorState;
    [counter.name]: CounterState;
    router: RouterState;
}

const createRootReducer = (history: History) => combineReducers({
    [home.name]: home.reducer,
    [post.name]: post.reducer,
    [header.name]: header.reducer,
    [error.name]: error.reducer,
    [counter.name]: counter.reducer,
    router: connectRouter(history),
})

export function* rootSaga() {
	yield all([
        // authSaga(), 
        // userSaga(), 
        // vacationSaga()
    ]);
}

export const history = createBrowserHistory()

const rootReducer = createRootReducer(history)
export default rootReducer;