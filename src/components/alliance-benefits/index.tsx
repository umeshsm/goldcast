import Container from '@/components/container';

import AllianceBenefitCard from '../alliance-benefit-card';
import { ALLIANCE_BENEFITS_CARDS } from './constants';

export default function AllianceBenefits() {
  return (
    <section className="relative bg-black">
      <Container className="relative z-10 flex flex-col items-center">
        <h2 className="font-inter-tight text-center text-[32px] leading-[140%] font-semibold text-white md:text-[48px] lg:text-[63px]">
          What do alliance members <span className="whitespace-nowrap">get ?</span>
        </h2>
        <div className="mt-8 flex items-stretch justify-center gap-[28px] max-lg:flex-col md:mt-18">
          {ALLIANCE_BENEFITS_CARDS?.map((card) => (
            <AllianceBenefitCard key={card.name} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
