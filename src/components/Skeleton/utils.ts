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
