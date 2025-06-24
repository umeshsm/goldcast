import AIMarketingAlliance from '@/components/ai-marketing-alliance';
import AllianceBenefits from '@/components/alliance-benefits';
import AllianceTargetAudience from '@/components/alliiance-target-audience';
import Banner from '@/components/banner';
import Faqs from '@/components/faqs';
import Hero from '@/components/hero';
import Register from '@/components/register';
import Sponsors from '@/components/sponsors';

export default function Home() {
  return (
    <main>
      <Hero />
      <Sponsors />
      <AIMarketingAlliance />
      <AllianceTargetAudience />
      <AllianceBenefits />
      <Register />
      <Faqs />
      <Banner />
    </main>
  );
}
