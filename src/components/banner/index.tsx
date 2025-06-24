import Image from 'next/image';

import BgImage from '@/assets/images/banner-bg.webp';

import { Button } from '../ui/button';

export default function Banner() {
  return (
    <section className="relative bg-black px-[30px] py-[25px] md:px-[60px] md:py-[48px] xl:px-[93px] xl:py-[68px]">
      <Image
        src={BgImage}
        alt="background image"
        className="absolute top-0 right-0 h-full object-cover"
      />
      <div className="relative z-10">
        <h2 className="font-inter-tight text-[32px] font-semibold text-white md:text-[48px] xl:text-[63px]">
          Be Part of the Future
        </h2>
        <p className="mt-4 max-w-[709px] text-[18px] text-white md:mt-6 md:text-[24px] xl:text-[26px]">
          Ready to transform your marketing with AI? Join as a member for exclusive access to our
          content and community, or partner with us to shape the future of B2B marketing.
        </p>
        <Button
          variant="pinkGradient"
          className="font-inter-tight mt-[24px] h-[48px] rounded-[7px] text-[18px] font-medium md:mt-[34px] md:h-[59px] md:text-[22px]"
        >
          Apply for Invite
        </Button>
      </div>
    </section>
  );
}
