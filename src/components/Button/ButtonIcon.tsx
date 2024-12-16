import { cva } from 'class-variance-authority';

export const buttonIcon = cva('inline-flex items-center justify-center', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
      xl: '',
      '2xl': '',
    },
    position: {
      leading: ['mr-2'],
      trailing: ['ml-2'],
    },
    intent: {
      primary: 'stroke-white',
      secondary: 'stroke-brand-700',
    },
  },
  compoundVariants: [
    { position: 'leading', size: '2xl', className: 'mr-3' },
    { position: 'trailing', size: '2xl', className: 'ml-3' },
  ],
  defaultVariants: {
    position: 'leading',
    size: 'md',
    intent: 'primary',
  },
});
