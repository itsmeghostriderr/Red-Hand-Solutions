import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    preferredContact: '',
    meetingType: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ecommerce', label: 'E-commerce Solution' },
    { value: 'custom-software', label: 'Custom Software' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'consulting', label: 'Technology Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000-300000', label: '₹1,00,000 - ₹3,00,000' },
    { value: '300000-500000', label: '₹3,00,000 - ₹5,00,000' },
    { value: '500000-1000000', label: '₹5,00,000 - ₹10,00,000' },
    { value: '1000000+', label: '₹10,00,000+' },
    { value: 'discuss', label: "Let's Discuss" }
  ];

  const timelines = [
    { value: 'urgent', label: 'Urgent (Within 1 month)' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const contactPreferences = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'email', label: 'Email' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'video-call', label: 'Video Call' }
  ];

  const meetingTypes = [
    { value: 'in-person', label: 'In-person (Ahmedabad HQ / Rajkot Office)' },
    { value: 'video-call', label: 'Video Call (Google Meet/Zoom)' },
    { value: 'phone-call', label: 'Phone Call' },
    { value: 'no-preference', label: 'No Preference' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target || {};
    if (!name) return;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData?.description?.trim()) {
      newErrors.description = 'Project description is required';
    } else if (formData?.description?.trim()?.length < 20) {
      newErrors.description = 'Please provide more details (minimum 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        preferredContact: '',
        meetingType: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-red-500/30 shadow-2xl shadow-red-950/10"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30 animate-pulse">
              <Icon name="CheckCircle" size={40} color="white" />
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              We've received your consultation request and will get back to you within 24 hours. Our team is excited to discuss your project and help bring your vision to life.
            </p>
            <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl p-6 mb-8 text-left">
              <h3 className="font-heading font-semibold text-slate-900 dark:text-white mb-4">
                What happens next?
              </h3>
              <div className="space-y-3.5">
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <Icon name="Clock" size={16} className="text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-sm">We'll review your requirements within 2 hours</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <Icon name="Phone" size={16} className="text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-sm">Our expert will contact you to schedule a consultation</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <Icon name="FileText" size={16} className="text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-sm">We'll prepare a customized proposal for your project</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/30"
                iconName="ArrowLeft"
                iconPosition="left"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Request
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-xl border-slate-300 dark:border-white/20"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.open('https://calendly.com/redhand-solution/meeting', '_blank')}
              >
                Book via Calendly
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Icon name="FileEdit" size={14} />
              <span>Project Intake</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              Schedule Your{' '}
              <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                Free Consultation
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Tell us about your project and we'll provide expert guidance, timeline estimates, and a customized solution proposal at no cost.
            </p>
          </div>

          {/* Form Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-black/[0.03]">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">
                    <Icon name="User" size={18} />
                  </div>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    error={errors?.name}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="your.email@company.com"
                    value={formData?.email}
                    onChange={handleInputChange}
                    error={errors?.email}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="+91 6352412728"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    error={errors?.phone}
                    required
                  />
                  <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    placeholder="Your company name (optional)"
                    value={formData?.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">
                    <Icon name="Briefcase" size={18} />
                  </div>
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Select
                    label="Project Type"
                    placeholder="Select project type"
                    options={projectTypes}
                    value={formData?.projectType}
                    onChange={(value) => handleSelectChange('projectType', value)}
                    error={errors?.projectType}
                    required
                  />
                  <Select
                    label="Budget Range"
                    placeholder="Select budget range"
                    options={budgetRanges}
                    value={formData?.budget}
                    onChange={(value) => handleSelectChange('budget', value)}
                  />
                  <Select
                    label="Timeline"
                    placeholder="Select timeline"
                    options={timelines}
                    value={formData?.timeline}
                    onChange={(value) => handleSelectChange('timeline', value)}
                  />
                  <Select
                    label="Preferred Contact Method"
                    placeholder="How should we contact you?"
                    options={contactPreferences}
                    value={formData?.preferredContact}
                    onChange={(value) => handleSelectChange('preferredContact', value)}
                  />
                </div>
                <div className="mb-6">
                  <Select
                    label="Meeting Preference"
                    placeholder="Select meeting type"
                    options={meetingTypes}
                    value={formData?.meetingType}
                    onChange={(value) => handleSelectChange('meetingType', value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none text-sm"
                    placeholder="Please describe your project requirements, goals, and any specific features you need. The more details you provide, the better we can assist you."
                    value={formData?.description}
                    onChange={handleInputChange}
                  />
                  {errors?.description && (
                    <p className="text-red-500 text-xs font-medium mt-1.5">{errors?.description}</p>
                  )}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="text-center pt-2">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold shadow-lg shadow-red-600/30 px-10 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    iconName="Send"
                    iconPosition="right"
                    iconSize={18}
                  >
                    {isSubmitting ? 'Submitting...' : 'Schedule Free Consultation'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-xl border-slate-300 dark:border-white/20"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={18}
                    onClick={() => window.open('https://calendly.com/redhand-solution/meeting', '_blank')}
                  >
                    Or Book Direct on Calendly
                  </Button>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
                  No spam, no obligations. We respect your privacy and will only use your information to discuss your project.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;