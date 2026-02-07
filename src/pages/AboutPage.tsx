import logo from "../assets/glogo.png";

const technologies = [
  { name: "Mathematics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Science", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "English", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Social Studies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Hindi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Computer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

const skills = [
  {
    category: "Teaching & Education",
    description: "Providing quality education to students",
    items: ["Teaching up to 10th Class", "Subject Tutoring", "Concept Clarification", "Student Mentoring"],
  },
  {
    category: "Web Development",
    description: "Building modern web applications",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Core Skills",
    description: "Essential technical and soft skills",
    items: ["Problem Solving", "Communication", "Time Management", "Critical Thinking"],
  },
  {
    category: "Subject Knowledge",
    description: "Strong foundation in school-level subjects",
    items: ["Mathematics", "Science", "English", "Computer Science"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Profile Section */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="relative inline-block mb-6 animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-xl opacity-40 animate-pulse-glow"></div>
            <img
              src={logo}
              alt="Garima Sharma"
              className="relative w-40 h-40 rounded-full object-cover ring-4 ring-emerald-500/30 mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="dark:text-white text-slate-900">About </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
        </div>

        {/* About Me Text */}
        <div className="max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Hi there! 👋</h2>
            <p className="dark:text-slate-300 text-slate-600 leading-relaxed mb-4">
              I'm <span className="text-emerald-400 font-semibold">Garima Sharma</span>, a B.Tech CSE student 
              at YMCA Faridabad with a passion for teaching and technology. I believe in making education 
              accessible and understandable for everyone while also exploring the world of web development.
            </p>
            <p className="dark:text-slate-300 text-slate-600 leading-relaxed mb-4">
              I have experience giving tuition to students up to 10th class, helping them understand 
              difficult concepts and achieve their academic goals. Alongside teaching, I'm developing my 
              skills in HTML, React, and JavaScript to create engaging web applications.
            </p>
            <p className="dark:text-slate-300 text-slate-600 leading-relaxed">
              With strong communication and problem-solving skills, I create an engaging learning 
              environment where students feel comfortable asking questions. I'm dedicated to continuous 
              learning and believe in balancing teaching with hands-on coding practice.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 mb-4">
              My <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:scale-[1.02] hover:shadow-lg animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="text-xl font-bold text-emerald-400 mb-2">{skill.category}</h3>
                <p className="dark:text-slate-400 text-slate-500 text-sm mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 dark:bg-slate-700/50 bg-slate-100 dark:text-slate-300 text-slate-600 text-sm rounded-full border dark:border-slate-600/50 border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subjects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 mb-4">
              Subjects I <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Teach</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-4 dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg animate-scale-in opacity-0"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="dark:text-slate-300 text-slate-600 text-sm font-medium text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 mb-4">
              My <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="dark:bg-slate-800/30 bg-white/50 backdrop-blur-sm border dark:border-slate-700/50 border-slate-200 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:scale-[1.02] hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">Bachelor of Technology - CSE</h3>
                  <p className="dark:text-white text-slate-900 font-semibold mb-1">YMCA Faridabad</p>
                  <p className="dark:text-slate-400 text-slate-600">Currently Pursuing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
