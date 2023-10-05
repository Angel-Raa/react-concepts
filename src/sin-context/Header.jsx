/* eslint-disable react/prop-types */
import "../sin-context/estilos.css";
export const Header = ({
  theme,
  handlerTheme,
  translation,
  handlerLenguage,
  handlerAuth,
  auth,
}) => {
  return (
    <>
      <div className={theme}>
        <div className="container mx-auto py-4">
          <header className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">
              {translation.headerTitle}
            </h1>
            <div className="space-x-4">
              <select
                className="bg-white text-black rounded p-2"
                onChange={handlerLenguage}
              >
                <option value="es">Spanish</option>
                <option value="en">English</option>
              </select>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="theme"
                  id="light"
                  value="light"
                  className="mr-1"
                  defaultChecked
                  onClick={handlerTheme}
                />
                <label htmlFor="light" className="mr-4">
                  {translation.headerLight}
                </label>
                <input
                  type="radio"
                  name="theme"
                  id="dark"
                  value="dark"
                  className="mr-1"
                  onClick={handlerTheme}
                />
                <label htmlFor="dark">{translation.headerDark}</label>
              </div>
            </div>
            {auth ? (
              <button className="bg-blue-700 text-white px-4 py-2 rounded" onClick={handlerAuth}>
                {translation.buttonLogin}
              </button>
            ) : (
              <button className="bg-blue-700 text-white px-4 py-2 rounded" onClick={handlerAuth}>
                {translation.buttonLogout}
              </button>
            )}
          </header>
        </div>
      </div>
    </>
  );
};
