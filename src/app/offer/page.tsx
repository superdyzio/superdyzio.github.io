import { Code2, Users, Presentation, Lightbulb } from 'lucide-react';

export default function OfferPage() {
  const offers = [
    {
      title: "Product-Focused Engineering",
      description: "I help teams turn ideas into working software quickly and responsibly. From architecture decisions to delivery details, I focus on building solutions that are maintainable and useful from day one.",
      icon: <Code2 className="w-8 h-8" />,
      features: ["Feature design & implementation", "Frontend architecture (React / Angular)", "Quality-focused delivery flow"]
    },
    {
      title: "Talks & Workshops",
      description: "I deliver practical, engaging sessions for meetups, conferences, and internal company events. Topics include frontend engineering, software quality, communication, and AI in everyday development.",
      icon: <Presentation className="w-8 h-8" />,
      features: ["Conference / meetup talks", "Hands-on internal workshops", "Event-tailored sessions"]
    },
    {
      title: "Consulting & Mentoring",
      description: "I support engineering teams and individual developers through focused mentoring and consulting. The goal is better decisions, clearer communication, and steady growth of technical leadership.",
      icon: <Users className="w-8 h-8" />,
      features: ["Architecture and codebase reviews", "1:1 mentoring for developers", "Team process improvements"]
    },
    {
      title: "Product Discovery Support",
      description: "When needed, I help shape early product direction so engineering effort lands on the right problems. This includes MVP scoping, prioritization, and workshop facilitation with stakeholders.",
      icon: <Lightbulb className="w-8 h-8" />,
      features: ["MVP scope and roadmap framing", "Workshop facilitation", "Problem-first feature prioritization"]
    }
  ];

  return (
    <div className="page-stack">
      <header className="page-header">
        <h1 className="page-title">What I Offer</h1>
        <p className="page-lead">
          Practical support for teams and events that value quality, clarity, and real outcomes.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {offers.map((offer, index) => (
          <div key={index} className="surface-card flex h-full flex-col sm:p-8">
            <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              {offer.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{offer.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
              {offer.description}
            </p>
            <ul className="space-y-3">
              {offer.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-700">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Interested in a collaboration?</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Tell me what you're building or planning, and I'll suggest a simple way we can work together.
          </p>
        </div>
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Contact me today
        </a>
      </div>
    </div>
  );
}
