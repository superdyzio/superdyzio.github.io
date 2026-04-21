export default function ExperiencePage() {
  const experiences = [
    {
      company: "Company Name",
      role: "Senior Software Engineer",
      period: "2023 - Present",
      description: "Working on building scalable web applications using React, Next.js, and Node.js. Leading a team of developers and implementing best practices for software development. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      skills: ["React", "Next.js", "TypeScript", "Node.js"]
    },
    {
      company: "Previous Company",
      role: "Software Developer",
      period: "2020 - 2023",
      description: "Developed and maintained various frontend and backend services. Collaborated with cross-functional teams to deliver high-quality products. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skills: ["Angular", "Java", "Spring Boot", "PostgreSQL"]
    },
    {
      company: "Early Company",
      role: "Junior Developer",
      period: "2018 - 2020",
      description: "Assisted in the development of web applications and gained experience in full-stack development. Participated in code reviews and learned industry standards.",
      skills: ["JavaScript", "HTML/CSS", "PHP", "MySQL"]
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900">Experience</h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
          My professional journey in the software industry. I've had the pleasure of working with great teams and building impactful products.
        </p>
      </header>

      <div className="space-y-10 sm:space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200 last:before:bottom-8">
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-600 ring-4 ring-white"></div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{exp.role}</h2>
                  <p className="text-lg font-medium text-blue-600">{exp.company}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 text-gray-800 self-start md:self-center">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-10 sm:pt-12 border-t text-center space-y-6 sm:space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Let's work together</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            My experience can help your team reach new heights. Reach out to discuss how I can contribute to your project.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a 
            href="/contact" 
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Get in touch
          </a>
          <a 
            href="/offer" 
            className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm"
          >
            See my services
          </a>
        </div>
      </div>
    </div>
  );
}
