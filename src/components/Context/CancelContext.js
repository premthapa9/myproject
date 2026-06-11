import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CancelContext = createContext();

export const CancelProvider = ({ children }) => {
  const [disabled, setDisabled] = useState(false);
  const disableAll = () => setDisabled(true);
  const enableAll = () => setDisabled(false);

  return (
    <CancelContext.Provider value={{ disabled, disableAll, enableAll }}>
      {children}
    </CancelContext.Provider>
  );
};

export const useCancelContext = () => useContext(CancelContext);
