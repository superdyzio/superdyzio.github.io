import { Code2, Users, Presentation, Lightbulb } from 'lucide-react';

export default function OfferPage() {
  const offers = [
    {
      title: "Software Development",
      description: "Custom web application development using modern technologies. Focus on performance, scalability, and maintainability.",
      icon: <Code2 className="w-8 h-8" />,
      features: ["Frontend (React/Angular)", "Backend (Node.js/Java)", "Full-stack solutions"]
    },
    {
      title: "Public Speaking",
      description: "Keynote speaking, technical workshops, and panel discussions for tech conferences and corporate events.",
      icon: <Presentation className="w-8 h-8" />,
      features: ["Conference talks", "Internal workshops", "Mentoring for speakers"]
    },
    {
      title: "Consulting & Mentoring",
      description: "Helping teams and individuals grow. Architecture reviews, code audits, and career guidance.",
      icon: <Users className="w-8 h-8" />,
      features: ["Code reviews", "Architecture consulting", "1-on-1 mentoring"]
    },
    {
      title: "Product Strategy",
      description: "Assisting in defining MVP, roadmap planning, and identifying key user personas for your product.",
      icon: <Lightbulb className="w-8 h-8" />,
      features: ["MVP definition", "User Story Mapping", "Event Storming"]
    }
  ];

  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900">What I Offer</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          I provide a variety of services to help you build better software and grow your team. 
          Here's how we can work together.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-8">
        {offers.map((offer, index) => (
          <div key={index} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
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

      <div className="pt-12 border-t text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Interested in a collaboration?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve your goals. Reach out to me for a custom quote.
          </p>
        </div>
        <a 
          href="/contact" 
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Contact me today
        </a>
      </div>
    </div>
  );
}
