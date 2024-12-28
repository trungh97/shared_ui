import { Button } from '@components/Button';
import { Form } from '@components/Form';
import FormField from '@components/Form/FormField';
import { FacebookIcon } from '@components/Icons';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleSubmit = (values: Record<string, any>) => {
    console.log('Form submitted with values:', values);
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
          icon={<FacebookIcon />}
          onClick={increment}
        />
      </div>
      <div className="flex justify-center">
        <Form onSubmit={handleSubmit}>
          <FormField
            label="Email"
            name="email"
            placeholder="Email"
            rules={[
              { type: 'required', message: 'Email is required' },
              { type: 'email', message: 'Invalid email' },
            ]}
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            rules={[{ type: 'required', message: 'Password is required' }]}
          />
          <Button label="Submit" type="submit" />
        </Form>
      </div>
    </div>
  );
};

export default Counter;
