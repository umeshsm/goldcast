import { EmblaCarouselType } from 'embla-carousel';
import { ComponentPropsWithRef, FC, useCallback, useEffect, useState } from 'react';

export const usePagination = (
  emblaApi: EmblaCarouselType | undefined
): UseonPaginationButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onPaginationButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onPaginationButtonClick,
  };
};

type UseonPaginationButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onPaginationButtonClick: (index: number) => void;
};

type PropType = ComponentPropsWithRef<'button'>;

export const PaginationButton: FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
