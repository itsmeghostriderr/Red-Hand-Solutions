import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      company: "Gujarat Textiles Ltd",
      location: "Rajkot",
      image: "/assets/images/content/content_26_photo-1507003211169-0a1dd7228f.jpg",
      testimonial: `Red Hand Solutions transformed our entire business operations with their custom ERP system. Our efficiency increased by 40% and we saved ₹2.5 lakhs annually on manual processes.`,
      rating: 5,
      project: "Custom ERP Development",
      result: "40% efficiency increase"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Ahmedabad Fashion Hub",
      location: "Ahmedabad",
      image: "/assets/images/content/content_1_photo-1556742049-0cfed4f6a45d.jpg",
      testimonial: `Their e-commerce platform helped us reach customers across Gujarat. Online sales grew by 300% in just 6 months. The team understood our local market perfectly.`,
      rating: 5,
      project: "E-commerce Platform",
      result: "300% sales growth"
    },
    {
      id: 3,
      name: "Amit Mehta",
      company: "Surat Diamond Exports",
      location: "Surat",
      image: "/assets/images/content/content_28_photo-1472099645785-5658abf4ff.jpg",
      testimonial: `The mobile app they developed for our diamond catalog revolutionized how we showcase products to international clients. Export inquiries increased by 250%.`,
      rating: 5,
      project: "Mobile App Development",
      result: "250% inquiry increase"
    },
    {
      id: 4,
      name: "Neha Joshi",
      company: "Vadodara Healthcare",
      location: "Vadodara",
      image: "/assets/images/content/content_29_photo-1559839734-2b71ea197ec2.jpg",
      testimonial: `Their patient management system streamlined our operations completely. Appointment scheduling became 80% more efficient and patient satisfaction scores improved significantly.`,
      rating: 5,
      project: "Healthcare Management System",
      result: "80% efficiency improvement"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentClient = testimonials[currentTestimonial];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Client Proof & Verified Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            What Our <span className="text-red-600 dark:text-red-500">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real stories from Gujarat businesses that transformed with our solutions
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto rounded-3xl bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 p-8 sm:p-12 shadow-2xl shadow-red-950/10">
          {/* Quote Icon Badge */}
          <div className="absolute -top-6 left-8 sm:left-12 w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30">
            <Icon name="Quote" size={22} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentClient.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-3"
            >
              {/* Client Info Column */}
              <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-white/10 pb-8 lg:pb-0 lg:pr-8">
                <div className="relative inline-block mb-4">
                  <Image
                    src={currentClient.image}
                    alt={currentClient.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover mx-auto lg:mx-0 border-2 border-red-500/30 shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-sm">
                    <Icon name="Check" size={14} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {currentClient.name}
                </h3>
                <p className="text-sm font-semibold text-red-600 dark:text-red-400">
                  {currentClient.company}
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-xs text-gray-500 dark:text-gray-400 mt-1 mb-3">
                  <Icon name="MapPin" size={12} className="text-red-500" />
                  <span>{currentClient.location}, Gujarat</span>
                </div>

                {/* Rating */}
                <div className="flex justify-center lg:justify-start space-x-1 mb-5">
                  {[...Array(currentClient.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Project Spec Box */}
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 space-y-1.5 text-xs text-left">
                  <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                    <span>Project:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{currentClient.project}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 pt-1 border-t border-gray-200/50 dark:border-white/5">
                    <span>Impact:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{currentClient.result}</span>
                  </div>
                </div>
              </div>

              {/* Quote Column */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed italic font-medium">
                  "{currentClient.testimonial}"
                </blockquote>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between pt-4">
                  {/* Dots */}
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? 'w-8 bg-red-600'
                            : 'w-2.5 bg-gray-300 dark:bg-white/20 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Arrow Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      aria-label="Previous testimonial"
                      className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-red-600 hover:border-red-500 flex items-center justify-center transition-all duration-200 active:scale-95"
                    >
                      <Icon name="ChevronLeft" size={18} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-red-600 hover:border-red-500 flex items-center justify-center transition-all duration-200 active:scale-95"
                    >
                      <Icon name="ChevronRight" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Client Logos Strip */}
        <div className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-6">
            Trusted by leading businesses across Gujarat
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {testimonials.map((client, index) => (
              <div
                key={index}
                className="py-4 px-6 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-gray-200/70 dark:border-white/5 flex items-center justify-center hover:border-red-500/30 transition-colors"
              >
                <span className="font-bold text-sm text-gray-700 dark:text-gray-300 tracking-wide">
                  {client.company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;