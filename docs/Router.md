# 라우터

## connectedRouter vs browserRotuer
```js
ConnectedRouter is to be used with Redux and can synchronize router state with a Redux store.

BrowserRouter is the 'standard' React router for the browser, to keep the UI in sync with the current URL.
```

```js
withRouter() => 컴포넌트에서 라우터랑 연결해서 사용할 수 있게 만들어 줌
```


### connectedRouter
[connected router](https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action)

Usage
Step 1
In your root reducer file,

Create a function that takes history as an argument and returns a root reducer.
Add router reducer into root reducer by passing history to connectRouter.
Note: The key MUST be router.
// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
 
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ... // rest of your reducers
})
export default createRootReducer
Step 2
When creating a Redux store,

Create a history object.
Provide the created history to the root reducer creator.
Use routerMiddleware(history) if you want to dispatch history actions (e.g. to change URL with push('/path/to/somewhere')).
// configureStore.js
...
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
...
export const history = createBrowserHistory()
 
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )
 
  return store
}
Step 3
Wrap your react-router v4/v5 routing with ConnectedRouter and pass the history object as a prop. Remember to delete any usage of BrowserRouter or NativeRouter as leaving this in will cause problems synchronising the state.
Place ConnectedRouter as a child of react-redux's Provider.
N.B. If doing server-side rendering, you should still use the StaticRouter from react-router on the server.
// index.js
...
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
...
const store = configureStore(/* provide initial state if any */)
 
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
)
Note: the history object provided to router reducer, routerMiddleware, and ConnectedRouter component must be the same history object.

Now, it's ready to work!