'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import BGImage from '@/assets/images/ai-marketing-alliance-bg.webp';
import AIMarketingCard from '@/components/ai-marketing-card';
import Container from '@/components/container';

import Carousel from '../carousel';
import { AI_MARKETING_ALLIANCE_CARDS } from './constants';

export default function AIMarketingAlliance() {
  return (
    <section className="relative bg-black">
      <Image
        src={BGImage}
        alt="background image"
        className="absolute left-1/2 w-full max-w-[1440px] -translate-x-1/2"
      />
      <Container className="relative z-10 flex flex-col items-center gap-[30px]">
        <h2 className="font-inter-tight text-center text-[32px] leading-[140%] font-semibold text-white md:text-[48px] lg:text-[64px]">
          What is the AI Marketing <span className="whitespace-nowrap">Alliance ?</span>
        </h2>
        <p className="max-w-[1027px] text-center text-[18px] leading-[160%] text-white md:text-[24px]">
          The AI Marketing Alliance is the essential resource and network for enterprise marketing
          leaders driven to integrate artificial intelligence into their strategies and operations.
          Our mission is clear: to educate every marketing leader on the practical applications of
          AI, helping them not only keep pace but also excel in a rapidly evolving space.
        </p>
      </Container>
      <div className="relative z-10 mt-20">
        <Carousel
          carouselItemClassname="basis-[571px] max-w-[calc(100vw-32px)]"
          data={AI_MARKETING_ALLIANCE_CARDS}
          carouselItemComponent={AIMarketingCard}
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
        />
      </div>
    </section>
  );
}
