import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Star, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Search, 
  Image as ImageIcon, 
  MessageSquare, 
  BarChart3, 
  Calendar,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import Image from '../../../components/AppImage';
import ConsultationModal from '../../../components/ConsultationModal';

const iconMap = {
  Download,
  Star,
  Users,
  TrendingUp
};

const AppStoreSuccessSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const successMetrics = [
    {
      id: 'downloads',
      title: 'Total Downloads',
      value: '2.5M+',
      description: 'Combined downloads across all our client apps',
      icon: 'Download',
      details: [
        'iOS App Store: 1.2M downloads',
        'Google Play Store: 1.3M downloads',
        'Average monthly growth: 15%',
        'Peak download day: 25K downloads'
      ]
    },
    {
      id: 'ratings',
      title: 'Average Rating',
      value: '4.7★',
      description: 'Consistent high ratings across app stores',
      icon: 'Star',
      details: [
        'iOS App Store average: 4.8★',
        'Google Play Store average: 4.6★',
        '92% of reviews are 4+ stars',
        'Average review response time: 2 hours'
      ]
    },
    {
      id: 'retention',
      title: 'User Retention',
      value: '78%',
      description: '30-day user retention rate',
      icon: 'Users',
      details: [
        'Day 1 retention: 85%',
        'Day 7 retention: 82%',
        'Day 30 retention: 78%',
        'Day 90 retention: 65%'
      ]
    },
    {
      id: 'revenue',
      title: 'Revenue Generated',
      value: '₹15Cr+',
      description: 'Total revenue generated for clients',
      icon: 'TrendingUp',
      details: [
        'E-commerce apps: ₹8.5Cr',
        'Service apps: ₹4.2Cr',
        'Subscription apps: ₹2.3Cr',
        'Average monthly growth: 12%'
      ]
    }
  ];

  const featuredApps = [
    {
      name: 'ShopEasy Gujarat',
      category: 'E-commerce',
      downloads: '250K+',
      rating: '4.8★',
      revenue: '₹2.5Cr',
      description: 'Multi-vendor marketplace connecting local Gujarat businesses with customers',
      image: '/assets/images/content/content_7_photo-1556742049-0cfed4f6a45d.jpg',
      features: ['Multi-language support', 'Local payment integration', 'Real-time tracking'],
      achievements: [
        'Featured in Google Play Store',
        'Top 10 Shopping App in Gujarat',
        '95% customer satisfaction'
      ]
    },
    {
      name: 'HealthCare+ Rajkot',
      category: 'Healthcare',
      downloads: '180K+',
      rating: '4.9★',
      revenue: '₹1.8Cr',
      description: 'Comprehensive healthcare platform connecting patients with doctors',
      image: '/assets/images/content/content_8_photo-1559757148-5c350d0d3c56.jpg',
      features: ['Telemedicine', 'Appointment booking', 'Medical records'],
      achievements: [
        'Healthcare Innovation Award 2023',
        'Partnership with 50+ hospitals',
        '24/7 emergency support'
      ]
    },
    {
      name: 'EduSmart Learning',
      category: 'Education',
      downloads: '320K+',
      rating: '4.7★',
      revenue: '₹1.9Cr',
      description: 'Interactive learning platform for students across Gujarat',
      image: '/assets/images/content/content_4_photo-1503676260728-1c00da094a.jpg',
      features: ['Video lectures', 'Interactive assignments', 'Progress tracking'],
      achievements: [
        'Used by 200+ schools',
        'Education Excellence Award',
        '85% improvement in test scores'
      ]
    }
  ];

  const asoStrategies = [
    {
      title: 'Keyword Optimization',
      description: 'Strategic keyword research and implementation for better discoverability',
      icon: Search,
      results: '+150% organic visibility'
    },
    {
      title: 'Visual Assets',
      description: 'Compelling screenshots, videos, and app icons that drive conversions',
      icon: ImageIcon,
      results: '+85% conversion rate'
    },
    {
      title: 'Review Management',
      description: 'Proactive review monitoring and response strategy',
      icon: MessageSquare,
      results: '+0.8 rating improvement'
    },
    {
      title: 'A/B Testing',
      description: 'Continuous testing of store listings for optimal performance',
      icon: BarChart3,
      results: '+65% download rate'
    }
  ];

  const handleDownloadSuccessGuide = () => {
    const text = [
      'RED HAND SOLUTIONS - APP STORE SUCCESS GUIDE',
      '============================================\n',
      'METRICS SUMMARY:',
      ' - Total Downloads: 2.5M+ (iOS: 1.2M, Play Store: 1.3M)',
      ' - Average Store Rating: 4.7/5.0 Stars',
      ' - 30-Day Retention Rate: 78%',
      ' - Client Revenue Generated: ₹15Cr+\n',
      'APPROVAL RECORD:',
      ' - First-Time Store Approval Rate: 98.5%',
      ' - Average Turnaround: 2-3 Days\n',
      'PROVEN ASO STRATEGIES:',
      ...asoStrategies.map(s => ` - ${s.title}: ${s.description} (Result: ${s.results})`),
      '\nContact: +91 6352412728 | redhand.solution@gmail.com | Rajkot, Gujarat'
    ].join('\n');

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Red-Hand-Solutions-App-Store-Guide.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4" /> Store Optimization Authority
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Proven Track Record of <br />
            <span className="text-red-600 dark:text-red-500">App Store Success</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Our apps consistently achieve high ratings, strong user retention, and significant revenue generation across both iOS App Store and Google Play Store.
          </p>
        </div>

        {/* 4 Interactive Success Metric Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
          {successMetrics.map((metric, idx) => {
            const IconComp = iconMap[metric.icon] || Award;
            const isSelected = activeMetric === idx;

            return (
              <div
                key={metric.id}
                onClick={() => setActiveMetric(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 glass-card border flex flex-col justify-between ${
                  isSelected
                    ? 'border-red-500 ring-2 ring-red-500/30 shadow-xl'
                    : 'border-gray-200/80 dark:border-white/10 hover:border-red-500/40'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-4 border border-red-500/20">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                    {metric.value}
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                    {metric.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    {metric.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-white/5 space-y-1">
                  {metric.details.slice(0, 2).map((det, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-600 dark:text-gray-400">
                      <div className="w-1 h-1 rounded-full bg-red-500" />
                      <span className="truncate">{det}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Apps Showcase */}
        <div className="mb-16 text-left">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
              Featured Success Stories
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Apps engineered by Red Hand Solutions driving millions of user transactions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredApps.map((app, index) => (
              <div
                key={index}
                className="rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 overflow-hidden flex flex-col justify-between hover:border-red-500/40 transition-colors"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-gray-900">
                    <Image
                      src={app.image}
                      alt={app.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/90 text-gray-900 backdrop-blur-md">
                      {app.category}
                    </span>
                    <h4 className="absolute bottom-3 left-4 text-white font-bold text-base">
                      {app.name}
                    </h4>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {app.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                      <div>
                        <div className="text-sm font-bold text-red-600 dark:text-red-400">{app.downloads}</div>
                        <div className="text-[10px] text-gray-400">Downloads</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-amber-500">{app.rating}</div>
                        <div className="text-[10px] text-gray-400">Rating</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{app.revenue}</div>
                        <div className="text-[10px] text-gray-400">Gross Rev</div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      {app.achievements.map((ach, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <a
                    href="/portfolio"
                    className="w-full py-2.5 rounded-xl bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/[0.12] text-gray-800 dark:text-gray-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-red-500" /> View Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ASO Strategy Pillars */}
        <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 mb-16 shadow-2xl text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            Our App Store Optimization Strategy
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10">
            We don't just build apps – we ensure they succeed in the competitive app store environment with proven ASO techniques
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {asoStrategies.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5 flex flex-col items-center justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-3">
                      <ItemIcon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {item.results}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compliance and 98.5% Rate */}
        <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 mb-14 text-left">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                App Store Compliance & Guidelines
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We ensure your app meets all strict App Store and Google Play requirements for smooth approval and ongoing policy compliance, avoiding store rejections or policy warnings.
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                <span className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Human Interface Guidelines compliant
                </span>
                <span className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> App Privacy & Tracking transparency
                </span>
                <span className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Google Play Developer Policy adherence
                </span>
                <span className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Indian regulatory & payment standards
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-1">
              <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                98.5%
              </div>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                First-Time Approval Rate
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Average approval turnaround: 2-3 business days
              </p>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsConsultOpen(true)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
          >
            <Calendar className="w-4 h-4" /> Schedule App Strategy Session
          </button>
          <button
            onClick={handleDownloadSuccessGuide}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-white/[0.06] hover:bg-gray-100 dark:hover:bg-white/[0.12] text-gray-800 dark:text-gray-200 font-bold text-xs uppercase tracking-wider border border-gray-200 dark:border-white/10 flex items-center justify-center gap-2 transition-all"
          >
            <Download className="w-4 h-4 text-red-500" /> Download Success Guide (.txt)
          </button>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService="App Store Success & Optimization"
      />
    </>
  );
};

export default AppStoreSuccessSection;