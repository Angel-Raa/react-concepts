import { useState, useCallback } from "react";
import CounterChildren from "./CounterChildren";
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const handlerInput = (e) => {
    setInput(e.target.value);
  };

  const suma = useCallback(() => {
    setCounter(counter + 1)
  }, [counter]);

  return (
    <>
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Counter</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={suma}
        >
          +
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
        <h2 className="text-xl mt-4">Counter: {counter}</h2>
      </div>
      <div className="text-center p-4">
        <input
          type="text"
          value={input}
          onChange={handlerInput}
          className="bg-gray-200 p-2 rounded"
        />
        <h3>Input: {input}</h3>
      </div>
      <div>
        <CounterChildren counter={counter} suma={suma} />
      </div>
    </>
  );
};
