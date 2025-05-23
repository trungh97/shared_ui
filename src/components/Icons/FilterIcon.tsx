import * as React from 'react';
import { SVGProps } from 'react';

const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"
    />
  </svg>
);
export default FilterIcon;
