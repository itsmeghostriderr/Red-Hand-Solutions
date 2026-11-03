import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  TrendingUp, 
  Users, 
  Check, 
  X, 
  Download, 
  MessageCircle, 
  Layers, 
  ArrowRight,
  GitCompare
} from 'lucide-react';
import ConsultationModal from '../../../components/ConsultationModal';

const iconMap = {
  Globe,
  Smartphone,
  Cloud,
  TrendingUp,
  Users
};

const ComparisonTool = () => {
  const [selectedServices, setSelectedServices] = useState(['web-development', 'mobile-app']);
  const [activeTab, setActiveTab] = useState('features');
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const services = [
    {
      id: 'web-development',
      name: 'Web Development',
      icon: 'Globe',
      price: '₹2,50,000',
      timeline: '8-12 weeks',
      bestFor: 'Businesses needing online presence',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Content Management',
        'E-commerce Integration',
        'Analytics Setup',
        'Security Implementation'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      support: '24/7 Support',
      maintenance: 'Monthly Updates',
      scalability: 'High',
      complexity: 'Medium'
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Development',
      icon: 'Smartphone',
      price: '₹4,50,000',
      timeline: '12-16 weeks',
      bestFor: 'Customer engagement & retention',
      features: [
        'Cross-platform Development',
        'Push Notifications',
        'Offline Functionality',
        'App Store Optimization',
        'User Analytics',
        'Social Integration'
      ],
      technologies: ['React Native', 'Flutter', 'Firebase', 'AWS'],
      support: '24/7 Support',
      maintenance: 'Bi-weekly Updates',
      scalability: 'Very High',
      complexity: 'High'
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      icon: 'Cloud',
      price: '₹3,00,000',
      timeline: '6-10 weeks',
      bestFor: 'Scalability & cost optimization',
      features: [
        'Cloud Migration',
        'Auto Scaling',
        'Backup & Recovery',
        'Security Compliance',
        'Performance Monitoring',
        'Cost Optimization'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      support: '24/7 Monitoring',
      maintenance: 'Continuous Updates',
      scalability: 'Unlimited',
      complexity: 'High'
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      icon: 'TrendingUp',
      price: '₹1,50,000',
      timeline: '4-6 weeks',
      bestFor: 'Brand awareness & lead generation',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'PPC Campaigns',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'CRM'],
      support: 'Business Hours',
      maintenance: 'Weekly Reports',
      scalability: 'Medium',
      complexity: 'Low'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      icon: 'Users',
      price: '₹1,00,000',
      timeline: '2-4 weeks',
      bestFor: 'Strategic planning & optimization',
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Process Optimization',
        'Security Audit',
        'Training & Support',
        'Implementation Guidance'
      ],
      technologies: ['Enterprise Systems', 'Custom APIs', 'Cloud Architecture', 'Open Source'],
      support: 'Consultation Hours',
      maintenance: 'Quarterly Reviews',
      scalability: 'Consultative',
      complexity: 'Variable'
    }
  ];

  const toggleService = (serviceId) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else if (prev.length < 3) {
        return [...prev, serviceId];
      }
      return prev;
    });
  };

  const selectedServiceData = services.filter(service =>
    selectedServices.includes(service.id)
  );

  const handleDownloadComparison = () => {
    const lines = [
      'Red Hand Solutions - Service Comparison Matrix',
      '----------------------------------------------',
      ...selectedServiceData.map(s => 
        `Service: ${s.name}\nStarting Price: ${s.price}\nTimeline: ${s.timeline}\nBest For: ${s.bestFor}\nScalability: ${s.scalability}\nTech Stack: ${s.technologies.join(', ')}\nFeatures: ${s.features.join(', ')}\n`
      ),
      'Contact: +91 6352412728 | redhand.solution@gmail.com | Rajkot, Gujarat'
    ];
    const blob = new Blob([lines.join('\n\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `RHS-Service-Comparison.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <GitCompare className="w-4 h-4" /> Feature & Cost Matrix
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Service <span className="text-red-600 dark:text-red-500">Comparison Tool</span>
        </h3>
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Compare up to 3 services side-by-side to determine the optimal tech strategy for your organization.
        </p>
      </div>

      {/* Service Selector Chips */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
            Select Services (Pick up to 3)
          </h4>
          {selectedServices.length > 0 && (
            <button
              onClick={() => setSelectedServices([])}
              className="text-xs text-red-600 dark:text-red-400 hover:underline font-semibold flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" /> Clear All
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {services.map((service) => {
            const IconComp = iconMap[service.icon] || Globe;
            const isSelected = selectedServices.includes(service.id);
            const isMaxed = !isSelected && selectedServices.length >= 3;

            return (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                disabled={isMaxed}
                className={`p-4 rounded-2xl border transition-all duration-200 text-center flex flex-col items-center justify-center gap-2.5 ${
                  isSelected
                    ? 'border-red-500 bg-red-600/10 dark:bg-red-950/40 text-red-600 dark:text-red-400 shadow-md ring-2 ring-red-500/30'
                    : isMaxed
                    ? 'opacity-40 cursor-not-allowed border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.01]'
                    : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-gray-700 dark:text-gray-300 hover:border-red-500/40'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-red-600 text-white' : 'bg-gray-100 dark:bg-white/[0.06]'}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold">{service.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison View */}
      {selectedServiceData.length > 0 ? (
        <div className="space-y-6">
          {/* Comparison Category Tabs */}
          <div className="flex space-x-2 bg-gray-100 dark:bg-white/[0.05] p-1.5 rounded-2xl max-w-md mx-auto">
            {['features', 'technologies', 'details'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all capitalize ${
                  activeTab === tab
                    ? 'bg-white dark:bg-[#12141D] text-red-600 dark:text-red-400 shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Comparison Matrix Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.02]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 w-1/4">
                    Specification
                  </th>
                  {selectedServiceData.map((service) => {
                    const IconComp = iconMap[service.icon] || Globe;
                    return (
                      <th key={service.id} className="py-4 px-6 text-center">
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-sm text-gray-900 dark:text-white">
                            {service.name}
                          </span>
                          <span className="text-[11px] text-gray-500 dark:text-gray-400">
                            {service.bestFor}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-sm">
                {activeTab === 'features' && (
                  <tr>
                    <td className="py-5 px-6 font-semibold text-gray-900 dark:text-white align-top">
                      Included Features
                    </td>
                    {selectedServiceData.map((service) => (
                      <td key={service.id} className="py-5 px-6 align-top">
                        <ul className="space-y-2">
                          {service.features.map((f, i) => (
                            <li key={i} className="flex items-center space-x-2 text-xs text-gray-700 dark:text-gray-300">
                              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                )}

                {activeTab === 'technologies' && (
                  <tr>
                    <td className="py-5 px-6 font-semibold text-gray-900 dark:text-white align-top">
                      Core Frameworks & Tools
                    </td>
                    {selectedServiceData.map((service) => (
                      <td key={service.id} className="py-5 px-6 align-top text-center">
                        <div className="flex flex-wrap justify-center gap-1.5">
                          {service.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 text-xs rounded-lg bg-gray-100 dark:bg-white/[0.06] text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-white/5 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                )}

                {activeTab === 'details' && (
                  <>
                    <tr>
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        Starting Investment
                      </td>
                      {selectedServiceData.map((service) => (
                        <td key={service.id} className="py-4 px-6 text-center font-bold text-red-600 dark:text-red-400">
                          {service.price}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        Typical Timeline
                      </td>
                      {selectedServiceData.map((service) => (
                        <td key={service.id} className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          {service.timeline}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        Scalability Profile
                      </td>
                      {selectedServiceData.map((service) => (
                        <td key={service.id} className="py-4 px-6 text-center">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            {service.scalability}
                          </span>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        Support SLA
                      </td>
                      {selectedServiceData.map((service) => (
                        <td key={service.id} className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                          {service.support}
                        </td>
                      ))}
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsConsultOpen(true)}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Discuss Selected Services
            </button>
            <button
              onClick={handleDownloadComparison}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gray-100 dark:bg-white/[0.08] hover:bg-gray-200 dark:hover:bg-white/[0.14] text-gray-800 dark:text-gray-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" /> Download Matrix (.txt)
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white/40 dark:bg-white/[0.02] rounded-2xl border border-dashed border-gray-300 dark:border-white/10">
          <GitCompare className="w-12 h-12 text-gray-400 mx-auto mb-3 opacity-60" />
          <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
            No Services Selected
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Click on any of the service cards above to begin comparison.
          </p>
        </div>
      )}

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={selectedServiceData.map(s => s.name).join(' & ')}
      />
    </div>
  );
};

export default ComparisonTool;