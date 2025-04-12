import React from 'react';

const VectorIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={20}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 10h-4l-3 9L8 1l-3 9H1"
      />
    </svg>
  );
};

export default VectorIcon;
