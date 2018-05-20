import React from 'react';
import { Router, Route, Switch, routerRedux, Redirect } from 'dva/router';

import dynamic from 'dva/dynamic';

const { ConnectedRouter } = routerRedux;

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/demo',
      // models: () => [import('./models/example')],
      component: () => import('./routes/IndexPage')
    },
    {
      path: '/index',
      // models: () => [import('./models/menus')],
      component: () => import('./routes/Products')
    }
  ];

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/index" />)} />
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
      </Switch>
    </ConnectedRouter>
  )
}

export default Routers;
