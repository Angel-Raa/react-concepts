/* eslint-disable react/prop-types */
import "../Context/estilos.css";
export const Header = ({ theme, handlerTheme }) => {
  return (
    <>
      <div className={theme}>
        <div className="container mx-auto py-4">
          <header className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Header</h1>
            <div className="space-x-4">
              <select className="bg-white text-black rounded p-2">
                <option value="EN">English</option>
                <option value="ES">Spanish</option>
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
                  Claro
                </label>
                <input
                  type="radio"
                  name="theme"
                  id="dark"
                  value="dark"
                  className="mr-1"
                  onClick={handlerTheme}
                />
                <label htmlFor="dark">Oscuro</label>
              </div>
            </div>
            <button className="bg-blue-700 text-white px-4 py-2 rounded">
              Iniciar Sesión
            </button>
          </header>
        </div>
      </div>
    </>
  );
};
