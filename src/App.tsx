import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { useMediaQuery } from "react-responsive";
import { setAccessToken } from "./accessToken";
import useRouter from "./hooks/router";
import LayoutWithSidebar from "./components/layout/LayoutWithSidebar";

interface Props {}

const App: React.FC<Props> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(true);

  const isSmallScreen = useMediaQuery(
    { query: "(max-width: 1224px)" },
    undefined,
    () => {
      setOpen(false);
    }
  );

  const isBigScreen = useMediaQuery(
    { query: '(max-width: 1440px)' },
    undefined,
    () => {
      setOpen(true);
    }
  );

  useEffect(() => {
    fetch("https://dev.repairhub.io/refresh_token", {
      method: "GET",
      // credentials: "include",
    })
      .then(async (x) => {
        console.log(x);
        const res = await x.json();
        console.log(res);
        // const { accessToken } = await x.json();
        // setAccessToken(accessToken);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // if (loading) {
  //   return <div>loading...</div>;
  // }

  return (
    <div className="App">
      {router.pathname !== "/login" ? (
        <LayoutWithSidebar drawer={open}>
          <Routes />
        </LayoutWithSidebar>
      ) : (
        <Routes />
      )}
    </div>
  );
};

export default App;
