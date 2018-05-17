import React from 'react';
import { Router, Route, Switch, routerRedux, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import dynamic from 'dva/dynamic';

import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/demo" component={IndexPage} />
      </Switch>
    </Router>
  );
}


const { ConnectedRouter } = routerRedux;

const Routers = function ({ history, app }) {
  // const error = dynamic({
  //   app,
  //   component: () => import('./routes/error'),
  // });

  const routes = [
    {
      path: '/',
      models: () => [import('./models/example')],
      component: () => import('./routes/IndexPage')
    },
    {
      path: '/demo',
      models: () => [import('./models/product')],
      component: () => import('./routes/Products')
    }
  ];

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/demo" />)} />
        {
          routes.map(({ path, ...dynamics }, key) => (
            <Route key={key}
              exact
              path={path}
              component={dynamic({
                app,
                ...dynamics,
              })}
            />
          ))
        }
        {/* <Route component={error} /> */}
      </Switch>
    </ConnectedRouter>
  )
}

export default RouterConfig;
