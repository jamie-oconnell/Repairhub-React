import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
// import { useAuthContext } from "../hooks/authHooks";

interface Props {
  Component: ReactNode;
  [x: string]: any;
}

const AuthRoute = ({ Component, ...rest }: Props) => {
  // const { user } = useAuthContext();

  return (
    //   <Route
    //     {...rest}
    //     render={(props) =>
    //       user ? <Redirect to="/" /> : <Component {...props} />
    //     }
    //   />
    <div></div>
  );
};

export default AuthRoute;
