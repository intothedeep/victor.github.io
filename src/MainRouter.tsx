import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
    PageNotFound,
    CounterPage,
    HomePage,
    HousePage,
    SignInPage,
    SignUpPage
} from './pages';

export default function MainRouter(): ReactElement {
    return (
        <Routes>
            <Route path="/@:username/*" element={<HousePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path='/counter' element={<CounterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
