import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900">Get in touch</h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
          I'm always open to new opportunities, collaborations, or just a friendly chat. 
          Feel free to reach out to me through any of the channels below.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact Details</h2>
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
          </div>
          
          <div className="space-y-6">
            <a 
              href="mailto:perdekdawid@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Email</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">perdekdawid@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/perdekdawid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">LinkedIn</p>
                <p className="text-lg font-semibold text-gray-900">perdekdawid</p>
              </div>
            </a>

            <a 
              href="https://twitter.com/superdyzio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Twitter</p>
                <p className="text-lg font-semibold text-gray-900">@superdyzio</p>
              </div>
            </a>

            <a 
              href="https://github.com/superdyzio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">GitHub</p>
                <p className="text-lg font-semibold text-gray-900">superdyzio</p>
              </div>
            </a>
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Send a Message</h2>
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" 
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <button 
              type="button"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Send Message (mock)
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
