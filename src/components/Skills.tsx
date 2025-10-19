import { Database, Code2, Layout, Server, GitBranch, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C','PHP','HTML','CSS','Java/Android'],
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      icon: Layout,
      title: 'Frontend',
      skills: ['React', 'Angular', 'Tailwind CSS', 'Thymeleaf', 'HTML/CSS'],
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Spring Boot', 'Sequilize ORM', 'REST APIs'],
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'JPA/Hibernate','Firebase','SQLite'],
      color: 'from-green-400 to-green-600',
    },
    {
      icon: GitBranch,
      title: 'Tools',
      skills: ['Git', 'Docker', 'VS Code', 'Linux', 'Figma', 'Postman','Swagger','Maven'],
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Cpu,
      title: 'Concepts',
      skills: ['Algorithms', 'OOP', 'Design Patterns', 'Testing', 'Agile Methodologies','MVC Architecture'],
      color: 'from-pink-400 to-pink-600',
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through dedication, practice, and real-world experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-black/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 card-glow backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress bars for main skills */}
        <div className="mt-16 max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-semibold text-center text-cyan-400 mb-8">Proficiency Levels</h3>
          {[
            { name: 'JavaScript/TypeScript', level: 90 },
            { name: 'React & Frontend', level: 85 },
            { name: 'Backend Development', level: 80 },
            { name: 'Database Design', level: 75 },
          ].map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-cyan-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    animation: `slideRight 1s ease-out ${index * 0.2}s forwards`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
