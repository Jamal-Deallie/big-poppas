import * as React from 'react';

import { cn } from '@/utils/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex w-full rounded-md border-2 border-black bg-background px-3 py-2 text-base lg:text-lg text-black ring-black placeholder:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-50 resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export default TextArea;
