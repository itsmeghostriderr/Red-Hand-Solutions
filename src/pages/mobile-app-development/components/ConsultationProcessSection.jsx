import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  BarChart3, 
  Settings, 
  Presentation, 
  MapPin, 
  Target, 
  Users, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Send
} from 'lucide-react';

const iconMap = {
  MessageCircle,
  BarChart3,
  Settings,
  Presentation: Settings
};

const ConsultationProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    appType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const consultationSteps = [
    {
      id: 'initial-consultation',
      title: 'Initial Consultation',
      duration: '30-45 minutes',
      description: 'Free discovery session to understand your business goals, target audience, and app requirements.',
      icon: 'MessageCircle',
      activities: [
        'Business requirement analysis',
        'Target audience identification',
        'Competitive landscape review',
        'Initial feature discussion',
        'Budget and timeline planning',
        'Technology recommendation'
      ],
      outcome: 'Clear understanding of your app vision and preliminary project scope'
    },
    {
      id: 'market-analysis',
      title: 'Market Analysis',
      duration: '3-5 days',
      description: 'Comprehensive market research specific to Gujarat and your target industry.',
      icon: 'BarChart3',
      activities: [
        'Gujarat market research',
        'Industry trend analysis',
        'Competitor feature analysis',
        'User behavior study',
        'Pricing strategy research',
        'Regulatory compliance review'
      ],
      outcome: 'Detailed market analysis report with actionable insights'
    },
    {
      id: 'technical-assessment',
      title: 'Technical Assessment',
      duration: '2-3 days',
      description: 'Technical feasibility study and architecture planning for your app requirements.',
      icon: 'Settings',
      activities: [
        'Technical feasibility analysis',
        'Architecture planning',
        'Technology stack selection',
        'Integration requirements',
        'Scalability planning',
        'Security assessment'
      ],
      outcome: 'Technical specification document and development roadmap'
    },
    {
      id: 'proposal-presentation',
      title: 'Proposal Presentation',
      duration: '1-2 hours',
      description: 'Detailed project proposal presentation with timeline, budget, and deliverables.',
      icon: 'Settings',
      activities: [
        'Project scope presentation',
        'Timeline and milestone review',
        'Budget breakdown discussion',
        'Team introduction',
        'Contract terms review',
        'Next steps planning'
      ],
      outcome: 'Comprehensive project proposal and signed agreement'
    }
  ];

  const marketAnalysisAreas = [
    {
      title: 'Gujarat Business Landscape',
      description: 'Understanding local business culture, preferences, and market dynamics',
      icon: MapPin,
      insights: [
        'Local business practices and preferences',
        'Regional payment method preferences',
        'Language and cultural considerations',
        'Seasonal business patterns'
      ]
    },
    {
      title: 'Competitive Analysis',
      description: 'Detailed analysis of existing solutions and market gaps',
      icon: Target,
      insights: [
        'Direct and indirect competitors',
        'Feature gap analysis',
        'Pricing strategy comparison',
        'User experience benchmarking'
      ]
    },
    {
      title: 'User Research',
      description: 'Understanding your target audience behavior and preferences',
      icon: Users,
      insights: [
        'User persona development',
        'Usage pattern analysis',
        'Pain point identification',
        'Feature prioritization'
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const currentStep = consultationSteps[activeStep];
  const StepIcon = iconMap[currentStep.icon] || MessageCircle;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Calendar className="w-4 h-4" /> Advisory Framework
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Strategic App Development <br />
          <span className="text-red-600 dark:text-red-500">Consultation Process</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Our comprehensive consultation process ensures we understand your business needs and create the perfect mobile app strategy for the Gujarat market.
        </p>
      </div>

      {/* 4 Process Step Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {consultationSteps.map((step, idx) => {
          const isSelected = activeStep === idx;
          const IconComp = iconMap[step.icon] || MessageCircle;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center gap-2 ${
                isSelected
                  ? 'border-red-500 bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'glass-card border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-red-500/40'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white/20' : 'bg-gray-100 dark:bg-white/[0.06]'}`}>
                <IconComp className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold">Step {idx + 1}: {step.title}</span>
              <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>{step.duration}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Step Card */}
      <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 shadow-2xl text-left mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-white/10 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 flex items-center justify-center shrink-0">
              <StepIcon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                Step {activeStep + 1} of 4 • {currentStep.duration}
              </span>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                {currentStep.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/[0.12] disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveStep(Math.min(consultationSteps.length - 1, activeStep + 1))}
              disabled={activeStep === consultationSteps.length - 1}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/[0.12] disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          {currentStep.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="p-6 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-2">
              What We'll Cover
            </h4>
            {currentStep.activities.map((act, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{act}</span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-red-50/60 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block">
              Guaranteed Outcome
            </span>
            <p className="text-sm font-semibold text-gray-900 dark:text-white leading-relaxed">
              {currentStep.outcome}
            </p>
          </div>
        </div>
      </div>

      {/* Gujarat Market Analysis Deep Dive */}
      <div className="mb-16 text-left">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            Gujarat Market Analysis
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Our market analysis goes beyond generic research to provide insights specific to Gujarat's business environment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {marketAnalysisAreas.map((area, idx) => {
            const AreaIcon = area.icon;
            return (
              <div key={idx} className="p-7 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                  <AreaIcon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">{area.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{area.description}</p>
                <div className="space-y-2">
                  {area.insights.map((ins, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      <span>{ins}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Embedded Booking Form */}
      <div className="rounded-3xl glass-card border border-red-500/30 p-8 sm:p-12 shadow-2xl text-left">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block">
              Direct Strategic Intake
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
              Book Your Free Consultation
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Ready to discuss your mobile app project? Schedule a free consultation with our experts and get started on your app development journey.
            </p>

            <div className="space-y-2.5 text-xs text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Free 45-minute strategy session</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Market analysis and competitive insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Technology recommendations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Budget and timeline estimation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>No obligation project proposal</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10 space-y-2.5 text-xs">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500" />
                <a href="tel:+916352412728" className="font-semibold text-gray-900 dark:text-white hover:text-red-600 transition-colors">
                  +91 6352412728
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500" />
                <a href="mailto:redhand.solution@gmail.com" className="font-semibold text-gray-900 dark:text-white hover:text-red-600 transition-colors">
                  redhand.solution@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-gray-600 dark:text-gray-300">Rajkot, Gujarat, India</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/70 dark:bg-white/[0.03] p-6 sm:p-8 rounded-2xl border border-gray-200/80 dark:border-white/10">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  Consultation Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-sm mx-auto">
                  Thank you, {formData.name}. Our lead mobile architect will call you back at {formData.phone} within 2 business hours.
                </p>
                <div className="pt-2">
                  <a
                    href="https://calendly.com/redhand-solution/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs uppercase"
                  >
                    <Calendar className="w-4 h-4" /> Or Pick an Immediate Time on Calendly
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 6352412728"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your organization"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      App Type
                    </label>
                    <input
                      type="text"
                      name="appType"
                      value={formData.appType}
                      onChange={handleInputChange}
                      placeholder="E-commerce, Healthcare, etc."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="₹2,00,000 - ₹5,00,000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Project Timeline
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    placeholder="e.g. 3-6 months"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Tell us about your app idea and requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" /> Schedule Free Consultation
                </button>
                <p className="text-[11px] text-gray-400 text-center">
                  We'll respond within 2 hours during business hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcessSection;