import { HTMLProps } from 'react';

import { cn } from '@/lib/utils';

export default function Container(props: HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props ?? {};

  return (
    <div
      className={cn('mx-auto w-full max-w-[1440px] px-[24px] md:px-[32px] lg:px-[54px]', className)}
      {...rest}
    />
  );
}
