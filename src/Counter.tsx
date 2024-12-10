import { Button } from '@components/Button';
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
        <Button
          intent="primary"
          size="small"
          disabled={count === 0}
          onClick={decrement}
        >
          Decrement (-)
        </Button>
        <span data-testid="counter-value" className="text-xl">
          {count}
        </span>
        <Button intent="primary" size="small" onClick={increment}>
          Increment (+)
        </Button>
      </div>
    </div>
  );
};

export default Counter;
