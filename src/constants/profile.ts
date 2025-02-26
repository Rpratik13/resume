import { MdEmail } from 'react-icons/md';
import { GrGithub } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';

import { photo } from 'assets/images';

export const profile = {
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
  name: 'Pratik Rajbhandari',
  photo: photo,
  summary:
    'I am a passionate and results-driven software engineer with over 4 years of experience in designing, developing, and optimizing scalable software solutions. My expertise spans full-stack development, RESTful APIs, database optimization, and modern web technologies like Node.js, React, and TypeScript. I am deeply committed to creating inclusive and accessible digital experiences, ensuring compliance with WCAG and ADA standards.',
  title: 'Software Engineer',
};
