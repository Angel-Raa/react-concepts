/* eslint-disable react/prop-types */
export const Main = ({theme}) => {
  return (
    <>
    <div className={theme}>
    <div className="bg-gray-100 p-4">
        <main className="container mx-auto">
          <p className="text-lg font-semibold">Bienvenid@</p>
          <p className="text-xl font-bold">Hola User</p>
          <p>Mi contenido principal</p>
        </main>
      </div>
    </div>
      
    </>
  );
};
