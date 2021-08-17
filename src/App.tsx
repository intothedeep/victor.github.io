import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MainRouter from './MainRouter';
import useSystemTheme from './app/hooks/useSystemTheme';


function App() {
  const { theme } = useSystemTheme()
  return (
    <React.Fragment>
      <Helmet>
        <title>prettylog</title>
        <meta name="description" content="기술 블로그 고민하지 말고 오세요!" />
        {/* <meta property="fb:app_id" content="203040656938507" /> */}
        {/* <meta property="og:image" content="https://images.velog.io/velog.png" /> */}
      </Helmet>
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

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainRouter />
      </ThemeProvider>
    </React.Fragment>
  );
}

App.defaultProps = {
  test: 'test',
};

export default App;
