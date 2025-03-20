import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Card({ className, children, ...props }) {
  return (
    <div
      className={twMerge(
        clsx('rounded-lg border bg-white shadow-sm', className)
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div
      className={twMerge(
        clsx('flex flex-col space-y-1.5 p-6', className)
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={twMerge(
        clsx('text-2xl font-semibold leading-none tracking-tight', className)
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p
      className={twMerge(
        clsx('text-sm text-gray-500', className)
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div
      className={twMerge(
        clsx('p-6 pt-0', className)
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div
      className={twMerge(
        clsx('flex items-center p-6 pt-0', className)
      )}
      {...props}
    >
      {children}
    </div>
  );
} 