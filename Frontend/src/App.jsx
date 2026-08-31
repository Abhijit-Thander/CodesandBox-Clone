import React, { useEffect } from "react";
import { ping } from "./apis/ping";

const App = () => {
  useEffect(() => {
    ping();
  }, []);

  return <div>App</div>;
};

export default App;
