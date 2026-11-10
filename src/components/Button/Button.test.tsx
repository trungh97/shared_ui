import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AddIcon } from '@components/Icons';
import Button from './Button';

describe('Button', () => {
  it('keeps the shadow on primary and secondary buttons', () => {
    render(
      <>
        <Button label="Save" />
        <Button intent="secondary" label="Cancel" />
      </>,
    );

    expect(screen.getByRole('button', { name: 'Save' })).toHaveClass(
      'shadow-button-normal',
      'rounded-lg',
      'bg-purple-600',
    );
    expect(screen.getByRole('button', { name: 'Cancel' })).toHaveClass(
      'shadow-button-normal',
      'rounded-lg',
      'bg-brand-50',
    );
  });

  it('renders a ghost button without shadow or background, with a smaller radius', () => {
    render(<Button intent="ghost" label="More" />);

    const button = screen.getByRole('button', { name: 'More' });
    expect(button).toHaveClass(
      'rounded-md',
      'bg-transparent',
      'hover:bg-brand-100',
      'hover:text-brand-600',
    );
    expect(button).not.toHaveClass('shadow-button-normal');
    expect(button).not.toHaveClass('rounded-lg');
  });

  it('renders an icon-only ghost button whose icon follows the text colour', () => {
    const onClick = jest.fn();
    render(
      <Button
        intent="ghost"
        aria-label="New chat"
        label="New chat"
        icon={{ content: <AddIcon data-testid="icon" />, iconOnly: true }}
        onClick={onClick}
      />,
    );

    const button = screen.getByRole('button', { name: 'New chat' });
    expect(button).not.toHaveTextContent('New chat');
    expect(screen.getByTestId('icon')).toHaveClass('stroke-current');
    expect(screen.getByTestId('icon')).not.toHaveClass('stroke-white');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
