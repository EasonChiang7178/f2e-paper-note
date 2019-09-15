import React, { useContext } from "react";
import useDarkModeHook from "use-dark-mode";

import { THEME } from "../constants/index"

const defaultContextValue = {
  isDarkMode: false,
  theme: THEME.LIGHT,
  toggle: () => {}
};

const Context = React.createContext(defaultContextValue);
const useDarkMode = () => useContext(Context);
const DarkModeConsumer = Context.Consumer;

const DarkModeProvider = ({ children }) => {
  const darkMode = useDarkModeHook(false, { onChange: () => {} })
  return (
    <Context.Provider
      value={{
        isDarkMode: darkMode.value,
        theme: darkMode.value ? THEME.DARK : THEME.LIGHT,
        toggle: darkMode.toggle
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context as default, useDarkMode, DarkModeProvider, DarkModeConsumer };
