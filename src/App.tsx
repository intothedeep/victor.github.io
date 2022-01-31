import React from 'react';

import { Helmet } from 'react-helmet-async';
import { CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import useSystemTheme from './hooks/useSystemTheme';
import MainRouter from './MainRouter';

import './App.css';
import SearchAppBar from './components/SearchAppBar';

function App() {
  const { theme } = useSystemTheme();
  return (
    <>
      <Helmet>
        <title>prettylog</title>
        <meta name="description" content="기술 블로그 고민하지 말고 오세요!" />
        {/* <meta property="fb:app_id" content="203040656938507" /> */}
        {/* <meta property="og:image" content="https://images.velog.io/velog.png" /> */}
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar />
        {/* TODO: delete */}
        <Toolbar />
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/" >home</Link>
              </li>

              <li>
                <Link to="/@victor" >하우스</Link>
              </li>

              <li>
                <Link to="/counter" >counter</Link>
              </li>

              <li>
                <Link to="/signin" >로그인</Link>
              </li>
              <li>
                <Link to="/signup" >회원가입</Link>
              </li>
            </ul>
          </nav>
        </header>
        <MainRouter />
      </ThemeProvider>
    </>
  );
}

App.defaultProps = {
  test: 'test',
};

export default App;
