import React, { useState, useCallback, useMemo, useContext } from "react";

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const value = useMemo(() => {
    return { count, theme, increment };
  }, [
    count,
    increment,
    theme,
  ]); /* when toggle button is clicked we dont rerejder everything but only*/

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
