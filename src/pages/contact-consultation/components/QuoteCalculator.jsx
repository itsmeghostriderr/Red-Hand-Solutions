import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import ConsultationModal from '../../../components/ConsultationModal';

const QuoteCalculator = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    projectType: 'web-app',
    complexity: 'intermediate',
    features: ['cms', 'payment-gateway', 'user-auth', 'mobile-responsive'],
    timeline: '2-3-months',
    support: 'standard'
  });

  const [estimatedCost, setEstimatedCost] = useState({
    min: 0,
    max: 0,
    timeline: '',
    breakdown: []
  });

  const [showResults, setShowResults] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const projectTypes = [
    { value: 'website', label: 'Business Website', basePrice: 25000 },
    { value: 'ecommerce', label: 'E-commerce Store', basePrice: 75000 },
    { value: 'web-app', label: 'Web Application', basePrice: 150000 },
    { value: 'mobile-app', label: 'Mobile App', basePrice: 200000 },
    { value: 'custom-software', label: 'Custom Software', basePrice: 300000 }
  ];

  const complexityLevels = [
    { value: 'basic', label: 'Basic', multiplier: 1 },
    { value: 'intermediate', label: 'Intermediate', multiplier: 1.5 },
    { value: 'advanced', label: 'Advanced', multiplier: 2.2 },
    { value: 'enterprise', label: 'Enterprise', multiplier: 3 }
  ];

  const additionalFeatures = [
    { value: 'cms', label: 'Content Management System', price: 15000 },
    { value: 'payment-gateway', label: 'Payment Gateway Integration', price: 20000 },
    { value: 'user-auth', label: 'User Authentication System', price: 25000 },
    { value: 'api-integration', label: 'Third-party API Integration', price: 30000 },
    { value: 'admin-panel', label: 'Admin Dashboard', price: 35000 },
    { value: 'mobile-responsive', label: 'Mobile Responsive Design', price: 10000 },
    { value: 'seo-optimization', label: 'SEO Optimization', price: 15000 },
    { value: 'analytics', label: 'Analytics Integration', price: 8000 },
    { value: 'social-login', label: 'Social Media Login', price: 12000 },
    { value: 'multi-language', label: 'Multi-language Support', price: 25000 }
  ];

  const timelines = [
    { value: '1-month', label: '1 Month (Rush)', multiplier: 1.3 },
    { value: '2-3-months', label: '2-3 Months (Standard)', multiplier: 1 },
    { value: '3-6-months', label: '3-6 Months (Relaxed)', multiplier: 0.9 },
    { value: '6-months+', label: '6+ Months (Extended)', multiplier: 0.8 }
  ];

  const supportOptions = [
    { value: 'basic', label: '3 Months Basic Support', price: 5000 },
    { value: 'standard', label: '6 Months Standard Support', price: 12000 },
    { value: 'premium', label: '12 Months Premium Support', price: 25000 },
    { value: 'enterprise', label: '24/7 Enterprise Support', price: 50000 }
  ];

  const handleSelectChange = (field, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (featureValue) => {
    setSelectedOptions(prev => ({
      ...prev,
      features: prev?.features?.includes(featureValue)
        ? prev?.features?.filter(f => f !== featureValue)
        : [...prev?.features, featureValue]
    }));
  };

  const calculateEstimate = () => {
    if (!selectedOptions?.projectType || !selectedOptions?.complexity) {
      return;
    }

    const projectType = projectTypes?.find(p => p?.value === selectedOptions?.projectType);
    const complexity = complexityLevels?.find(c => c?.value === selectedOptions?.complexity);
    const timeline = timelines?.find(t => t?.value === selectedOptions?.timeline) || { multiplier: 1, label: 'Standard' };
    const support = supportOptions?.find(s => s?.value === selectedOptions?.support) || { price: 0, label: 'None' };

    let basePrice = projectType?.basePrice * complexity?.multiplier;
    
    // Add features cost
    const featuresPrice = selectedOptions?.features?.reduce((total, featureValue) => {
      const feature = additionalFeatures?.find(f => f?.value === featureValue);
      return total + (feature ? feature?.price : 0);
    }, 0);

    // Apply timeline multiplier
    const timelineAdjustedPrice = (basePrice + featuresPrice) * timeline?.multiplier;
    
    // Add support cost
    const totalPrice = timelineAdjustedPrice + support?.price;

    // Calculate range (±20%)
    const minPrice = Math.round(totalPrice * 0.8);
    const maxPrice = Math.round(totalPrice * 1.2);

    // Create breakdown
    const breakdown = [
      { item: `${projectType?.label} (${complexity?.label})`, cost: Math.round(basePrice) },
      ...(featuresPrice > 0 ? [{ item: `Additional Features (${selectedOptions?.features?.length})`, cost: featuresPrice }] : []),
      ...(timeline?.multiplier !== 1 ? [{ item: `Timeline Adjustment (${timeline?.label})`, cost: Math.round((basePrice + featuresPrice) * (timeline?.multiplier - 1)) }] : []),
      ...(support?.price > 0 ? [{ item: support?.label, cost: support?.price }] : [])
    ];

    setEstimatedCost({
      min: minPrice,
      max: maxPrice,
      timeline: timeline?.label || '2-3 Months',
      breakdown
    });

    setShowResults(true);
  };

  useEffect(() => {
    calculateEstimate();
  }, [selectedOptions]);

  const resetCalculator = () => {
    setSelectedOptions({
      projectType: '',
      complexity: '',
      features: [],
      timeline: '',
      support: ''
    });
    setShowResults(false);
  };

  const handleDownloadEstimate = () => {
    const projectType = projectTypes?.find(p => p?.value === selectedOptions?.projectType)?.label || 'Custom Solution';
    const complexity = complexityLevels?.find(c => c?.value === selectedOptions?.complexity)?.label || 'Standard';
    const featuresList = selectedOptions?.features?.map(f => {
      const feat = additionalFeatures.find(item => item.value === f);
      return `  - ${feat?.label || f} (+₹${feat?.price?.toLocaleString() || 0})`;
    }).join('\n') || '  - None selected';

    const fileContent = `=====================================================
RED HAND SOLUTIONS - PROJECT ESTIMATE & SCOPE MATRIX
Generated: ${new Date().toLocaleString()}
Office: Rajkot, Gujarat, India | Contact: +91 6352412728
Email: redhand.solution@gmail.com
=====================================================

PROJECT OVERVIEW:
-----------------------------------------------------
Type:               ${projectType}
Complexity:         ${complexity}
Target Timeline:    ${estimatedCost.timeline}
Support Tier:       ${supportOptions.find(s => s.value === selectedOptions.support)?.label || 'None'}

SELECTED FEATURES:
-----------------------------------------------------
${featuresList}

COST ESTIMATE BREAKDOWN:
-----------------------------------------------------
${estimatedCost.breakdown.map(b => `${b.item.padEnd(40, ' ')} : ₹${b.cost.toLocaleString()}`).join('\n')}

ESTIMATED BUDGET RANGE:
-----------------------------------------------------
Min Estimated:      ₹${estimatedCost.min.toLocaleString()}
Max Estimated:      ₹${estimatedCost.max.toLocaleString()}

IMPORTANT NOTE:
This is an estimated price range computed using Red Hand Solutions'
standard rate index. Final pricing is finalized following technical 
discovery and requirement confirmation.

To schedule your free 30-min discovery call, visit:
https://calendly.com/redhand-solution/30min
=====================================================`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `RedHandSolutions_Estimate_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <>
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Icon name="Calculator" size={14} />
                <span>Instant Estimator</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                Project Cost{' '}
                <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                  Calculator
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Get an instant estimate for your project. Our transparent pricing helps you plan your budget with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Calculator Form */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-black/[0.02]">
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">
                    <Icon name="Calculator" size={18} />
                  </div>
                  Project Configuration
                </h3>

                <div className="space-y-6">
                  {/* Project Type */}
                  <Select
                    label="Project Type"
                    placeholder="Select your project type"
                    options={projectTypes?.map(p => ({ value: p?.value, label: `${p?.label} (from ₹${p?.basePrice.toLocaleString()})` }))}
                    value={selectedOptions?.projectType}
                    onChange={(value) => handleSelectChange('projectType', value)}
                    required
                  />

                  {/* Complexity */}
                  <Select
                    label="Complexity Level"
                    placeholder="Select complexity level"
                    options={complexityLevels?.map(c => ({ value: c?.value, label: `${c?.label} (${c?.multiplier}x multiplier)` }))}
                    value={selectedOptions?.complexity}
                    onChange={(value) => handleSelectChange('complexity', value)}
                    required
                  />

                  {/* Additional Features */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                      Additional Features
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {additionalFeatures?.map((feature) => {
                        const isChecked = selectedOptions?.features?.includes(feature?.value);
                        return (
                          <div
                            key={feature?.value}
                            onClick={() => handleFeatureToggle(feature?.value)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                              isChecked
                                ? 'border-red-500 bg-red-500/10 dark:bg-red-500/15 text-slate-900 dark:text-white shadow-sm'
                                : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-white/[0.01]'
                            }`}
                          >
                            <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                              <div className={`w-4 h-4 rounded flex items-center justify-center text-xs ${isChecked ? 'bg-red-600 text-white' : 'border border-slate-400 dark:border-slate-600'}`}>
                                {isChecked && <Icon name="Check" size={12} />}
                              </div>
                              <span className="text-xs sm:text-sm font-medium truncate">{feature?.label}</span>
                            </div>
                            <span className="text-xs font-mono font-semibold text-red-600 dark:text-red-400 shrink-0">
                              +₹{feature?.price?.toLocaleString()}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline */}
                  <Select
                    label="Project Timeline"
                    placeholder="Select timeline"
                    options={timelines?.map(t => ({ value: t?.value, label: t?.label }))}
                    value={selectedOptions?.timeline}
                    onChange={(value) => handleSelectChange('timeline', value)}
                  />

                  {/* Support */}
                  <Select
                    label="Support Package"
                    placeholder="Select support package"
                    options={supportOptions?.map(s => ({ value: s?.value, label: `${s?.label} (+₹${s?.price.toLocaleString()})` }))}
                    value={selectedOptions?.support}
                    onChange={(value) => handleSelectChange('support', value)}
                  />

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4 border-t border-slate-100 dark:border-white/5">
                    <Button
                      variant="outline"
                      onClick={resetCalculator}
                      iconName="RotateCcw"
                      iconPosition="left"
                      iconSize={16}
                      className="rounded-xl border-slate-300 dark:border-white/20"
                    >
                      Reset
                    </Button>
                    <Button
                      variant="default"
                      onClick={calculateEstimate}
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg shadow-red-600/30"
                      iconName="Calculator"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Recalculate
                    </Button>
                  </div>
                </div>
              </div>

              {/* Results Side */}
              <div className="lg:col-span-5 sticky top-28">
                <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-red-500/30 shadow-2xl shadow-red-950/10">
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">
                      <Icon name="TrendingUp" size={18} />
                    </div>
                    Cost Estimate
                  </h3>

                  {showResults ? (
                    <div className="space-y-6">
                      {/* Price Range Banner */}
                      <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-500/10 via-rose-500/5 to-slate-900/5 dark:from-red-950/40 dark:to-slate-900/40 border border-red-500/20 shadow-inner">
                        <div className="text-2xl sm:text-3xl font-extrabold text-red-600 dark:text-red-400 font-heading tracking-tight mb-1">
                          ₹{estimatedCost?.min?.toLocaleString()} - ₹{estimatedCost?.max?.toLocaleString()}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                          Estimated project cost
                        </div>
                        <div className="inline-flex items-center space-x-2 mt-3 px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300">
                          <Icon name="Clock" size={13} className="text-red-500" />
                          <span>Timeline: {estimatedCost?.timeline}</span>
                        </div>
                      </div>

                      {/* Cost Breakdown */}
                      <div>
                        <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">
                          Cost Breakdown
                        </h4>
                        <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                          {estimatedCost?.breakdown?.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-2 px-3 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 text-xs sm:text-sm">
                              <span className="text-slate-600 dark:text-slate-300 pr-2 truncate">{item?.item}</span>
                              <span className="font-mono font-bold text-slate-900 dark:text-white shrink-0">
                                ₹{item?.cost?.toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Disclaimer */}
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
                        <div className="flex items-start space-x-2.5">
                          <Icon name="Info" size={16} className="text-red-500 mt-0.5 shrink-0" />
                          <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            <span className="font-semibold text-slate-800 dark:text-slate-200">Important Note: </span>
                            This is an estimated cost based on typical project requirements. Final pricing may vary based on specific needs, integrations, and customizations. Contact us for a detailed quote.
                          </div>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="space-y-3 pt-2">
                        <Button
                          variant="default"
                          fullWidth
                          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-red-600/30"
                          iconName="MessageCircle"
                          iconPosition="left"
                          iconSize={18}
                          onClick={() => setIsConsultOpen(true)}
                        >
                          Discuss This Quote
                        </Button>
                        <Button
                          variant="outline"
                          fullWidth
                          className="rounded-xl border-slate-300 dark:border-white/20"
                          iconName="Download"
                          iconPosition="left"
                          iconSize={18}
                          onClick={handleDownloadEstimate}
                        >
                          {downloadSuccess ? 'Downloaded Estimate.txt!' : 'Download Estimate'}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400">
                        <Icon name="Calculator" size={32} />
                      </div>
                      <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
                        Configure Your Project
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                        Select your project type and complexity to see an instant cost estimate.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Pricing Transparency */}
            <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-black/[0.02]">
              <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white mb-8 text-center tracking-tight">
                Why Choose Our Transparent Pricing?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-slate-50/50 dark:bg-white/[0.01] border border-slate-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-500/20 text-white">
                    <Icon name="Eye" size={24} color="white" />
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white mb-2">
                    No Hidden Costs
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    All costs are clearly outlined upfront with detailed breakdowns.
                  </p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-slate-50/50 dark:bg-white/[0.01] border border-slate-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-red-500/20 text-white">
                    <Icon name="Shield" size={24} color="white" />
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white mb-2">
                    Fixed Price Guarantee
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Once agreed, the price remains fixed throughout the project.
                  </p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-slate-50/50 dark:bg-white/[0.01] border border-slate-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-rose-500/20 text-white">
                    <Icon name="Award" size={24} color="white" />
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white mb-2">
                    Value for Money
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Competitive pricing with premium quality and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={`Quote Discussion (${selectedOptions.projectType})`}
      />
    </>
  );
};

export default QuoteCalculator;