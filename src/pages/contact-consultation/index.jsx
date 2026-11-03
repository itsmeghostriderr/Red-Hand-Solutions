import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Ambient3DCanvas from '../../components/3d/Ambient3DCanvas';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ConsultationForm from './components/ConsultationForm';
import QuoteCalculator from './components/QuoteCalculator';
import OfficeLocation from './components/OfficeLocation';
import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';

const ContactConsultation = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-white transition-colors duration-300 relative">
      <Helmet>
        <title>Contact & Free Consultation | Red Hand Solutions Rajkot</title>
        <meta
          name="description"
          content="Schedule a free digital transformation consultation with Red Hand Solutions in Rajkot, Gujarat. Call +91 6352412728 or get an instant quote."
        />
      </Helmet>

      {/* Ambient 3D procedural canvas */}
      <Ambient3DCanvas />

      {/* Floating Header */}
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Methods */}
        <ContactMethods />

        {/* Consultation Form */}
        <ConsultationForm />

        {/* Quote Calculator */}
        <QuoteCalculator />

        {/* Office Location */}
        <OfficeLocation />

        {/* FAQ Section */}
        <FAQSection />

        {/* Pre-Footer Action Banner */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-rose-800 text-white shadow-2xl shadow-red-950/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
                  Ready to Start Your Project?
                </h3>
                <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join 500+ satisfied clients who have transformed their businesses with our innovative solutions. Your success story starts with a simple conversation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+916352412728"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white text-red-700 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Icon name="Phone" size={18} />
                    <span>Call Now: +91 6352412728</span>
                  </a>
                  <a
                    href="mailto:redhand.solution@gmail.com"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300"
                  >
                    <Icon name="Mail" size={18} />
                    <span>redhand.solution@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Universal Dual-Theme Footer */}
      <Footer />
    </div>
  );
};

export default ContactConsultation;