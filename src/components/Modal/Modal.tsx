import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import { clsx } from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

// `id` is omitted because the dialog role sets the panel's id.
export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'id'> {
  /** Whether the modal is shown. The modal is controlled: the parent owns this state. */
  open: boolean;
  /** Called when the user asks to close it: Esc, a backdrop click or the close button. */
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  /**
   * The element focused when the modal opens: a ref, or the index of a tabbable element
   * inside it. Defaults to the first tabbable element (the close button).
   */
  initialFocus?: number | React.MutableRefObject<HTMLElement | null>;
}

/**
 * A dialog rendered in a portal over a backdrop. While open, focus stays inside it and
 * the rest of the page is hidden from assistive technology.
 *
 * A press anywhere outside the panel closes it. Content that a child renders in its own
 * plain portal (for example `Popover`, which uses `createPortal`) counts as outside, so
 * don't nest one inside a Modal yet.
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    { open, onClose, title, children, className, initialFocus, ...props },
    ref,
  ) => {
    const titleId = useId();

    const { refs, context } = useFloating({
      open,
      onOpenChange: (nextOpen) => {
        if (!nextOpen) onClose();
      },
    });

    // `mousedown` so that a drag that starts inside the panel and ends on the backdrop
    // doesn't close it.
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
    const role = useRole(context, { role: 'dialog' });
    const { getFloatingProps } = useInteractions([dismiss, role]);

    const mergedRef = useMergeRefs([refs.setFloating, ref]);

    if (!open) return null;

    return (
      <FloatingPortal>
        <FloatingOverlay
          lockScroll
          className="z-50 flex items-center justify-center bg-gray-900/50 p-4"
          data-testid="modal-backdrop"
        >
          <FloatingFocusManager context={context} initialFocus={initialFocus}>
            <div
              ref={mergedRef}
              aria-labelledby={titleId}
              aria-modal="true"
              className={twMerge(
                clsx(
                  'flex max-h-full w-full max-w-lg flex-col rounded-lg bg-white shadow-popover',
                  className,
                ),
              )}
              {...getFloatingProps(props)}
            >
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-5 py-4">
                <h2
                  id={titleId}
                  className="text-lg font-semibold text-gray-900"
                >
                  {title}
                </h2>
                <button
                  type="button"
                  aria-label="Close"
                  className="rounded p-1 text-xl leading-none text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  onClick={onClose}
                >
                  &times;
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
                {children}
              </div>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    );
  },
);

Modal.displayName = 'Modal';
