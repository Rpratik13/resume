import { MdEmail } from 'react-icons/md';
import { GrGithub } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';

import { photo } from 'assets/images';

export const profile = {
  awards: [
    {
      details: 'Credential ID:  B44CNCG20BRE1KKK',
      name: 'AWS Certified Developer Associate',
    },
    {
      details:
        'Awarded for excellent portrayal of Leapfrog values, contributions and participation in projects outside scope of work in 2022',
      name: 'Everyday Hero 2022, Leapfrog Technology',
    },
  ],
  contacts: [
    { heading: 'Email', icon: MdEmail, value: 'r.pratik013@gmail.com' },
    {
      heading: 'Github',
      icon: GrGithub,
      link: 'https://github.com/Rpratik13',
      value: 'Rpratik13',
    },
    {
      heading: 'LinkedIn',
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/pratik-rajbhandari/',
      value: 'pratik-rajbhandari',
    },
  ],
  education: [
    {
      details: 'CGPA: 4/4',
      end: 'Present',
      organization: 'University of Cincinnati',
      position: 'Masters of Science, Computer Science',
      start: 'Aug 2024',
    },
    {
      details: 'CGPA: 3.65/4',
      end: 'Nov 2020',
      organization: 'Kathmandu University',
      position: 'Bachelors of Engineering, Computer Engineering',
      start: 'Aug 2016',
    },
  ],
  experience: [
    {
      details: [
        'Enhanced website accessibility by implementing features compliant with WCAG standards, ensuring an inclusive user experience for all visitors.',
        'Developed and optimized stored procedures to efficiently retrieve and process data from external APIs, improving data integration and system performance.',
        'Generated accessible PDF documents adhering to ADA compliance, ensuring usability for individuals with disabilities.',
      ],
      end: 'Present',
      organization: 'University of Cincinnati',
      position: 'Graduate Assistant - Programmer',
      start: 'Oct 2024',
    },
    {
      details: [
        '​​Spearheaded the design and implementation of dynamic survey features with advanced conditional logic, enabling decision-based question and answer functionality, which significantly improved user engagement and data accuracy.',
        'Engineered and deployed date-time-based features, including automated reminders and scheduling systems, while meticulously handling edge cases such as daylight savings and timezone conversions to ensure global usability.',
        'Led the migration of a legacy JavaScript codebase to TypeScript, enhancing code reliability, maintainability, and developer productivity through static typing and modern development practices.',
        'Authored comprehensive unit tests to ensure robust code quality, reduce regression issues, and streamline the CI/CD pipeline for faster and more reliable deployments.',
        'Collaborated seamlessly with an offshore US-based team, working night shifts to ensure real-time communication, alignment, and timely delivery of critical project milestones.',
        'Mentored and trained interns and new team members in Node.js, React and TypeScript, fostering a culture of continuous learning and enabling seamless onboarding for new hires.',
        'Developed and maintained EHR (Electronic Health Record) systems using SMART on FHIR standards, ensuring secure and efficient tracking of patient records while maintaining strict HIPAA compliance.',
        'Actively participated in cross-project bug bash initiatives, identifying, documenting, and resolving critical issues across multiple applications, contributing to overall product quality and stability.',
      ],
      end: 'Jul 2024',
      organization: 'Leapfrog Technology',
      position: 'Senior Software Engineer',
      start: 'Jul 2023',
    },
    {
      details: [
        'Architected, developed, and maintained high-performance, reusable, and scalable software solutions, driving business growth and improving system efficiency across multiple projects.',
        'Designed and implemented RESTful APIs using Node.js, delivering scalable and secure business logic for mission-critical applications, which handled hundreds of concurrent users with minimal latency.',
        'Conducted extensive refactoring, debugging, and testing of legacy applications, improving code quality, maintainability, and performance while reducing technical debt.',
        'Led cross-functional teams of developers to successfully achieve project goals, ensuring on-time delivery and adherence to the highest quality standards.',
        'Mentored and trained interns and new team members, fostering their technical growth and enabling seamless onboarding.',
        'Collaborated closely with Product Owners and stakeholders to gather requirements, prioritize features, and deliver high-quality solutions for mission-critical applications.',
        'Diagnosed and resolved complex technical issues by analyzing code, databases, and system interactions, ensuring minimal downtime and optimal system performance.',
        'Optimized database queries, structures, and API response times, resulting in a significant improvement in system performance and enhanced user satisfaction.',
      ],
      end: 'Jul 2023',
      organization: 'Leapfrog Technology',
      position: 'Software Engineer',
      start: 'Sep 2020',
    },
    {
      details: [
        'Completed intensive HTML and CSS training, acquiring a strong foundation in front-end development and applying these skills to build visually appealing and responsive web applications.',
        'Developed multiple JavaScript-based applications in a single day, including an interactive image carousel, ball collision, a car racing game, and a Flappy Bird clone, demonstrating rapid development capabilities and a strong grasp of core programming concepts.',
        'Designed and implemented a Terraria-inspired clone as a final project, showcasing creativity, problem-solving skills, and the ability to deliver complex projects within tight deadlines.',
        'Built full-stack responsive applications such as a Hackernews clone, GitHub clone UI, todo list, and project management app using Node.js, React and TypeScript, highlighting proficiency in modern web development frameworks and tools.',
        'Gained hands-on experience in developing responsive user interfaces, scalable back-end systems, and RESTful APIs, contributing to a well-rounded understanding of software engineering principles and best practices.',
      ],
      end: 'Sep 2020',
      organization: 'Leapfrog Technology',
      position: 'Intern',
      start: 'Jun 2020',
    },
  ],
  name: 'Pratik Rajbhandari',
  photo: photo,
  projects: [
    {
      details:
        "Memora Health helps healthcare organizations digitize and automate care journeys, making complex care delivery simple for patients and clinicians to navigate. Memora Health ingests existing data on clinical workflows, converts them into cohesive messaging journeys that guide patients through their care episodes, and automates the completion of simple follow-up tasks in the EHR. Memora's platform reduces care team notifications by nearly 40%, has an average patient NPS over 70, and improves engagement and clinical outcomes across diverse populations.",
      end: 'Jul 2024',
      position: 'Memora Health',
      start: 'Nov 2023',
    },
    {
      details:
        'Vyaguta is an Enterprise Resources Planning system for Leapfrog to manage day-to-day business activities such as  Employee Management, Project Management, and Resources Management. Vyaguta as a business management software is used to collect, store, manage and interpret data from organization activities.',
      end: 'Nov 2023',
      position: 'Vyaguta',
      start: 'Dec: 2021',
    },
  ],

  references: [
    {
      email: 'kregorey@ucmail.uc.edu',
      name: 'Emily Kregor',
      title: 'Project Director',
    },
    {
      email: 'peoplemanagement@lftechnology.com',
      name: 'Dixa Shrestha',
      title: 'Senior Manager, People Management',
    },
  ],

  skills: {
    Personal: {
      Communication: 90,
      Leadership: 80,
      Organization: 90,
      'Team Player': 100,
    },
    Professional: {
      'C#': 90,
      Javascript: 100,
      Python: 90,
      Typescript: 100,
    },
  },

  summary:
    'I am a passionate and results-driven software engineer with over 4 years of experience in designing, developing, and optimizing scalable software solutions. My expertise spans full-stack development, RESTful APIs, database optimization, and modern web technologies like Node.js, React, and TypeScript. I am deeply committed to creating inclusive and accessible digital experiences, ensuring compliance with WCAG and ADA standards.',
  title: 'Software Engineer',
};
