import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const Page = () => {
  const initial = "light";
  const [theme, setTheme] = useState(initial);
  const handlerTheme = (e) => {
    console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header theme={theme} handlerTheme={handlerTheme} />{" "}
        {/* Render the Header component */}
        <Main theme={theme} className="flex-grow" />{" "}
        {/* Render the Main component and make it grow */}
        <Footer theme={theme} /> {/* Render the Footer component */}
      </div>
    </>
  );
};
