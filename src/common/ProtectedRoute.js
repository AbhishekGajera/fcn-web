import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useCookies  } from 'react-cookie';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const [cookies] = useCookies(['user']);
  const isAuthenticated = cookies && cookies.user && cookies.user.auth && cookies.user.auth === 'verified'

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/user-pages/login-1" />
      }
    />
  );
}

export default ProtectedRoute;