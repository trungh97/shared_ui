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
          label="Decrement (-)"
          intent="primary"
          size="sm"
          disabled={count === 0}
          onClick={decrement}
        />

        <span data-testid="counter-value" className="text-xl">
          {count}
        </span>
        <Button
          label="Increment (+)"
          intent="primary"
          size="sm"
          onClick={increment}
        />
      </div>
    </div>
  );
};

export default Counter;
