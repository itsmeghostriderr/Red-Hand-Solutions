import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ConsultationModal from '../../../components/ConsultationModal';

const ContactMethods = () => {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const contactMethods = [
    {
      id: 1,
      icon: "Phone",
      title: "Call Us Directly",
      description: "Speak with our experts immediately",
      primary: "+91 6352412728",
      secondary: "+91 87654 32109",
      action: "Call Now",
      accent: "from-red-500 to-rose-600",
      available: "24/7 Available"
    },
    {
      id: 2,
      icon: "MessageCircle",
      title: "WhatsApp Chat",
      description: "Quick responses via WhatsApp",
      primary: "+91 6352412728",
      secondary: "Business Account Verified",
      action: "Chat on WhatsApp",
      accent: "from-emerald-500 to-green-600",
      available: "Instant Response"
    },
    {
      id: 3,
      icon: "Mail",
      title: "Email Support",
      description: "Detailed project discussions",
      primary: "redhand.solution@gmail.com",
      secondary: "projects@redhandsolutions.com",
      action: "Send Email",
      accent: "from-red-600 to-orange-600",
      available: "24h Response"
    },
    {
      id: 4,
      icon: "Calendar",
      title: "Schedule Meeting",
      description: "Book a consultation slot",
      primary: "In-person or Video Call",
      secondary: "30-60 minute sessions",
      action: "Book Meeting",
      accent: "from-rose-500 to-pink-600",
      available: "Flexible Timing"
    },
    {
      id: 5,
      icon: "MessageSquare",
      title: "Live Chat",
      description: "Real-time technical support",
      primary: "Technical Experts Online",
      secondary: "Mon-Sat: 9 AM - 8 PM",
      action: "Start Chat",
      accent: "from-amber-500 to-red-500",
      available: "Business Hours"
    },
    {
      id: 6,
      icon: "MapPin",
      title: "Visit Our Office",
      description: "Meet us in person",
      primary: "Ahmedabad & Rajkot, Gujarat",
      secondary: "Ahmedabad HQ & Rajkot Hub",
      action: "Get Directions",
      accent: "from-red-600 to-red-700",
      available: "Mon-Sat: 10 AM - 7 PM"
    }
  ];

  const handleContactAction = (method) => {
    switch (method.icon) {
      case "Phone":
        window.open(`tel:${method.primary.replace(/\s/g, '')}`, '_self');
        break;
      case "MessageCircle":
        window.open(`https://wa.me/${method.primary.replace(/[^\d]/g, '')}?text=Hello%20Red%20Hand%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project.`, '_blank');
        break;
      case "Mail":
        window.open(`mailto:${method.primary}?subject=Project%20Inquiry%20-%20Red%20Hand%20Solutions`, '_blank');
        break;
      case "Calendar":
        setIsConsultModalOpen(true);
        break;
      case "MessageSquare":
        window.open(`https://wa.me/916352412728?text=Hi!%20I%20need%20live%20technical%20assistance.`, '_blank');
        break;
      case "MapPin":
        window.open('https://www.google.com/maps/dir/?api=1&destination=22.3039,70.8022', '_blank');
        break;
      default:
        console.log(`${method.title} clicked`);
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Icon name="Compass" size={14} />
              <span>Direct Channels</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              Multiple Ways to{' '}
              <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Choose your preferred communication method. We're here to help you succeed with personalized support and expert guidance.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative p-7 rounded-2xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/[0.02] dark:shadow-red-950/5 hover:border-red-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.accent} flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={method.icon} size={22} color="white" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/20">
                      {method.available}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {method.description}
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-2.5 mb-6 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                        <Icon name="Check" size={15} className="text-emerald-500" />
                        <span className="font-mono text-xs sm:text-sm">{method.primary}</span>
                      </div>
                      {(method.icon === 'Phone' || method.icon === 'Mail') && (
                        <button
                          onClick={() => copyToClipboard(method.primary, method.id)}
                          className="text-slate-400 hover:text-red-500 text-xs transition-colors p-1"
                          title="Copy"
                        >
                          {copiedId === method.id ? (
                            <span className="text-emerald-500 font-medium">Copied!</span>
                          ) : (
                            <Icon name="Copy" size={13} />
                          )}
                        </button>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                      <Icon name="Info" size={14} className="text-slate-400" />
                      <span>{method.secondary}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  fullWidth
                  className="rounded-xl border-slate-200 dark:border-white/10 group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white dark:group-hover:bg-red-600 dark:group-hover:text-white transition-all duration-300 font-semibold text-sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                  onClick={() => handleContactAction(method)}
                >
                  {method.action}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Emergency Contact Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-8 sm:p-10 border border-red-500/30 bg-gradient-to-br from-red-500/10 via-rose-500/5 to-slate-900/5 dark:from-red-950/40 dark:via-[#13111C] dark:to-[#0A0B10] backdrop-blur-2xl shadow-xl text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[90px] rounded-full pointer-events-none" />
            <div className="flex items-center justify-center mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-600/40 animate-pulse">
                <Icon name="Zap" size={32} color="white" />
              </div>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
              Need Urgent Support?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
              For existing clients with critical issues, our emergency support team is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+917226802978"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <Icon name="Phone" size={18} />
                <span>Emergency: +91 72268 02978</span>
              </a>
              <a
                href="mailto:contact.redhandsolution@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/[0.05] text-slate-900 dark:text-white hover:border-red-500/50 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                <Icon name="Mail" size={18} className="text-red-600 dark:text-red-400" />
                <span>contact.redhandsolution@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        initialService="Direct Consultation"
      />
    </>
  );
};

export default ContactMethods;