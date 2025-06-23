import type { MetadataRoute } from 'next';

import { SOCIALS } from '@/constants/socials';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SOCIALS.website}/sitemap.xml`,
  };
}
