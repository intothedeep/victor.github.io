리액트 미들웨어가 있고
리덕스 미들웨어가 있다


## redux middleware
```js
// 기본 구조:
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here

      return next(action)
    }
  }
}

// 만들어 보기
const logeMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log('before', store.getState());
    console.log('다음 액션', action);
    next(acion);
    console.log('after', store.getState());
    console.groupEnd();
};

```

### apply
```js
const store = createStore(rootReducer, preloadState, applyMiddleware(logMiddleware, ReduxThunk));

```
