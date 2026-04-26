import { getTranslations } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/i18n.server';

export default async function ExperiencePage() {
  const locale = await getLocaleFromCookies();
  const t = getTranslations(locale);
  const experiences = t.experience.items;

  return (
    <div className="page-stack">
      <header className="page-header">
        <h1 className="page-title">{t.simplePages.experienceTitle}</h1>
        <p className="page-lead">
          {t.simplePages.experienceLead}
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">{t.experience.ctaTitle}</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            {t.experience.ctaLead}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a 
            href="/contact" 
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            {t.common.getInTouch}
          </a>
          <a 
            href="/offer" 
            className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
          >
            {t.common.seeMyServices}
          </a>
        </div>
      </div>
    </div>
  );
}
