import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import AvatarSkeleton, { AvatarSkeletonProps } from './AvatarSkeleton';
import ParagraphSkeleton, { ParagraphSkeletonProps } from './ParagraphSkeleton';
import TitleSkeleton, { TitleSkeletonProps } from './TitleSkeleton';
import {
  DEFAULT_PARAGRAPH_ROW_COUNT,
  DEFAULT_PARAGRAPH_WIDTH,
  DEFAULT_TITLE_WIDTH,
} from './constants';
import clsx from 'clsx';

const skeleton = cva('bg-gray-200', {
  variants: {
    active: {
      true: 'animate-pulse',
      false: '',
    },
    round: {
      true: 'rounded-md',
      false: '',
    },
  },
  defaultVariants: {
    active: true,
    round: false,
  },
});

export interface SkeletonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof skeleton> {
  active?: boolean;
  avatar?: boolean | AvatarSkeletonProps;
  loading?: boolean;
  paragraph?: boolean | ParagraphSkeletonProps;
  round?: boolean;
  title?: boolean | TitleSkeletonProps;
}

/**
 * A skeleton component to show a loading state of a component.
 *
 * @param {boolean} [active=true] - Show animation effect.
 * @param {boolean|AvatarSkeletonProps} [avatar=false] - Show avatar placeholder.
 * @param {boolean} [loading] - Display the skeleton when true.
 * @param {boolean|ParagraphSkeletonProps} [paragraph=true] - Show paragraph placeholder.
 * @param {boolean} [round=false] - Show paragraph and title radius when true.
 * @param {boolean|TitleSkeletonProps} [title=true] - Show title placeholder.
 * @param {string} [className] - Additional CSS classes to add to the component.
 * @param {ReactNode} [children] - The children to render when `loading` is false.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props] - Additional props to pass to the component.
 */
const SkeletonComponent: React.FC<SkeletonProps> = ({
  active = true,
  avatar = false,
  loading,
  paragraph = true,
  round = false,
  title = true,
  className,
  children,
  ...props
}) => {
  if (!loading) {
    return <>{children}</>;
  }

  return (
    <div
      className={clsx(`flex w-full items-start space-x-4 space-y-3`, className)}
      {...props}
    >
      {/* Avatar Skeleton */}
      {avatar && (
        <AvatarSkeleton
          active={active}
          shape="circle"
          size="large"
          {...(typeof avatar === 'object' ? avatar : {})}
        />
      )}

      <div className="flex-1 space-y-3">
        {/* Title Skeleton */}
        {title && (
          <TitleSkeleton
            active={active}
            width={DEFAULT_TITLE_WIDTH}
            round={round}
            {...(typeof title === 'object' ? title : {})}
          />
        )}

        {/* Default Paragraph Skeleton */}
        {paragraph && (
          <ParagraphSkeleton
            active={active}
            rows={DEFAULT_PARAGRAPH_ROW_COUNT}
            width={DEFAULT_PARAGRAPH_WIDTH}
            round={round}
            className={title ? '!mt-6' : ''}
            {...(typeof paragraph === 'object' ? paragraph : {})}
          />
        )}
      </div>
    </div>
  );
};

type SkeletonType = React.FC<SkeletonProps> & {
  Avatar: typeof AvatarSkeleton;
  Title: typeof TitleSkeleton;
  Paragraph: typeof ParagraphSkeleton;
};

const Skeleton = SkeletonComponent as SkeletonType;
Skeleton.Avatar = AvatarSkeleton;
Skeleton.Title = TitleSkeleton;
Skeleton.Paragraph = ParagraphSkeleton;

export { Skeleton };
export default Skeleton;
