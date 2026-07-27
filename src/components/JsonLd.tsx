import { resumeData } from '@/data/resumeData';

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: resumeData.personal.name,
    jobTitle: 'Senior Full Stack Developer & Freelance Software Engineer',
    telephone: resumeData.personal.phone,
    email: resumeData.personal.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India',
    },
    areaServed: [
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'City', name: 'Bhadohi' },
      { '@type': 'City', name: 'Varanasi' },
      { '@type': 'State', name: 'Uttar Pradesh' },
      { '@type': 'Country', name: 'India' }
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'BCA (Graduated 2018)',
    },
    knowsAbout: [
      'PHP Laravel Web Development',
      'Freelance Web Development in Lucknow',
      'Website Developer in Bhadohi',
      'Web Development Company in Varanasi',
      'Next.js & React Applications',
      'AI API Integration (OpenAI, Claude, Gemini)',
      'Stripe Payment Gateway Integration',
      'Distribution Management Systems (DMS)',
      'EdTech LMS Platforms (TutorInCity, TuitionMentor)',
      'E-Commerce & Custom CRM Architecture'
    ],
    worksFor: resumeData.experiences.map((exp) => ({
      '@type': 'EmployeeRole',
      roleName: exp.role,
      worksFor: {
        '@type': 'Organization',
        name: exp.company,
      },
      startDate: exp.period.split('–')[0].trim(),
    })),
    description: resumeData.personal.bio,
    sameAs: [
      resumeData.personal.linkedin,
      resumeData.personal.github,
    ],
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Surendra Kumar - Best Web Development Company & Freelance Developer`,
    alternateName: [
      'Best Web Development Company in Lucknow',
      'Web Development Company in Bhadohi',
      'Web Development Company in Varanasi',
      'Freelance Web Developer Lucknow',
      'Freelance Web Developer Bhadohi',
      'Freelance Web Developer Varanasi',
      'Website Banane Wale Developer Lucknow Bhadohi Varanasi'
    ],
    image: 'https://surendrakumar.dev/surendra-kumar.jpg',
    telephone: resumeData.personal.phone,
    email: resumeData.personal.email,
    url: 'https://surendrakumar.dev',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India',
    },
    areaServed: ['Lucknow', 'Bhadohi', 'Varanasi', 'Uttar Pradesh', 'India'],
    serviceType: [
      'Website Development Services',
      'PHP Laravel Software Engineering',
      'Freelance Web App Development',
      'E-Commerce Website Creation',
      'EdTech Platform Development',
      'Custom ERP & CRM Software Development'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development & Freelance Software Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Website Creation & Web Development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PHP Laravel & Next.js SaaS Development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Freelance Software Engineering Services'
          }
        }
      ]
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${resumeData.personal.name} | Best Web Development & Freelancer in Lucknow, Bhadohi & Varanasi`,
    url: 'https://surendrakumar.dev',
    author: {
      '@type': 'Person',
      name: resumeData.personal.name,
    },
    description: resumeData.personal.summary,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
