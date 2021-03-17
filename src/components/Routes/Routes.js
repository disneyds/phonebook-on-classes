import { LinearProgress } from '@material-ui/core';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import React, { lazy, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import paths from './paths';

const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "LoginView" */),
);

const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "RegisterView" */),
);

const PhonebookView = lazy(() =>
  import('../../views/PhonebookView' /* webpackChunkName: "PhonebookView" */),
);

export default function Routes() {
  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <PrivateRoute
            exact
            path={paths.PHONEBOOK}
            component={PhonebookView}
            redirectTo={paths.LOGIN}
          />

          <PublicRoute
            exact
            restricted
            path={paths.LOGIN}
            component={LoginView}
            redirectTo={paths.PHONEBOOK}
          />

          <PublicRoute
            exact
            restricted
            path={paths.REGISTER}
            component={RegisterView}
            redirectTo={paths.PHONEBOOK}
          />

          <Redirect to={paths.PHONEBOOK} />
        </Switch>
      </Suspense>
    </>
  );
}
