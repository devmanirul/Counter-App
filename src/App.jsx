import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  // increment
  function handleIncrement() {
    setNumber(number + 1);
  }
  // increment
  function handleDecrement() {
    setNumber(number - 1);
  }
  return (
    <div className="h-screen border2 border-red-500 flex justify-center items-center">
      <div className="w-96 p-10 rounded-lg mx-auto bg-orange-200 flex flex-row justify-between items-center">
        {/* increment */}
        <button
          onClick={handleDecrement}
          className="text-white bg-red-500 hover:bg-red-400 text-xl font-semibold px-10 py-4 rounded-md"
        >
          -
        </button>
        <p className="text-4xl font-bold text-center">{number}</p>
        {/* Decrement */}
        <button
          onClick={handleIncrement}
          className="text-white bg-green-500 hover:bg-green-400 text-xl font-semibold px-10 py-4 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
