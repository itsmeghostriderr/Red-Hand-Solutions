import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Calendar, 
  FileText, 
  MessageSquare, 
  ExternalLink, 
  Eye, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import Image from '../../../components/AppImage';

const ProjectCard = ({ project, onViewDetails, onRequestSimilar }) => {
  const formatMetric = (value, type) => {
    if (type === 'percentage') return `${value}%`;
    if (type === 'currency') return `₹${value}L`;
    if (type === 'time') return `${value} mo`;
    if (type === 'rating') return `${value} ★`;
    if (type === 'countries') return `${value}+ Countries`;
    return value?.toLocaleString ? value.toLocaleString() : value;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="group rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 hover:border-red-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 text-left"
    >
      <div>
        {/* Project Thumbnail Container */}
        <div className="relative h-52 overflow-hidden bg-gray-900">
          <Image
            src={project?.image}
            alt={project?.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06070B] via-black/30 to-transparent opacity-80" />

          {/* Type Badge */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-black/70 text-gray-900 dark:text-white backdrop-blur-md shadow-md border border-white/20">
              {project?.type?.replace('-', ' ')}
            </span>
          </div>

          {/* Live Status Badge */}
          {project?.hasLiveDemo && (
            <div className="absolute top-3.5 right-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Live Demo
              </span>
            </div>
          )}

          {/* Hover Quick Action Pill */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => onViewDetails(project)}
              className="px-3 py-1.5 rounded-xl bg-white/90 text-gray-900 text-xs font-bold backdrop-blur-md hover:bg-white shadow-lg flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-red-600" /> Quick View
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 
            onClick={() => onViewDetails(project)}
            className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 cursor-pointer transition-colors"
          >
            {project?.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed mb-4">
            {project?.description}
          </p>

          {/* Client & Industry Badge */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-gray-900 dark:text-white truncate">
                {project?.client}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
                {project?.industry}
              </p>
            </div>
          </div>

          {/* Metrics Preview */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project?.metrics?.slice(0, 2)?.map((metric, idx) => (
              <div 
                key={idx}
                className="p-2.5 rounded-xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 text-center"
              >
                <div className="text-sm font-extrabold text-red-600 dark:text-red-400">
                  {formatMetric(metric?.value, metric?.type)}
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">
                  {metric?.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project?.technologies?.slice(0, 4)?.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.06] text-gray-700 dark:text-gray-300 text-[11px] font-medium"
              >
                {tech}
              </span>
            ))}
            {project?.technologies?.length > 4 && (
              <span className="px-2 py-0.5 rounded-md bg-red-500/10 text-red-600 dark:text-red-400 text-[11px] font-bold">
                +{project?.technologies?.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-white/5 flex items-center gap-2">
        <button
          onClick={() => onViewDetails(project)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/[0.12] text-gray-800 dark:text-gray-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
        >
          <FileText className="w-3.5 h-3.5 text-red-500" /> Case Study
        </button>

        <button
          onClick={() => onRequestSimilar(project)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" /> Request Similar
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;