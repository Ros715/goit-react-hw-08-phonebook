import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export { PublicRoute };
