import { useReducer } from "react";
import {
  CounterInit,
  CounterInitialState,
  CounterReducer,
} from "../reducer/CounterReducer";
import { TYPES } from "../actions/CounterActions";

export const Counter = () => {
  const [state, dispatch] = useReducer(
    CounterReducer,
    CounterInitialState,
    CounterInit
  );
  const suma = () => {
    dispatch({ type: TYPES.INCREMENT });
  };

  const resta = () => {
    return dispatch({ type: TYPES.DECREMENT });
  };

  const reset = () => {
    return dispatch({ type: TYPES.RESET });
  };
  return (
    <>
      <div className="p-4 border rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold">Counter con useReducer</h1>
        <h2 className="text-4xl font-bold">{state.counter}</h2>
        <button
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={suma}
        >
          +
        </button>
        <button
          className="px-4 py-2 mx-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={resta}
        >
          -
        </button>
        <button
          className="px-4 py-2 mx-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
          onClick={reset}
        >
          0
        </button>
      </div>
    </>
  );
};
