import { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

interface Props {
  children: ReactNode;
  [x: string]: any;
}

const ProtectedRoute = ({ children, ...rest }: Props) => {
  // const { authenticated } = useAuthState()
  const authenticated = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
