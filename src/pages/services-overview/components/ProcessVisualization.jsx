import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Target, 
  Palette, 
  Code, 
  Rocket, 
  Shield, 
  CheckCircle2, 
  Clock, 
  Sparkles 
} from 'lucide-react';

const iconMap = {
  Search,
  Target,
  Palette,
  Code,
  Rocket,
  Shield,
};

const ProcessVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Consultation",
      description: "We analyze your business needs, goals, and technical requirements through detailed consultation sessions.",
      icon: "Search",
      duration: "1-2 weeks",
      deliverables: ["Requirements Document", "Technical Specification", "Project Roadmap"]
    },
    {
      id: 2,
      title: "Strategy & Planning",
      description: "Our team creates a comprehensive strategy with timeline, resource allocation, and technology stack selection.",
      icon: "Target",
      duration: "1 week",
      deliverables: ["Project Plan", "Architecture Design", "Resource Allocation"]
    },
    {
      id: 3,
      title: "Design & Prototyping",
      description: "We create wireframes, mockups, and interactive prototypes to visualize the final solution.",
      icon: "Palette",
      duration: "2-3 weeks",
      deliverables: ["UI/UX Design", "Interactive Prototype", "Design System"]
    },
    {
      id: 4,
      title: "Development & Testing",
      description: "Our developers build your solution using agile methodology with continuous testing and quality assurance.",
      icon: "Code",
      duration: "4-12 weeks",
      deliverables: ["Working Solution", "Test Reports", "Documentation"]
    },
    {
      id: 5,
      title: "Deployment & Launch",
      description: "We deploy your solution to production environment with proper monitoring and performance optimization.",
      icon: "Rocket",
      duration: "1 week",
      deliverables: ["Live Application", "Deployment Guide", "Performance Report"]
    },
    {
      id: 6,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to ensure your solution continues to perform optimally.",
      icon: "Shield",
      duration: "Ongoing",
      deliverables: ["24/7 Support", "Regular Updates", "Performance Monitoring"]
    }
  ];

  return (
    <div className="relative rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4" /> Agile Execution Methodology
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Our Proven <span className="text-red-600 dark:text-red-500">Process</span>
        </h3>
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          From consultation to delivery and continuous optimization, here is how we bring your vision to life.
        </p>
      </div>

      {/* Desktop Step Navigation */}
      <div className="hidden lg:block mb-10">
        <div className="relative">
          {/* Progress track */}
          <div className="absolute top-7 left-8 right-8 h-1 bg-gray-200 dark:bg-white/10 rounded-full -z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
              initial={false}
              animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="grid grid-cols-6 gap-3 relative z-10">
            {processSteps.map((step, idx) => {
              const IconComp = iconMap[step.icon] || Code;
              const isPassed = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="group flex flex-col items-center text-center focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                      isCurrent
                        ? 'bg-red-600 border-red-400 text-white shadow-lg shadow-red-600/40 scale-110'
                        : isPassed
                        ? 'bg-red-500/10 dark:bg-red-950/40 border-red-500/40 text-red-600 dark:text-red-400'
                        : 'bg-white dark:bg-[#10121A] border-gray-200 dark:border-white/10 text-gray-400 hover:border-red-500/40'
                    }`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span
                    className={`mt-4 text-xs font-bold leading-tight max-w-[120px] transition-colors ${
                      isCurrent
                        ? 'text-red-600 dark:text-red-400'
                        : 'text-gray-700 dark:text-gray-300 group-hover:text-red-500'
                    }`}
                  >
                    {step.title}
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-red-500" /> {step.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Expanded Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-12 p-8 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase mb-3">
                  Step {processSteps[activeStep].id} • {processSteps[activeStep].duration}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {processSteps[activeStep].title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {processSteps[activeStep].description}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-white/[0.02] p-6 rounded-xl border border-gray-200/60 dark:border-white/5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-4">
                  Guaranteed Deliverables
                </h5>
                <div className="space-y-3">
                  {processSteps[activeStep].deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm text-gray-800 dark:text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Stacked List */}
      <div className="lg:hidden space-y-4 text-left">
        {processSteps.map((step, idx) => {
          const IconComp = iconMap[step.icon] || Code;
          const isSelected = idx === activeStep;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-red-500 bg-red-500/5 dark:bg-red-950/20'
                  : 'border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? 'bg-red-600 border-red-500 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-white/[0.05] border-gray-200 dark:border-white/10 text-gray-500'
                  }`}
                >
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h4>
                    <span className="text-xs text-red-600 dark:text-red-400 font-semibold">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((d, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.06] text-gray-700 dark:text-gray-300 text-[11px] font-medium"
                      >
                        ✓ {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessVisualization;