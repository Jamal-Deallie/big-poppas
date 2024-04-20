import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/utils/cn';

const loadingVariants = cva('absolute inline-flex items-center', {
  variants: {
    variant: {
      default: ['border-black'],
      primary: ['border-white'],
      outline_primary: ['border-primary'],
      outline_secondary: ['border-secondary'],
      secondary: ['border-gray-950'],
      destructive: ['border-white'],
      ghost: ['border-gray-950'],
      link: ['border-indigo'],
    },
  },
});

const Loading = ({ variant }: VariantProps<typeof loadingVariants>) => (
  <div className={loadingVariants({ variant })}>
    <div className='h-4 w-4 animate-spin rounded-full border-2 border-[inherit] border-b-transparent' />
  </div>
);

//Button Component
const buttonVariants = cva(
  //default styles
  'inline-flex items-center justify-center capitalize font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background rounded-md',
  {
    variants: {
      variant: {
        default: 'text-base font-body',
        destructive: 'bg-destructive text-destructive-foreground',
        outline_primary:
          'text-primary hover:text-white border border-primary  hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary-300 text-center dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary-80',
        outline_secondary:
          'text-secondary hover:text-white border border-secondary  hover:bg-secondary/80 focus:ring-4 focus:outline-none focus:ring-secondary-300 dark:border-secondary dark:text-secondary dark:hover:text-white dark:hover:bg-secondary dark:focus:ring-secondary-80',
        secondary: 'bg-secondary text-black font-body border-black',
        primary: 'bg-primary text-black font-body border-black',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3',
        md: 'h-9 px-6',
        lg: 'h-12 px-8',
        xl: 'h-14 px-8',
        icon: 'h-10 w-10',
      },
      font: {
        heading: 'font-heading',
        body: 'font-body',
      },
      fontSize: {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        xxl: 'text-2xl',
      },
      rounded: {
        normal: 'rounded',
        md: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}>
        {loading && <Loading variant={variant} />}
        {props.children && (
          <span className={cn('truncate', loading && 'opacity-0')}>
            {props.children}
          </span>
        )}
      </Comp>
    );
  }
);

export { Button, buttonVariants, Loading, loadingVariants };
