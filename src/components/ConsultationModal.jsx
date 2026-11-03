import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './AppIcon';
import Button from './ui/Button';

const ConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    budget: '₹2L - ₹5L',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Web Development',
      budget: '₹2L - ₹5L',
      notes: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0D0F18] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header Accent Bar */}
          <div className="h-2 w-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <Icon name="X" size={20} />
          </button>

          <div className="p-6 sm:p-10">
            {!isSubmitted ? (
              <>
                <div className="text-left mb-6">
                  <div className="inline-flex items-center space-x-2 text-red-600 dark:text-red-400 text-xs font-semibold tracking-wider uppercase mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping inline-block" />
                    <span>Free 30-Minute Discovery Session</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Book Your Strategy Consultation
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Discuss your digital goals with Red Hand Solutions leadership. Direct advisory, feasibility assessment, and tailored pricing.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Patel"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Company or Startup Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Gujarat Industries"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Primary Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      >
                        <option value="Web Development">Web Development (React / Next.js)</option>
                        <option value="Mobile App Development">Mobile App Development (iOS / Android)</option>
                        <option value="Cloud & DevOps">Cloud Infrastructure & DevOps</option>
                        <option value="Digital Marketing">Performance & Digital Marketing</option>
                        <option value="Custom ERP & Automation">Custom ERP & Industrial Automation</option>
                        <option value="IT Consulting">Strategic IT Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      >
                        <option value="₹1L - ₹2.5L">₹1,00,000 - ₹2,50,000</option>
                        <option value="₹2.5L - ₹5L">₹2,50,000 - ₹5,00,000</option>
                        <option value="₹5L - ₹10L">₹5,00,000 - ₹10,00,000</option>
                        <option value="₹10L+">₹10,00,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Goals or Specific Requirements
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Briefly describe what you're looking to build or transform..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="Loader" size={18} className="animate-spin" />
                          <span>Reserving Consultation...</span>
                        </>
                      ) : (
                        <>
                          <Icon name="Calendar" size={18} />
                          <span>Request Consultation</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
                      className="px-5 py-3 rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Icon name="ExternalLink" size={16} />
                      <span>Instant Calendly Link</span>
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-green-500/30">
                  <Icon name="CheckCircle" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Consultation Request Received!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-red-600 dark:text-red-400">{formData.name}</span>. Our team in Rajkot has received your inquiry and will reach out to <span className="font-semibold text-gray-900 dark:text-white">{formData.email}</span> within 2 hours.
                </p>
                <div className="bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 rounded-2xl p-4 max-w-sm mx-auto mb-6 text-xs text-left space-y-1.5">
                  <div className="flex justify-between text-gray-500 dark:text-gray-400">
                    <span>Service:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{formData.service}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 dark:text-gray-400">
                    <span>Estimated Budget:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{formData.budget}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 dark:text-gray-400">
                    <span>Direct Call:</span>
                    <span className="font-medium text-red-600">+91 6352412728</span>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ConsultationModal;
