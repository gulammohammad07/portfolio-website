export interface SocialLink { label: string; href: string; icon: string; }
export interface SkillGroup { title: string; items: string[]; }
export interface Service { title: string; description: string; icon: string; }
export interface Project { id: string; title: string; category: string; summary: string; description: string; image: string; tech: string[]; features: string[]; github: string; live: string; date: string; }
export interface ExperienceItem { company: string; role: string; period: string; description: string; stack: string[]; }
export interface EducationItem { degree: string; school: string; year: string; detail: string; }
export interface Certificate { title: string; issuer: string; year: string; link: string; }
export interface Testimonial { quote: string; author: string; role: string; rating: number; }
export interface BlogPost { title: string; excerpt: string; date: string; href: string; }

export const personalInfo = {
  name: 'Gulam Mohammad Ansari',
  role: 'Frontend Developer',
  location: 'Mumbai, Maharashtra, India',
  email: 'gulammohd8080@gmail.com',
  phone: '+91-8408830377',
  tagline: 'Motivated Frontend Developer with 9–10 months of hands-on experience in Angular, Spartacus, TypeScript, and responsive UI development.',
  resumeUrl: '/assets/Gulam_Resume.pdf',
  profileImage: 'photo/profile.jpeg',
  aboutImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80'
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/gulammohd8080', icon: 'fab fa-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gulam-mohammad-ansari', icon: 'fab fa-linkedin' },
  { label: 'Email', href: 'mailto:gulammohd8080@gmail.com', icon: 'fas fa-envelope' },
  { label: 'WhatsApp', href: 'https://wa.me/918408830377', icon: 'fab fa-whatsapp' }
];

export const skills: SkillGroup[] = [
  { title: 'Frontend', items: ['Angular', 'Spartacus', 'TypeScript', 'RxJS', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'SCSS'] },
  { title: 'Programming & Data', items: ['Java', 'JavaScript', 'MySQL', 'Firebase', 'Firestore', 'Realtime Database'] },
  { title: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'WordPress', 'AWS', 'Netlify', 'Cloudinary', 'Postman'] }
];

export const services: Service[] = [
  { title: 'Responsive UI Development', description: 'Building polished, mobile-friendly interfaces with strong attention to detail and user experience.', icon: 'fas fa-laptop' },
  { title: 'Angular & Spartacus Development', description: 'Creating scalable frontend solutions with reusable components and component mapping/custom overrides.', icon: 'fab fa-angular' },
  { title: 'Frontend Optimization', description: 'Improving responsiveness, consistency, and usability across modern web applications.', icon: 'fas fa-bolt' },
  { title: 'Web Application Basics', description: 'Supporting full-stack-friendly frontend work with clean structure, routing, and state handling.', icon: 'fas fa-code' }
];

export const projects: Project[] = [
  {
    id: 'weather',
    title: 'Weather Application',
    category: 'JavaScript',
    summary: 'A responsive weather app that fetches live city data through the OpenWeather API.',
    description: 'Built a responsive weather dashboard with search functionality for multiple cities and dynamic DOM updates for real-time results.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
    features: ['Live weather search', 'Responsive UI', 'Dynamic updates'],
    github: 'https://github.com/gulammohammad07/weatherAppByJs',
    live: '',
    date: 'Jan 2026'
  },
  {
    id: 'ecom-angular',
    title: 'E-Com by Angular',
    category: 'Angular',
    summary: 'A modular Angular SPA with reusable components and secure navigation flow.',
    description: 'Developed an e-commerce-style Angular application using RxJS, dependency injection, routing guards, and JSON Server to simulate API data.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    tech: ['Angular', 'TypeScript', 'RxJS', 'JSON Server'],
    features: ['Reusable components', 'Routing guards', 'Real-time state handling'],
    github: 'https://github.com/gulammohammad07/MdPerfumesProject',
    live: 'https://mdperdfumes.netlify.app',
    date: 'Jan 2026'
  },
  {
    id: 'spartacus-ui',
    title: 'Spartacus UI Enhancements',
    category: 'Spartacus',
    summary: 'Worked on Spartacus mapping and component overrides to improve storefront UI consistency.',
    description: 'Contributed to UI-level customization and frontend improvements in a commerce environment, focusing on responsive layout and component behavior.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    tech: ['Angular', 'Spartacus', 'SCSS', 'TypeScript'],
    features: ['Component overrides', 'Responsive UI', 'Commerce frontend improvements'],
    github: '',
    live: '',
    date: '2025'
  }
];

export const experience: ExperienceItem[] = [
  { company: 'Tech Charm India Pvt Ltd', role: 'Frontend Developer', period: 'Oct 2025 - Present', description: 'Developed responsive UI using Angular, CSS, and SCSS; worked on Spartacus mapping and component overrides; improved website responsiveness and frontend user experience.', stack: ['Angular', 'Spartacus', 'SCSS', 'TypeScript'] }
];

export const education: EducationItem[] = [
  { degree: 'B.Tech in Computer Science', school: 'Prestige Institute of Management and Research, Bhopal', year: '2021 - 2025', detail: 'CGPA: 6.9 · Built a strong foundation in software engineering and modern web development.' },
  { degree: 'Higher Secondary School Certificate', school: 'Alhamd High School and Junior College, Bhiwandi', year: '2019 - 2021', detail: 'Grade: 76.83%' },
  { degree: 'Secondary School Certificate', school: 'KME English Medium High School and Junior College, Bhiwandi', year: '2019', detail: 'Grade: 53.83%' }
];

export const certificates: Certificate[] = [
  { title: 'C for Beginner', issuer: 'Sheryians Coding School', year: '2022', link: '#' },
  { title: 'MERN Internship', issuer: 'Integrated IT Organization', year: '2023', link: '#' },
  { title: 'Cyber Security Essentials', issuer: 'Cisco', year: '2023', link: '#' },
  { title: 'Java Internship', issuer: 'CodSoft', year: '2024', link: '#' },
  { title: 'AWS Cloud Foundations', issuer: 'AWS', year: '2024', link: '#' },
  { title: 'AWS Cloud Architecting', issuer: 'AWS', year: '2024', link: '#' }
];

export const testimonials: Testimonial[] = [
  { quote: 'A focused and motivated fresher who brings curiosity, consistency, and a strong interest in frontend development.', author: 'Career Focus', role: 'Early-career profile', rating: 5 }
];

export const blogPosts: BlogPost[] = [
  { title: 'Building responsive interfaces with Angular and SCSS', excerpt: 'Practical lessons from creating clean, responsive UI for modern web apps.', date: 'Jun 2026', href: '#' },
  { title: 'Learning frontend craft through real projects and hands-on practice', excerpt: 'How consistent project work helps turn fundamentals into polished UI solutions.', date: 'May 2026', href: '#' }
];

export const stats = [
  { label: 'Projects built', value: '3' },
  { label: 'Frontend experience', value: '9–10 months' },
  { label: 'Certifications', value: '6' },
  { label: 'Core stack', value: 'Angular + Spartacus' }
];
