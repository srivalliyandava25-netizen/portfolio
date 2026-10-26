import {
  Code2,
  Server,
  Brain,
  Wrench,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  KanbanSquare,
  GraduationCap,
  Users,
  Award,
  Palette,
  Wind,
  Braces,
  Atom,
  Hexagon,
  Share2,
  Terminal,
  Lightbulb,
  GitBranch,
} from 'lucide-react';

export const profile = {
  name: 'Srivalli Yandava',
  title: 'Full Stack Developer',
  location: 'Vizianagaram, Andhra Pradesh, India',
  email: 'srivalliyandava25@navgurukul.org',
  github: 'https://github.com/srivalliyandava',
  linkedin: 'https://www.linkedin.com/in/srivalli-yandava-b1a383377',
  initials: 'SY',
  summary:
    'BCA student at Eternal University and a NavGurukul trainee sponsored by the GMR Foundation, learning and building web applications with React.js, Node.js and Express.js. Focused on becoming a Full Stack Developer, shipping impactful real-world applications, and continuously improving technical craft.',
  shortBio:
    'I am a BCA student at Eternal University developing full-stack skills through hands-on projects and continuous learning. As a NavGurukul trainee sponsored by the GMR Foundation, I build responsive web applications with React.js, Node.js and Express.js — and I care about clean interfaces that solve real problems.',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    blurb: 'Building responsive, accessible interfaces',
    skills: [
      { name: 'HTML5', icon: Code2, accent: '#e34f26' },
      { name: 'CSS3', icon: Palette, accent: '#1572b6' },
      { name: 'Tailwind CSS', icon: Wind, accent: '#38bdf8' },
      { name: 'JavaScript', icon: Braces, accent: '#f7df1e' },
      { name: 'React.js', icon: Atom, accent: '#61dafb' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    blurb: 'Server-side logic and APIs',
    skills: [
      { name: 'Node.js', icon: Hexagon, accent: '#3c873a' },
      { name: 'Express.js', icon: Share2, accent: '#6b7280' },
    ],
  },
  {
    title: 'Programming',
    icon: Brain,
    blurb: 'Core problem-solving fundamentals',
    skills: [
      { name: 'Python', icon: Terminal, accent: '#3776ab' },
      { name: 'Problem-solving', icon: Lightbulb, accent: '#f59e0b' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    blurb: 'Version control and delivery',
    skills: [
      { name: 'Git', icon: GitBranch, accent: '#f05133' },
      { name: 'GitHub', icon: Github, accent: '#1f2538' },
    ],
  },
];

export const projects = [
  {
    id: 'agile-issue-tracker',
    title: 'Agile Issue Tracker',
    tagline: 'Frontend Project',
    description:
      'A React application for tracking issues through three clear stages — To Do, In Progress, and Done — so a team can see the state of every task at a glance and move work forward.',
    features: [
      'Three-stage board: To Do, In Progress, and Done',
      'Create, view, and move issues across stages',
      'Clear visual state of every tracked issue',
      'Clean, intuitive interface for quick scanning',
    ],
    technologies: ['React.js'],
    icon: KanbanSquare,
    accent: '#3a6fe0',
    visual: 'tracker',
    links: {},
  },
  {
    id: 'student-feedback-system',
    title: 'Student Feedback Management System',
    tagline: 'Full-Stack Web Development Project',
    description:
      'A web application that lets students submit feedback through a form and stores it for review — focused on frontend and backend integration, API communication, and database connectivity.',
    features: [
      'Student feedback form with submission flow',
      'Frontend and backend integration via a REST API',
      'API communication and database connectivity',
      'End-to-end full-stack data handling',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    icon: MessageSquare,
    accent: '#7c5ce0',
    visual: 'feedback',
    links: {},
  },
];

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Science',
    institution: 'Eternal University',
    period: '2025 – 2028',
    highlight: 'Current CGPA: 8.9 / 10',
  },
];

export const experience = [
  {
    role: 'Academic Coordinator',
    org: 'NavGurukul Foundation',
    period: '03/2026 – 08/2026',
    type: 'Leadership',
    icon: Users,
    bullets: [
      'Managed student attendance and leave records with accurate, organized tracking.',
      'Mentored students, addressed their concerns, and supported them through clear communication and problem-solving.',
      'Planned and coordinated student activities while balancing responsibilities, deadlines, and teamwork.',
    ],
  },
];

export const certifications = [
  {
    title: 'CodeChef Practice Problems',
    provider: 'Completed all practice problems of 500 difficulty rating',
    icon: Award,
  },
  { title: 'React.js', provider: 'Zuvy', icon: Award },
  { title: 'Node.js', provider: 'Unstop', icon: Award },
  { title: 'Introduction to HTML5', provider: 'University of Michigan', icon: Award },
];

export const languages = ['English', 'Telugu', 'Hindi'];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export const educationIcon = GraduationCap;
