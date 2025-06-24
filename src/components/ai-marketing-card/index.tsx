import Image, { StaticImageData } from 'next/image';

import BgImage from '@/assets/images/ai-marketing-card-bg.webp';

export default function AIMarketingCard(props: AIMarketingCardProps) {
  const { image, name, designation, thoughts } = props ?? {};

  return (
    <div className="relative h-full w-full rounded-3xl px-[24px] py-[32px] md:px-[28px] md:py-[56px]">
      <Image src={BgImage} alt="background image" className="absolute inset-0 h-full" />
      <div className="relative z-10">
        <Image src={image} alt={name} className="size-[100px] md:size-[136px]" />
        <p className="font-inter-tight mt-[24px] text-[24px] text-white md:mt-[42px] md:text-[30px]">
          {name}
        </p>
        <p className="font-inter-tight text-[16px] font-light text-white md:text-[18px]">
          {designation}
        </p>
        <p className="font-inter-tight mt-[18px] text-[18px] leading-[1.4] text-white md:text-[26px]">
          {thoughts}
        </p>
      </div>
    </div>
  );
}

export type AIMarketingCardProps = {
  image: StaticImageData;
  name: string;
  designation: string;
  thoughts: string;
};
