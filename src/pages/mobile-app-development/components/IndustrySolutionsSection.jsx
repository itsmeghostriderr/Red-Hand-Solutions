import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Heart, 
  Truck, 
  BookOpen, 
  Settings, 
  CreditCard, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  Target, 
  Shield, 
  TrendingUp,
  CheckCircle2,
  Building,
  Sparkles
} from 'lucide-react';
import Image from '../../../components/AppImage';
import ConsultationModal from '../../../components/ConsultationModal';

const iconMap = {
  ShoppingBag,
  Heart,
  Truck,
  BookOpen,
  Settings,
  CreditCard
};

const IndustrySolutionsSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const industrySolutions = [
    {
      id: 'retail-ecommerce',
      title: 'Retail & E-commerce',
      subtitle: 'Digital Shopping Experiences',
      description: "Transform your retail business with feature-rich e-commerce apps that drive sales and customer engagement across Gujarat's growing digital marketplace.",
      image: '/assets/images/content/content_7_photo-1556742049-0cfed4f6a45d.jpg',
      icon: 'ShoppingBag',
      solutions: [
        {
          name: 'Multi-vendor Marketplace',
          description: 'Complete marketplace solution connecting local vendors with customers',
          features: ['Vendor onboarding', 'Commission management', 'Order tracking', 'Payment gateway']
        },
        {
          name: 'Inventory Management',
          description: 'Real-time inventory tracking and automated stock management',
          features: ['Stock alerts', 'Barcode scanning', 'Supplier integration', 'Analytics dashboard']
        },
        {
          name: 'Customer Loyalty Program',
          description: 'Reward system to increase customer retention and repeat purchases',
          features: ['Points system', 'Tier-based rewards', 'Referral bonuses', 'Personalized offers']
        }
      ],
      localFocus: [
        'Gujarati language support',
        'Local payment methods (UPI, Paytm)',
        'Regional shipping partners',
        'Festival-specific campaigns'
      ],
      successMetrics: {
        apps: '25+',
        revenue: '₹2.5Cr+',
        users: '1.2L+'
      }
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Wellness',
      subtitle: 'Digital Health Solutions',
      description: 'Revolutionize healthcare delivery with comprehensive digital solutions that connect patients, doctors, and healthcare providers across Gujarat.',
      image: '/assets/images/content/content_8_photo-1559757148-5c350d0d3c56.jpg',
      icon: 'Heart',
      solutions: [
        {
          name: 'Telemedicine Platform',
          description: 'Connect patients with doctors through secure video consultations',
          features: ['Video consultations', 'Prescription management', 'Medical records', 'Appointment scheduling']
        },
        {
          name: 'Hospital Management System',
          description: 'Comprehensive solution for hospital operations and patient management',
          features: ['Patient registration', 'Bed management', 'Billing system', 'Staff scheduling']
        },
        {
          name: 'Health Monitoring App',
          description: 'Personal health tracking with wearable device integration',
          features: ['Vital signs tracking', 'Medication reminders', 'Health reports', 'Emergency alerts']
        }
      ],
      localFocus: [
        'Multi-language support (Gujarati, Hindi)',
        'Integration with local hospitals',
        'Ayurvedic medicine support',
        'Rural healthcare connectivity'
      ],
      successMetrics: {
        apps: '15+',
        revenue: '₹1.8Cr+',
        users: '85K+'
      }
    },
    {
      id: 'logistics',
      title: 'Logistics & Transportation',
      subtitle: 'Smart Logistics Solutions',
      description: "Optimize your logistics operations with intelligent tracking, route optimization, and fleet management solutions designed for Gujarat's transportation industry.",
      image: '/assets/images/content/content_9_photo-1586953208448-b95a79798f.jpg',
      icon: 'Truck',
      solutions: [
        {
          name: 'Fleet Management System',
          description: 'Complete fleet tracking and management solution',
          features: ['GPS tracking', 'Fuel monitoring', 'Driver management', 'Route optimization']
        },
        {
          name: 'Delivery Management App',
          description: 'End-to-end delivery tracking and customer communication',
          features: ['Real-time tracking', 'Delivery confirmation', 'Customer notifications', 'Proof of delivery']
        },
        {
          name: 'Warehouse Management',
          description: 'Inventory and warehouse operations optimization',
          features: ['Inventory tracking', 'Order processing', 'Barcode scanning', 'Analytics reporting']
        }
      ],
      localFocus: [
        'Gujarat highway integration',
        'Local transport regulations',
        'Regional fuel price tracking',
        'Monsoon route planning'
      ],
      successMetrics: {
        apps: '20+',
        revenue: '₹3.2Cr+',
        users: '95K+'
      }
    },
    {
      id: 'education',
      title: 'Education & E-learning',
      subtitle: 'Digital Learning Platforms',
      description: 'Empower educational institutions and students with innovative e-learning solutions that make quality education accessible across Gujarat.',
      image: '/assets/images/content/content_4_photo-1503676260728-1c00da094a.jpg',
      icon: 'BookOpen',
      solutions: [
        {
          name: 'Learning Management System',
          description: 'Comprehensive platform for course management and student engagement',
          features: ['Course creation', 'Assignment management', 'Progress tracking', 'Discussion forums']
        },
        {
          name: 'Virtual Classroom',
          description: 'Interactive online classroom with real-time collaboration',
          features: ['Live streaming', 'Screen sharing', 'Interactive whiteboard', 'Recording capability']
        },
        {
          name: 'Student Information System',
          description: 'Complete student lifecycle management solution',
          features: ['Admission management', 'Grade tracking', 'Parent communication', 'Fee management']
        }
      ],
      localFocus: [
        'Gujarat board curriculum support',
        'Regional language content',
        'Local examination patterns',
        'Rural connectivity optimization'
      ],
      successMetrics: {
        apps: '18+',
        revenue: '₹2.1Cr+',
        users: '1.5L+'
      }
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industry',
      subtitle: 'Industrial Automation',
      description: "Digitize your manufacturing processes with IoT-enabled solutions, quality control systems, and production management apps for Gujarat's industrial sector.",
      image: '/assets/images/content/content_5_photo-1565514020179-026b92b84b.jpg',
      icon: 'Settings',
      solutions: [
        {
          name: 'Production Management',
          description: 'Real-time production monitoring and quality control',
          features: ['Production tracking', 'Quality metrics', 'Machine monitoring', 'Downtime analysis']
        },
        {
          name: 'Supply Chain Management',
          description: 'End-to-end supply chain visibility and optimization',
          features: ['Supplier management', 'Procurement tracking', 'Inventory optimization', 'Demand forecasting']
        },
        {
          name: 'Worker Safety & Compliance',
          description: 'Ensure workplace safety and regulatory compliance',
          features: ['Safety checklists', 'Incident reporting', 'Compliance tracking', 'Training management']
        }
      ],
      localFocus: [
        'Gujarat industrial policy compliance',
        'Local supplier integration',
        'Regional labor regulations',
        'Export documentation support'
      ],
      successMetrics: {
        apps: '12+',
        revenue: '₹4.5Cr+',
        users: '45K+'
      }
    },
    {
      id: 'fintech',
      title: 'FinTech & Banking',
      subtitle: 'Financial Technology Solutions',
      description: "Build secure and compliant financial applications that serve Gujarat's growing fintech ecosystem with advanced security and user experience.",
      image: '/assets/images/content/content_6_photo-1563013544-824ae1b704d3.jpg',
      icon: 'CreditCard',
      solutions: [
        {
          name: 'Digital Banking Platform',
          description: 'Complete digital banking solution with advanced security',
          features: ['Account management', 'Transaction history', 'Fund transfers', 'Bill payments']
        },
        {
          name: 'Investment Management',
          description: 'Portfolio management and investment tracking application',
          features: ['Portfolio tracking', 'Market analysis', 'Investment recommendations', 'Risk assessment']
        },
        {
          name: 'Loan Management System',
          description: 'End-to-end loan processing and management solution',
          features: ['Loan application', 'Credit scoring', 'Document verification', 'EMI tracking']
        }
      ],
      localFocus: [
        'RBI compliance and regulations',
        'Regional banking partnerships',
        'Local payment gateway integration',
        'Gujarati business community focus'
      ],
      successMetrics: {
        apps: '8+',
        revenue: '₹6.2Cr+',
        users: '2.3L+'
      }
    }
  ];

  const current = industrySolutions[activeIndustry];
  const CurrentIcon = iconMap[current.icon] || ShoppingBag;

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building className="w-4 h-4" /> Vertical Specialization
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Tailored Solutions for <br />
            <span className="text-red-600 dark:text-red-500">Every Industry</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            We understand the unique challenges of different industries and create specialized mobile app solutions that address specific business needs across Gujarat's diverse economy.
          </p>
        </div>

        {/* Industry Grid Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {industrySolutions.map((ind, idx) => {
            const IconComp = iconMap[ind.icon] || ShoppingBag;
            const isSelected = activeIndustry === idx;

            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(idx)}
                className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center gap-2.5 ${
                  isSelected
                    ? 'border-red-500 bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'glass-card border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-red-500/40'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white/20' : 'bg-gray-100 dark:bg-white/[0.06]'}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-tight">{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Detail View */}
        <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 shadow-2xl text-left mb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Header Column */}
            <div className="lg:col-span-7 space-y-7">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    {current.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {current.description}
              </p>

              {/* 3 Solutions */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
                  Custom Architecture Modules
                </h4>
                {current.solutions.map((sol, i) => (
                  <div key={i} className="p-4 rounded-xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/5">
                    <h5 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                      {sol.name}
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2.5">
                      {sol.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {sol.features.map((f, fi) => (
                        <span
                          key={fi}
                          className="px-2 py-0.5 rounded-md bg-white dark:bg-white/[0.06] text-gray-700 dark:text-gray-300 text-[11px] font-medium border border-gray-200/50 dark:border-white/5"
                        >
                          • {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar: Metrics & Gujarat Local Advantage */}
            <div className="lg:col-span-5 space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 text-center p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/5">
                <div>
                  <div className="text-xl font-black text-red-600 dark:text-red-400">{current.successMetrics.apps}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-semibold">Apps Built</div>
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900 dark:text-white">{current.successMetrics.revenue}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-semibold">Revenue Scaled</div>
                </div>
                <div>
                  <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">{current.successMetrics.users}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-semibold">Active Users</div>
                </div>
              </div>

              {/* Local Advantage Box */}
              <div className="p-6 rounded-2xl bg-red-50/60 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Gujarat Regional Specialization
                </h4>
                <div className="space-y-2">
                  {current.localFocus.map((focus, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-800 dark:text-gray-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsConsultOpen(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4" /> Discuss {current.title} Project
              </button>
            </div>
          </div>
        </div>

        {/* 3 Value Propositions */}
        <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 text-center shadow-xl mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            Why Choose Industry-Specific Solutions?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
            Generic templates fail to address local compliance and user workflows. Our tailored builds ensure immediate business adoption.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5">
              <Target className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">Targeted Workflows</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Features engineered strictly around your sector's day-to-day operations and consumer behavior.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5">
              <Shield className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">Compliance Ready</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Built-in regulatory compliance matching Gujarat industrial codes, GST taxation, and Indian privacy mandates.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5">
              <TrendingUp className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">Faster ROI</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Pre-configured regional integrations translate into 2x faster time-to-market and accelerated revenue realization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={`Industry Solution: ${current.title}`}
      />
    </>
  );
};

export default IndustrySolutionsSection;