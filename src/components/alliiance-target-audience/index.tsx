import Image from 'next/image';

import BGImage from '@/assets/images/alliance-target-audience-bg.webp';
import VideoThumbnail from '@/assets/images/video-thumbnail.webp';
import Container from '@/components/container';

export default function AllianceTargetAudience() {
  return (
    <section className="relative bg-black py-[70px] md:py-[156px]">
      <Image
        src={BGImage}
        alt="background image"
        className="absolute left-1/2 z-10 w-full max-w-[1440px] -translate-x-1/2"
      />
      <Container className="relative z-20 flex flex-col items-center">
        <h2 className="font-inter-tight text-center text-[32px] leading-[140%] font-semibold text-white md:text-[48px] lg:text-[56px]">
          Who is the Alliance <span className="whitespace-nowrap">for ?</span>
        </h2>
        <p className="mt-4 max-w-[1110px] text-center text-[18px] leading-[160%] text-white md:mt-6 md:text-[24px]">
          The Alliance is designed for marketing executives in enterprise-sized organizations across
          all industry verticals. Joining will allow you not just to stay current, but to actively
          shape the future of marketing in your organization; empowering your team to drive both
          pipeline and productivity.
        </p>
        <Image
          src={VideoThumbnail}
          alt="video thumbnail"
          className="mt-10 hover:cursor-pointer md:mt-20"
        />
      </Container>
    </section>
  );
}
