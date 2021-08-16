# 리덕스

## 구조
```js
// counter reducer
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const increase = () => { type: INCREASE };
const decrease = () => { type: DECREASE };

const initialState = { number: 0 };

function counterReduer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return { number : state.number + 1 };
        case DECREASE:
            return { number : state.number - 1 };
        default:
            return state;
    }
}
export default counterReducer;
```

```js
// totos reducer
const INSERT = 'todos/INSERT';

let id = 3;
const insert = text => {
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
};

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: 'redux 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: 'react and redux usage',
            done: false
        }
    ]
}

function todosReducer(state = initalState, action) {
    switch (action.type) {
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        default:
            return state;
    }
}
export default todosReducer;
```

```js
import counterReducer from '';
import totodsReducer from '';

// 아래처럼 하면 state = { counter: { number: 0 }, todos: [...] } 이런 형태로 생성된다.
const rootReducer = combineReducer({
    counter: counterReducer,
    todos: todosReducer,
});


const store = createStore(rootReducer, initialState, middleware);

// just redux
const render = () =>
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
			onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
		/>,
		rootEl
	);

// react-redux Provider with App, set store as props of Provider
// to connect a component to redux
const render = () =>
	ReactDOM.render(
        <Provider store={store}>
            <Counter
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />
        </Provider>    ,
		rootEl
	);

```

```js
import { increase, decrease } from 'actions'; 

const CounterContainer = ({ number, increase }) => (<Counter number={number} onIncrease={increase}/>)

const mapStateToProps = state => ({
    number: state.counter.number,
})

// 1
// const mapDispatchToProps = dispatch => ({
//     // increase(props에 갈 함수): () => idspatch(increase()): actions에서 가지고온 action 생성함수
//     increase: () => dispatch(increase());
// });
// with bindActionCreator from redux

// 2
// const mapDispatchToProps = dispatch => (bindActionCreator(
//     {
//         increase,
//         decrease,
//     },
//     dispatch
// ));
// 액션 생성함수로 이루어진 객체를 집어넣어 주면 된다. 이대로 넣으면 connect 함수 내부에서 알아서 bindActionCreators 작업을 대신해 준다.

// 3
const mapDispatchToProps = {
    increse,
    decrease
};

// connect is like store.subscribe
const makeContainer = connect(mapStateToProps, mapDispatchToProps);
export default makeContainer(CounterContainer);
```

#### with redux-actions
```js
createeAction: 액션을 만들어 줌, 두 번째 인자는  payload  부분
handleActions: 리듀서를 만들어 리턴해줌

const insert = createAction(INSERT, text => {
    id: id++,
    text,
    done: false,
});
// insert(): { type: INSERT, payload: { id: id++, text, done: false } };

const todos = handleActions({
    // [INSERT]: (state, action)
    [INSERT]: (state, { payload: todo }) => ({ ...state, todos: state.todos.concat(todo) });
})

export default todos;
```

#### with redux tool kits
```js
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    insert(state, action) {
      const { id, text } = action.payload
      state.push({ id, text, completed: false })
    },
    toggle(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer

// createSlice returns object below
// {
//   name: "todos",
//   reducer: (state, action) => newState,
//   actions: {
//     addTodo: (payload) => ({type: "todos/addTodo", payload}),
//     toggleTodo: (payload) => ({type: "todos/toggleTodo", payload})
//   },
//   caseReducers: {
//     addTodo: (state, action) => newState,
//     toggleTodo: (state, action) => newState,
//   }
// }
그냥 여기서 빼서 쓰면 된다.
```


### connect 말고 hook 사용해 컨테이너 컴포넌트, 컴포넌트 리덕스에 연결하기: react-redux
```js

const CounterContainer = () => {
    // mapStateToProps
    const number = useSelector(state => state.counter.number);
    // mapDispatchToProps
    const dispatch = useDispatch();
    return (
        <Counter 
            onIncrease={() => dispatch(increase())}
            onDecrease={() => dispatch(decrease())}
            number={number} 
        />);
} 

// 각 컴포넌트에서 store 꺼내서 사용할 수 있다.
const store = useStore();
store.dispatch({ type: 'counter/INCREASE' });
store.getState();
```


#### connect vs useSelector, useDispatch
```js
connect: 부모 컴포넌트 리렌더링 시 컴포넌트 props가 변경하지 않으면 렌더링 x
그러나 use... 는 아니다 그래서

export default React.memo(CounterContainer);
해줘야 한다.
```


### createStore
```js
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import DevTools from './containers/DevTools'
import reducer from '../reducers'

let middleware = [a, b]
if (process.env.NODE_ENV !== 'production') {
  const c = require('some-debug-middleware')
  const d = require('another-debug-middleware')
  middleware = [...middleware, c, d]
}
// enhencer is a group of middleware, we can use compose to make them ONE enhencer
const enhencers = compose(
    enhencer1, // enhencer1
    applyMiddleware(thunk, ...middleware),  // enhencer2
    DevTools.instrument() // enhencer3
);

const store = createStore(reducers, preloadedState, enhencers);


```