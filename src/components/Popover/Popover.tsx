import {
  FloatingArrow,
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  Placement,
  safePolygon,
  useFocus,
} from '@floating-ui/react';
import React, { useState, ReactElement, ReactNode, cloneElement } from 'react';
import { createPortal } from 'react-dom';

interface PopoverProps {
  content: ReactNode;
  placement?: Placement;
  trigger?: 'hover' | 'click' | 'focus';
  children: ReactElement;
  className?: string;
}

const Popover: React.FC<PopoverProps> = ({
  content,
  placement = 'bottom',
  trigger = 'hover',
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = React.useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip({
        fallbackAxisSideDirection: 'start',
        crossAxis: true,
      }),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const hover = useHover(context, {
    enabled: trigger === 'hover',
    handleClose: safePolygon(),
  });

  const click = useClick(context, {
    enabled: trigger === 'click',
  });

  const focus = useFocus(context, {
    enabled: trigger === 'focus',
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    click,
    dismiss,
    focus,
  ]);

  const triggerElement = cloneElement(children as ReactElement<any>, {
    ref: refs.setReference,
    ...getReferenceProps(),
  });

  const popoverContent = (
    <div
      ref={refs.setFloating}
      style={floatingStyles}
      className={`inline-block rounded-lg bg-white p-2 shadow-popover ${className || ''}`}
      {...getFloatingProps()}
    >
      <FloatingArrow ref={arrowRef} context={context} fill="white" />
      <div className="max-h-[200px] max-w-[300px] overflow-y-auto text-[rgba(0,0,0,0.65)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {content}
      </div>
    </div>
  );

  return (
    <>
      {triggerElement}
      {isOpen && createPortal(popoverContent, document.body)}
    </>
  );
};

export default Popover;
