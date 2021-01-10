import React from "react";
import { Router } from "react-router-dom";
import ReactDOM from "react-dom";
import history from "./history";
import App from "./App";
import "./assets/main.css";
import reportWebVitals from "./reportWebVitals";
import { getAccessToken, setAccessToken } from "./accessToken";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { AuthProvider } from "./context/auth";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { setContext } from "@apollo/client/link/context";
import jwtDecode from "jwt-decode";
import "focus-visible";

const httpLink = createHttpLink({
  uri: "https://dev.repairhub.io/graphql",
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();

  return {
    headers: {
      ...headers,
      "x-access-token": `Bearer ${token && token}`,
    },
  };
});

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: "accessToken",
  isTokenValidOrUndefined: () => {
    const token = getAccessToken();

    if (!token) {
      return true;
    }

    try {
      const { exp }: any = jwtDecode(token);

      if (Date.now() >= exp * 1000) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      console.log("Error here...");
      return false;
    }
  },
  fetchAccessToken: async () => {
    const res = await fetch("https://dev.repairhub.io/refresh_token", {
      method: "GET",
      credentials: "include",
    });
    const { accessToken } = await res.json();
    return accessToken;
  },
  handleFetch: (accessToken) => {
    setAccessToken(accessToken);
  },
  handleError: (err) => {
    console.warn("Your refresh token is invalid. Try to relogin");
    console.log(err);
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) => {
      if (message === "Unauthenticated!") {
        history.push("/auth/clear");
      }
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: from([tokenRefreshLink, authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router history={history}>
          <App />
        </Router>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
