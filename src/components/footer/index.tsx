import { SOCIALS } from '@/constants/socials';

import AnimatedLink from '../AnimatedLink';

export default function Footer() {
  return (
    <div className="text-center">
      <p>
        Built with passion by{' '}
        <AnimatedLink href={SOCIALS.portfolio} target="_blank" className="font-semibold">
          Umesh S M
        </AnimatedLink>
      </p>
    </div>
  );
}
