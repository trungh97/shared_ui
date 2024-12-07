import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

test('renders the Counter component correctly', () => {
  render(<Counter />);

  const titleElement = screen.getByText('Counter');
  expect(titleElement).toBeInTheDocument();
});

test('increment and decrement the count', () => {
  render(<Counter />);

  const incrementButton = screen.getByText('Increment (+)');
  const valueElement = screen.getByTestId('counter-value');

  fireEvent.click(incrementButton);

  expect(valueElement).toHaveTextContent('1');

  const decrementButton = screen.getByText('Decrement (-)');

  fireEvent.click(decrementButton);

  expect(valueElement).toHaveTextContent('0');
});

test('decrement the count when count is 0', () => {
  render(<Counter />);

  const decrementButton = screen.getByText('Decrement (-)');

  fireEvent.click(decrementButton);

  expect(decrementButton).toBeDisabled();
});
