import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import Container from '../container';
import { FAQS } from './constants';

export default function Faqs() {
  return (
    <section className="bg-black pt-[40px] pb-[60px] md:pt-[88px] md:pb-[140px]">
      <Container className="flex flex-col items-center">
        <h2 className="font-inter-tight text-center text-[32px] leading-[140%] font-semibold text-white md:text-[48px] xl:text-[63px]">
          Hybrid event platform FAQs
        </h2>
        <div className="mt-6 w-full max-w-[1076px] md:mt-10">
          <Accordion type="single" collapsible className="w-full" defaultValue={FAQS?.[0]?.id}>
            {FAQS?.map(({ id, question, answer }) => (
              <AccordionItem key={id} value={id} className="font-inter-tight">
                <AccordionTrigger className="text-[18px] font-medium text-white md:text-[24px]">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-grey-3 text-[16px] md:text-[18px]">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-5 flex w-full max-w-[1076px] flex-col items-start gap-6 md:mt-20">
          <p className="font-inter-tight text-[24px] font-medium text-white">More questions ?</p>
          <Link
            href="#"
            className="text-red-1 group flex items-center gap-2 text-[16px] font-semibold"
          >
            Visit Help Center <MoveRight className="transition-all duration-200 group-hover:ml-3" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
