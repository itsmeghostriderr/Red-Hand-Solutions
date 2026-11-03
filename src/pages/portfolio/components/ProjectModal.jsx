import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  Calendar, 
  Users, 
  ExternalLink, 
  AlertTriangle, 
  Lightbulb, 
  Settings, 
  Quote, 
  MessageSquare,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import Image from '../../../components/AppImage';

const ProjectModal = ({ project, isOpen, onClose, onRequestSimilar }) => {
  if (!isOpen || !project) return null;

  const formatMetric = (value, type) => {
    if (type === 'percentage') return `${value}%`;
    if (type === 'currency') return `₹${value} Lakhs`;
    if (type === 'time') return `${value} months`;
    if (type === 'rating') return `${value} / 5.0`;
    if (type === 'countries') return `${value}+ Countries`;
    return value?.toLocaleString ? value.toLocaleString() : value;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          onClick={onClose}
        />

        {/* Modal Window */}
        <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white dark:bg-[#0D0F18] border border-gray-200 dark:border-white/10 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-left"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white/95 dark:bg-[#0D0F18]/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 p-6 flex items-center justify-between z-20">
              <div className="min-w-0 pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    {project?.industry} • {project?.type}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white truncate">
                  {project?.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/[0.06] text-gray-500 hover:text-white hover:bg-red-600 flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Cover Banner */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-gray-950 border border-gray-200 dark:border-white/10">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="text-xs text-white/80 uppercase font-semibold tracking-wider block mb-1">
                      Client Organization
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {project?.client}
                    </h3>
                  </div>

                  {project?.hasLiveDemo && (
                    <button
                      onClick={() => onRequestSimilar(project)}
                      className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center gap-1.5 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" /> Schedule Live Demo
                    </button>
                  )}
                </div>
              </div>

              {/* Main Grid: Narrative + Meta Sidebar */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-7">
                  {/* Executive Overview */}
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                      Executive Summary
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {project?.fullDescription}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                    <h4 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 shrink-0" /> The Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project?.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <h4 className="text-sm font-bold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 shrink-0" /> Our Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project?.solution}
                    </p>
                  </div>

                  {/* Implementation Steps */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Settings className="w-4 h-4 text-red-500" /> Implementation Roadmap
                    </h4>
                    <div className="space-y-2.5">
                      {project?.implementationSteps?.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar Specs */}
                <div className="lg:col-span-4 space-y-5">
                  {/* Quick Metadata Box */}
                  <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 space-y-3.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Project Specifications
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-gray-200/50 dark:border-white/5">
                        <span className="text-gray-500">Timeline:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{project?.timeline}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-gray-200/50 dark:border-white/5">
                        <span className="text-gray-500">Team Size:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{project?.teamSize} engineers</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-500">Status:</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 capitalize">{project?.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                      Measurable Results
                    </h4>
                    <div className="space-y-3">
                      {project?.metrics?.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white dark:bg-[#12141D] border border-gray-200/60 dark:border-white/5 text-center">
                          <div className="text-xl font-extrabold text-red-600 dark:text-red-400">
                            {formatMetric(m?.value, m?.type)}
                          </div>
                          <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                            {m?.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                      Stack Deployed
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project?.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs rounded-lg bg-white dark:bg-white/[0.06] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/5 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Testimonial Quote */}
              {project?.testimonial && (
                <div className="p-6 rounded-2xl bg-gradient-to-r from-red-600/10 via-red-500/5 to-transparent border border-red-500/20 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Quote className="w-6 h-6" />
                  </div>
                  <div>
                    <blockquote className="text-sm sm:text-base italic text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
                      "{project.testimonial.content}"
                    </blockquote>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">
                      {project.testimonial.author}
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {project.testimonial.position}
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom CTAs */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onRequestSimilar(project)}
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Request A Similar Project
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/[0.12] text-gray-800 dark:text-gray-200 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;