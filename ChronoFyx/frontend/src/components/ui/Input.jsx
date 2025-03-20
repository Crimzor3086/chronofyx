import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Input = forwardRef(
  (
    {
      className,
      type = 'text',
      error,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={twMerge(
            clsx(
              'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-red-500 focus:ring-red-500',
              className
            )
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 