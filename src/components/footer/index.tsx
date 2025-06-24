import { ArrowUpRight } from 'lucide-react';

import { SOCIALS } from '@/constants/socials';

import AnimatedLink from '../animated-link';
import Container from '../container';

export default function Footer() {
  return (
    <footer className="border-t-grey-1 border-t bg-black py-6 text-center">
      <Container>
        <div className="flex items-center justify-center gap-2 text-white md:text-[18px] lg:text-[20px] xl:text-[24px]">
          <span>Built with passion by</span>{' '}
          <AnimatedLink
            href={SOCIALS.portfolio}
            target="_blank"
            className="group flex items-center gap-2 font-semibold hover:text-green-400"
            underlineClassName="bg-green-400"
          >
            Umesh S M
            <div className="arrow relative aspect-square size-5 overflow-hidden">
              <ArrowUpRight className="absolute top-1/2 left-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 text-white transition-[left,top] duration-300 group-hover:top-0 group-hover:left-full group-hover:-translate-x-0 group-hover:-translate-y-full" />
              <ArrowUpRight className="absolute top-full left-0 aspect-square -translate-x-full -translate-y-0 text-green-400 transition-[left,top] duration-300 group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" />
            </div>
          </AnimatedLink>
        </div>
      </Container>
    </footer>
  );
}
