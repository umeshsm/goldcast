'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

import HeroBg from '@/assets/images/hero-bg.webp';
import Container from '@/components/container';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrambleTextPlugin);

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to('.bg-image', { opacity: '100%', translateY: 0, duration: 2 });
      gsap.to('.future-word', { color: '#ff4200', duration: 2 });
      gsap.to('.hero-description', {
        duration: 3,
        scrambleText:
          'Join the network educating enterprise marketing leaders on the practical application of AI in their day-to-day work.',
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-black md:min-h-[calc(100vh-72px)] lg:h-[833px] xl:min-h-[calc(100vh-94px)]"
    >
      <Image
        src={HeroBg}
        alt="Hero background image"
        className="bg-image absolute top-[130px] left-1/2 w-full max-w-[1440px] -translate-x-1/2 -translate-y-full opacity-0 md:top-22 lg:top-16 xl:top-2"
        priority
      />
      <Container className="flex flex-col items-center">
        <h1 className="hero-heading font-inter-tight relative z-10 mt-[162px] text-center text-[38px] leading-[1] text-white md:text-[76px] lg:text-[100px] xl:text-[140px] xl:leading-[118px]">
          the <span className="future-word font-bold italic">future</span> is AI.
        </h1>
        <p className="hero-description relative z-10 mt-6 max-w-[985px] text-center text-[18px] leading-[1.3] text-white md:text-[20px] lg:text-[22px] xl:text-[28px]"></p>
        <Button
          variant="pinkGradient"
          className="font-inter-tight z-10 mt-[30px] rounded-[8px] transition-all duration-200 hover:scale-110"
        >
          Apply Now <ChevronRight className="size-5" />
        </Button>
      </Container>
    </section>
  );
}
