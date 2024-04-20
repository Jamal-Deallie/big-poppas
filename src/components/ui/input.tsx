import * as React from 'react';

import { cn } from '@/utils/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'font-body focus-visible:ring-secondary flex h-12 min-w-full rounded-md border-2 border-black bg-white px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 lg:text-lg',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
