import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ConsultationModal from '../../../components/ConsultationModal';

const ContactHero = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Ambient Red Atmospheric Glows (Synapse & Selene style) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-red-600/15 dark:bg-red-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-12 -left-20 w-80 h-80 bg-red-500/10 dark:bg-red-500/15 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-red-600/10 dark:bg-red-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 dark:bg-red-500/15 backdrop-blur-md mb-6 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <Icon name="Zap" size={16} className="text-red-600 dark:text-red-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-red-600 dark:text-red-300">
                Free Consultation Available
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15]">
              Let's Transform Your{' '}
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-rose-400 bg-clip-text text-transparent">
                Digital Vision
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to elevate your business with cutting-edge technology? Our expert team in Rajkot is here to guide you through every step of your digital transformation journey.
            </p>

            {/* Stats Cards - Glassmorphism Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
              {[
                { value: "24h", label: "Response Time", icon: "Clock" },
                { value: "500+", label: "Projects Delivered", icon: "CheckCircle" },
                { value: "98%", label: "Client Satisfaction", icon: "Smile" },
                { value: "5+", label: "Years Experience", icon: "Award" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/[0.03] dark:shadow-red-950/10 group hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-red-600 dark:text-red-500 font-heading mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold shadow-lg shadow-red-600/30 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                onClick={() => setIsConsultationOpen(true)}
              >
                <span>Schedule Free Consultation</span>
              </Button>
              <a
                href="tel:+916352412728"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl font-semibold border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/[0.05] text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 shadow-sm"
              >
                <Icon name="Phone" size={18} className="text-red-600 dark:text-red-400" />
                <span>Call Now: +91 6352412728</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 pt-8 border-t border-slate-200/80 dark:border-white/10">
              {[
                { icon: "Shield", text: "100% Secure" },
                { icon: "Clock", text: "Quick Response" },
                { icon: "Award", text: "Certified Experts" },
                { icon: "MapPin", text: "Rajkot Based" }
              ].map((item) => (
                <div key={item.text} className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 text-sm font-medium">
                  <Icon name={item.icon} size={16} className="text-red-600 dark:text-red-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService="Digital Transformation"
      />
    </>
  );
};

export default ContactHero;