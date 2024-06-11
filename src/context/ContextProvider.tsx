import { FC, createContext, useState } from "react";
import { Ichildren } from "../types/interface";

export const Context: any = createContext({});

const ContextProvider: FC<Ichildren> = ({ children }) => {
  const [theme, setTheme] = useState<any>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const [shadow, setShadow] = useState<boolean>(true);

  const [menuSetting, setMenuSetting] = useState<boolean>(true);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        shadow,
        setShadow,
        menuSetting,
        setMenuSetting,
        open,
        setOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
