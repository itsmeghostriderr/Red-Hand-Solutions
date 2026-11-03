import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  ShoppingBag, 
  Heart, 
  Truck, 
  BookOpen, 
  Star, 
  Calendar, 
  Sparkles, 
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Smartphone
} from 'lucide-react';
import Image from '../../../components/AppImage';
import ConsultationModal from '../../../components/ConsultationModal';

const iconMap = {
  ShoppingBag,
  Heart,
  Truck,
  BookOpen
};

const InteractiveDemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const demoApps = [
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      subtitle: 'ShopEasy - Local Shopping App',
      description: 'Complete e-commerce solution with inventory management, payment gateway integration, and real-time order tracking for Rajkot retailers.',
      features: [
        'Product catalog management',
        'Secure payment integration',
        'Order tracking & notifications',
        'Customer reviews & ratings',
        'Inventory synchronization',
        'Multi-language support'
      ],
      metrics: {
        downloads: '50K+',
        rating: '4.7★',
        retention: '78%'
      },
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Razorpay'],
      mockupImage: '/assets/images/content/content_7_photo-1556742049-0cfed4f6a45d.jpg',
      icon: 'ShoppingBag'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Wellness',
      subtitle: 'HealthCare+ - Patient Management',
      description: 'Comprehensive healthcare app connecting patients with doctors, appointment scheduling, and telemedicine features for Gujarat healthcare providers.',
      features: [
        'Doctor appointment booking',
        'Telemedicine consultations',
        'Medical records management',
        'Prescription tracking',
        'Health monitoring',
        'Emergency services'
      ],
      metrics: {
        downloads: '25K+',
        rating: '4.9★',
        retention: '85%'
      },
      technologies: ['Flutter', 'Firebase', 'WebRTC', 'Cloud Functions'],
      mockupImage: '/assets/images/content/content_8_photo-1559757148-5c350d0d3c56.jpg',
      icon: 'Heart'
    },
    {
      id: 'logistics',
      title: 'Logistics & Delivery',
      subtitle: 'FastTrack - Delivery Management',
      description: 'Real-time delivery tracking and fleet management solution for logistics companies operating in Gujarat and surrounding regions.',
      features: [
        'Real-time GPS tracking',
        'Route optimization',
        'Delivery confirmation',
        'Fleet management',
        'Customer notifications',
        'Analytics dashboard'
      ],
      metrics: {
        downloads: '15K+',
        rating: '4.6★',
        retention: '72%'
      },
      technologies: ['React Native', 'Google Maps', 'Socket.io', 'Express.js'],
      mockupImage: '/assets/images/content/content_9_photo-1586953208448-b95a79798f.jpg',
      icon: 'Truck'
    },
    {
      id: 'education',
      title: 'Education & Learning',
      subtitle: 'EduSmart - Learning Platform',
      description: 'Interactive learning platform with video lectures, assignments, and progress tracking for educational institutions in Gujarat.',
      features: [
        'Video lecture streaming',
        'Interactive assignments',
        'Progress tracking',
        'Discussion forums',
        'Offline content access',
        'Parent-teacher communication'
      ],
      metrics: {
        downloads: '35K+',
        rating: '4.8★',
        retention: '80%'
      },
      technologies: ['React Native', 'AWS', 'GraphQL', 'Redis'],
      mockupImage: '/assets/images/content/content_4_photo-1503676260728-1c00da094a.jpg',
      icon: 'BookOpen'
    }
  ];

  const handlePlayDemo = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3500);
  };

  const currentApp = demoApps[activeDemo];

  return (
    <>
      <section id="demo-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" /> Interactive Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Experience Our Apps <br />
            <span className="text-red-600 dark:text-red-500">Across Industries</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Explore interactive demos of mobile applications we've built for different industries, showcasing our expertise in creating user-centric solutions.
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {demoApps.map((app, index) => {
            const IconComp = iconMap[app.icon] || ShoppingBag;
            const isSelected = activeDemo === index;

            return (
              <button
                key={app.id}
                onClick={() => {
                  setActiveDemo(index);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30'
                    : 'glass-card border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-red-500/40'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{app.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Device Showcase Card */}
        <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Mockup Stage */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 h-[520px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2.5 shadow-2xl border-4 border-gray-800 dark:border-white/20 ring-2 ring-red-500/20">
                <div className="w-full h-full bg-black rounded-[2.3rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-black/80 backdrop-blur-sm flex items-center justify-between px-5 text-white text-[11px] z-20">
                    <span className="font-bold">9:41</span>
                    <div className="w-16 h-3 bg-black rounded-full" />
                    <span>5G • 99%</span>
                  </div>

                  {/* App Screenshot */}
                  <Image
                    src={currentApp.mockupImage}
                    alt={currentApp.title}
                    className="w-full h-full object-cover pt-10"
                  />

                  {/* Interactive Play Button */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center pt-8">
                    <button
                      onClick={handlePlayDemo}
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                        isPlaying
                          ? 'bg-red-600 text-white scale-110 animate-pulse'
                          : 'bg-white/90 text-red-600 hover:scale-105 hover:bg-white'
                      }`}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1 fill-red-600" />}
                    </button>
                  </div>

                  {/* Live Simulation Indicator */}
                  {isPlaying && (
                    <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md text-white p-2.5 rounded-xl text-xs flex items-center gap-2 z-20 border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span className="font-semibold">Simulating {currentApp.subtitle}...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Information Panel */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block mb-1">
                  {currentApp.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                  {currentApp.subtitle}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {currentApp.description}
                </p>
              </div>

              {/* KPI Metrics */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-black text-red-600 dark:text-red-400">
                    {currentApp.metrics.downloads}
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Downloads</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-black text-amber-500">
                    {currentApp.metrics.rating}
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">User Rating</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    {currentApp.metrics.retention}
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Retention</div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
                  Key Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {currentApp.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2.5">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentApp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-lg bg-gray-100 dark:bg-white/[0.06] text-gray-800 dark:text-gray-200 font-medium border border-gray-200/60 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="/portfolio"
                  className="px-6 py-3 rounded-xl bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> View Full Case Study
                </a>

                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Discuss Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={`Mobile App - ${currentApp.subtitle}`}
      />
    </>
  );
};

export default InteractiveDemoSection;