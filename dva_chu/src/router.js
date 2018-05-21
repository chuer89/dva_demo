import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, routerRedux, Redirect } from 'dva/router';

import dynamic from 'dva/dynamic';

const { ConnectedRouter } = routerRedux;

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  });

  const routes = [
    {
      path: '/demo',
      // models: () => [import('./models/example')],
      component: () => import('./routes/IndexPage')
    },
    {
      path: '/index',
      models: () => [import('./models/product')],
      component: () => import('./routes/Products')
    },
    {
      path: '/role',
      component: () => import('./routes/role/')
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
        <Route component={error} />
      </Switch>
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers;
