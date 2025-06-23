import Image from 'next/image';

import GoldcastLogo from '@/assets/images/logo.webp';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return <Image src={GoldcastLogo} alt="Goldcast logo" className={cn('w-[155px]', className)} />;
}
