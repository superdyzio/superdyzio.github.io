import { Code2, Users, Presentation, Lightbulb } from 'lucide-react';
import { getTranslations } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/i18n.server';

export default async function OfferPage() {
  const locale = await getLocaleFromCookies();
  const t = getTranslations(locale);
  const icons = [
    <Code2 className="w-8 h-8" key="code" />,
    <Presentation className="w-8 h-8" key="presentation" />,
    <Users className="w-8 h-8" key="users" />,
    <Lightbulb className="w-8 h-8" key="lightbulb" />,
  ];

  const offers = t.offer.items.map((item, index) => ({
    ...item,
    icon: icons[index],
  }));

  return (
    <div className="page-stack">
      <header className="page-header">
        <h1 className="page-title">{t.simplePages.offerTitle}</h1>
        <p className="page-lead">
          {t.simplePages.offerLead}
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {offers.map((offer, index) => (
          <div key={index} className="surface-card flex h-full flex-col sm:p-8">
            <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 dark:bg-blue-900/40 dark:text-blue-300">
              {offer.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-gray-100">{offer.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow dark:text-gray-300">
              {offer.description}
            </p>
            <ul className="space-y-3">
              {offer.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="section-divider text-center space-y-6 sm:space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">{t.offer.collaborationTitle}</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            {t.offer.collaborationLead}
          </p>
        </div>
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          {t.common.getInTouch}
        </a>
      </div>
    </div>
  );
}
