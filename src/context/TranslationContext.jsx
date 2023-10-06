import { useState, createContext } from "react";

const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const translations = {
    en: {
      headerTitle: "My application with Context API",
      headerSubtitle: "My header",
      headerLight: "Light",
      headerDark: "Dark",
      buttonLogin: "Login",
      buttonLogout: "Logout",
      mainWelcome: "Welcome Guest",
      mainHello: "Hello User",
      mainContent: "My main content",
      footerTitle: "My footer",
    },
    es: {
      headerTitle: "Mi aplicación con Context API",
      headerSubtitle: "Mi cabecera",
      headerLight: "Claro",
      headerDark: "Oscuro",
      buttonLogin: "Iniciar Sesión",
      buttonLogout: "Cerrar Sesión",
      mainWelcome: "Bienvenid@ invitad@",
      mainHello: "Hola Usuari@",
      mainContent: "Mi contenido principal",
      footerTitle: "Mi pié de página",
    },
  };
  const handlerLenguage = (e) => {
    console.log(e.target.value);
    if (e.target.value === "es") {
      setLenguage("es");
      setTranslation(translations.es);
    } else {
      setLenguage("en");
      setTranslation(translations.en);
    }
  };

  const initialLenguage = "es";
  // eslint-disable-next-line no-unused-vars
  const [lenguage, setLenguage] = useState(initialLenguage);
  const [translation, setTranslation] = useState(translations[initialLenguage]);
  const data = { translation, handlerLenguage };
  return (
    <TranslationContext.Provider value={data}>
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationProvider };
export default TranslationContext;
