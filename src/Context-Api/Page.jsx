import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { ThemeProvider } from "../context/ThemeContext";
import { TranslationProvider } from "../context/TranslationContext";
import { AuthProvider } from "../context/AuthContext";

export const PageContext = () => {
  return (
    <>
      <TranslationProvider>
        <ThemeProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header /> {/* Render the Header component */}
              <Main className="flex-grow" />{" "}
              {/* Render the Main component and make it grow */}
              <Footer /> {/* Render the Footer component */}
            </div>
          </AuthProvider>
        </ThemeProvider>
      </TranslationProvider>
    </>
  );
};
