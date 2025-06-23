'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

import HeroBg from '@/assets/images/hero-bg.webp';
import Container from '@/components/container';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.to('.bg-image', { opacity: '100%', duration: 2 });
  //   },
  //   { scope: container }
  // );

  return (
    <section
      ref={container}
      className="relative min-h-[calc(100vh-56px)] overflow-hidden bg-black md:min-h-[calc(100vh-72px)] xl:min-h-[calc(100vh-94px)]"
    >
      <Image
        src={HeroBg}
        alt="Hero background image"
        className="bg-image absolute top-0 right-0 left-0"
        priority
      />
      <Container className="flex flex-col items-center">
        <h1 className="font-inter-tight relative z-10 mt-[154px] text-center text-[38px] leading-[1] text-white md:text-[76px] lg:text-[100px] xl:text-[140px]">
          the <span className="font-bold italic">future</span> is AI.
        </h1>
        <p className="relative z-10 mt-6 max-w-[985px] text-center text-[18px] leading-[1.3] text-white md:text-[20px] lg:text-[22px] xl:text-[28px]">
          Join the network educating enterprise marketing leaders on the practical application of AI
          in their day-to-day work.
        </p>
      </Container>
    </section>
  );
}
