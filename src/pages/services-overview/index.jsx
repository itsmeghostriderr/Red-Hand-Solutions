import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Calendar, 
  Play, 
  Layers, 
  Code, 
  Server, 
  Megaphone, 
  Users, 
  CheckCircle, 
  Clock, 
  Award, 
  MessageCircle, 
  Eye, 
  X,
  ArrowRight
} from 'lucide-react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ServiceCard from './components/ServiceCard';
import ProcessVisualization from './components/ProcessVisualization';
import ROICalculator from './components/ROICalculator';
import ComparisonTool from './components/ComparisonTool';
import ClientSuccessMetrics from './components/ClientSuccessMetrics';
import ConsultationModal from '../../components/ConsultationModal';

const ServicesOverview = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: `Modern, responsive websites built with cutting-edge technologies like React and Next.js. Optimized for Indian market needs with multilingual support, payment gateway integration, and mobile-first design approach.`,
      icon: 'Globe',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
      timeline: '8-12 weeks',
      startingPrice: '2,50,000',
      category: 'development',
      isPopular: true,
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Content Management System',
        'E-commerce Integration',
        'Payment Gateway Setup',
        'Analytics & Reporting'
      ],
      recentSuccess: 'Increased online sales by 300% for Gujarat Textiles Ltd'
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: `Cross-platform mobile applications for iOS and Android using React Native and Flutter. Focus on user experience, performance optimization, and seamless integration with existing business systems.`,
      icon: 'Smartphone',
      technologies: ['React Native', 'Flutter', 'Firebase', 'AWS', 'Redux', 'GraphQL'],
      timeline: '12-16 weeks',
      startingPrice: '4,50,000',
      category: 'development',
      isPopular: false,
      features: [
        'Cross-platform Development',
        'Push Notifications',
        'Offline Functionality',
        'App Store Optimization',
        'User Analytics',
        'Social Media Integration'
      ],
      recentSuccess: 'Achieved 150% user retention for Rajkot Food Chain app'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: `Scalable cloud infrastructure using AWS and Azure. Migration services, auto-scaling, backup solutions, and cost optimization specifically designed for growing Gujarat businesses.`,
      icon: 'Cloud',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      timeline: '6-10 weeks',
      startingPrice: '3,00,000',
      category: 'infrastructure',
      isPopular: false,
      features: [
        'Cloud Migration',
        'Auto Scaling',
        'Backup & Recovery',
        'Security Compliance',
        'Performance Monitoring',
        'Cost Optimization'
      ],
      recentSuccess: 'Reduced infrastructure costs by 60% for Ahmedabad Logistics'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: `Comprehensive digital marketing strategies including SEO, social media management, and PPC campaigns tailored for regional markets with focus on local customer acquisition.`,
      icon: 'TrendingUp',
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'SEMrush', 'Mailchimp', 'HubSpot'],
      timeline: '4-6 weeks',
      startingPrice: '1,50,000',
      category: 'marketing',
      isPopular: true,
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'PPC Campaign Management',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      recentSuccess: 'Generated 400% more leads for Surat Diamond Export'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: `Strategic IT consulting services including technology assessment, digital transformation planning, and implementation guidance for businesses looking to modernize their operations.`,
      icon: 'Users',
      technologies: ['Enterprise Solutions', 'Custom Frameworks', 'Open Source', 'Legacy Systems'],
      timeline: '2-4 weeks',
      startingPrice: '1,00,000',
      category: 'consulting',
      isPopular: false,
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Process Optimization',
        'Security Audit',
        'Training & Support',
        'Implementation Guidance'
      ],
      recentSuccess: 'Streamlined operations for 25+ businesses in Gujarat'
    }
  ];

  const filterCategories = [
    { id: 'all', name: 'All Services', icon: Layers },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'marketing', name: 'Marketing', icon: Megaphone },
    { id: 'consulting', name: 'Consulting', icon: Users }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Services | Red Hand Solutions - Full-Spectrum Enterprise IT & App Development</title>
        <meta 
          name="description" 
          content="Explore Red Hand Solutions' comprehensive IT services: Web development, mobile apps, cloud architecture, digital marketing, and IT consulting tailored for Gujarat businesses." 
        />
        <link rel="canonical" href="/services-overview" />
      </Helmet>

      <div className="min-h-screen bg-transparent text-slate-900 dark:text-white transition-colors duration-300">
        <Header />

        <main className="relative z-10 pt-28 pb-20">
          {/* Hero Section with Cinematic Background & Glass Stats */}
          <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
            {/* Ambient decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" /> Comprehensive IT Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight mb-6">
              Services That Transform <br />
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-rose-400 bg-clip-text text-transparent">
                Your Business
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              From high-performance web applications to cross-platform mobile apps and resilient cloud infrastructure, we deliver solutions engineered to scale Gujarat businesses globally.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Schedule Consultation
              </button>

              <button
                onClick={() => setIsDemoOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/80 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] text-gray-800 dark:text-white font-semibold text-sm border border-gray-200 dark:border-white/10 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-red-500" /> Watch Demo
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-5 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 text-center">
                <div className="text-3xl font-extrabold text-red-600 dark:text-red-400">150+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">Projects Delivered</div>
              </div>
              <div className="p-5 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 text-center">
                <div className="text-3xl font-extrabold text-gray-900 dark:text-white">120+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">Happy Clients</div>
              </div>
              <div className="p-5 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 text-center">
                <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">98%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">Satisfaction Rate</div>
              </div>
              <div className="p-5 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 text-center">
                <div className="text-3xl font-extrabold text-red-600 dark:text-red-400">24/7</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">Support Available</div>
              </div>
            </div>
          </section>

          {/* Interactive Category Filter Bar */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2.5 p-2 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 backdrop-blur-md max-w-2xl mx-auto shadow-sm">
              {filterCategories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeFilter === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md shadow-red-600/30'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.06]'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Services Cards Grid */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </section>

          {/* Process Visualization */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
            <ProcessVisualization />
          </section>

          {/* ROI Calculator Section */}
          <section id="roi-calculator-section" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28 scroll-mt-28">
            <ROICalculator />
          </section>

          {/* Service Comparison Matrix */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
            <ComparisonTool />
          </section>

          {/* Client Success Metrics & Social Proof */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
            <ClientSuccessMetrics />
          </section>

          {/* Final Call to Action */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="relative rounded-3xl glass-card border border-red-500/30 p-10 sm:p-14 text-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/5 -z-10" />
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
                Let's discuss how our services can help you achieve your goals. Get a free consultation and custom technical roadmap.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Start Free Consultation
                </button>

                <a
                  href="https://calendly.com/redhand-solution/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-white/[0.08] hover:bg-gray-100 dark:hover:bg-white/[0.14] text-gray-900 dark:text-white font-semibold text-sm border border-gray-200 dark:border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-red-500" /> Schedule Meeting
                </a>

                <a
                  href="/portfolio"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-100 dark:bg-white/[0.04] hover:bg-gray-200 dark:hover:bg-white/[0.08] text-gray-800 dark:text-gray-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4 text-red-500" /> View Our Work
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> 100% Satisfaction Guarantee
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-red-500" /> 24/7 Support
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Award className="w-4 h-4 text-amber-500" /> Industry Certified
                </span>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Working Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService="Custom Solution"
      />

      {/* Interactive Watch Demo Modal */}
      <AnimatePresence>
        {isDemoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDemoOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0D0F18] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600" />
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    Red Hand Solutions • Enterprise Architecture Demo
                  </h3>
                </div>
                <button
                  onClick={() => setIsDemoOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/[0.06] text-gray-500 hover:text-white hover:bg-red-600 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 flex flex-col items-center justify-center text-center p-6 text-white mb-6">
                <div className="w-16 h-16 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-400 mb-3 animate-pulse">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <h4 className="text-lg font-bold">Interactive Platform Walkthrough</h4>
                <p className="text-xs text-gray-400 max-w-sm mt-1">
                  See how our cloud infrastructure, responsive web engines, and mobile workflows streamline enterprise throughput.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Live 1-on-1 walkthrough available</span>
                <button
                  onClick={() => {
                    setIsDemoOpen(false);
                    setIsConsultOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Book Live Demo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesOverview;