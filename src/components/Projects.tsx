import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'QuiZmify – Intelligent Quiz Generator',
       description:
      'A MERN-based quiz generation system where admins, teachers, and students can create, manage, and take quizzes with real-time scoring, multiple question types, and customizable duration.',
    tags: ['MERN', 'React', 'Node.js', 'Express', 'MongoDB'],
      image: 'assets/quizmify11.PNG',
    github: 'https://github.com/nawelamara/Mern-QuizGeneratorGuizmify',
      demo: 'https://example.com',
    },
    {
    title: 'E-Tourism Platform – Experience Module',
       description:
      'Part of a smart tourism system inspired by GetYourGuide. Built the Experience module with advanced search, JSONB modeling, and Angular + Node.js integration with PostgreSQL.',
    tags: ['Angular', 'Node.js', 'Sequelize', 'PostgreSQL', 'TypeScript'],
    image:'assets/dotcom.PNG',
    github: 'https://github.com/nawelamara/e-tourism-experience-module',
      demo: 'https://example.com',
    },
    {
    title: 'Health Insurance Management Platform – Tunisie Telecom',
  description:
      'A futuristic MERN platform to digitize and optimize medical reimbursement requests for Tunisie Telecom employees, including claim tracking, authentication, and email integration.',
    tags: ['MERN', 'React', 'Express.js', 'MongoDB', 'Node.js'],
    image:
      'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/nawelamara/health-insurance-management',
      demo: 'https://example.com',
    },
    {
    title: 'Book Management System – Java Project',
      description:
      'A desktop Java application designed to manage a library of books, including adding, updating, deleting, and searching books using a MySQL database connection.',
    tags: ['Java', 'SpringBoot', 'JPA', 'Thymeleaf', 'MySQL','spring security','Rest API'],
      image: 'assets/book.PNG',
      demo: 'https://example.com',
    },
    {
    title: 'Portfolio – Nawel Amara',
       description:
      'My personal portfolio built with React and TailwindCSS, featuring smooth animations, a modern UI, and integrated EmailJS contact system.',
    tags: ['React', 'TailwindCSS', 'EmailJS', 'Vercel'],
    image:'assets/port.PNG', 
   github: 'https://github.com/nawelamara/portfolio',
      demo: 'https://example.com',
    },

  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and passion projects that demonstrate my technical abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-black/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 card-glow backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
