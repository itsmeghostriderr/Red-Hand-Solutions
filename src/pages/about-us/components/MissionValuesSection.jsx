import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import ConsultationModal from '../../../components/ConsultationModal';

const MissionValuesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const missionData = {
    title: "Our Mission",
    description: "Empowering businesses through innovative technology solutions",
    content: `At Red Hand Solutions, we believe that technology should be an enabler, not a barrier. Our mission is to democratize access to cutting-edge technology solutions for businesses across Gujarat and beyond.\n\nWe strive to bridge the gap between complex technology and practical business needs, ensuring that every client—from startups to enterprises—can leverage the power of digital transformation to achieve their goals.\n\nOur commitment extends beyond just delivering solutions; we aim to be long-term partners in our clients' success stories, providing ongoing support, innovation, and strategic guidance.`,
    icon: "Target"
  };

  const values = [
    {
      title: "Innovation",
      description: "Embracing cutting-edge technologies to deliver solutions that drive business growth and competitive advantage.",
      icon: "Lightbulb",
      features: [
        "Latest technology adoption",
        "Creative problem-solving",
        "Continuous learning culture",
        "R&D investment"
      ]
    },
    {
      title: "Reliability",
      description: "Building trust through consistent delivery, transparent communication, and unwavering commitment to quality.",
      icon: "Shield",
      features: [
        "98% client satisfaction",
        "On-time project delivery",
        "24/7 technical support",
        "Quality assurance processes"
      ]
    },
    {
      title: "Partnership",
      description: "Fostering long-term relationships based on mutual respect, collaboration, and shared success.",
      icon: "Handshake",
      features: [
        "Collaborative approach",
        "Client-centric solutions",
        "Long-term relationships",
        "Strategic consulting"
      ]
    },
    {
      title: "Growth",
      description: "Driving sustainable growth for our clients, our team, and the broader Gujarat tech ecosystem.",
      icon: "TrendingUp",
      features: [
        "Scalable solutions",
        "Team development",
        "Market expansion",
        "Community contribution"
      ]
    }
  ];

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mission Statement Hero Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-24"
          >
            <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white border border-red-600/30 shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-rose-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-600/40">
                    <Icon name={missionData.icon} size={26} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-red-400">Guiding Purpose</span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white">{missionData.title}</h2>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-400 via-rose-300 to-white bg-clip-text text-transparent">
                  {missionData.description}
                </h3>

                <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                  {missionData.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Uncompromising Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
              Our Core <span className="text-red-600 dark:text-red-500">Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide every decision we make and every solution we deliver, ensuring we stay true to our commitment to excellence.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl p-7 bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-red-600/15 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 text-left"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center mb-6 shadow-md shadow-red-600/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={value.icon} size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {value.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-gray-100 dark:border-white/5">
                    {value.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2.5 text-xs text-gray-700 dark:text-gray-300 font-medium">
                        <div className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
                Ready to Experience Our Values in Action?
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our mission-driven approach can transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <Icon name="Calendar" size={18} />
                  <span>Schedule Consultation</span>
                </button>
                <button
                  onClick={() => {
                    alert("Downloading Red Hand Solutions Company Profile PDF...");
                  }}
                  className="border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-base transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <Icon name="Download" size={18} />
                  <span>Download Company Profile</span>
                </button>
              </div>
            </div>
          </motion.div>
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

export default MissionValuesSection;