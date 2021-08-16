import logger from 'redux-logger';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { CounterState } from '../features/counter/counterSlice';
import rootReducer, { history, rootSaga } from '../modules';

// TODO: delete just check how I pass prloadedState to store
const preloadedCounterState: CounterState = { value: 23, status: 'idle' };
const preloadedState = { counter: preloadedCounterState };

const sagaMiddleware = createSagaMiddleware();
const createStore = () => {
  const store = configureStore({
    // reducer,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, routerMiddleware(history), sagaMiddleware]),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    enhancers: [
      // reduxBatch
    ],
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = createStore()

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;