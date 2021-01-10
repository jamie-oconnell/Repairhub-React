// import { ReactNode } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { useAuthState } from "../../context/auth";

// interface Props {
//   children: ReactNode;
//   [x: string]: any;
// }

// const ProtectedRoute = ({ children, ...rest }: Props) => {
//   const { authenticated } = useAuthState();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         authenticated === true ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;

import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuthState } from "../../context/auth";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  const { authenticated } = useAuthState();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        authenticated === true ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
