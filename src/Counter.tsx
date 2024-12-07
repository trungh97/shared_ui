import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold uppercase">Counter</h1>
      <div className="my-6 flex items-center justify-center gap-5">
        <button
          className="rounded-md border border-black bg-slate-300 p-2 hover:cursor-pointer"
          disabled={count === 0}
          onClick={decrement}
        >
          Decrement (-)
        </button>
        <span data-testid="counter-value" className="text-xl">
          {count}
        </span>
        <button
          className="rounded-md border border-black bg-slate-300 p-2 hover:cursor-pointer"
          onClick={increment}
        >
          Increment (+)
        </button>
      </div>
    </div>
  );
};

export default Counter;
