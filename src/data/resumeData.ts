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
  category: 'ERP & DMS' | 'EdTech' | 'E-Commerce' | 'Healthcare' | 'CRM' | 'All';
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
    title: 'PHP Laravel Full Stack Developer',
    experienceYears: '3.5+',
    location: 'Lucknow, India',
    phone: '+91 6307220490',
    email: 'surendrakr1212@gmail.com',
    linkedin: 'https://linkedin.com/in/surendrakumar',
    github: 'https://github.com/surendrakumar',
    education: {
      degree: 'BCA (Bachelor of Computer Applications)',
      year: '2018',
      status: 'Graduated'
    },
    bio: 'PHP Laravel Full Stack Developer with 3.5+ years of experience in developing scalable web applications using Laravel, CodeIgniter, MySQL, and REST APIs. Expert at modern frontend technologies like React.js and Alpine.js.',
    summary: 'Proven track record in building ERPs, real-time EdTech platforms, and high-traffic e-commerce systems. Specialist in payment gateway integrations (Stripe), database optimization, and end-to-end product delivery.',
    stats: [
      { label: 'Years Experience', value: '3.5+' },
      { label: 'Enterprise Projects', value: '6+' },
      { label: 'Manual Effort Reduced', value: '35%' },
      { label: 'Client Satisfaction', value: '100%' },
    ]
  },

  experiences: [
    {
      company: 'Jamtech Technologies Pvt. Ltd.',
      role: 'Software Engineer (Full Stack)',
      period: 'Jun 2024 – Present',
      location: 'Lucknow, India',
      isCurrent: true,
      highlights: [
        'Developing and maintaining Laravel-based applications with scalable backend architectures.',
        'Building robust REST APIs for seamless frontend and third-party integrations.',
        'Implemented complex role-based authentication and authorization systems (RBAC).',
        'Optimized database schemas and queries, significantly improving application performance.',
        'Collaborated with frontend teams to integrate React.js and Alpine.js components.'
      ],
      skills: ['PHP', 'Laravel', 'REST APIs', 'RBAC', 'React.js', 'Alpine.js', 'MySQL']
    },
    {
      company: 'Wismad Consulting Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'May 2023 – Jun 2024',
      location: 'India',
      highlights: [
        'Enhanced Laravel projects for Real Estate and E-Learning domains.',
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
      id: 'pakka-portal',
      title: 'Pakka Portal',
      domain: 'portal.pakka.com',
      url: 'https://portal.pakka.com',
      description: 'Developed a comprehensive Distribution Management System (DMS) and ERP. Automated invoicing workflows, significantly reducing manual administrative effort.',
      category: 'ERP & DMS',
      impact: 'Automated invoicing, reducing manual efforts by 35%',
      techStack: ['Laravel', 'MySQL', 'REST APIs', 'Alpine.js', 'JavaScript'],
      featured: true
    },
    {
      id: 'lawrence-classes',
      title: 'Lawrence Classes',
      domain: 'lawrenceclasses.in',
      url: 'https://lawrenceclasses.in',
      description: 'Built an EdTech LMS featuring a real-time examination engine, student portal, and comprehensive results analytics dashboard for K-12 students.',
      category: 'EdTech',
      impact: 'Real-time examination engine & live analytics',
      techStack: ['Laravel', 'React.js', 'MySQL', 'REST APIs', 'Tailwind CSS'],
      featured: true
    },
    {
      id: 'togoparts',
      title: 'Togoparts',
      domain: 'togoparts.com',
      url: 'https://togoparts.com',
      description: 'Large-scale event & cycling platform operating across Singapore. Implemented advanced leaderboard ranking/scoring systems and integrated Stripe payment gateway.',
      category: 'E-Commerce',
      impact: 'High-traffic event platform with Stripe integration across Singapore',
      techStack: ['Laravel', 'Stripe API', 'MySQL', 'JavaScript', 'REST APIs'],
      featured: true
    },
    {
      id: 'isel-global',
      title: 'ISEL Global',
      domain: 'iselglobal.com',
      url: 'https://iselglobal.com',
      description: 'Developed backend admin tools and content management systems for professional course structures (Six Sigma, Agile, Project Management).',
      category: 'EdTech',
      impact: 'Optimized course organization & backend response speed',
      techStack: ['Laravel', 'CodeIgniter', 'MySQL', 'Bootstrap', 'jQuery'],
      featured: false
    },
    {
      id: 'precision-uro',
      title: 'Precision Uro',
      domain: 'precisionuro.com',
      url: 'https://precisionuro.com',
      description: 'Engineered a professional medical services platform with streamlined appointment scheduling, patient portal, and secure consultation workflows.',
      category: 'Healthcare',
      impact: 'Streamlined patient appointments & secure record management',
      techStack: ['Laravel', 'MySQL', 'JavaScript', 'HTML5/CSS3'],
      featured: false
    },
    {
      id: 'wynconnect-crm',
      title: 'Wynconnect CRM',
      domain: 'wynconnect.in',
      url: 'https://wynconnect.in',
      description: 'Developed a custom CRM for enterprise operations. Implemented lead management pipelines, automated follow-up sequences, and sales productivity tracking.',
      category: 'CRM',
      impact: 'Enterprise lead tracking & sales workflow automation',
      techStack: ['Laravel', 'React.js', 'REST APIs', 'MySQL', 'RBAC'],
      featured: true
    }
  ] as ProjectItem[],

  skillCategories: [
    {
      title: 'Backend Development',
      skills: [
        { name: 'PHP', level: 95 },
        { name: 'Laravel Framework', level: 95 },
        { name: 'CodeIgniter', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'MVC Architecture', level: 95 }
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'Next.js', level: 85 },
        { name: 'Alpine.js', level: 90 },
        { name: 'jQuery', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 }
      ]
    },
    {
      title: 'Databases & Storage',
      skills: [
        { name: 'MySQL (Query Optimization)', level: 92 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL Schema Design', level: 90 }
      ]
    },
    {
      title: 'DevOps & Development Tools',
      skills: [
        { name: 'Git / GitHub / GitLab / Bitbucket', level: 92 },
        { name: 'Docker', level: 78 },
        { name: 'Composer & NPM', level: 90 },
        { name: 'Asana / Agile Jira', level: 88 }
      ]
    },
    {
      title: 'Soft Skills & Leadership',
      skills: [
        { name: 'Team Collaboration', level: 95 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Agile Methodologies', level: 90 },
        { name: 'Client Relations & Requirements', level: 88 }
      ]
    }
  ] as SkillCategory[]
};
