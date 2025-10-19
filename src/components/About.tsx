import { Code, Rocket, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and pushing creative boundaries.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing every aspect to deliver lightning-fast user experiences.',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate software engineering student with a deep love for creating
              innovative digital experiences. My journey in tech began with curiosity and
              has evolved into a commitment to excellence.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in modern web technologies and enjoy tackling complex problems
              with elegant solutions. Whether it's crafting beautiful user interfaces or
              architecting robust backend systems, I thrive on challenges.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing
              to open source, or mentoring fellow developers in their journey.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 card-glow"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
