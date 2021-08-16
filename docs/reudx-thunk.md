```js

const DECREASE = 'DECREASE';

// all same
const decrease = () => { type: DECREASE };
const decrease = createAction(DECREASE);
```

```js
// all same
const mapDispatchToProps = dispatch => {
    decrease: () => dispatch(decrease());
}
const mapDispatchToProps = {(bindActionCreator(
    {
        increase,
        decrease,
    },
    dispatch
));
const mapDispatchToProps = { increase, decrease };
```

### thunk idea
```js
// lazy 실행
const addOne = x => x + 1;
const addOneThunk = (x) => () => addOne(x);
const fn = addOneThunk(1); // () => addOne(1) 대기중

setTimeout(() => {
    const value = fn(); // addOne(1) return which is 2
}, 1000);
```

#### thunk 생성함수
```js
// 여기서 햇갈리는게 언제 increaseAsync()하고 increaseAsync()(dispatch) 하는지?
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
}
// action reducer.js
const decrease = () => { type: DECREASE };
const decrease = createAction(DECREASE);

// container.js
const mapDispatchToProps = dispatch => {
    decrease: () => dispatch(decrease()),
    increase: () => dispatch(increase())
}
const mapDispatchToProps = { increase, decrease };

// 따라서 dispatch  (dispatch) => {} 하면 이걸 가지고 thunk가 잡아서 동작하게 한다.
const mapDispatchToProps = dispatch => {
    increaseAsync: () => dispatch((dispatch) => {
        setTimeout(() => {
            dispatch(increase());
        }, 1000);
    }));
}

```