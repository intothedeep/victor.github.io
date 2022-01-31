// import { createSelector, createSlice } from '@reduxjs/toolkit';
// import createRequestSaga, {
// 	createRequestActionTypes,
// } from '../lib/createRequestSaga';
// import * as authAPI from '../lib/api/auth';
// import { takeLatest } from 'redux-saga/effects';

import * as R from 'ramda';

// export const authSelector = createSelector(state => state, state => state.auth );
// const name = 'auth';
const initialState = {
    user: undefined,
    register: {
        email: '',
        password: '',
        passwordConfirm: ''
    },
    auth: null,
    authError: null
};

// // login, register는 action type을 얻기 위해 만들어 놓은 것이지
// // reducer에 값을 사용하려고 만든 것이 아님
// const reducers = {
//     login: (state) => {
//         state.login = initialState.login;
//         state.auth = null;
//         state.authError = null;
// 	},
//     register: (state) => {
//         state.register = initialState.register;
//         state.auth = null;
//         state.authError = null;
// 	},
//     // action이 없으면  logout()
// 	logout: (state) => {
//         state.login = {};
// 	},
// 	changeField: (state, { payload: { form, key, value } }) => {

// 		state[form][key] = value;
// 	},
// 	initializeForm: (state, { payload: form }) => {
// 		state[form] = initialState[form];
// 		state.authError = null;
// 	},
// 	register_success: (state, { payload: auth }) => {
// 		state.auth = auth;
// 		state.authError = null;
// 	},
// 	register_failure: (state, { payload: error }) => {
// 		state.authError = error;
// 	},
// 	login_success: (state, { payload: auth }) => {
//         console.log(auth);
// 		state.authError = null;
//         state.auth = auth;
// 	},
// 	// 로그인 실패
// 	login_failure: (state, { payload: error }) => {
// 		state.authError = error;
// 	},
// };

// const authSlice = createSlice({
// 	name,
// 	initialState,
// 	reducers,
// });

// export const AUTH = authSlice.name;
// export const {
//     logout, changeField, initializeForm,
//     register, register_success, register_failure,
//     login, login_success, login_failure
// } = authSlice.actions;
// export const authReducer = authSlice.reducer;

export const selectUser = R.path(['auth', 'user']);

// // saga
// const registerSaga = createRequestSaga(register().type, authAPI.register);
// const loginSaga = createRequestSaga(login().type, authAPI.login);
// export function* authSaga() {
// 	yield takeLatest(register().type, registerSaga);
// 	yield takeLatest(login().type, loginSaga);
// }

export {};
