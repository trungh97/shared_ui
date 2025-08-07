import * as React from 'react';
import { SVGProps } from 'react';

export const SendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 2 11 13M22 2l-7 20-4-9M22 2 2 9l9 4"
    />
  </svg>
);
export default SendIcon;
