'use client';

import { useState } from 'react';

import {
  CarouselApi,
  CarouselContent,
  CarouselItem,
  Carousel as ShadcnCarousel,
  type CarouselProps as ShadcnCarouselProps,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

import { PaginationButton, usePagination } from './pagination';

export default function Carousel(props: CarouselProps) {
  const {
    data,
    carouselContentClassname,
    carouselItemClassname,
    carouselItemComponent: CarouselItemComponent,
    paginationButtonClassname,
    paginationActiveButtonClassname,
    pagination = true,
    ...rest
  } = props ?? {};
  const [api, setApi] = useState<CarouselApi>();

  const { selectedIndex, scrollSnaps, onPaginationButtonClick } = usePagination(api);

  return (
    <>
      <ShadcnCarousel setApi={setApi} {...rest}>
        <CarouselContent className={carouselContentClassname}>
          {data?.map((item, index) => (
            <CarouselItem key={index} className={carouselItemClassname}>
              <CarouselItemComponent {...item} isActive={index === selectedIndex} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </ShadcnCarousel>
      {pagination && (
        <div className="mt-[24px] flex items-center justify-center gap-[8px] md:mt-[40px]">
          {scrollSnaps?.map((_, index) => (
            <PaginationButton
              key={index}
              className={cn('size-[8px] rounded-full bg-white/50', paginationButtonClassname, {
                [`w-[32px] bg-white ${paginationActiveButtonClassname}`]: index === selectedIndex,
              })}
              onClick={() => onPaginationButtonClick(index)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export type CarouselProps = React.ComponentProps<'div'> &
  ShadcnCarouselProps & {
    data: any[];
    carouselContentClassname?: string;
    carouselItemClassname?: string;
    carouselItemComponent?: any;
    paginationButtonClassname?: string;
    paginationActiveButtonClassname?: string;
    pagination?: boolean;
  };
