import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Layers, 
  TrendingUp, 
  Settings, 
  Palette, 
  CheckCircle2, 
  Calendar, 
  Download, 
  ArrowRight, 
  Phone,
  Sparkles,
  Code
} from 'lucide-react';
import ConsultationModal from '../../../components/ConsultationModal';

const iconMap = {
  Apple: Smartphone,
  Smartphone: Smartphone,
  Layers: Layers,
  TrendingUp: TrendingUp,
  Settings: Settings,
  Palette: Palette
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const services = [
    {
      id: 'native-ios',
      title: 'Native iOS Development',
      description: 'High-performance iOS apps built with Swift and SwiftUI for optimal user experience and App Store success.',
      features: [
        'Swift & SwiftUI development',
        'iOS Human Interface Guidelines',
        'Core Data & CloudKit integration',
        'App Store optimization',
        'Push notifications & in-app purchases',
        'Advanced iOS features (Face ID, ARKit)'
      ],
      technologies: ['Swift', 'SwiftUI', 'Xcode', 'Core Data', 'CloudKit'],
      pricing: '₹2,50,000 - ₹8,00,000',
      timeline: '12-20 weeks',
      icon: 'Apple',
      color: 'from-gray-700 to-gray-900'
    },
    {
      id: 'native-android',
      title: 'Native Android Development',
      description: 'Robust Android applications using Kotlin and Jetpack Compose for seamless performance across all Android devices.',
      features: [
        'Kotlin & Jetpack Compose',
        'Material Design implementation',
        'Room database & Firebase',
        'Google Play Store optimization',
        'Android-specific features',
        'Multi-device compatibility'
      ],
      technologies: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Room', 'Firebase'],
      pricing: '₹2,00,000 - ₹7,50,000',
      timeline: '10-18 weeks',
      icon: 'Smartphone',
      color: 'from-emerald-600 to-green-700'
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform Development',
      description: 'Cost-effective React Native solutions that deliver native performance across iOS and Android platforms.',
      features: [
        'React Native framework',
        'Single codebase for both platforms',
        'Native module integration',
        'Hot reload development',
        'Third-party library support',
        '90% code reusability'
      ],
      technologies: ['React Native', 'JavaScript', 'Redux', 'Expo', 'Metro'],
      pricing: '₹1,50,000 - ₹5,00,000',
      timeline: '8-14 weeks',
      icon: 'Layers',
      color: 'from-red-600 to-rose-700'
    },
    {
      id: 'app-store-optimization',
      title: 'App Store Optimization',
      description: 'Complete ASO strategy to improve app visibility, increase downloads, and boost organic user acquisition.',
      features: [
        'Keyword research & optimization',
        'App title & description optimization',
        'Screenshot & video creation',
        'A/B testing for store listings',
        'Review management',
        'Competitor analysis'
      ],
      technologies: ['App Store Connect', 'Google Play Console', 'ASO Tools', 'Analytics'],
      pricing: '₹25,000 - ₹75,000/month',
      timeline: 'Ongoing',
      icon: 'TrendingUp',
      color: 'from-amber-600 to-orange-700'
    },
    {
      id: 'maintenance-support',
      title: 'App Maintenance & Support',
      description: 'Comprehensive maintenance packages ensuring your app stays updated, secure, and performing optimally.',
      features: [
        'Regular updates & bug fixes',
        'OS compatibility updates',
        'Security patches',
        'Performance monitoring',
        'Feature enhancements',
        '24/7 technical support'
      ],
      technologies: ['Monitoring Tools', 'Analytics', 'Crash Reporting', 'CI/CD'],
      pricing: '₹15,000 - ₹50,000/month',
      timeline: 'Ongoing',
      icon: 'Settings',
      color: 'from-purple-600 to-indigo-700'
    },
    {
      id: 'ui-ux-design',
      title: 'Mobile UI/UX Design',
      description: 'User-centered design approach creating intuitive and engaging mobile experiences that drive user retention.',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Visual design & branding',
        'Usability testing',
        'Design system creation',
        'Accessibility compliance'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
      pricing: '₹75,000 - ₹2,50,000',
      timeline: '4-8 weeks',
      icon: 'Palette',
      color: 'from-rose-600 to-red-600'
    }
  ];

  const handleDownloadBrochure = () => {
    const text = [
      'RED HAND SOLUTIONS - MOBILE APP DEVELOPMENT SERVICES',
      '====================================================\n',
      ...services.map(s => 
        `SERVICE: ${s.title}\nINVESTMENT: ${s.pricing} | TIMELINE: ${s.timeline}\nDESCRIPTION: ${s.description}\nFEATURES:\n${s.features.map(f => ` - ${f}`).join('\n')}\nTECH STACK: ${s.technologies.join(', ')}\n` +
        '----------------------------------------------------\n'
      ),
      'Call: +91 6352412728 | redhand.solution@gmail.com | Rajkot, Gujarat'
    ].join('\n');

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Red-Hand-Solutions-Mobile-Services.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Code className="w-4 h-4" /> Full-Cycle Mobile Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Complete Mobile App <br />
            <span className="text-red-600 dark:text-red-500">Development Services</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            From native iOS and Android development to cross-platform solutions, we provide end-to-end mobile app development services tailored for Gujarat businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {services.map((service, index) => {
            const IconComp = iconMap[service.icon] || Smartphone;
            const isSelected = activeService === index;

            return (
              <div
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`p-7 rounded-2xl cursor-pointer transition-all duration-300 glass-card border flex flex-col justify-between ${
                  isSelected
                    ? 'border-red-500 shadow-xl shadow-red-500/10 ring-2 ring-red-500/30'
                    : 'border-gray-200/80 dark:border-white/10 hover:border-red-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-semibold">Investment</span>
                    <span className="font-bold text-red-600 dark:text-red-400">{service.pricing}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 block text-[10px] uppercase font-semibold">Timeline</span>
                    <span className="font-bold text-gray-800 dark:text-gray-200">{service.timeline}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Deep Dive */}
        <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 shadow-2xl text-left">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                {services[activeService].timeline} Implementation
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                {services[activeService].title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {services[activeService].description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
                  Key Capabilities
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {services[activeService].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {services[activeService].technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-lg bg-gray-100 dark:bg-white/[0.06] text-gray-800 dark:text-gray-200 font-medium border border-gray-200/60 dark:border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Pricing, Deliverables, CTA */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/10 space-y-6">
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold block mb-1">
                  Investment Estimate
                </span>
                <div className="text-2xl font-black text-red-600 dark:text-red-400">
                  {services[activeService].pricing}
                </div>
                <span className="text-xs text-gray-500">Timeline: {services[activeService].timeline}</span>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-white/10 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                <span className="font-bold text-gray-900 dark:text-white block mb-1">Included In Every Project:</span>
                <p>• Complete project documentation & architectural schema</p>
                <p>• Full source code ownership & deployment pipelines</p>
                <p>• 3 months guaranteed post-launch maintenance & bug-fixing</p>
                <p>• App Store & Google Play Store submission & approval guarantee</p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar className="w-4 h-4" /> Schedule App Consultation
                </button>

                <button
                  onClick={handleDownloadBrochure}
                  className="w-full py-3.5 rounded-xl bg-white dark:bg-white/[0.06] hover:bg-gray-100 dark:hover:bg-white/[0.12] text-gray-800 dark:text-gray-200 font-bold text-xs uppercase tracking-wider border border-gray-200 dark:border-white/10 flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4 text-red-500" /> Download Service Brochure (.txt)
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-center text-xs">
                <span className="text-gray-500 dark:text-gray-400 block mb-1">Direct Engineering Hotline:</span>
                <a href="tel:+916352412728" className="font-bold text-red-600 dark:text-red-400 text-sm hover:underline">
                  +91 6352412728
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={services[activeService].title}
      />
    </>
  );
};

export default ServicesSection;