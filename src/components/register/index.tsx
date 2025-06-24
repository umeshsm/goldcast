import Image from 'next/image';
import React from 'react';

import BgImage from '@/assets/images/register-bg.webp';

import Container from '../container';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Register() {
  return (
    <section className="relative bg-black pt-[100px] pb-[60px] md:pt-[238px] md:pb-[120px]">
      <Image
        src={BgImage}
        alt="Background image"
        className="absolute top-[-90px] left-1/2 w-full max-w-[1440px] -translate-x-1/2"
      />
      <Container className="relative z-10 flex flex-col items-center gap-12 md:gap-18">
        <h2 className="font-inter-tight text-center text-[32px] leading-[140%] font-semibold text-white md:text-[48px] xl:text-[63px]">
          Register
        </h2>
        <div className="w-full max-w-[880px] rounded-4xl bg-linear-(--register-gradient) p-px">
          <div className="h-full rounded-4xl bg-black px-[24px] py-[48px] md:px-[50px] md:py-[105px]">
            <h2 className="font-inter-tight text-[24px] leading-[120%] text-white md:text-[32px] xl:text-[52px]">
              Sign Up
            </h2>
            <div className="mt-[24px] space-y-[24px] md:mt-[48px] md:space-y-[38px]">
              <StyledInput placeholder="First name" />
              <StyledInput placeholder="Last name" />
              <StyledInput type="email" placeholder="Work Email*" />
              <StyledInput placeholder="Title" />
              <StyledInput placeholder="Company Name" />
            </div>
            <Button
              variant="pinkGradient"
              className="mt-[32px] h-[48px] w-full rounded-[9px] text-[18px] font-normal md:mt-[52px] md:h-[70px] md:text-[24px] xl:h-[95px] xl:text-[32px]"
            >
              Apply for Invite
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StyledInput(props: React.ComponentProps<'input'>) {
  return (
    <Input
      className="font-inter-tight border-grey-2 h-[50px] rounded-[31px] px-10 !text-[18px] leading-[1.2] text-white shadow-none outline-none placeholder:text-white/39 md:h-[80px] md:!text-[24px] xl:h-[113px] xl:!text-[31px]"
      {...props}
    />
  );
}
