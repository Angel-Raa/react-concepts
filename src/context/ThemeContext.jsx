import { useState, createContext } from "react";

const ThemeContext = createContext(); // create context object
const initial = "light";
const ThemeProvider = ({ children }) => {
  // create provider component
  const [theme, setTheme] = useState(initial);
  const handlerTheme = (e) => {
    console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const data = { theme, handlerTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>; //
};
export { ThemeProvider };
export default ThemeContext;
