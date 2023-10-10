/* eslint-disable react/prop-types */
export const ShoppingCartProducts = ({ datas, addToCart }) => {
  const { id, name, price } = datas;
  return (
    <>
      <div className="bg-white shadow-md p-4 rounded-md">
        <h2 className="text-xl font-semibold">
          Productos en el carrito de compras
        </h2>
        <h2>ID: {id}</h2>
        <h2>Nombre: {name}</h2>
        <h2>Precio: ${price}.00</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
          onClick={() => addToCart(id)}
        >
          Agregar
        </button>
      </div>
    </>
  );
};
