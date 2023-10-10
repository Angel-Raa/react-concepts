/* eslint-disable react/prop-types */
export const CartItem = ({ datas, deleteFromCart }) => {
  const { id, name, price } = datas;
  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md text-center">
        <h1 className="text-xl font-semibold mb-2">Elemento de Cart</h1>
        <h4 className="text-lg">{name}</h4>
        <h5 className="text-lg text-gray-600">${price}.00</h5>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-700"
          onClick={deleteFromCart}
        >
          Eliminar
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-700"
          onClick={deleteFromCart}
        >
          Clean
        </button>
      </div>
    </>
  );
};
