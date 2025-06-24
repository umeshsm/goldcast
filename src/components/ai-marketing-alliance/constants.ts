import AndrewNg from '@/assets/images/ai-marketing-alliance-ceos/andrew-ng.webp';
import JensenHuang from '@/assets/images/ai-marketing-alliance-ceos/jensen-huang.webp';
import RobEnslin from '@/assets/images/ai-marketing-alliance-ceos/rob-enslin.webp';
import YoshuaBengio from '@/assets/images/ai-marketing-alliance-ceos/yoshua-bengio.webp';
import { AIMarketingCardProps } from '@/components/ai-marketing-card';

export const AI_MARKETING_ALLIANCE_CARDS: AIMarketingCardProps[] = [
  {
    image: RobEnslin,
    name: 'Rob Enslin',
    designation: 'CEO at UiPath',
    thoughts:
      'AI and automation are not just tools in their toolbox, they are truly change enablers. They empower you to innovate, adapt quicker than ever, and grow.',
  },
  {
    image: JensenHuang,
    name: 'Jensen Huang',
    designation: 'CEO of NVIDIA',
    thoughts:
      'AI will be the most transformative technology of the 21st century. It will affect every industry and aspect of our lives.',
  },
  {
    image: YoshuaBengio,
    name: 'Yoshua Bengio',
    designation: 'Computer scientist and Turing Award laureate',
    thoughts:
      "Artificial intelligence is not just about efficiency gains, it's about opening up new possibilities, unlocking human potential and solving some of society's biggest challenges",
  },
  {
    image: AndrewNg,
    name: 'Andrew Ng',
    designation: 'AI Researcher (Google Brain)',
    thoughts:
      'The automation revolution is arriving, and it will be as transformative for work as the industrial revolution was for manufacturing.',
  },
];
