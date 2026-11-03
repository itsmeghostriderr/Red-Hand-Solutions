import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, Sparkles, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import ConsultationModal from '../../../components/ConsultationModal';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    serviceType: 'web-development',
    businessSize: 'small',
    currentRevenue: '5000000',
    projectBudget: '350000',
    timeframe: '12'
  });
  
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'cloud-solutions', label: 'Cloud Solutions' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'it-consulting', label: 'IT Consulting' }
  ];

  const businessSizeOptions = [
    { value: 'startup', label: 'Startup (1-10 employees)' },
    { value: 'small', label: 'Small Business (11-50 employees)' },
    { value: 'medium', label: 'Medium Business (51-200 employees)' },
    { value: 'large', label: 'Large Enterprise (200+ employees)' }
  ];

  const timeframeOptions = [
    { value: '6', label: '6 months' },
    { value: '12', label: '1 year' },
    { value: '24', label: '2 years' },
    { value: '36', label: '3 years' }
  ];

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const revenue = parseFloat(formData?.currentRevenue) || 0;
      const budget = parseFloat(formData?.projectBudget) || 1;
      const months = parseInt(formData?.timeframe) || 12;
      
      const multipliers = {
        'web-development': { startup: 2.5, small: 3.2, medium: 4.1, large: 5.0 },
        'mobile-app': { startup: 3.0, small: 3.8, medium: 4.5, large: 5.5 },
        'cloud-solutions': { startup: 2.2, small: 2.8, medium: 3.5, large: 4.2 },
        'digital-marketing': { startup: 3.5, small: 4.2, medium: 5.0, large: 6.0 },
        'it-consulting': { startup: 2.0, small: 2.5, medium: 3.0, large: 3.8 }
      };
      
      const multiplier = multipliers?.[formData?.serviceType]?.[formData?.businessSize] || 2.5;
      const monthlyIncrease = (revenue * 0.15 * multiplier) / 12;
      const totalIncrease = monthlyIncrease * months;
      const roi = ((totalIncrease - budget) / budget) * 100;
      const paybackPeriod = budget / (monthlyIncrease || 1);
      
      setResults({
        totalIncrease: Math.round(totalIncrease),
        monthlyIncrease: Math.round(monthlyIncrease),
        roi: Math.round(roi),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        projectedRevenue: Math.round(revenue + totalIncrease)
      });
      
      setIsCalculating(false);
    }, 600);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = Object.values(formData).every(value => value !== '');

  return (
    <div className="relative rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Calculator className="w-4 h-4" /> Interactive Decision Engine
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          ROI <span className="text-red-600 dark:text-red-500">Calculator</span>
        </h3>
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Calculate your potential return on investment and business scale projection with Red Hand Solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Inputs */}
        <div className="lg:col-span-6 space-y-5 bg-white/60 dark:bg-white/[0.03] p-6 sm:p-8 rounded-2xl border border-gray-200/80 dark:border-white/10">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
              Service Type
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => handleInputChange('serviceType', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-medium"
            >
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#10121A]">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
              Business Size
            </label>
            <select
              value={formData.businessSize}
              onChange={(e) => handleInputChange('businessSize', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-medium"
            >
              {businessSizeOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#10121A]">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                Current Annual Revenue (₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 5000000"
                value={formData.currentRevenue}
                onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                Project Budget (₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 350000"
                value={formData.projectBudget}
                onChange={(e) => handleInputChange('projectBudget', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
              ROI Timeframe
            </label>
            <select
              value={formData.timeframe}
              onChange={(e) => handleInputChange('timeframe', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-medium"
            >
              {timeframeOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#10121A]">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={calculateROI}
            disabled={!isFormValid || isCalculating}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:opacity-50 text-white font-bold text-sm tracking-wide shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-2"
          >
            {isCalculating ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Calculating Projection...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Calculate Projected ROI
              </span>
            )}
          </button>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-6 bg-white/70 dark:bg-white/[0.04] p-6 sm:p-8 rounded-2xl border border-gray-200/80 dark:border-white/10 h-full flex flex-col justify-between">
          {results ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                  Your ROI Projection
                </h4>
                <span className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-semibold">
                  Verified Model
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    +{results.roi}%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-medium">
                    Projected ROI
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                  <div className="text-3xl font-extrabold text-red-600 dark:text-red-400">
                    {results.paybackPeriod} Mo
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-medium">
                    Payback Period
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Monthly Revenue Increase
                  </span>
                  <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    ₹{results.monthlyIncrease.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Total Incremental Revenue
                  </span>
                  <span className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">
                    ₹{results.totalIncrease.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Projected Gross Revenue
                  </span>
                  <span className="text-sm sm:text-base font-bold text-red-600 dark:text-red-400">
                    ₹{results.projectedRevenue.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-700 dark:text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                <p>
                  Calculations reflect benchmarks across 200+ Gujarat implementations. Actual returns vary by execution and market reach.
                </p>
              </div>

              <button
                onClick={() => setIsConsultOpen(true)}
                className="w-full py-3.5 rounded-xl bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                Claim This ROI Plan <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/20 border border-red-500/20 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Ready to Forecast Your Growth?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-sm mb-6">
                Adjust the revenue and budget figures on the left to view customized ROI timeline and revenue expansion.
              </p>
              <button
                onClick={calculateROI}
                className="px-6 py-2.5 rounded-xl bg-red-600/10 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white border border-red-500/30 font-semibold text-xs transition-all"
              >
                Run Quick Demo Projection
              </button>
            </div>
          )}
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService="ROI Growth Strategy"
      />
    </div>
  );
};

export default ROICalculator;