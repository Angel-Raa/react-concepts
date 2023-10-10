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
      console.log(newItem);
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      return 1;
    }
    case TYPES.CLEAR_CART: {
      return 1;
    }
    default:
      return state;
  }
};
