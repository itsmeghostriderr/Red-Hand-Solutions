import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Tag, 
  ChevronDown 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationModal from '../../../components/ConsultationModal';

const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  Cloud: Cloud,
  TrendingUp: TrendingUp,
  Users: Users,
};

const ServiceCard = ({ service, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const IconComponent = iconMap[service?.icon] || Globe;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 hover:border-red-500/50 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 text-left"
      >
        {/* Soft background ambient glow */}
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-red-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-red-500/20 transition-all duration-500" />

        <div>
          {/* Header Row: Icon + Popular Badge */}
          <div className="flex items-start justify-between mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/20 dark:from-red-500/20 dark:to-red-600/30 border border-red-500/30 flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-md">
              <IconComponent className="w-7 h-7" />
            </div>

            {service?.isPopular && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white shadow-md shadow-red-500/30 animate-pulse">
                <Sparkles className="w-3 h-3" /> Popular Choice
              </span>
            )}
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
            {service?.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {service?.description}
          </p>

          {/* Key Deliverables / Features List */}
          <div className="mb-6 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service?.features?.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Chips */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service?.technologies?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-lg bg-gray-100 dark:bg-white/[0.06] text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/5 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Recent Success Highlight */}
          {service?.recentSuccess && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 text-xs text-gray-800 dark:text-gray-200">
              <span className="font-semibold text-red-600 dark:text-red-400 block mb-0.5">
                ★ Recent Impact:
              </span>
              {service?.recentSuccess}
            </div>
          )}
        </div>

        {/* Card Footer: Metrics & Actions */}
        <div className="pt-4 border-t border-gray-100 dark:border-white/10 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 mb-1">
                <Clock className="w-3 h-3 text-red-500" /> Timeline
              </div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">
                {service?.timeline}
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 mb-1">
                <Tag className="w-3 h-3 text-red-500" /> Starting From
              </div>
              <div className="text-sm font-bold text-red-600 dark:text-red-400">
                ₹{service?.startingPrice}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsConsultOpen(true)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-semibold shadow-md shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-200"
            >
              Consult Free <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('roi-calculator-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3.5 py-2.5 rounded-xl bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/[0.12] text-gray-700 dark:text-gray-200 text-xs font-semibold transition-colors flex items-center gap-1.5"
              title="Estimate ROI"
            >
              <Calculator className="w-3.5 h-3.5 text-red-500" />
              <span>ROI</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Working Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={service?.title}
      />
    </>
  );
};

export default ServiceCard;