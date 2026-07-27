import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#070b14',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://surendrakumar.dev'),
  title: {
    default: 'Surendra Kumar | Best Web Development Company & Freelance Developer in Lucknow, Bhadohi & Varanasi',
    template: '%s | Surendra Kumar Developer Portfolio',
  },
  description:
    'Top Web Development Company & Freelance Full Stack Software Engineer in Lucknow, Bhadohi & Varanasi. Custom website creation, PHP Laravel, Next.js, AI APIs & E-commerce solutions.',
  keywords: [
    // 🏢 Company & Development Search Terms (Lucknow, Bhadohi, Varanasi)
    'best web development company in Lucknow',
    'web development company in Bhadohi',
    'web development company in Varanasi',
    'website design company Lucknow',
    'website design company Bhadohi',
    'website design company Varanasi',
    'best IT company in Lucknow',
    'IT company in Bhadohi',
    'IT software agency Varanasi',
    'website banane wale Lucknow',
    'website banane wale Bhadohi',
    'website banane wale Varanasi',
    'website developer near me Lucknow',
    'website developer near me Bhadohi',
    'website developer near me Varanasi',

    // 👨‍💻 Freelancer Search Terms
    'freelance web developer Lucknow',
    'freelance web developer Bhadohi',
    'freelance web developer Varanasi',
    'freelance Laravel developer Lucknow',
    'freelance software engineer Bhadohi',
    'best freelancer for website development',
    'freelance PHP developer Varanasi',
    'freelance Next.js developer Uttar Pradesh',

    // 🌐 Web Services & Technologies
    'custom website development services',
    'ecommerce website developer Lucknow',
    'ecommerce website developer Bhadohi',
    'ecommerce website developer Varanasi',
    'EdTech platform developer Lucknow',
    'SaaS web application company',
    'PHP Laravel Developer Lucknow',
    'PHP Laravel Developer Bhadohi',
    'PHP Laravel Developer Varanasi',
    'AI API integration developer',
    'Surendra Kumar Full Stack Engineer'
  ],
  authors: [{ name: 'Surendra Kumar', url: 'https://surendrakumar.dev' }],
  creator: 'Surendra Kumar',
  publisher: 'Surendra Kumar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Surendra Kumar | Best Web Development Company & Freelancer (Lucknow, Bhadohi, Varanasi)',
    description:
      'Top Web Development Company & Freelance Full Stack Developer in Lucknow, Bhadohi & Varanasi. Expertise in Next.js, Laravel, AI APIs & Custom SaaS apps.',
    url: 'https://surendrakumar.dev',
    siteName: 'Surendra Kumar Web Development & Engineering',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surendra Kumar | Top Web Developer & Freelancer (Lucknow, Bhadohi, Varanasi)',
    description:
      'Best Web Development Company & Freelancer for custom website creation in Lucknow, Bhadohi & Varanasi.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://surendrakumar.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#070b14] text-slate-100 antialiased min-h-screen flex flex-col selection:bg-indigo-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
