export default function ExperiencePage() {
  const experiences = [
    {
      company: "Bored Founders Club",
      role: "Current experience (from LinkedIn)",
      period: "Present",
      description: "Active involvement in founder-focused initiatives and community activities, with a practical focus on product building, networking, and knowledge sharing. This is the only entry intentionally sourced from LinkedIn, while the remaining roles are expanded directly from CV content.",
      skills: ["Community", "Product Thinking", "Founder Ecosystem", "Networking"]
    },
    {
      company: "Altium",
      role: "Senior Software Engineer",
      period: "04/2025 – Present",
      description: "Working on a PCB design web application built with Vue, Java, and .NET. The role includes co-ownership of several microfrontend applications and two backend services, with strong emphasis on maintainable architecture, cross-team collaboration, and reliable delivery in a complex engineering domain.",
      skills: ["Vue", "Java", ".NET", "Microfrontends"]
    },
    {
      company: "Monogram",
      role: "Angular Tech Lead",
      period: "03/2025 – Present",
      description: "Leading a 6-person development team building a microfrontend-based application in Angular. Beyond day-to-day technical leadership, responsibilities include performance reviews and individual growth plans, coordination of integrations with other teams, and participation in high-level quarterly PI planning across the broader product organization.",
      skills: ["Angular", "Tech Leadership", "Microfrontends", "PI Planning"]
    },
    {
      company: "Dawid Perdek (own business)",
      role: "Software Consultant",
      period: "04/2019 – Present",
      description: "Running consulting work end-to-end: client acquisition, negotiations, budgeting, and long-term partnerships. The work spans strategic frontend consulting for startups and enterprise clients (including finance and automotive), collaboration with external technology vendors, creation of trainings and video courses (frontend architecture, DDD, Angular, soft skills), Agile lectures for WSB Merito, and implementation of business automations with low-code/no-code tools such as Make and Airtable.",
      skills: ["Consulting", "Frontend Architecture", "Workshops", "Automation"]
    },
    {
      company: "SAP Fioneer",
      role: "Senior Software Engineer",
      period: "09/2024 – 03/2025",
      description: "Built a complex ESG solution for the banking sector using React and Kotlin, contributing to a domain with strict business and regulatory requirements. The role focused on turning complex ESG needs into dependable product functionality while keeping implementation quality high.",
      skills: ["React", "Kotlin", "ESG", "Banking"]
    },
    {
      company: "Synergy Codes",
      role: "Principal Developer",
      period: "03/2020 – 08/2024",
      description: "Strategic advisor and senior technical contributor in a 60+ person R&D organization (40+ people in IT), working closely with leadership on organization-level direction and technology decisions. Responsibilities included facilitating strategic workshops (risk analysis, team formation, domain work with Event Storming), designing and rolling out a mentoring program across R&D, introducing Event Storming as a standard client collaboration method, supporting OKR rollout with the board, consulting frontend architecture across 10+ parallel projects, improving recruitment/onboarding/offboarding and delivery processes, and leading internal initiatives in both Tech Lead and Product Owner capacities.",
      skills: ["Strategy", "Mentoring", "Event Storming", "Frontend Architecture"]
    },
    {
      company: "Matic",
      role: "Frontend Tech Lead",
      period: "03/2019 – 01/2020",
      description: "Led a team of 9 frontend developers with focus on mentoring, performance reviews, and development planning. Introduced unit testing practices that helped reach over 80% code coverage, rolled out code quality checks and internationalization (i18n), and coordinated collaboration with external vendors including review and acceptance of deliverables while helping shape project roadmaps.",
      skills: ["Team Leadership", "Testing", "Code Quality", "i18n"]
    },
    {
      company: "S3 Connected Health",
      role: "Software Engineer",
      period: "07/2016 – 03/2019",
      description: "Developed telehealth solutions in Agile teams using AngularJS and Angular 2+, delivering features in a healthcare-focused environment where reliability and clarity mattered. In addition to implementation work, supported other teams with unit testing to improve consistency and confidence in delivery.",
      skills: ["AngularJS", "Angular", "Agile", "Unit Testing"]
    }
  ];

  return (
    <div className="page-stack">
      <header className="page-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-lead">
          A blend of hands-on product delivery, engineering leadership, and community work.
        </p>
      </header>

      <div className="space-y-8 sm:space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-gray-800 last:before:bottom-8">
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-950"></div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{exp.role}</h2>
                  <p className="text-lg font-medium text-blue-600">{exp.company}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 text-gray-800 self-start md:self-center dark:bg-gray-800 dark:text-gray-200">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-3xl dark:text-gray-300">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider text-center space-y-6 sm:space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">Let's work together</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            If you need someone who can combine execution, product thinking, and clear communication, I'd be happy to help.
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
            className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
          >
            See my services
          </a>
        </div>
      </div>
    </div>
  );
}
