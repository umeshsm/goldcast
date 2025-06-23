import Link, { LinkProps } from 'next/link';
import { HTMLProps } from 'react';

import { cn } from '@/lib/utils';

export default function AnimatedLink({
  children,
  className,
  underlineClassName,
  ...rest
}: AnimatedLinkProps) {
  return (
    <Link className={cn('group relative', className)} {...rest}>
      {children}
      <span
        className={cn(
          'absolute right-full -bottom-0.5 left-0 h-px bg-black transition-[right] duration-300 group-hover:right-0',
          underlineClassName
        )}
      />
    </Link>
  );
}

export type AnimatedLinkProps = LinkProps &
  HTMLProps<HTMLAnchorElement> & { underlineClassName?: string };
