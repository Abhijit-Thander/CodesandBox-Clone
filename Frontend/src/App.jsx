import React, { useEffect, useState } from "react";
import { ping } from "./apis/ping";
import { usePing } from "./hooks/apis/queries/usePing";

const App = () => {
  const { isLoading, data } = usePing();

  const [isVisible, setisVisible] = useState(false);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <button onClick={() => setisVisible(!isVisible)}>Toggle</button>
      {isVisible && <h1>Hello,{data.message}</h1>}
    </div>
  );
};

export default App;
