export type SiteConfig = typeof siteConfig
import { Metadata } from 'next';

export const siteConfig = {
  name: 'Big Poppas Pizza',
  description:
    'Indulge in irresistible flavors at Big Poppas Pizza. Inspired by Notorious B.I.G, we craft delectable pizzas with premium ingredients. Order online for a taste of legendary pies delivered to your door, embracing the spirit of hip-hop and culinary excellence. Elevate your pizza experience today!',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],

  mainLinks: [
    {
      title: 'About',
      href: '/about',
      bg: 'bg-primary',
    },
    {
      title: 'Studio',
      href: '/studio',
      bg: 'bg-secondary',
    },
    {
      title: 'Classes',
      href: '/classes',
      bg: 'bg-tertiary',
    },
    {
      title: 'Faqs',
      href: '/faqs',
      bg: 'bg-quaternary',
    },
    {
      title: 'Contact',
      href: '/contact',
      bg: 'bg-quinary',
    },
  ],
  supportLinks: [
    {
      title: 'Privacy Policy',
      href: '/privacypolicy',
    },
    {
      title: 'Faqs',
      href: '/faqs',
    },
    {
      title: 'Sitemap',
      href: '/sitemap',
    },
  ],
};


export const METADATA: Metadata = {
  title: {
    default: 'Big Poppas Pizza | It\'s All Good Baby Baby',
    template: ' %s - Big Poppas Pizza| It\'s All Good Baby Baby',
  },
 
  description:
    'Indulge in irresistible flavors at Big Poppas Pizza. Inspired by Notorious B.I.G, we craft delectable pizzas with premium ingredients. Order online for a taste of legendary pies delivered to your door, embracing the spirit of hip-hop and culinary excellence. Elevate your pizza experience today!',
  category: 'Portfolio',
  metadataBase: new URL('https://big-poppas.vercel.app/'),
  creator: 'Jamal DeAllie',
  publisher: 'Jamal DeAllie',
  authors: {
    name: 'Jamal DeAllie',
    url: 'https://big-poppas.vercel.app/',
  },
  // icons: '/images/icon.png',
  alternates: { canonical: '/' },
  keywords: [
    "Big Poppas Pizzeria",
    "Notorious Pizza",
    "Brooklyn Style Pizza",
    "Hip Hop Pizza Shop",
    "Rap Inspired Pizzeria",
    "Biggie Smalls Pizza",
    "East Coast Pizza Flavors",
    "Juicy Pizza Slices",
    "Ready to Eat Pizza",
    "Mo Money Mozzarella",
    "Hypnotize Pizza Deals",
    "Sky's The Limit Toppings",
    "One More Slice Pizza",
    "Bad Boy Pizza Specials",
    "Gourmet Rap Pizza",
    "Biggie's Pizza Hits",
    "90s Hip Hop Pizza",
    "Brooklyn's Finest Pizzeria",
    "Big Poppa's Pizza Menu",
    "Rapper's Delight Meals"
  ],
  openGraph: {
    type: 'website',
    countryName: 'United States',
    emails: 'jamal.deallie@copilot-studios.com',
    title:'Big Poppas Pizza | {"It\'s"} All Good Baby Baby',
    url: 'https://big-poppas.vercel.app/',
    description:
    'Indulge in irresistible flavors at Big Poppas Pizza. Inspired by Notorious B.I.G, we craft delectable pizzas with premium ingredients. Order online for a taste of legendary pies delivered to your door, embracing the spirit of hip-hop and culinary excellence. Elevate your pizza experience today!',
    images: '/images/opengraph-image.png',
  },
  robots: {
    follow: true,
    index: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Poppas Pizza | {"It\'s"} All Good Baby Baby',
    description:
    'Indulge in irresistible flavors at Big Poppas Pizza. Inspired by Notorious B.I.G, we craft delectable pizzas with premium ingredients. Order online for a taste of legendary pies delivered to your door, embracing the spirit of hip-hop and culinary excellence. Elevate your pizza experience today!',
    creator: 'Jamal DeAllie',
    images: '/images/opengraph-image.png',
    site: 'https://big-poppas.vercel.app/',
  },

  referrer: 'origin-when-cross-origin',
};