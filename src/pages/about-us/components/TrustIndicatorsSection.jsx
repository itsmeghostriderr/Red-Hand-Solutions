import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TrustIndicatorsSection = () => {
  const certifications = [
    {
      title: "AWS Partner Network",
      description: "Certified AWS Solutions Provider with expertise in cloud architecture and migration services.",
      level: "Advanced Tier",
      validUntil: "2025",
      icon: "Cloud"
    },
    {
      title: "Google Cloud Partner",
      description: "Authorized Google Cloud Platform partner specializing in enterprise cloud solutions.",
      level: "Premier Partner",
      validUntil: "2025",
      icon: "Globe"
    },
    {
      title: "Microsoft Azure Expert",
      description: "Microsoft certified partner with proven expertise in Azure cloud services and solutions.",
      level: "Gold Partner",
      validUntil: "2024",
      icon: "Server"
    },
    {
      title: "ISO 27001 Certified",
      description: "Information Security Management System certification ensuring highest security standards.",
      level: "Certified",
      validUntil: "2025",
      icon: "Shield"
    }
  ];

  const businessRegistrations = [
    {
      title: "Company Registration",
      description: "Registered under the Companies Act, 2013 with the Ministry of Corporate Affairs, Government of India.",
      registrationNumber: "U72200GJ2018PTC103456",
      authority: "Registrar of Companies, Gujarat",
      icon: "FileText"
    },
    {
      title: "GST Registration",
      description: "Valid GST registration for all business operations across India with proper tax compliance.",
      registrationNumber: "24AABCR1234F1Z5",
      authority: "GST Department, Gujarat",
      icon: "Receipt"
    },
    {
      title: "MSME Registration",
      description: "Registered as a Micro, Small & Medium Enterprise with the Government of Gujarat.",
      registrationNumber: "UDYAM-GJ-24-0012345",
      authority: "MSME Development Institute",
      icon: "Award"
    },
    {
      title: "Professional Tax",
      description: "Valid professional tax registration for all employees and business operations in Gujarat.",
      registrationNumber: "PT-GJ-RAJ-2018-001234",
      authority: "Commercial Tax Department",
      icon: "CreditCard"
    }
  ];

  const securityCompliance = [
    {
      title: "Data Protection",
      description: "Comprehensive data protection policies compliant with Indian IT Act and international standards.",
      features: ["End-to-end encryption", "Regular security audits", "Access control systems", "Data backup protocols"],
      icon: "Shield"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous QA processes ensuring delivery of high-quality, bug-free solutions to all clients.",
      features: ["Automated testing", "Code review processes", "Performance monitoring", "User acceptance testing"],
      icon: "CheckCircle"
    },
    {
      title: "Project Security",
      description: "Secure development practices and project management ensuring client confidentiality and IP protection.",
      features: ["NDA compliance", "Secure coding practices", "Version control", "IP protection protocols"],
      icon: "Lock"
    },
    {
      title: "Infrastructure Security",
      description: "Secure infrastructure with regular monitoring, updates, and backup systems for business continuity.",
      features: ["24/7 monitoring", "Regular updates", "Disaster recovery", "Secure hosting"],
      icon: "Server"
    }
  ];

  const industryRecognitions = [
    {
      title: "Best IT Solutions Provider",
      organization: "Gujarat IT Association",
      year: "2023",
      description: "Recognized for outstanding contribution to Gujarat's IT ecosystem and innovative solutions delivery."
    },
    {
      title: "Emerging Tech Company",
      organization: "Rajkot Chamber of Commerce",
      year: "2022",
      description: "Awarded for rapid growth and significant contribution to the local technology sector."
    },
    {
      title: "Client Satisfaction Excellence",
      organization: "Indian Software Association",
      year: "2023",
      description: "Honored for maintaining 98% client satisfaction rate and long-term client relationships."
    },
    {
      title: "Innovation in Digital Solutions",
      organization: "Gujarat Technology Summit",
      year: "2023",
      description: "Recognized for innovative approach to digital transformation and emerging technology adoption."
    }
  ];

  const trustMetrics = [
    { value: "100%", label: "Security Compliance" },
    { value: "0", label: "Security Breaches" },
    { value: "15+", label: "Certifications" },
    { value: "98%", label: "Client Retention" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Certifications & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Trust & <span className="text-red-600 dark:text-red-500">Credibility Indicators</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our certifications, registrations, and industry recognitions demonstrate our commitment to excellence, security, and compliance with the highest industry standards.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-left">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg space-y-4 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center shadow-md shadow-red-600/30">
                  <Icon name={cert.icon} size={22} />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-200/40 dark:border-red-500/20">
                  {cert.level}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{cert.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{cert.description}</p>
              </div>
              <div className="text-xs text-gray-400 pt-2 border-t border-gray-100 dark:border-white/5 flex justify-between">
                <span>Valid Until:</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{cert.validUntil}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Registrations */}
        <div className="mb-20 text-left">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Legal Registrations & Compliance
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {businessRegistrations.map((reg, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg space-y-3"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/10 text-red-600 dark:text-red-400 flex items-center justify-center">
                    <Icon name={reg.icon} size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{reg.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{reg.authority}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{reg.description}</p>
                <div className="pt-2 flex items-center justify-between text-xs border-t border-gray-100 dark:border-white/5">
                  <span className="text-gray-500 dark:text-gray-400">Registration Number:</span>
                  <span className="font-mono font-bold text-red-600 dark:text-red-400">{reg.registrationNumber}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Quality Standards */}
        <div className="mb-20 text-left">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Security & Quality Standards
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityCompliance.map((sec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 shadow-lg space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center shadow-md shadow-red-600/30">
                  <Icon name={sec.icon} size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white">{sec.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{sec.description}</p>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-white/5">
                  {sec.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Recognitions */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl mb-16 text-left">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
              Industry Recognition & Awards
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Our commitment to excellence has been recognized by leading industry organizations and associations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industryRecognitions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs font-semibold text-red-600 dark:text-red-400">{item.organization}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => {
                alert("Initiating verified certificates and accreditation credentials download package (PDF).");
              }}
              className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold px-8 py-3 rounded-full text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all inline-flex items-center space-x-2"
            >
              <Icon name="Download" size={16} />
              <span>Download Certificates & Awards</span>
            </button>
          </div>
        </div>

        {/* Trust by Numbers */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Trust by Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustMetrics.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 shadow-md"
              >
                <span className="text-4xl font-black text-red-600 dark:text-red-500 font-mono block mb-1">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicatorsSection;