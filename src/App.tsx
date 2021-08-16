import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, Link } from 'react-router-dom';

import PageNotFound from './pages/404/PageNotFound';
import CounterPage from './pages/CounterPage';
import HomePage from './pages/HomePage';
import HousePage from './pages/HousePage';


function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>velog</title>
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
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/@:username" component={HousePage} />



        <Route path={'/counter'} component={CounterPage} />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );
}

App.defaultProps = {
  test: 'test',
};

export default App;
