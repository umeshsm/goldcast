import Image from 'next/image';

import Container from '@/components/container';

import { SPONSORS } from './constants';

export default function Sponsors() {
  return (
    <section className="bg-black pt-[57px] pb-[71px]">
      <Container>
        <h2 className="text-grey-1 text-center text-[24px] font-medium uppercase md:text-[30px]">
          Brought to you by
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-[9px] max-sm:mt-4 max-sm:flex-col">
          {SPONSORS?.map((sponsor) => (
            <Image
              key={sponsor?.name}
              src={sponsor?.icon}
              alt={sponsor?.name}
              className="h-[60px] w-auto sm:h-[100px]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
