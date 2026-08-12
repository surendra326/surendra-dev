export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  highlights: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  url: string;
  description: string;
  category: 'ERP & DMS' | 'EdTech' | 'E-Commerce' | 'Real Estate' | 'CRM' | 'Social & B2B' | 'AgriTech & Fintech' | 'Hospitality' | 'Healthcare' | 'All';
  impact?: string;
  techStack: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: number; icon?: string }[];
}

export const resumeData = {
  personal: {
    name: 'Surendra Kumar',
    title: 'Senior PHP Laravel & Full Stack Developer',
    experienceYears: '4+',
    location: 'Lucknow • Bhadohi • Varanasi, India',
    phone: '+91 6307220490',
    email: 'surendrakr1212@gmail.com',
    linkedin: 'https://www.linkedin.com/in/surendra-kumar-b47599218?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/surendrakumar',
    education: {
      degree: 'BCA (Bachelor of Computer Applications)',
      year: '2018',
      status: 'Graduated'
    },
    bio: 'Senior Full Stack & AI Software Engineer with 4+ years of hands-on expertise engineering high-concurrency SaaS applications, enterprise ERPs, and custom AI platforms. Specialized in PHP Laravel, Next.js, Inertia.js, React.js, and Node.js architectures, delivering robust software solutions for clients across Lucknow, Bhadohi, Varanasi, and globally.',
    summary: 'Accomplished Senior Full Stack Developer & Software Architect based in Lucknow, Bhadohi & Varanasi (Uttar Pradesh). Proven track record leading end-to-end engineering of AI-driven web systems (OpenAI, Claude, Gemini APIs), high-scale EdTech platforms (Lawrence Classes, TutorInCity, TuitionMentor), distribution management ERPs (Pakka Portal), real estate networks, and custom CRM platforms with Stripe payment processing.',
    stats: [
      { label: 'Years Experience', value: '4+' },
      { label: 'Live Projects Delivered', value: '32+' },
      { label: 'Manual Effort Reduced', value: '35%' },
      { label: 'Client Satisfaction', value: '100%' },
    ]
  },

  experiences: [
    {
      company: 'Jamtech Technologies Pvt. Ltd.',
      role: 'Senior Full-Stack & AI Developer',
      period: '2024 – Present',
      location: 'Lucknow, India',
      isCurrent: true,
      highlights: [
        'Building SaaS platforms, AI tools, and internal dashboards end to end.',
        'Developing AI-driven features using OpenAI, Claude, and Gemini APIs.',
        'Working across the full stack in Next.js, Laravel, Inertia.js, and React, from database to deployment.',
        'Developing and maintaining Laravel-based applications with scalable backend architectures.',
        'Implemented complex role-based authentication and authorization systems (RBAC).',
        'Optimized database schemas and queries, significantly improving application performance.'
      ],
      skills: ['Next.js', 'Laravel', 'Inertia.js', 'AI APIs (OpenAI/Claude/Gemini)', 'React.js', 'PHP', 'REST APIs', 'RBAC', 'MySQL']
    },
    {
      company: 'Wismad Consulting Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'May 2023 – Jun 2024',
      location: 'India',
      highlights: [
        'Enhanced Laravel projects for Real Estate, E-Learning, and E-Commerce domains.',
        'Built comprehensive admin dashboards, reporting modules, and backend management systems.',
        'Integrated secure Stripe payment systems and third-party APIs.',
        'Designed and optimized MySQL schemas for high-concurrency environments.'
      ],
      skills: ['Laravel', 'Stripe Integration', 'Real Estate Platforms', 'E-Learning LMS', 'MySQL']
    },
    {
      company: 'WebVire Software Solutions',
      role: 'Software Engineer',
      period: 'Mar 2022 – May 2023',
      location: 'India',
      highlights: [
        'Developed Laravel and CodeIgniter applications using MVC architecture.',
        'Built core backend modules and responsive UI pages using JavaScript/jQuery.',
        'Supported production deployment workflows and version control management using Git.'
      ],
      skills: ['CodeIgniter', 'Laravel', 'JavaScript', 'jQuery', 'Git', 'MVC']
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: 'lawrence-classes',
      title: 'Lawrence Classes',
      domain: 'lawrenceclasses.in',
      url: 'https://lawrenceclasses.in',
      description: 'Built an EdTech LMS featuring a real-time examination engine, student portal, and comprehensive results analytics dashboard for K-12 students.',
      category: 'EdTech',
      impact: 'Real-time examination engine & live analytics',
      techStack: ['Laravel', 'MySQL', 'REST APIs', 'Tailwind CSS', 'JavaScript'],
      featured: true
    },
    {
      id: 'tutor-in-city',
      title: 'TutorInCity',
      domain: 'tutorincity.com',
      url: 'https://tutorincity.com',
      description: 'Premier EdTech & Home Tutor Discovery Portal. Enables parents and students to find verified home tutors, request custom subject tuition, explore expert tutors across cities, and manage bookings.',
      category: 'EdTech',
      impact: 'Multi-city tutor matching & verified tutor booking engine',
      techStack: ['Laravel', 'MySQL', 'REST APIs', 'Tailwind CSS', 'JavaScript'],
      featured: true
    },
    {
      id: 'tuition-mentor',
      title: 'TuitionMentor',
      domain: 'tuitionmentor.com',
      url: 'https://tuitionmentor.com',
      description: 'Comprehensive 1-on-1 EdTech mentorship & home tuition management platform. Engineered tutor verification workflows, automated session scheduling, parent-teacher tracking, and student performance metrics.',
      category: 'EdTech',
      impact: '1-on-1 mentorship platform & automated lesson scheduler',
      techStack: ['Laravel', 'MySQL', 'Stripe API', 'REST APIs', 'JavaScript'],
      featured: true
    },
    {
      id: 'pakka-portal',
      title: 'Pakka Portal',
      domain: 'portal.pakka.com',
      url: 'https://portal.pakka.com',
      description: 'Developed a comprehensive Distribution Management System (DMS) and ERP. Automated invoicing workflows, significantly reducing manual administrative effort.',
      category: 'ERP & DMS',
      impact: 'Automated invoicing, reducing manual efforts by 35%',
      techStack: ['Laravel', 'Inertia.js', 'React.js', 'MySQL', 'REST APIs'],
      featured: true
    },
    {
      id: 'wynconnect-crm',
      title: 'Wynconnect CRM',
      domain: 'wynconnect.in',
      url: 'https://wynconnect.in',
      description: 'Developed a custom CRM for enterprise operations using CodeIgniter. Implemented lead management pipelines, automated follow-up sequences, and sales productivity tracking.',
      category: 'CRM',
      impact: 'Enterprise lead tracking & sales workflow automation',
      techStack: ['CodeIgniter', 'PHP', 'MySQL', 'RBAC', 'jQuery'],
      featured: true
    },
    {
      id: 'vyapar-network',
      title: 'Vyapar Network',
      domain: 'vyaparnetwork.com',
      url: 'https://vyaparnetwork.com',
      description: 'B2B business networking and listing directory platform for Indian MSMEs. Built directory search engines, verified business profiles, and lead matching.',
      category: 'Social & B2B',
      impact: 'B2B business directory & verified lead matching',
      techStack: ['Laravel', 'MySQL', 'REST APIs', 'JavaScript', 'Bootstrap'],
      featured: true
    },
    {
      id: 'agri-raise',
      title: 'AgriRaise',
      domain: 'agriraise.in',
      url: 'https://agriraise.in',
      description: 'AgriTech and agriculture investment portal connecting farmers with digital funding, crop management tools, and investor yield analytics.',
      category: 'AgriTech & Fintech',
      impact: 'Agritech investment platform & farmer funding engine',
      techStack: ['Laravel', 'MySQL', 'REST APIs', 'Payment Gateway', 'JavaScript'],
      featured: true
    },
    {
      id: 'broker-dunia',
      title: 'BrokerDunia',
      domain: 'brokerdunia.com',
      url: 'https://brokerdunia.com',
      description: 'Real estate brokerage network & listing marketplace. Built broker lead management, property verification, and regional search tools.',
      category: 'Real Estate',
      impact: 'B2B real estate brokerage network & property listing portal',
      techStack: ['Laravel', 'MySQL', 'Google Maps API', 'REST APIs', 'JavaScript'],
      featured: true
    },
    {
      id: 'orbosis-reality',
      title: 'Orbosis Reality',
      domain: 'orbosisreality.com',
      url: 'https://orbosisreality.com',
      description: 'Next-generation real estate showcase platform featuring virtual property tours, floor plan visualizations, and buyer consultation booking.',
      category: 'Real Estate',
      impact: 'Realty showcase platform with virtual tour integration',
      techStack: ['Laravel', 'MySQL', 'Three.js / WebGL', 'REST APIs', 'JavaScript'],
      featured: true
    },
    {
      id: 'zanzi-palms',
      title: 'Zanzi Palms',
      domain: 'zanzipalms.com',
      url: 'https://zanzipalms.com',
      description: 'Luxury resort, hospitality & beach villa rental reservation portal. Engineered live room availability calendar, online booking, and payment processing.',
      category: 'Hospitality',
      impact: 'Luxury resort reservation engine & property booking',
      techStack: ['Laravel', 'Stripe API', 'MySQL', 'Alpine.js', 'Tailwind CSS'],
      featured: true
    },
    {
      id: 'thesharepage',
      title: 'The Share Page',
      domain: 'thesharepage.com',
      url: 'https://thesharepage.com',
      description: 'A global social marketplace and community platform connecting users for sharing, buying, selling, and social networking with high-concurrency feeds.',
      category: 'Social & B2B',
      impact: 'High-traffic social marketplace platform with dynamic feeds',
      techStack: ['Laravel', 'React.js', 'MySQL', 'WebSockets', 'REST APIs'],
      featured: true
    },
    {
      id: 'below-valuation',
      title: 'Below Valuation Singapore',
      domain: 'belowvaluation.com.sg',
      url: 'https://belowvaluation.com.sg',
      description: 'Premier Singapore real estate portal listing properties below market valuation. Integrated advanced filters, property calculation tools, and lead capture.',
      category: 'Real Estate',
      impact: 'Singapore property portal with valuation search engines',
      techStack: ['Laravel', 'MySQL', 'JavaScript', 'Google Maps API', 'Bootstrap'],
      featured: false
    },
    {
      id: 'flexistay',
      title: 'FlexiStay Singapore',
      domain: 'flexistay.com.sg',
      url: 'https://flexistay.com.sg',
      description: 'Flexible short & long term rental property management platform in Singapore. Engineered booking management, calendar sync, and payment workflows.',
      category: 'Real Estate',
      impact: 'Streamlined booking engine & property management',
      techStack: ['Laravel', 'Stripe API', 'MySQL', 'Alpine.js', 'Bootstrap'],
      featured: false
    },
    {
      id: 'educert-global',
      title: 'EduCert Global',
      domain: 'educertglobal.com',
      url: 'https://educertglobal.com',
      description: 'International IT training & digital certification platform. Built course enrollment modules, automated certificate generation, and payment checkout.',
      category: 'EdTech',
      impact: 'Automated certification engine & LMS enrollment',
      techStack: ['Laravel', 'Razorpay / Stripe', 'MySQL', 'REST APIs', 'jQuery'],
      featured: false
    },
    {
      id: 'edubheem',
      title: 'Edubheem',
      domain: 'edubheem.com',
      url: 'https://edubheem.com',
      description: 'Interactive K-12 learning portal with live classes, study materials, student performance tracking, and parent communication dashboards.',
      category: 'EdTech',
      impact: 'Interactive LMS platform for students & educators',
      techStack: ['Laravel', 'React.js', 'MySQL', 'REST APIs', 'Tailwind CSS'],
      featured: false
    },
    {
      id: 'isel-global',
      title: 'ISEL Global',
      domain: 'iselglobal.com',
      url: 'https://iselglobal.com',
      description: 'Developed backend admin tools and content management systems for professional course structures (Six Sigma, Agile, Project Management).',
      category: 'EdTech',
      impact: 'Optimized course organization & backend efficiency',
      techStack: ['Laravel', 'CodeIgniter', 'MySQL', 'jQuery', 'Bootstrap'],
      featured: false
    },
    {
      id: 'box-factory',
      title: 'Box Factory',
      domain: 'boxfactory.in',
      url: 'https://boxfactory.in',
      description: 'Custom packaging & corrugated box e-commerce manufacturing platform. Developed dynamic pricing calculator based on box dimensions and custom cart checkout.',
      category: 'E-Commerce',
      impact: 'Custom dimensional pricing engine & instant quotes',
      techStack: ['Laravel', 'MySQL', 'JavaScript', 'Razorpay API', 'Bootstrap'],
      featured: false
    },
    {
      id: 'naree-by-geet',
      title: 'Naree By Geet',
      domain: 'nareebygeet.in',
      url: 'https://nareebygeet.in',
      description: 'E-commerce boutique platform for designer ethnic wear. Built responsive product catalog, filter system, cart management, and payment gateway.',
      category: 'E-Commerce',
      impact: 'Seamless shopping experience & payment integration',
      techStack: ['Laravel', 'MySQL', 'Razorpay API', 'jQuery', 'Bootstrap'],
      featured: false
    },
    {
      id: 'precision-uro',
      title: 'Precision Uro',
      domain: 'precisionuro.com',
      url: 'https://precisionuro.com',
      description: 'Engineered a professional medical services platform with streamlined appointment scheduling, patient portal, and secure consultation workflows.',
      category: 'Healthcare',
      impact: 'Streamlined patient appointments & consultation workflows',
      techStack: ['Laravel', 'MySQL', 'JavaScript', 'HTML5 / CSS3', 'Bootstrap'],
      featured: false
    }
  ] as ProjectItem[],

  skillCategories: [
    {
      title: 'Backend & AI Integration',
      skills: [
        { name: 'PHP & Laravel Framework', level: 98 },
        { name: 'Inertia.js (Laravel SPA Adapter)', level: 95 },
        { name: 'Next.js & Node.js', level: 90 },
        { name: 'AI APIs (OpenAI, Claude, Gemini)', level: 88 },
        { name: 'CodeIgniter', level: 85 },
        { name: 'RESTful APIs & Microservices', level: 95 }
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Inertia.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'Alpine.js', level: 90 },
        { name: 'Tailwind CSS & HTML5/CSS3', level: 95 }
      ]
    },
    {
      title: 'Databases & Storage',
      skills: [
        { name: 'MySQL (Query Optimization)', level: 95 },
        { name: 'MongoDB', level: 82 },
        { name: 'SQL Schema Design', level: 92 }
      ]
    },
    {
      title: 'DevOps & Development Tools',
      skills: [
        { name: 'Git / GitHub / GitLab / Bitbucket', level: 95 },
        { name: 'Docker & Server Deployment', level: 82 },
        { name: 'Composer & NPM', level: 92 },
        { name: 'Agile / Jira / Asana', level: 90 }
      ]
    },
    {
      title: 'Soft Skills & Leadership',
      skills: [
        { name: 'Technical Leadership', level: 92 },
        { name: 'Team Collaboration', level: 95 },
        { name: 'Problem Solving', level: 98 },
        { name: 'Agile & Client Relations', level: 92 }
      ]
    }
  ] as SkillCategory[]
};
