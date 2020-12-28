import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { setAccessToken } from "./accessToken";

interface Props {}

const App: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://3.21.8.151:2201/refresh_token", {
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
      <Routes />
    </div>
  );
};

export default App;
