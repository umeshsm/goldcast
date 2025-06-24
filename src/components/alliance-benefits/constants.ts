import Education from '@/assets/images/alliance-benefits/education.webp';
import Learning from '@/assets/images/alliance-benefits/learning.webp';
import Networking from '@/assets/images/alliance-benefits/networking.webp';

import { AllianceBenefitCardProps } from '../alliance-benefit-card';

export const ALLIANCE_BENEFITS_CARDS: AllianceBenefitCardProps[] = [
  {
    icon: Learning,
    name: 'Learning and Discovery',
    description:
      'Offers unparalleled access to the latest advancements in AI for B2B marketing, presented by forward-thinking, innovative brands.',
  },
  {
    icon: Networking,
    name: 'Networking',
    description:
      'Quarterly events for participants to connect, share insights, and foster professional relationships.',
  },
  {
    icon: Education,
    name: 'Multi-Format Educational Content every month',
    description:
      'Available on demand, including webinars, articles, and more, catering to diverse learning preferences.',
  },
];
