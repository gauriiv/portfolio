import logo from "../assets/glogo.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Profile and Intro */}
          <div className="flex-1 w-full animate-fade-in-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 dark:from-emerald-500 dark:to-cyan-500 rounded-full blur-lg opacity-50 animate-pulse-glow"></div>
                <img
                  src={logo}
                  alt="Profile"
                  className="relative w-32 h-32 rounded-full object-cover ring-4 ring-pink-400/40 dark:ring-emerald-500/30"
                />
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-pink-500 dark:bg-emerald-500 rounded-full border-4 border-pink-50 dark:border-slate-900 flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-pink-500 dark:text-emerald-400 font-medium mb-2">👋 Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                  <span className="text-pink-900 dark:text-white">Garima </span>
                  <span className="bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    Sharma
                  </span>
                </h1>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-500 dark:to-cyan-500"></div>
                  <p className="text-lg md:text-xl text-pink-700 dark:text-slate-300">
                    Educator & Developer
                  </p>
                </div>
              </div>
            </div>

            <p className="text-pink-700 dark:text-slate-400 text-lg mb-8 leading-relaxed text-center sm:text-left">
              B.Tech CSE student at YMCA Faridabad with a passion for teaching and technology. 
              I have experience providing tuition to students up to 10th class, and I'm also 
              developing my skills in web development. I'm committed to helping students understand 
              concepts clearly with my strong communication and problem-solving skills.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white/70 dark:bg-slate-800/30 backdrop-blur-sm border border-pink-200 dark:border-slate-700/50 rounded-2xl hover:border-pink-400 dark:hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:scale-105 animate-fade-in-up opacity-0 animation-delay-100" style={{ animationFillMode: 'forwards' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-1">2+</div>
                <div className="text-pink-700 dark:text-slate-400 text-sm">Years Teaching</div>
              </div>
              <div className="text-center p-4 bg-white/70 dark:bg-slate-800/30 backdrop-blur-sm border border-pink-200 dark:border-slate-700/50 rounded-2xl hover:border-pink-400 dark:hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:scale-105 animate-fade-in-up opacity-0 animation-delay-200" style={{ animationFillMode: 'forwards' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-1">20+</div>
                <div className="text-pink-700 dark:text-slate-400 text-sm">Students Taught</div>
              </div>
              <div className="text-center p-4 bg-white/70 dark:bg-slate-800/30 backdrop-blur-sm border border-pink-200 dark:border-slate-700/50 rounded-2xl hover:border-pink-400 dark:hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:scale-105 animate-fade-in-up opacity-0 animation-delay-300" style={{ animationFillMode: 'forwards' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-1">10th</div>
                <div className="text-pink-700 dark:text-slate-400 text-sm">Class Level</div>
              </div>
              <div className="text-center p-4 bg-white/70 dark:bg-slate-800/30 backdrop-blur-sm border border-pink-200 dark:border-slate-700/50 rounded-2xl hover:border-pink-400 dark:hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:scale-105 animate-fade-in-up opacity-0 animation-delay-400" style={{ animationFillMode: 'forwards' }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-1">CSE</div>
                <div className="text-pink-700 dark:text-slate-400 text-sm">Student</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link
                to="/projects"
                className="bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-500 dark:to-cyan-500 hover:from-pink-600 hover:to-rose-600 dark:hover:from-emerald-600 dark:hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 dark:shadow-emerald-500/25 hover:shadow-pink-500/40 dark:hover:shadow-emerald-500/40 transform hover:scale-105"
              >
                View My Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="border-2 border-pink-300 dark:border-slate-600 hover:border-pink-500 dark:hover:border-emerald-500 text-pink-700 dark:text-slate-300 hover:text-pink-500 dark:hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center sm:justify-start">
              <a
                href="https://github.com/gauriiv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/70 dark:bg-slate-800/50 rounded-xl flex items-center justify-center text-pink-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-emerald-400 hover:bg-pink-100 dark:hover:bg-slate-700 transition-all border border-pink-200 dark:border-slate-700/50"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:garimasharma@gmail.com"
                className="w-12 h-12 bg-white/70 dark:bg-slate-800/50 rounded-xl flex items-center justify-center text-pink-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-emerald-400 hover:bg-pink-100 dark:hover:bg-slate-700 transition-all border border-pink-200 dark:border-slate-700/50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Code Card */}
          <div className="flex-1 w-full max-w-xl hidden lg:block animate-fade-in-right">
            <div className="relative animate-float" style={{ animationDuration: '4s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-xl opacity-20 animate-pulse-glow"></div>
              <div className="relative dark:bg-slate-800/80 bg-white/80 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                {/* Code Editor Header */}
                <div className="dark:bg-slate-900/80 bg-slate-100 px-4 py-3 flex items-center justify-between border-b dark:border-slate-700/50 border-slate-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="dark:text-slate-400 text-slate-500 text-sm font-mono">developer.ts</span>
                  <div className="w-16"></div>
                </div>
                {/* Code Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="dark:text-slate-500 text-slate-400 mb-2">// About me</div>
                  <div className="mb-4">
                    <span className="text-purple-400">const</span>
                    <span className="text-cyan-400"> profile</span>
                    <span className="dark:text-slate-400 text-slate-500"> = </span>
                    <span className="text-yellow-400">{"{"}</span>
                  </div>
                  
                  <div className="pl-4 space-y-2">
                    <div>
                      <span className="text-emerald-400">name</span>
                      <span className="dark:text-slate-400 text-slate-500">: </span>
                      <span className="text-orange-400">"Garima Sharma"</span>
                      <span className="dark:text-slate-400 text-slate-500">,</span>
                    </div>
                    <div>
                      <span className="text-emerald-400">role</span>
                      <span className="dark:text-slate-400 text-slate-500">: </span>
                      <span className="text-orange-400">"Educator & Developer"</span>
                      <span className="dark:text-slate-400 text-slate-500">,</span>
                    </div>
                    <div>
                      <span className="text-emerald-400">education</span>
                      <span className="dark:text-slate-400 text-slate-500">: </span>
                      <span className="text-orange-400">"B.Tech CSE, YMCA"</span>
                      <span className="dark:text-slate-400 text-slate-500">,</span>
                    </div>
                    <div>
                      <span className="text-emerald-400">skills</span>
                      <span className="dark:text-slate-400 text-slate-500">: [</span>
                    </div>
                    <div className="pl-4 text-orange-400">
                      <div>"Teaching", "HTML",</div>
                      <div>"React", "JavaScript",</div>
                      <div>"Problem Solving",</div>
                      <div>"Communication"</div>
                    </div>
                    <div className="dark:text-slate-400 text-slate-500">],</div>
                    <div>
                      <span className="text-emerald-400">available</span>
                      <span className="dark:text-slate-400 text-slate-500">: </span>
                      <span className="text-cyan-400">true</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-yellow-400">{"}"}</span>
                    <span className="dark:text-slate-400 text-slate-500">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
