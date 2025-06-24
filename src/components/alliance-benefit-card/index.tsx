import Image, { StaticImageData } from 'next/image';

import BgImage from '@/assets/images/alliance-benefit-card-bg.webp';

export default function AllianceBenefitCard(props: AllianceBenefitCardProps) {
  const { icon, name, description } = props ?? {};

  return (
    <div className="relative flex-1 rounded-[17px] px-[35px] py-[40px] max-lg:max-w-[420px]">
      <Image src={BgImage} alt="background image" className="absolute inset-0 h-full w-full" />
      <div className="relative z-10">
        <Image src={icon} alt={name} className="size-10 md:size-15 xl:size-20" />
        <p className="font-inter-tight mt-6 text-[24px] leading-[1.4] font-semibold text-white xl:text-[32px]">
          {name}
        </p>
        <p className="mt-3 text-[18px] leading-[1.4] text-white xl:text-[24px]">{description}</p>
      </div>
    </div>
  );
}

export type AllianceBenefitCardProps = {
  icon: StaticImageData;
  name: string;
  description: string;
};
