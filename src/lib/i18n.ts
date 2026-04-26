export const locales = ['en', 'pl'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const LOCALE_COOKIE_NAME = 'locale';

const translations = {
  en: {
    nav: {
      about: 'About',
      blog: 'Blog',
      playlist: 'Playlist',
      speaker: 'Speaker',
      experience: 'Experience',
      offer: 'Offer',
      contact: 'Contact',
      login: 'Login',
      logout: 'Logout',
    },
    common: {
      readMore: 'Read more',
      readArticle: 'Read article',
      draft: 'Draft',
      noPostsYet: 'No posts yet. Stay tuned!',
      noPublishedPostsYet: 'No posts published yet. Stay tuned!',
      adminView: 'Admin view active (seeing drafts)',
      builtWith: 'Built with Next.js and Tailwind.',
      language: 'Language',
      english: 'EN',
      polish: 'PL',
      listen: 'Listen',
      sendMessageMock: 'Send Message (mock)',
      getInTouch: 'Get in touch',
      seeMyServices: 'See my services',
    },
    home: {
      titlePrefix: "Hi, I'm",
      lead: "I'm a software developer, speaker, and mentor. This is my personal blog where I share my experiences and insights on technology and software development.",
      blogCta: 'Read my blog',
      speakerCta: 'My speaking experience',
      aboutTitle: 'About Me',
      latestTitle: 'Latest from the blog',
    },
    blog: {
      title: 'Blog',
      lead: 'Thoughts, guides, and insights on software development and tech culture.',
      privateDraft: 'Private Draft',
      privateDraftDescription: 'This post is currently in draft mode and is only visible to the site administrator.',
      adminLogin: 'Admin Login',
    },
    login: {
      title: 'Admin Login',
      password: 'Password',
      invalidPassword: 'Invalid password',
      loginFailed: 'Login failed. Please try again.',
      loggingIn: 'Logging in...',
      login: 'Login',
    },
    simplePages: {
      experienceTitle: 'Experience',
      experienceLead: 'A blend of hands-on product delivery, engineering leadership, and community work.',
      offerTitle: 'What I Offer',
      offerLead: 'Practical support for teams and events that value quality, clarity, and real outcomes.',
      contactTitle: 'Get in touch',
      contactLead: "I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out to me through any of the channels below.",
      playlistTitle: 'Playlist',
      playlistLead: 'A small, curated set of tracks I often listen to while building products, preparing talks, and mentoring developers.',
      speakerTitle: 'Speaking & Activities',
      speakerLead: "I'm passionate about sharing knowledge and engaging with the tech community. Here's a list of my talks, workshops, and other activities.",
    },
    speaker: {
      talksTitle: 'Talks',
      talksLeadPrefix: "I'd be very happy to visit your event or company with one of these, just",
      talksLeadLink: 'let me know',
      talksLeadSuffix: "if you're interested.",
      activitiesTitle: 'Activities and Appearances',
    },
    playlist: {
      sectionTitle: 'Seeded sets',
      sets: [
        {
          title: 'Deep Work Session',
          context: 'Best for focused coding blocks and architecture work.',
        },
        {
          title: 'Ship It Energy',
          context: 'When deadlines are close and momentum matters.',
        },
        {
          title: 'Creative Reset',
          context: 'For brainstorming, writing, and stepping back to see the bigger picture.',
        },
      ],
    },
    contact: {
      detailsTitle: 'Contact Details',
      messageTitle: 'Send a Message',
      name: 'Name',
      yourName: 'Your Name',
      email: 'Email',
      message: 'Message',
      whatsOnYourMind: "What's on your mind?",
    },
    offer: {
      items: [
        {
          title: 'Product-Focused Engineering',
          description:
            'I help teams turn ideas into working software quickly and responsibly. From architecture decisions to delivery details, I focus on building solutions that are maintainable and useful from day one.',
          features: ['Feature design & implementation', 'Frontend architecture (React / Angular)', 'Quality-focused delivery flow'],
        },
        {
          title: 'Talks & Workshops',
          description:
            'I deliver practical, engaging sessions for meetups, conferences, and internal company events. Topics include frontend engineering, software quality, communication, and AI in everyday development.',
          features: ['Conference / meetup talks', 'Hands-on internal workshops', 'Event-tailored sessions'],
        },
        {
          title: 'Consulting & Mentoring',
          description:
            'I support engineering teams and individual developers through focused mentoring and consulting. The goal is better decisions, clearer communication, and steady growth of technical leadership.',
          features: ['Architecture and codebase reviews', '1:1 mentoring for developers', 'Team process improvements'],
        },
        {
          title: 'Product Discovery Support',
          description:
            'When needed, I help shape early product direction so engineering effort lands on the right problems. This includes MVP scoping, prioritization, and workshop facilitation with stakeholders.',
          features: ['MVP scope and roadmap framing', 'Workshop facilitation', 'Problem-first feature prioritization'],
        },
      ],
      collaborationTitle: 'Interested in a collaboration?',
      collaborationLead: "Tell me what you're building or planning, and I'll suggest a simple way we can work together.",
    },
    experience: {
      ctaTitle: "Let's work together",
      ctaLead: "If you need someone who can combine execution, product thinking, and clear communication, I'd be happy to help.",
      items: [
        {
          company: 'Bored Founders Club',
          role: 'Current experience (from LinkedIn)',
          period: 'Present',
          description:
            'Active involvement in founder-focused initiatives and community activities, with a practical focus on product building, networking, and knowledge sharing. This is the only entry intentionally sourced from LinkedIn, while the remaining roles are expanded directly from CV content.',
          skills: ['Community', 'Product Thinking', 'Founder Ecosystem', 'Networking'],
        },
        {
          company: 'Altium',
          role: 'Senior Software Engineer',
          period: '04/2025 – Present',
          description:
            'Working on a PCB design web application built with Vue, Java, and .NET. The role includes co-ownership of several microfrontend applications and two backend services, with strong emphasis on maintainable architecture, cross-team collaboration, and reliable delivery in a complex engineering domain.',
          skills: ['Vue', 'Java', '.NET', 'Microfrontends'],
        },
        {
          company: 'Monogram',
          role: 'Angular Tech Lead',
          period: '03/2025 – Present',
          description:
            'Leading a 6-person development team building a microfrontend-based application in Angular. Beyond day-to-day technical leadership, responsibilities include performance reviews and individual growth plans, coordination of integrations with other teams, and participation in high-level quarterly PI planning across the broader product organization.',
          skills: ['Angular', 'Tech Leadership', 'Microfrontends', 'PI Planning'],
        },
        {
          company: 'Dawid Perdek (own business)',
          role: 'Software Consultant',
          period: '04/2019 – Present',
          description:
            'Running consulting work end-to-end: client acquisition, negotiations, budgeting, and long-term partnerships. The work spans strategic frontend consulting for startups and enterprise clients (including finance and automotive), collaboration with external technology vendors, creation of trainings and video courses (frontend architecture, DDD, Angular, soft skills), Agile lectures for WSB Merito, and implementation of business automations with low-code/no-code tools such as Make and Airtable.',
          skills: ['Consulting', 'Frontend Architecture', 'Workshops', 'Automation'],
        },
        {
          company: 'SAP Fioneer',
          role: 'Senior Software Engineer',
          period: '09/2024 – 03/2025',
          description:
            'Built a complex ESG solution for the banking sector using React and Kotlin, contributing to a domain with strict business and regulatory requirements. The role focused on turning complex ESG needs into dependable product functionality while keeping implementation quality high.',
          skills: ['React', 'Kotlin', 'ESG', 'Banking'],
        },
        {
          company: 'Synergy Codes',
          role: 'Principal Developer',
          period: '03/2020 – 08/2024',
          description:
            'Strategic advisor and senior technical contributor in a 60+ person R&D organization (40+ people in IT), working closely with leadership on organization-level direction and technology decisions. Responsibilities included facilitating strategic workshops (risk analysis, team formation, domain work with Event Storming), designing and rolling out a mentoring program across R&D, introducing Event Storming as a standard client collaboration method, supporting OKR rollout with the board, consulting frontend architecture across 10+ parallel projects, improving recruitment/onboarding/offboarding and delivery processes, and leading internal initiatives in both Tech Lead and Product Owner capacities.',
          skills: ['Strategy', 'Mentoring', 'Event Storming', 'Frontend Architecture'],
        },
        {
          company: 'Matic',
          role: 'Frontend Tech Lead',
          period: '03/2019 – 01/2020',
          description:
            'Led a team of 9 frontend developers with focus on mentoring, performance reviews, and development planning. Introduced unit testing practices that helped reach over 80% code coverage, rolled out code quality checks and internationalization (i18n), and coordinated collaboration with external vendors including review and acceptance of deliverables while helping shape project roadmaps.',
          skills: ['Team Leadership', 'Testing', 'Code Quality', 'i18n'],
        },
        {
          company: 'S3 Connected Health',
          role: 'Software Engineer',
          period: '07/2016 – 03/2019',
          description:
            'Developed telehealth solutions in Agile teams using AngularJS and Angular 2+, delivering features in a healthcare-focused environment where reliability and clarity mattered. In addition to implementation work, supported other teams with unit testing to improve consistency and confidence in delivery.',
          skills: ['AngularJS', 'Angular', 'Agile', 'Unit Testing'],
        },
      ],
    },
  },
  pl: {
    nav: {
      about: 'O mnie',
      blog: 'Blog',
      playlist: 'Playlista',
      speaker: 'Prelekcje',
      experience: 'Doświadczenie',
      offer: 'Oferta',
      contact: 'Kontakt',
      login: 'Logowanie',
      logout: 'Wyloguj',
    },
    common: {
      readMore: 'Czytaj więcej',
      readArticle: 'Czytaj artykuł',
      draft: 'Szkic',
      noPostsYet: 'Brak wpisów. Wróć wkrótce!',
      noPublishedPostsYet: 'Brak opublikowanych wpisów. Wróć wkrótce!',
      adminView: 'Widok administratora (widzisz szkice)',
      builtWith: 'Zbudowano z użyciem Next.js i Tailwind.',
      language: 'Język',
      english: 'EN',
      polish: 'PL',
      listen: 'Słuchaj',
      sendMessageMock: 'Wyślij wiadomość (mock)',
      getInTouch: 'Skontaktuj się',
      seeMyServices: 'Zobacz usługi',
    },
    home: {
      titlePrefix: 'Cześć, jestem',
      lead: 'Jestem programistą, prelegentem i mentorem. To mój osobisty blog, na którym dzielę się doświadczeniami i przemyśleniami o technologii oraz tworzeniu oprogramowania.',
      blogCta: 'Czytaj blog',
      speakerCta: 'Moje doświadczenia prelegenckie',
      aboutTitle: 'O mnie',
      latestTitle: 'Najnowsze na blogu',
    },
    blog: {
      title: 'Blog',
      lead: 'Przemyślenia, poradniki i obserwacje o tworzeniu oprogramowania i kulturze tech.',
      privateDraft: 'Prywatny szkic',
      privateDraftDescription: 'Ten wpis jest obecnie szkicem i jest widoczny tylko dla administratora strony.',
      adminLogin: 'Logowanie administratora',
    },
    login: {
      title: 'Logowanie administratora',
      password: 'Hasło',
      invalidPassword: 'Nieprawidłowe hasło',
      loginFailed: 'Logowanie nie powiodło się. Spróbuj ponownie.',
      loggingIn: 'Logowanie...',
      login: 'Zaloguj',
    },
    simplePages: {
      experienceTitle: 'Doświadczenie',
      experienceLead: 'Połączenie praktycznego dostarczania produktów, przywództwa inżynieryjnego i pracy społecznościowej.',
      offerTitle: 'Co oferuję',
      offerLead: 'Praktyczne wsparcie dla zespołów i wydarzeń, które cenią jakość, przejrzystość i realne efekty.',
      contactTitle: 'Skontaktuj się',
      contactLead: 'Jestem otwarty na nowe możliwości, współprace i zwykłą rozmowę. Napisz do mnie przez dowolny kanał poniżej.',
      playlistTitle: 'Playlista',
      playlistLead: 'Krótki, starannie dobrany zestaw utworów, których słucham podczas budowania produktów, przygotowywania prelekcji i mentoringu.',
      speakerTitle: 'Prelekcje i aktywności',
      speakerLead: 'Lubię dzielić się wiedzą i działać w społeczności technologicznej. Poniżej lista moich prelekcji, warsztatów i aktywności.',
    },
    speaker: {
      talksTitle: 'Prelekcje',
      talksLeadPrefix: 'Z przyjemnością odwiedzę Twoje wydarzenie lub firmę z jednym z tych tematów,',
      talksLeadLink: 'daj znać',
      talksLeadSuffix: 'jeśli jesteś zainteresowany.',
      activitiesTitle: 'Aktywności i wystąpienia',
    },
    playlist: {
      sectionTitle: 'Wybrane sety',
      sets: [
        {
          title: 'Sesja głębokiej pracy',
          context: 'Najlepsze do skupionego kodowania i pracy nad architekturą.',
        },
        {
          title: 'Energia „Ship It”',
          context: 'Gdy deadline jest blisko i liczy się tempo.',
        },
        {
          title: 'Kreatywny reset',
          context: 'Do burzy mózgów, pisania i łapania szerszej perspektywy.',
        },
      ],
    },
    contact: {
      detailsTitle: 'Dane kontaktowe',
      messageTitle: 'Wyślij wiadomość',
      name: 'Imię',
      yourName: 'Twoje imię',
      email: 'Email',
      message: 'Wiadomość',
      whatsOnYourMind: 'O czym myślisz?',
    },
    offer: {
      items: [
        {
          title: 'Inżynieria zorientowana na produkt',
          description:
            'Pomagam zespołom szybko i odpowiedzialnie zamieniać pomysły w działające oprogramowanie. Od decyzji architektonicznych po szczegóły dostarczania — skupiam się na rozwiązaniach, które są utrzymywalne i użyteczne od pierwszego dnia.',
          features: ['Projektowanie i implementacja funkcji', 'Architektura frontendu (React / Angular)', 'Proces dostarczania nastawiony na jakość'],
        },
        {
          title: 'Prelekcje i warsztaty',
          description:
            'Prowadzę praktyczne i angażujące sesje na meetupy, konferencje oraz wydarzenia wewnętrzne w firmach. Tematy obejmują frontend, jakość oprogramowania, komunikację i AI w codziennej pracy deweloperskiej.',
          features: ['Wystąpienia konferencyjne i meetupowe', 'Praktyczne warsztaty wewnętrzne', 'Sesje dopasowane do wydarzenia'],
        },
        {
          title: 'Konsulting i mentoring',
          description:
            'Wspieram zespoły inżynierskie i indywidualnych developerów poprzez mentoring i konsulting. Celem są lepsze decyzje, jaśniejsza komunikacja oraz stabilny rozwój przywództwa technicznego.',
          features: ['Przeglądy architektury i codebase’u', 'Mentoring 1:1 dla developerów', 'Usprawnienia procesów zespołowych'],
        },
        {
          title: 'Wsparcie product discovery',
          description:
            'Gdy potrzeba, pomagam ułożyć wczesny kierunek produktu tak, aby wysiłek inżynierski trafiał w właściwe problemy. Obejmuje to zakres MVP, priorytetyzację i facylitację warsztatów ze stakeholderami.',
          features: ['Zakres MVP i ramy roadmapy', 'Facylitacja warsztatów', 'Priorytetyzacja funkcji od strony problemu'],
        },
      ],
      collaborationTitle: 'Chcesz współpracy?',
      collaborationLead: 'Napisz, co budujesz lub planujesz, a zaproponuję prosty sposób, jak możemy razem działać.',
    },
    experience: {
      ctaTitle: 'Pracujmy razem',
      ctaLead: 'Jeśli potrzebujesz osoby, która łączy dowożenie, myślenie produktowe i klarowną komunikację — chętnie pomogę.',
      items: [
        {
          company: 'Bored Founders Club',
          role: 'Obecne doświadczenie (z LinkedIn)',
          period: 'Obecnie',
          description:
            'Aktywnie działam w inicjatywach dla founderów i aktywnościach społecznościowych, z praktycznym naciskiem na budowę produktów, networking i wymianę wiedzy. To jedyna pozycja celowo zaczerpnięta z LinkedIn, a pozostałe role są rozwinięte bezpośrednio na podstawie CV.',
          skills: ['Społeczność', 'Myślenie produktowe', 'Ekosystem founderów', 'Networking'],
        },
        {
          company: 'Altium',
          role: 'Senior Software Engineer',
          period: '04/2025 – Obecnie',
          description:
            'Pracuję nad webową aplikacją do projektowania PCB opartą na Vue, Javie i .NET. Rola obejmuje współwłasność kilku aplikacji mikrofrontendowych oraz dwóch usług backendowych, z dużym naciskiem na utrzymywalną architekturę, współpracę między zespołami i niezawodne dowożenie w złożonej domenie inżynierskiej.',
          skills: ['Vue', 'Java', '.NET', 'Mikrofrontendy'],
        },
        {
          company: 'Monogram',
          role: 'Angular Tech Lead',
          period: '03/2025 – Obecnie',
          description:
            'Prowadzę 6-osobowy zespół deweloperski budujący aplikację opartą o mikrofrontendy w Angularze. Poza codziennym leadershipem technicznym odpowiadam za przeglądy wyników i plany rozwoju, koordynację integracji z innymi zespołami oraz udział w kwartalnym planowaniu PI na poziomie całej organizacji produktowej.',
          skills: ['Angular', 'Leadership techniczny', 'Mikrofrontendy', 'Planowanie PI'],
        },
        {
          company: 'Dawid Perdek (własna działalność)',
          role: 'Konsultant software',
          period: '04/2019 – Obecnie',
          description:
            'Prowadzę konsulting end-to-end: pozyskanie klientów, negocjacje, budżetowanie i długofalowe partnerstwa. Zakres obejmuje strategiczny frontend consulting dla startupów i enterprise (m.in. finanse i automotive), współpracę z zewnętrznymi vendorami technologicznymi, tworzenie szkoleń i kursów wideo (architektura frontendu, DDD, Angular, kompetencje miękkie), wykłady Agile dla WSB Merito oraz wdrażanie automatyzacji biznesowych z użyciem narzędzi low-code/no-code, takich jak Make i Airtable.',
          skills: ['Konsulting', 'Architektura frontendu', 'Warsztaty', 'Automatyzacja'],
        },
        {
          company: 'SAP Fioneer',
          role: 'Senior Software Engineer',
          period: '09/2024 – 03/2025',
          description:
            'Budowałem złożone rozwiązanie ESG dla sektora bankowego w oparciu o React i Kotlin, pracując w domenie o wysokich wymaganiach biznesowych i regulacyjnych. Koncentrowałem się na przekładaniu złożonych potrzeb ESG na niezawodną funkcjonalność produktu przy zachowaniu wysokiej jakości implementacji.',
          skills: ['React', 'Kotlin', 'ESG', 'Bankowość'],
        },
        {
          company: 'Synergy Codes',
          role: 'Principal Developer',
          period: '03/2020 – 08/2024',
          description:
            'Pełniłem rolę doradcy strategicznego i senior technical contributora w organizacji R&D liczącej ponad 60 osób (40+ w IT), blisko współpracując z leadershipem nad kierunkiem organizacji i decyzjami technologicznymi. Odpowiadałem m.in. za facylitację warsztatów strategicznych (analiza ryzyk, formowanie zespołów, praca domenowa z Event Storming), zaprojektowanie i wdrożenie programu mentoringowego w R&D, wprowadzenie Event Storming jako standardu współpracy z klientem, wsparcie rolloutu OKR z zarządem, konsultacje architektury frontendu w ponad 10 równoległych projektach, usprawnienia procesów rekrutacji/onboardingu/offboardingu i delivery oraz prowadzenie inicjatyw wewnętrznych w rolach Tech Leada i Product Ownera.',
          skills: ['Strategia', 'Mentoring', 'Event Storming', 'Architektura frontendu'],
        },
        {
          company: 'Matic',
          role: 'Frontend Tech Lead',
          period: '03/2019 – 01/2020',
          description:
            'Prowadziłem zespół 9 frontend developerów, skupiając się na mentoringu, przeglądach wyników i planowaniu rozwoju. Wdrożyłem praktyki testów jednostkowych, które pomogły osiągnąć ponad 80% pokrycia kodu, uruchomiłem standardy jakości i internacjonalizacji (i18n) oraz koordynowałem współpracę z zewnętrznymi vendorami, w tym review i akceptację dostarczanych elementów oraz współtworzenie roadmap.',
          skills: ['Przywództwo zespołowe', 'Testowanie', 'Jakość kodu', 'i18n'],
        },
        {
          company: 'S3 Connected Health',
          role: 'Software Engineer',
          period: '07/2016 – 03/2019',
          description:
            'Tworzyłem rozwiązania telehealth w zespołach Agile, wykorzystując AngularJS i Angular 2+, dostarczając funkcje w środowisku medycznym, gdzie kluczowe były niezawodność i przejrzystość. Oprócz implementacji wspierałem inne zespoły w obszarze testów jednostkowych, zwiększając spójność i pewność dostarczania.',
          skills: ['AngularJS', 'Angular', 'Agile', 'Testy jednostkowe'],
        },
      ],
    },
  },
} as const;

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'en' || value === 'pl';
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function formatDate(date: string, locale: Locale): string {
  return new Date(date).toLocaleDateString(locale === 'pl' ? 'pl-PL' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}