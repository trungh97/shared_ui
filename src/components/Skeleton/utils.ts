import { AvatarSize } from './types';

const sizeMap: Record<AvatarSize, { width: number; height: number }> = {
  small: { width: 24, height: 24 },
  default: { width: 32, height: 32 },
  large: { width: 40, height: 40 },
};

export const getAvatarSize = (
  size: AvatarSize,
): {
  width: number;
  height: number;
} => {
  if (typeof size === 'number') {
    return { width: size, height: size };
  }

  const { width, height } = sizeMap[size] || sizeMap.default;
  return { width, height };
};

export const getRowWidth = (
  index: number,
  rows: number,
  width: number | string | Array<number | string>,
): string => {
  if (Array.isArray(width)) {
    // If width is an array, return the corresponding width for the row
    if (!width[index]) {
      return '100%'; // Default to full width if no width is specified for the row
    }

    if (typeof width[index] === 'number') {
      return `${width[index]}px`; // Convert number to Tailwind's arbitrary width syntax
    }

    if (typeof width[index] === 'string') {
      return `${width[index]}`; // Use the string value directly
    }
  } else {
    // If width is a single value, apply it only to the last row
    if (index === rows - 1) {
      if (typeof width === 'number') {
        return `${width}px`; // Convert number to Tailwind's arbitrary width syntax
      }

      if (typeof width === 'string') {
        return `${width}`; // Use the string value directly
      }
    }
  }

  return '100%'; // Default to full width for all other cases
};
