import type { MetadataRoute } from 'next';

import { SOCIALS } from '@/constants/socials';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SOCIALS.website,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
