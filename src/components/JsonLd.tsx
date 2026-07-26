import { resumeData } from '@/data/resumeData';

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: resumeData.personal.name,
    jobTitle: resumeData.personal.title,
    telephone: resumeData.personal.phone,
    email: resumeData.personal.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'BCA (Graduated 2018)',
    },
    knowsAbout: [
      'PHP',
      'Laravel',
      'CodeIgniter',
      'MySQL',
      'React.js',
      'Next.js',
      'Alpine.js',
      'REST APIs',
      'Stripe Integration',
      'Database Optimization',
      'Web Application Architecture',
      'Distribution Management Systems',
      'EdTech LMS Platforms',
      'CRM Systems'
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

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${resumeData.personal.name} | ${resumeData.personal.title}`,
    url: 'https://surendrakumar.dev',
    author: {
      '@type': 'Person',
      name: resumeData.personal.name,
    },
    description: resumeData.personal.summary,
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: personSchema,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
