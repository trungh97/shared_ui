import * as React from 'react';
import { SVGProps } from 'react';

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </svg>
);
export default SearchIcon;
