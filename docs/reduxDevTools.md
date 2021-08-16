# 리덕스 데브 툴스


```js
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

// 쉽게
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger, ReduxThunk, sagaMiddleware)
    )
);
```