import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Portfolio from './pages/portfolio';
import ContactConsultation from './pages/contact-consultation';
import ServicesOverview from './pages/services-overview';
import MobileAppDevelopment from './pages/mobile-app-development';
import AboutUs from './pages/about-us';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services-overview" element={<ServicesOverview />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/contact-consultation" element={<ContactConsultation />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
