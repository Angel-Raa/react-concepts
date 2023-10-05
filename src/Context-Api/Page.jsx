import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

const initialLenguage = "es";
const initialAuth = null;
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
export const PageContext = () => {
  const initial = "light";
  const [theme, setTheme] = useState(initial);
  const [lenguage, setLenguage] = useState(initialLenguage);
  const [translation, setTranslation] = useState(translations[initialLenguage]);
  const [auth, setAuth] = useState(initialAuth);

  console.log(theme);
  const handlerTheme = (e) => {
    console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
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

  const handlerAuth = (e) => {
    console.log(e.target.value);
    if(auth){
      setAuth(null)
    }
    else{
      setAuth(true)
    }

  }
  
  
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header
          theme={theme}
          handlerTheme={handlerTheme}
          translation={translation}
          handlerLenguage={handlerLenguage}
          handlerAuth={handlerAuth}
          auth={auth}
          
        />{" "}
        {/* Render the Header component */}
        <Main
          theme={theme}
          className="flex-grow"
          translation={translation}
          auth={auth}
        />{" "}
        {/* Render the Main component and make it grow */}
        <Footer theme={theme} translation={translation} />{" "}
        {/* Render the Footer component */}
      </div>
    </>
  );
};
