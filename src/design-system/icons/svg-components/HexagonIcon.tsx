import React from 'react';

interface HexagonProps {
  width?: number;
  height?: number;
  className?: string;
}

export const HexagonIcon: React.FC<HexagonProps> = ({
  width = 390,
  height = 72,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      fill="#fff"
      stroke="#D0D0D8"
    >
      <path d="M23.81 5.1a11.5 11.5 0 0 1 9.2-4.6H356c3.62 0 7.02 1.7 9.2 4.6L388.38 36l-23.2 30.9a11.5 11.5 0 0 1-9.2 4.6H33.02a11.5 11.5 0 0 1-9.2-4.6L.63 36 23.8 5.1Z" />
    </svg>
  );
};
