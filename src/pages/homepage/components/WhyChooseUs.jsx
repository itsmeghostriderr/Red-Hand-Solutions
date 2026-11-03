import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import ConsultationModal from '../../../components/ConsultationModal';

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      id: 1,
      title: "Local Expertise",
      description: "Deep understanding of Gujarat's business landscape and market dynamics",
      icon: "MapPin",
      stats: "8+ Years in Gujarat",
      benefits: [
        "Regional market knowledge",
        "Local compliance expertise",
        "Cultural understanding",
        "On-ground support"
      ]
    },
    {
      id: 2,
      title: "Global Standards",
      description: "International quality standards with cutting-edge technologies and best practices",
      icon: "Globe",
      stats: "ISO 9001 Certified",
      benefits: [
        "Latest technology stack",
        "Industry best practices",
        "Quality assurance",
        "Scalable solutions"
      ]
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for uninterrupted operations",
      icon: "Clock",
      stats: "99.9% Uptime",
      benefits: [
        "Immediate response",
        "Proactive monitoring",
        "Regular maintenance",
        "Emergency support"
      ]
    },
    {
      id: 4,
      title: "Proven ROI",
      description: "Measurable business impact with transparent reporting and continuous optimization",
      icon: "TrendingUp",
      stats: "Average 250% ROI",
      benefits: [
        "Performance tracking",
        "Regular reporting",
        "Optimization strategies",
        "Growth metrics"
      ]
    }
  ];

  return (
    <>
      <section className="py-24 relative overflow-hidden bg-gray-50/70 dark:bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Distinctive Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
              Why Choose <span className="text-red-600 dark:text-red-500">Red Hand Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The perfect blend of local expertise and global excellence that drives real business results
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl p-7 bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-red-600/10 dark:hover:shadow-red-600/25 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
              >
                {/* Number Watermark */}
                <div className="absolute top-4 right-5 text-4xl font-black text-gray-200 dark:text-white/5 font-mono pointer-events-none group-hover:text-red-500/20 transition-colors">
                  0{index + 1}
                </div>

                <div>
                  {/* Feature Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center mb-6 shadow-md shadow-red-600/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon} size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlight Stat Pill */}
                  <div className="p-2.5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200/50 dark:border-red-500/20 mb-6">
                    <p className="text-red-600 dark:text-red-400 font-bold text-xs text-center tracking-wide">
                      {feature.stats}
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mr-2 flex-shrink-0">
                          <Icon name="Check" size={10} />
                        </div>
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Block */}
          <div className="mt-16">
            <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
                Ready to Transform Your Business?
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join 85+ successful businesses across Gujarat who trust Red Hand Solutions for their digital transformation journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto inline-flex items-center justify-center space-x-2"
                >
                  <Icon name="Calendar" size={18} />
                  <span>Get Free Consultation</span>
                </button>

                <Link to="/portfolio" className="w-full sm:w-auto">
                  <button className="border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-base transition-colors w-full sm:w-auto inline-flex items-center justify-center space-x-2">
                    <Icon name="Eye" size={18} />
                    <span>View Case Studies</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default WhyChooseUs;