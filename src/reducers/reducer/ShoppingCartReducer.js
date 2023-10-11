import { TYPES } from "../actions/ShoppingCartActions";

export const ShoppingCartInitialState = {
  products: [
    {
      id: 1,
      name: "Products",
      price: 20,
    },
    {
      id: 2,
      name: "products",
      price: 30,
    },
    {
      id: 3,
      name: "products",
      price: 50,
    },
  ],
  cart: [],
};

export const ShoppingCartReducer = (state, action = {}) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find((item) => item.id === action.payload);
      let itemCart = state.cart.find((item) => item.id === newItem.id);
      return itemCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CAR: {
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
            cart: state.cart.filter((item) => item.id !== action.payload)
      };
    }
    case TYPES.CLEAR_CART: {
      return ShoppingCartInitialState;
    }
    default:
      return state;
  }
};
