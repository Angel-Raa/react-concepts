/* eslint-disable react/prop-types */
import { memo } from "react";

const CounterChildren = ({ counter, suma }) => {
  console.log("Hijo de counter");
  return (
    <>
      <div className="text-center 2xl text-blue-800">
        <h2>Counter Children Component</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={suma}
        >
          +
        </button>
        <h3>Counter Children: {counter}</h3>
    
      </div>
    </>
  );
};

export default memo(CounterChildren);
