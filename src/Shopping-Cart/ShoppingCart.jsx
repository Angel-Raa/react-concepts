/* eslint-disable no-unused-vars */
import { useReducer } from "react";
import {
  ShoppingCartInitialState,
  ShoppingCartReducer,
} from "../reducers/reducer/ShoppingCartReducer";
import { ShoppingCartProducts } from "./Products";
import { CartItem } from "./CartItem";
import { TYPES } from "../reducers/actions/ShoppingCartActions";

export const ShoppingCart = () => {
  const [state, dispatch] = useReducer(
    ShoppingCartReducer,
    ShoppingCartInitialState
  );

  const { products, cart } = state;

  const addToCart = (productId) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: productId,
    });
  };

  const deleteFromCart = (productId, all = false) => {
    if (all) {
      dispatch({
        type: TYPES.REMOVE_ALL_FROM_CART,
        payload: productId,
      });
    } else {
      dispatch({
        type: TYPES.REMOVE_ONE_FROM_CAR,
        payload: productId,
      });
    }
  };
  const clearCart = () => {
    dispatch({
      type: TYPES.CLEAR_CART,
    });
  };
  return (
    <>
      <div className="bg-gray-200 p-4">
        <h1 className="text-2xl font-semibold mb-2">Shopping Cart</h1>
        <h2 className="text-lg">Products in Cart</h2>
        {products.map((product) => (
          <ShoppingCartProducts
            key={product.id}
            datas={product}
            addToCart={addToCart}
          />
        ))}
        <h3 className="text-lg mt-4">Carrito</h3>
        <div className="bg-gray-200 p-4 mt-4 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Carrito</h3>
          <div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              onClick={clearCart}
            >
              Limpiar Carrito
            </button>
            {cart.map((item, it) => (
              <CartItem key={it} datas={item} deleteFromCart={deleteFromCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
