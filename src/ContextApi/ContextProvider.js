import React, { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
export default function ContextProvider({ children }) {
  const [event, setEvent] = useState();
  return (
    <AppContext.Provider value={{ event, setEvent }}>
      {children}
    </AppContext.Provider>
  );
}
