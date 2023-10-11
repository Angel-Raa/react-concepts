/* eslint-disable react/prop-types */
export const CartItem = ({ datas, deleteFromCart }) => {
  const { id, name, price, quantity } = datas;
  const total = price * quantity;
  return (
    <>
       <div className="bg-white p-4 rounded-md shadow-md text-center">
      <h1 className="text-xl font-semibold mb-2">Elemento de Carrito</h1>
      <h4 className="text-lg">{name}</h4>
      <h5 className="text-lg text-gray-600">
        ${price}.00 X {quantity} = ${total}.00
      </h5>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-700"
        onClick={() => deleteFromCart(id)}
      >
        Eliminar
      </button>
      <br></br>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-700"
        onClick={() => deleteFromCart(id, true) }
      >
        Clear
      </button>
    </div>
    </>
  );
};
