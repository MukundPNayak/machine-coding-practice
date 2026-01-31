import React, { useCallback, useMemo, useState } from "react";
import Parent from "./Parent";
import AppProvider from "./context";

const App = () => {
  const [toggle, setToggle] = useState(false);

  console.log("App render");

  return (
    <AppProvider>
      <Parent />
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
    </AppProvider>
  );
};

export default App;
