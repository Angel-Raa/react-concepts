import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import TranslationContext from "../context/TranslationContext";
/* eslint-disable react/prop-types */
export const Footer = () => {
  const {theme} = useContext(ThemeContext);
  const {translation} = useContext(TranslationContext);
  return (
    <>
      <div className={theme}>
        <div className="bg-gray-200">
          <footer className="container mx-auto py-4">
            <h1 className="text-xl font-semibold">{translation.footerTitle}</h1>
          </footer>
        </div>
      </div>
    </>
  );
};
