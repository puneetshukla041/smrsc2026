import React from 'react';
import Header from '../../../components/common/Header'; 
import Footer from '../../../components/common/footer'; 

export const metadata = {
  title: 'Cookies | SSICRS',
  description: 'Cookie Policy and preferences for SSICRS',
};

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#02091A]">
      {/* Navbar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow pt-28 sm:pt-36 pb-20 px-6 sm:px-12 lg:px-24 text-gray-300 font-sans">
        <div className="max-w-4xl mx-auto">
          
          {/* Page Title & Date */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 border-b border-white/10 pb-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-wide" style={{ fontFamily: '"Blauer Nue", sans-serif' }}>
              Cookies
            </h1>
            <p className="text-sm text-gray-400 italic">
              Last updated: 1 Oct 2025
            </p>
          </div>

          {/* Content Container */}
          <div className="space-y-10 sm:space-y-12 text-[15px] sm:text-base">
            
            {/* Section: Cookie Policy */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cookie Policy</h2>
              <p className="leading-relaxed">
                We use cookies and similar technologies to run our site, understand how it's used, and improve your experience with SSICRS programs and resources. You can manage your preferences at any time in the Cookie Settings.
              </p>
            </section>

            {/* Section: How we use cookies */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">How we use cookies</h2>
              <ul className="list-disc pl-5 space-y-2 sm:space-y-3 leading-relaxed">
                <li><strong className="text-white font-medium">Operate the site:</strong> security, load balancing, session management.</li>
                <li><strong className="text-white font-medium">Improve performance:</strong> analytics to see what content is helpful.</li>
                <li><strong className="text-white font-medium">Enhance experience:</strong> remember preferences (e.g., language, forms).</li>
                <li><strong className="text-white font-medium">Reach and relevance (optional):</strong> show SSICRS updates more effectively.</li>
              </ul>
            </section>

            {/* Section: Types of cookies we use */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Types of cookies we use</h2>
              <ul className="list-disc pl-5 space-y-2 sm:space-y-3 leading-relaxed">
                <li><strong className="text-white font-medium">Strictly Necessary</strong> (always active): Required for core functionality (security, forms, session).</li>
                <li><strong className="text-white font-medium">Performance/Analytics:</strong> Help us understand usage to improve pages and navigation.</li>
                <li><strong className="text-white font-medium">Functionality:</strong> Remember choices such as language or region.</li>
                <li><strong className="text-white font-medium">Advertising/Targeting</strong> (optional): Measure campaign effectiveness; only set with consent.</li>
                <li><strong className="text-white font-medium">Third-Party:</strong> Set by service providers (e.g., analytics, video players, form tools).</li>
              </ul>
            </section>

            {/* Section: Managing your preferences */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Managing your preferences</h2>
              <p className="leading-relaxed mb-3 sm:mb-4">You control how non-essential cookies are used.</p>
              <ul className="list-disc pl-5 space-y-2 sm:space-y-3 leading-relaxed">
                <li><strong className="text-white font-medium">Cookie Settings panel:</strong> Adjust categories anytime: [Open Cookie Settings]</li>
                <li><strong className="text-white font-medium">Browser controls:</strong> Most browsers let you block or delete cookies. See help pages for Chrome, Safari, Edge, or Firefox.</li>
                <li><strong className="text-white font-medium">Do Not Track:</strong> We honor your selections made in the Cookie Settings; browser DNT signals may not be recognized by all services.</li>
              </ul>
            </section>

            {/* Section: Legal bases & region notes */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Legal bases & region notes</h2>
              <p className="leading-relaxed">
                Where required, we place non-essential cookies only with your consent. For essential cookies, our legal basis is legitimate interests in running a secure, functional website. If you are in the EEA/UK, you'll see a consent banner before any non-essential cookies load.
              </p>
            </section>

            {/* Section: Changes to this notice */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Changes to this notice</h2>
              <p className="leading-relaxed">
                We may update this page to reflect new cookies or providers. Significant changes will be highlighted in the banner or on this page with a new &quot;Last updated&quot; date.
              </p>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}