import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import { setAccessToken } from "./accessToken";
import useRouter from "./hooks/router";
import LayoutWithSidebar from "./components/layout/LayoutWithSidebar";
import { useWindowSize, usePrevious } from "react-use";
import { useAuthDispatch, useAuthState } from "./context/auth";
import { useMeLazyQuery } from "./generated/graphql";

interface Props {}

const App: React.FC<Props> = () => {
  const router = useRouter();
  const dispatch = useAuthDispatch();
  const { loading: authStateLoading } = useAuthState();
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();
  const prevWidth = usePrevious(width);
  const [me] = useMeLazyQuery({
    onCompleted: (data) => {
      dispatch("LOGIN", data?.me);
      dispatch("STOP_LOADING");
    },
  });

  useEffect(() => {
    fetch("https://dev.repairhub.io/refresh_token", {
      method: "GET",
      credentials: "include",
    })
      .then(async (x) => {
        const { accessToken } = await x.json();
        if (accessToken) {
          setAccessToken(accessToken);
          dispatch("REAUTHENTICATED");
          me();
          setLoading(false);
        } else {
          dispatch("LOGOUT");
          dispatch("STOP_LOADING");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Dynamically open / close sidebar
  useEffect(() => {
    if (prevWidth && prevWidth > 1440 && width < 1440) {
      // Window is shrinking
      if (open) {
        setOpen(false);
      }
    } else if (prevWidth && prevWidth < 1440 && width > 1440) {
      // Window is growing
      if (!open) {
        setOpen(true);
      }
    } else if (!prevWidth && width < 1440) {
      setOpen(false);
    }
  }, [width, open, prevWidth]);

  if (loading || authStateLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      {router.pathname !== "/login" && router.pathname !== "/auth/clear" ? (
        <LayoutWithSidebar drawer={open} setDrawer={setOpen}>
          <Routes />
        </LayoutWithSidebar>
      ) : (
        <Routes />
      )}
    </div>
  );
};

export default App;
