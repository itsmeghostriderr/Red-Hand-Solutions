import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ConsultationModal from '../../../components/ConsultationModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    {
      value: "150+",
      label: "Projects Completed",
      subtext: "Delivered across Gujarat & global markets",
      icon: "CheckCircle",
    },
    {
      value: "85+",
      label: "Happy Clients",
      subtext: "Long-term regional partnerships",
      icon: "Users",
    },
    {
      value: "8+",
      label: "Years in Gujarat",
      subtext: "Headquartered proudly in Rajkot",
      icon: "Award",
    }
  ];

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Ambient Red Glow Backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 dark:bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-rose-500/10 dark:bg-red-900/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Regional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-red-600/10 dark:bg-red-500/15 border border-red-600/25 dark:border-red-500/30 text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Gujarat's Premier Digital Catalyst · Based in Rajkot</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                <span className="block">Your Success,</span>
                <span className="block bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-clip-text text-transparent">
                  Our Innovation
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed pt-3 font-normal">
                Gujarat's premier digital transformation catalyst, delivering cutting-edge solutions with local understanding and global standards.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-xl shadow-red-600/35 hover:shadow-red-600/55 px-8 py-4 text-base sm:text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                iconName="Rocket"
                iconPosition="left"
                iconSize={20}
                onClick={() => setIsModalOpen(true)}
              >
                Start Your Digital Journey
              </Button>

              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 px-8 py-4 text-base sm:text-lg font-bold rounded-2xl transition-all duration-300 backdrop-blur-md"
                  iconName="TrendingUp"
                  iconPosition="left"
                  iconSize={20}
                >
                  View Our Impact
                </Button>
              </Link>
            </motion.div>

            {/* Assembling Stats Cards (Synapse Floating Glassmorphic Cards) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-6 sm:p-7 rounded-3xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-red-950/20 hover:border-red-500/40 dark:hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-xl group-hover:bg-red-600/15 transition-colors" />
                  <div className="text-left space-y-1.5 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl sm:text-5xl font-black text-red-600 dark:text-red-500 tracking-tight font-mono">
                        {stat.value}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center">
                        <Icon name={stat.icon} size={20} />
                      </div>
                    </div>
                    <div className="text-base font-bold text-gray-900 dark:text-white">
                      {stat.label}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                      {stat.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll to Explore Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-16 flex flex-col items-center justify-center space-y-2"
          >
            <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-semibold">
              Scroll to explore
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-gray-400/60 dark:border-white/20 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-1.5 h-2.5 rounded-full bg-red-600"
              />
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

export default HeroSection;