import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const { children } = props;

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
