import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/faqs`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/story`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/menu/pizza`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/menu/contact`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/menu/drinks`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/menu/other`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
  ];
}