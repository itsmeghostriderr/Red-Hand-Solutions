import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  Palette, 
  Code, 
  Shield, 
  Rocket, 
  Settings, 
  ChevronRight, 
  ChevronLeft, 
  FileText, 
  Calendar, 
  Download, 
  Sparkles,
  CheckCircle2,
  GitBranch
} from 'lucide-react';
import ConsultationModal from '../../../components/ConsultationModal';

const iconMap = {
  Lightbulb,
  Palette,
  Code,
  Shield,
  Rocket,
  Settings
};

const DevelopmentProcessSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const processPhases = [
    {
      id: 'ideation',
      title: 'Ideation & Strategy',
      duration: '1-2 weeks',
      description: 'We start by understanding your business goals, target audience, and market requirements to create a comprehensive app strategy.',
      activities: [
        'Business requirement analysis',
        'Market research & competitor analysis',
        'Target audience identification',
        'Feature prioritization',
        'Technical feasibility study',
        'Project roadmap creation'
      ],
      deliverables: [
        'Project Requirements Document',
        'Market Analysis Report',
        'Technical Architecture Plan',
        'Project Timeline & Milestones'
      ],
      icon: 'Lightbulb'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      duration: '2-4 weeks',
      description: 'Our design team creates intuitive and engaging user experiences that align with your brand and user expectations.',
      activities: [
        'User persona development',
        'Information architecture',
        'Wireframing & prototyping',
        'Visual design creation',
        'Design system development',
        'Usability testing'
      ],
      deliverables: [
        'User Journey Maps',
        'Interactive Prototypes',
        'Visual Design Mockups',
        'Design System Guidelines'
      ],
      icon: 'Palette'
    },
    {
      id: 'development',
      title: 'Development Sprints',
      duration: '6-12 weeks',
      description: 'Agile development approach with regular sprints, ensuring transparency and flexibility throughout the development process.',
      activities: [
        'Sprint planning & setup',
        'Frontend development',
        'Backend API development',
        'Database design & implementation',
        'Third-party integrations',
        'Code reviews & optimization'
      ],
      deliverables: [
        'Working App Builds',
        'API Documentation',
        'Database Schema',
        'Integration Reports'
      ],
      icon: 'Code'
    },
    {
      id: 'testing',
      title: 'Testing & QA',
      duration: '2-3 weeks',
      description: 'Comprehensive testing across devices, platforms, and scenarios to ensure your app performs flawlessly.',
      activities: [
        'Functional testing',
        'Performance testing',
        'Security testing',
        'Device compatibility testing',
        'User acceptance testing',
        'Bug fixing & optimization'
      ],
      deliverables: [
        'Test Reports',
        'Performance Metrics',
        'Security Audit Report',
        'Device Compatibility Matrix'
      ],
      icon: 'Shield'
    },
    {
      id: 'deployment',
      title: 'App Store Submission',
      duration: '1-2 weeks',
      description: 'We handle the complete app store submission process, ensuring compliance with guidelines and optimal store presence.',
      activities: [
        'App store preparation',
        'Metadata optimization',
        'Screenshot & video creation',
        'App store submission',
        'Review process management',
        'Launch coordination'
      ],
      deliverables: [
        'App Store Listings',
        'Launch Strategy',
        'Marketing Assets',
        'Post-Launch Support Plan'
      ],
      icon: 'Rocket'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      duration: 'Ongoing',
      description: 'Continuous support and maintenance to keep your app updated, secure, and performing at its best.',
      activities: [
        'Performance monitoring',
        'Bug fixes & updates',
        'OS compatibility updates',
        'Security patches',
        'Feature enhancements',
        'Analytics & reporting'
      ],
      deliverables: [
        'Monthly Performance Reports',
        'Update Releases',
        'Security Reports',
        'Enhancement Recommendations'
      ],
      icon: 'Settings'
    }
  ];

  const handleDownloadGuide = () => {
    const text = [
      'RED HAND SOLUTIONS - APP DEVELOPMENT PROCESS GUIDE',
      '===================================================\n',
      ...processPhases.map((p, idx) => 
        `PHASE ${idx + 1}: ${p.title} (${p.duration})\n${p.description}\n\nACTIVITIES:\n${p.activities.map(a => ` - ${a}`).join('\n')}\n\nDELIVERABLES:\n${p.deliverables.map(d => ` - ${d}`).join('\n')}\n` +
        '---------------------------------------------------\n'
      ),
      'Contact: +91 6352412728 | redhand.solution@gmail.com | Rajkot, Gujarat'
    ].join('\n');

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Red-Hand-Solutions-Development-Guide.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentPhase = processPhases[activePhase];
  const CurrentIcon = iconMap[currentPhase.icon] || Code;

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GitBranch className="w-4 h-4" /> 6-Stage Agile Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Our Proven <br />
            <span className="text-red-600 dark:text-red-500">Development Methodology</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            We follow a structured, agile approach to mobile app development, ensuring transparency, quality, and timely delivery at every stage.
          </p>
        </div>

        {/* Phase Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {processPhases.map((phase, idx) => {
            const IconComp = iconMap[phase.icon] || Code;
            const isSelected = activePhase === idx;

            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center gap-2 ${
                  isSelected
                    ? 'border-red-500 bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'glass-card border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-red-500/40'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white/20' : 'bg-gray-100 dark:bg-white/[0.06]'}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-1">{phase.title}</span>
                <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>{phase.duration}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Phase Inspection Box */}
        <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 shadow-2xl text-left mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-white/10 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 flex items-center justify-center">
                <CurrentIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                  Phase {activePhase + 1} of 6 • {currentPhase.duration}
                </span>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                  {currentPhase.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                disabled={activePhase === 0}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/[0.12] disabled:opacity-30 transition-colors"
                title="Previous Phase"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActivePhase(Math.min(processPhases.length - 1, activePhase + 1))}
                disabled={activePhase === processPhases.length - 1}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/[0.12] disabled:opacity-30 transition-colors"
                title="Next Phase"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {currentPhase.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Activities */}
            <div className="p-6 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-2">
                Sprint Activities
              </h4>
              {currentPhase.activities.map((act, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>{act}</span>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <div className="p-6 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-2">
                Signed Deliverables
              </h4>
              {currentPhase.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                  <FileText className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-medium">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl glass-card border border-red-500/30 p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            Ready to Start Your App Development Journey?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
            Let's discuss your project requirements and create a customized development plan that fits your timeline and budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsConsultOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Schedule Strategy Session
            </button>
            <button
              onClick={handleDownloadGuide}
              className="px-8 py-3.5 rounded-xl bg-white dark:bg-white/[0.06] hover:bg-gray-100 dark:hover:bg-white/[0.12] text-gray-800 dark:text-gray-200 font-bold text-xs uppercase tracking-wider border border-gray-200 dark:border-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-red-500" /> Download Process Guide (.txt)
            </button>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={`App Development Strategy (${currentPhase.title})`}
      />
    </>
  );
};

export default DevelopmentProcessSection;