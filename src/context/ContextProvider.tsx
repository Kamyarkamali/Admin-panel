import { FC, createContext, useState } from "react";
import { Ichildren } from "../types/interface";

export const Context: any = createContext({});

const ContextProvider: FC<Ichildren> = ({ children }) => {
  const [theme, setTheme] = useState<any>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
