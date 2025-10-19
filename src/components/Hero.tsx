import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Zap, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
            opacity: Math.random() * 0.5 + 0.2,
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
          }}
        />
      ))}

      {/* Orbiting Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow" />
          <div className="absolute inset-8 rounded-full border border-blue-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
          <div className="absolute inset-16 rounded-full border border-cyan-500/10 animate-spin-slow" style={{ animationDuration: '16s' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Futuristic Profile Container */}
          <div className="mb-8 inline-block relative">
            {/* Hexagonal Frame */}
            <div className="relative w-48 h-48 mx-auto">
              {/* Rotating Hexagon */}
              <div className="absolute inset-0 animate-rotate-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50 1 95 25 95 75 50 99 5 75 5 25"
                    fill="none"
                    stroke="url(#hexGradient)"
                    strokeWidth="0.5"
                    className="drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                  />
                  <defs>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
                <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2">
                <Cpu className="w-6 h-6 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Scanning Line */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan opacity-50" />
              </div>

              {/* Profile Image with Glow */}
              <div className="absolute inset-8">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-spin-slow blur-md opacity-60" />
                  <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-pulse-slow">
                    <img
                      src="/photo.jpg"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover border-2 border-black"
                    />
                  </div>
                </div>
              </div>

              {/* Orbiting Icons */}
              <div className="absolute inset-0 animate-rotate-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)]" />
                </div>
              </div>
              <div className="absolute inset-0 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1">
                  <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,1)]" />
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center space-x-2 px-4 py-2 bg-black border border-cyan-500/40 rounded-full holographic backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,1)]" />
              <span className="text-xs text-cyan-300 font-mono">ONLINE</span>
            </div>
          </div>

          {/* Glitch Name Effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="text-gradient-neon glow-intense glitch inline-block font-black tracking-tight">
              Nawel Amara
            </span>
            <div className="absolute -top-1 left-0 w-full text-cyan-300/20 glitch" style={{ animationDelay: '0.1s' }}>
              Nawel Amara
            </div>
          </h1>

          {/* Animated Title with Tech Frame */}
          <div className="mb-8 relative inline-block">
            <div className="px-6 py-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm relative overflow-hidden group">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />

              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="text-xl md:text-2xl font-mono text-cyan-300 tracking-wide">
                  &lt; SOFTWARE ENGINEER /&gt;
                </span>
                <Cpu className="w-5 h-5 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Scanning effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>

          {/* Holographic Description Box */}
          <div className="max-w-3xl mx-auto mb-12 relative">
            <div className="relative p-6 rounded-lg border border-cyan-500/20 holographic backdrop-blur-sm overflow-hidden group">
              {/* Digital corner markers */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan-400 opacity-50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan-400 opacity-50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyan-400 opacity-50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cyan-400 opacity-50" />

              <p className="text-gray-300 text-lg leading-relaxed font-light relative z-10">
                <span className="text-cyan-400 font-mono">&gt;_</span> Building the future through code.
                Passionate about creating <span className="text-cyan-300 font-semibold">innovative solutions</span> and
                pushing the boundaries of what's possible with <span className="text-blue-300 font-semibold">cutting-edge technology</span>.
              </p>

              {/* Data stream effect */}
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent opacity-30 animate-pulse" />
            </div>
          </div>

          {/* Social Links with Cyber Design */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a
              href="https://github.com/nawelamara"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-lg bg-black border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Github className="w-6 h-6 text-cyan-400 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)] transition-all" />
              <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/nawel-amara/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-lg bg-black border border-cyan-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Linkedin className="w-6 h-6 text-blue-400 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,1)] transition-all" />
              <div className="absolute top-0 left-0 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="amaranawel662@gmail.com"
              className="group relative p-4 rounded-lg bg-black border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="w-6 h-6 text-cyan-400 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)] transition-all" />
              <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* CTA Buttons with Futuristic Style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/NawelAmaraCV.pdf"
              download="NawelAmaraCV.pdf"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center space-x-3">
                <Download className="w-5 h-5 text-white group-hover:animate-pulse" />
                <span className="font-bold text-white uppercase tracking-wider">Download CV</span>
                <div className="absolute -right-2 -top-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              </div>
            </a>
            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-black border-2 border-cyan-500/50 text-cyan-400 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center space-x-3">
                <span className="font-bold uppercase tracking-wider">Explore Projects</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,1)]" />
              </div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
          <div className="text-xs text-cyan-400 font-mono tracking-widest">SCROLL</div>
          <ArrowDown className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </div>
      </div>

      {/* Futuristic Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border border-cyan-500/20 rotate-45 animate-float-slow">
        <div className="absolute inset-2 border border-cyan-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,1)]" />
      </div>
      <div className="absolute top-40 right-20 w-20 h-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full border border-blue-500/20 rounded-full relative">
          <div className="absolute inset-2 border border-blue-500/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 w-16 h-16 border border-cyan-500/20 animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
          <circle cx="50" cy="50" r="3" fill="#06b6d4" className="drop-shadow-[0_0_8px_rgba(6,182,212,1)]" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-10 w-32 h-32 border border-cyan-500/10 rounded-lg animate-rotate-slow" />
    </section>
  );
}

<style>{`
  @keyframes gridMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(50px);
    }
  }
`}</style>
