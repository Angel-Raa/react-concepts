import { TYPES } from "../actions/CounterActions";

export const CounterInitialState = {
  counter: 0,
};

export const CounterInit = (initialState) => {
  return { counter: initialState.counter + 1 }; // retorna un objeto con el estado inicial
};

// funcion
export const CounterReducer = (state, action = {}) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { counter: state.counter + 1 };
    case TYPES.DECREMENT:
      return { counter: state.counter - 1 }; // return { counter: 0 }; // retorna un objeto con el estado inicial

    case TYPES.RESET:
      return { counter: 0 };
    default:
      return state;
  }
};
