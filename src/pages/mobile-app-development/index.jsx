import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import InteractiveDemoSection from './components/InteractiveDemoSection';
import DevelopmentProcessSection from './components/DevelopmentProcessSection';
import TechnologyStackSection from './components/TechnologyStackSection';
import IndustrySolutionsSection from './components/IndustrySolutionsSection';
import AppStoreSuccessSection from './components/AppStoreSuccessSection';
import ConsultationProcessSection from './components/ConsultationProcessSection';
import MaintenancePackagesSection from './components/MaintenancePackagesSection';

const MobileAppDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Mobile App Development | Red Hand Solutions - iOS, Android & React Native</title>
        <meta 
          name="description" 
          content="Premier mobile application development services in Gujarat. Native iOS (Swift), Android (Kotlin), and React Native cross-platform apps with 98.5% App Store first-time approval rate." 
        />
        <meta name="keywords" content="mobile app development, iOS app developer Gujarat, Android app development Rajkot, React Native developer India, app store optimization" />
        <link rel="canonical" href="/mobile-app-development" />
      </Helmet>

      <div className="min-h-screen bg-transparent text-slate-900 dark:text-white transition-colors duration-300">
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <ServicesSection />
          <InteractiveDemoSection />
          <DevelopmentProcessSection />
          <TechnologyStackSection />
          <IndustrySolutionsSection />
          <AppStoreSuccessSection />
          <ConsultationProcessSection />
          <MaintenancePackagesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MobileAppDevelopment;