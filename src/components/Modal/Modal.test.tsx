import '@testing-library/jest-dom';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { Modal } from './Modal';

const renderModal = (open = true, onClose = jest.fn()) => {
  const utils = render(
    <>
      <button type="button">Outside</button>
      <Modal open={open} onClose={onClose} title="Contacts">
        <input aria-label="Search" />
      </Modal>
    </>,
  );
  return { ...utils, onClose };
};

describe('Modal', () => {
  it('renders nothing when closed', () => {
    renderModal(false);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders a dialog labelled by its title, with its content', () => {
    renderModal();

    const dialog = screen.getByRole('dialog', { name: 'Contacts' });
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  it('closes when the open prop turns false', () => {
    const { rerender, onClose } = renderModal();

    rerender(
      <Modal open={false} onClose={onClose} title="Contacts">
        <input aria-label="Search" />
      </Modal>,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('calls onClose on Esc', () => {
    const { onClose } = renderModal();

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose on a backdrop click', () => {
    const { onClose } = renderModal();

    fireEvent.mouseDown(screen.getByTestId('modal-backdrop'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on a click inside the panel', () => {
    const { onClose } = renderModal();

    fireEvent.mouseDown(screen.getByLabelText('Search'));

    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose from the close button', () => {
    const { onClose } = renderModal();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('moves focus inside when it opens', async () => {
    renderModal();

    const dialog = screen.getByRole('dialog');
    await waitFor(() =>
      expect(dialog).toContainElement(document.activeElement as HTMLElement),
    );
  });

  it('focuses the element given by initialFocus', async () => {
    const InitialFocusModal = () => {
      const searchRef = React.useRef<HTMLInputElement>(null);
      return (
        <Modal
          open
          onClose={jest.fn()}
          title="Contacts"
          initialFocus={searchRef}
        >
          <input ref={searchRef} aria-label="Search" />
        </Modal>
      );
    };
    render(<InitialFocusModal />);

    await waitFor(() => expect(screen.getByLabelText('Search')).toHaveFocus());
  });

  it('keeps focus inside when tabbing past the last element', async () => {
    renderModal();
    const dialog = screen.getByRole('dialog');
    await waitFor(() =>
      expect(dialog).toContainElement(document.activeElement as HTMLElement),
    );

    // FloatingFocusManager surrounds the panel with focus guards. Tabbing out of the last
    // element lands on the closing guard, which sends focus back into the panel.
    const guards = document.querySelectorAll<HTMLElement>(
      '[data-floating-ui-focus-guard]',
    );
    expect(guards.length).toBeGreaterThan(0);
    act(() => {
      guards[guards.length - 1].focus();
    });

    await waitFor(() =>
      expect(dialog).toContainElement(document.activeElement as HTMLElement),
    );
  });

  it('hides the rest of the page from assistive technology while open', () => {
    renderModal();

    expect(
      screen.queryByRole('button', { name: 'Outside' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Outside', hidden: true }),
    ).toBeInTheDocument();
  });
});
