import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import ClientTestimonials from './components/ClientTestimonials';
import WhyChooseUs from './components/WhyChooseUs';
import TechnologyStack from './components/TechnologyStack';
import CallToAction from './components/CallToAction';

import Footer from '../../components/ui/Footer';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Red Hand Solutions - Your Success, Our Innovation | Premier IT Solutions Gujarat</title>
        <meta name="description" content="Gujarat's premier digital transformation catalyst. Red Hand Solutions delivers cutting-edge web development, mobile apps, cloud solutions & digital marketing with local expertise and global standards." />
        <meta name="keywords" content="IT solutions Gujarat, web development Rajkot, mobile app development, digital transformation, Red Hand Solutions, software company Gujarat" />
        <meta property="og:title" content="Red Hand Solutions - Your Success, Our Innovation" />
        <meta property="og:description" content="Transform your business with Gujarat's leading IT solutions provider. 150+ projects, 85+ happy clients, 8+ years of excellence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>
      <div className="min-h-screen bg-transparent transition-colors duration-300">
        <Header />
        
        <main className="relative z-10">
          {/* Hero Section with Cinematic 3D Entrance */}
          <HeroSection />

          {/* Interactive Services Preview */}
          <ServicesPreview />

          {/* Client Testimonials Carousel */}
          <ClientTestimonials />

          {/* Why Choose Us Section */}
          <WhyChooseUs />

          {/* Technology Stack Visualization */}
          <TechnologyStack />

          {/* Call to Action Section */}
          <CallToAction />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;