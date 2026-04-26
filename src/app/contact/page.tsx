import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { getTranslations } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/i18n.server';

export default async function ContactPage() {
  const locale = await getLocaleFromCookies();
  const t = getTranslations(locale);

  return (
    <div className="page-stack">
      <header className="page-header">
        <h1 className="page-title">{t.simplePages.contactTitle}</h1>
        <p className="page-lead">
          {t.simplePages.contactLead}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
        <section className="section-stack">
          <div className="section-subtitle">
            <h2 className="section-title">{t.contact.detailsTitle}</h2>
            <div className="section-accent"></div>
          </div>
          
          <div className="space-y-6">
            <a 
              href="mailto:perdekdawid@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group dark:border-gray-800 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform dark:bg-blue-900/40 dark:text-blue-300">
                <Mail className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">{t.contact.email}</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-all dark:text-gray-100">perdekdawid@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/perdekdawid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group dark:border-gray-800 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform dark:bg-blue-900/40 dark:text-blue-300">
                <Linkedin className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">LinkedIn</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">perdekdawid</p>
              </div>
            </a>

            <a 
              href="https://twitter.com/superdyzio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group dark:border-gray-800 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform dark:bg-blue-900/40 dark:text-blue-300">
                <Twitter className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Twitter</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">@superdyzio</p>
              </div>
            </a>

            <a 
              href="https://github.com/superdyzio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group dark:border-gray-800 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform dark:bg-blue-900/40 dark:text-blue-300">
                <Github className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">GitHub</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">superdyzio</p>
              </div>
            </a>
          </div>
        </section>

        <section className="section-stack">
          <div className="section-subtitle">
            <h2 className="section-title">{t.contact.messageTitle}</h2>
            <div className="section-accent"></div>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.contact.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" 
                  placeholder={t.contact.yourName}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.contact.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" 
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.contact.message}</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" 
                placeholder={t.contact.whatsOnYourMind}
              ></textarea>
            </div>
            <button 
              type="button"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              {t.common.sendMessageMock}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
