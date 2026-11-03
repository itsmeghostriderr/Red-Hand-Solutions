import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Settings, 
  Crown, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  Download, 
  MessageCircle, 
  Clock, 
  TrendingUp, 
  Users, 
  Zap, 
  Lock, 
  AlertTriangle, 
  Plus, 
  BarChart3,
  Wrench,
  Sparkles
} from 'lucide-react';
import ConsultationModal from '../../../components/ConsultationModal';

const iconMap = {
  Shield,
  Settings,
  Crown
};

const MaintenancePackagesSection = () => {
  const [activePackage, setActivePackage] = useState(1);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState('Professional Care');

  const maintenancePackages = [
    {
      id: 'basic',
      name: 'Basic Support',
      description: 'Essential maintenance for small apps with basic requirements',
      icon: 'Shield',
      pricing: {
        monthly: 15000,
        quarterly: 40000,
        yearly: 150000
      },
      features: [
        'Bug fixes and minor updates',
        'OS compatibility updates',
        'Basic performance monitoring',
        'Email support (48-hour response)',
        'Monthly performance reports',
        'App store update submissions'
      ],
      limitations: [
        'Up to 5 hours of development per month',
        'Basic analytics reporting',
        'Standard support hours (9 AM - 6 PM)'
      ],
      ideal: 'Small businesses, MVP apps, limited user base'
    },
    {
      id: 'professional',
      name: 'Professional Care',
      description: 'Comprehensive maintenance for growing businesses with active user base',
      icon: 'Settings',
      pricing: {
        monthly: 35000,
        quarterly: 95000,
        yearly: 350000
      },
      features: [
        'Priority bug fixes and updates',
        'Feature enhancements',
        'Advanced performance monitoring',
        'Phone & email support (24-hour response)',
        'Bi-weekly performance reports',
        'Security patches and updates',
        'User analytics and insights',
        'App store optimization',
        'Third-party integration updates'
      ],
      limitations: [
        'Up to 15 hours of development per month',
        'Advanced analytics dashboard',
        'Extended support hours (8 AM - 8 PM)'
      ],
      ideal: 'Growing businesses, active user engagement, regular updates needed',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plus',
      description: 'Premium maintenance with dedicated support for mission-critical applications',
      icon: 'Crown',
      pricing: {
        monthly: 65000,
        quarterly: 180000,
        yearly: 650000
      },
      features: [
        'Immediate bug fixes and updates',
        'Custom feature development',
        'Real-time performance monitoring',
        'Dedicated support manager',
        'Weekly performance reports',
        'Advanced security monitoring',
        'Custom analytics and reporting',
        'Priority app store submissions',
        'Server maintenance and scaling',
        'Disaster recovery planning',
        '24/7 emergency support',
        'Quarterly strategy sessions'
      ],
      limitations: [
        'Unlimited development hours',
        'Custom reporting and analytics',
        '24/7 premium support'
      ],
      ideal: 'Large enterprises, high-traffic apps, mission-critical applications'
    }
  ];

  const additionalServices = [
    {
      name: 'Emergency Support',
      description: 'Critical issue resolution outside business hours',
      price: '₹5,000/hour',
      icon: AlertTriangle
    },
    {
      name: 'Feature Development',
      description: 'New feature development beyond package limits',
      price: '₹2,500/hour',
      icon: Plus
    },
    {
      name: 'Performance Optimization',
      description: 'App speed and performance improvements',
      price: '₹25,000/project',
      icon: Zap
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment and fixes',
      price: '₹50,000/audit',
      icon: Lock
    },
    {
      name: 'App Store Consultation',
      description: 'ASO strategy and implementation',
      price: '₹15,000/month',
      icon: TrendingUp
    },
    {
      name: 'Analytics Setup',
      description: 'Advanced analytics and tracking implementation',
      price: '₹35,000/setup',
      icon: BarChart3
    }
  ];

  const slaCommitments = [
    {
      category: 'Response Time',
      basic: '48 hours',
      professional: '24 hours',
      enterprise: '4 hours'
    },
    {
      category: 'Critical Bug Fix',
      basic: '5 business days',
      professional: '2 business days',
      enterprise: '24 hours'
    },
    {
      category: 'App Store Updates',
      basic: '7 business days',
      professional: '3 business days',
      enterprise: '1 business day'
    },
    {
      category: 'Uptime Guarantee',
      basic: '99.5%',
      professional: '99.8%',
      enterprise: '99.9%'
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getDiscountedPrice = (price, cycle) => {
    if (cycle === 'quarterly') return Math.round(price * 0.9);
    if (cycle === 'yearly') return Math.round(price * 0.8);
    return price;
  };

  const handleDownloadBrochure = () => {
    const text = [
      'RED HAND SOLUTIONS - APP SLA & MAINTENANCE PACKAGES',
      '===================================================\n',
      ...maintenancePackages.map(pkg => 
        `PACKAGE: ${pkg.name.toUpperCase()}\nDESCRIPTION: ${pkg.description}\nPRICING: ₹${pkg.pricing.monthly}/mo | ₹${pkg.pricing.quarterly}/quarter | ₹${pkg.pricing.yearly}/year\nIDEAL FOR: ${pkg.ideal}\n\nINCLUDED:\n${pkg.features.map(f => ` - ${f}`).join('\n')}\n` +
        '---------------------------------------------------\n'
      ),
      'SLA MATRIX:',
      ...slaCommitments.map(s => ` - ${s.category}: Basic (${s.basic}) | Pro (${s.professional}) | Enterprise (${s.enterprise})`),
      '\nContact: +91 6352412728 | redhand.solution@gmail.com | Rajkot, Gujarat'
    ].join('\n');

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Red-Hand-Solutions-Maintenance-Packages.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPlanName(`Maintenance Package - ${pkg.name}`);
    setIsConsultOpen(true);
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Wrench className="w-4 h-4" /> Continuous Engineering & SLA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Comprehensive App <br />
            <span className="text-red-600 dark:text-red-500">Maintenance Packages</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Keep your mobile app running smoothly with our comprehensive maintenance packages. From bug fixes to feature enhancements, we ensure your app stays current and performs optimally.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-2xl glass-card border border-gray-200 dark:border-white/10 flex items-center gap-1">
            {[
              { key: 'monthly', label: 'Monthly' },
              { key: 'quarterly', label: 'Quarterly', badge: '10% OFF' },
              { key: 'yearly', label: 'Yearly', badge: '20% OFF' }
            ].map((cycle) => (
              <button
                key={cycle.key}
                onClick={() => setBillingCycle(cycle.key)}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  billingCycle === cycle.key
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {cycle.label}
                {cycle.badge && (
                  <span className="absolute -top-2.5 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    {cycle.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Maintenance Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 text-left items-stretch">
          {maintenancePackages.map((pkg, index) => {
            const IconComp = iconMap[pkg.icon] || Shield;
            const isPopular = pkg.popular;
            const isSelected = activePackage === index;

            return (
              <div
                key={pkg.id}
                onClick={() => setActivePackage(index)}
                className={`relative rounded-3xl glass-card border flex flex-col justify-between transition-all duration-300 p-8 cursor-pointer ${
                  isPopular
                    ? 'border-red-500 ring-2 ring-red-500/30 shadow-2xl scale-105'
                    : 'border-gray-200/80 dark:border-white/10 hover:border-red-500/40'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-[11px] font-black uppercase tracking-wider shadow-lg shadow-red-600/30">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 flex items-center justify-center shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {pkg.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 mb-6 text-center">
                    <div className="text-3xl font-black text-gray-900 dark:text-white">
                      {formatPrice(getDiscountedPrice(pkg.pricing[billingCycle], billingCycle))}
                    </div>
                    <span className="text-[11px] text-gray-400 block mt-0.5">
                      per {billingCycle === 'yearly' ? 'year' : billingCycle === 'quarterly' ? 'quarter' : 'month'}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block">
                      Included Deliverables:
                    </span>
                    <div className="space-y-2">
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scope Details */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-gray-100 dark:border-white/5">
                    {pkg.limitations.map((lim, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Info className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{lim}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.02] text-xs text-gray-600 dark:text-gray-400 mb-6">
                    <strong className="text-gray-900 dark:text-white">Ideal For:</strong> {pkg.ideal}
                  </div>
                </div>

                <button
                  onClick={() => handleSelectPackage(pkg)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    isPopular
                      ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/[0.12] text-gray-800 dark:text-gray-200'
                  }`}
                >
                  Choose {pkg.name} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* SLA Commitments Matrix */}
        <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 mb-16 shadow-2xl text-left">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
              Service Level Agreements
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              We stand behind our maintenance services with clear SLA commitments and guaranteed response times
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/10">
                  <th className="py-3 px-4 font-bold text-gray-500 dark:text-gray-400 uppercase">Service Metric</th>
                  <th className="py-3 px-4 text-center font-bold text-gray-700 dark:text-gray-300">Basic</th>
                  <th className="py-3 px-4 text-center font-bold text-red-600 dark:text-red-400">Professional</th>
                  <th className="py-3 px-4 text-center font-bold text-emerald-600 dark:text-emerald-400">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {slaCommitments.map((sla, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                    <td className="py-3.5 px-4 font-semibold text-gray-900 dark:text-white">{sla.category}</td>
                    <td className="py-3.5 px-4 text-center text-gray-600 dark:text-gray-300">{sla.basic}</td>
                    <td className="py-3.5 px-4 text-center font-bold text-red-600 dark:text-red-400">{sla.professional}</td>
                    <td className="py-3.5 px-4 text-center font-bold text-emerald-600 dark:text-emerald-400">{sla.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Specialized Services */}
        <div className="mb-16 text-left">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
              Additional Specialized Services
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Extend your maintenance package with on-demand engineering services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((srv, idx) => {
              const SrvIcon = srv.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                    <SrvIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{srv.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{srv.description}</p>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400">{srv.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="rounded-3xl glass-card border border-red-500/30 p-8 sm:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            Need a Custom Maintenance Plan?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
            Every app is unique. Let's discuss your specific maintenance requirements and create a custom plan that fits your needs and budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setSelectedPlanName('Custom Mobile Maintenance Plan');
                setIsConsultOpen(true);
              }}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Discuss Custom Plan
            </button>

            <button
              onClick={handleDownloadBrochure}
              className="px-8 py-3.5 rounded-xl bg-white dark:bg-white/[0.06] hover:bg-gray-100 dark:hover:bg-white/[0.12] text-gray-800 dark:text-gray-200 font-bold text-xs uppercase tracking-wider border border-gray-200 dark:border-white/10 flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-red-500" /> Download SLA Brochure (.txt)
            </button>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={selectedPlanName}
      />
    </>
  );
};

export default MaintenancePackagesSection;