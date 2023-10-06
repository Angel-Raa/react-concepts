import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import TranslationContext from "../context/TranslationContext";
import AuthContext from "../context/AuthContext";
/* eslint-disable react/prop-types */

export const Main = () => {
  const { theme } = useContext(ThemeContext);
  const { translation } = useContext(TranslationContext);
  const { auth } = useContext(AuthContext);

  return (
    <>
      <div className={theme}>
        {auth ? (
          <p className="text-xl font-bold">{translation.mainHello}</p>
        ) : (
          <p className="text-lg font-semibold">{translation.mainWelcome}</p>
        )}
        <div className="bg-gray-100 p-4">
          <main className="container mx-auto">
            <p>{translation.mainContent}</p>
          </main>
        </div>
      </div>
    </>
  );
};
