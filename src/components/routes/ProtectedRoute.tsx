import { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "../../context/auth";

interface Props {
  children: ReactNode;
  [x: string]: any;
}

const ProtectedRoute = ({ children, ...rest }: Props) => {
  const { authenticated } = useAuthState();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated === true ? (
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
