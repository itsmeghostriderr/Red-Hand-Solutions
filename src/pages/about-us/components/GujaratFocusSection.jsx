import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GujaratFocusSection = () => {
  const gujaratInsights = [
    {
      title: "Textile Industry Digitization",
      description: "Helped 15+ textile manufacturers in Surat and Ahmedabad implement ERP systems and e-commerce platforms, resulting in 40% increase in operational efficiency.",
      icon: "Shirt",
      image: "/src/assets/images/rhs_textile_digitization_1793703734254.jpg",
      stats: { clients: "15+", metric: "40% Efficiency", location: "Surat & Ahmedabad" }
    },
    {
      title: "Chemical Industry Solutions",
      description: "Developed specialized inventory management and compliance tracking systems for chemical companies in Vadodara, ensuring regulatory compliance and safety standards.",
      icon: "Flask",
      image: "/src/assets/images/rhs_chemical_automation_1793703734919.jpg",
      stats: { clients: "8+", metric: "100% Compliance", location: "Vadodara" }
    },
    {
      title: "Manufacturing Automation",
      description: "Implemented IoT-based monitoring systems and automated quality control processes for manufacturing units across Gujarat, reducing production costs by 25%.",
      icon: "Settings",
      image: "/assets/images/content/content_14_photo-1565793298595-6a879b1d94.jpg",
      stats: { clients: "20+", metric: "25% Cost Savings", location: "Gujarat Wide" }
    }
  ];

  const localAdvantages = [
    {
      title: "Local Business Understanding",
      description: "Deep knowledge of Gujarat's business culture, regulatory environment, and market dynamics enables us to provide contextually relevant solutions.",
      icon: "MapPin"
    },
    {
      title: "Regional Language Support",
      description: "Our team is fluent in Gujarati and Hindi, ensuring clear communication and better understanding of client requirements.",
      icon: "MessageCircle"
    },
    {
      title: "On-site Presence",
      description: "Based in Rajkot with easy access to major Gujarat cities, we provide prompt on-site support and face-to-face consultations.",
      icon: "Building"
    },
    {
      title: "Local Partnerships",
      description: "Strong relationships with local vendors, suppliers, and service providers ensure cost-effective and timely project delivery.",
      icon: "Handshake"
    }
  ];

  const communityInitiatives = [
    {
      title: "Gujarat Tech Meetups",
      description: "Organizing monthly tech meetups in Rajkot and Ahmedabad to foster knowledge sharing and networking among local developers.",
      metrics: [
        { label: "Participants", value: "500+" },
        { label: "Frequency", value: "Monthly" }
      ]
    },
    {
      title: "Startup Mentorship Program",
      description: "Providing free technical consultation and mentorship to early-stage startups in Gujarat's emerging tech ecosystem.",
      metrics: [
        { label: "Startups Mentored", value: "25+" },
        { label: "Mentoring Hours", value: "200+" }
      ]
    },
    {
      title: "Student Internship Program",
      description: "Offering internships and training programs to computer science students from local universities and colleges.",
      metrics: [
        { label: "Students Trained", value: "50+" },
        { label: "Placement Rate", value: "80%" }
      ]
    },
    {
      title: "Digital Literacy Workshops",
      description: "Conducting workshops for small business owners to help them understand and adopt digital technologies.",
      metrics: [
        { label: "Workshops Conducted", value: "30+" },
        { label: "Businesses Reached", value: "300+" }
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Regional Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Deep Roots in <span className="text-red-600 dark:text-red-500">Gujarat's Business Landscape</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our understanding of Gujarat's diverse industries and business culture enables us to deliver solutions that truly resonate with local market needs and drive meaningful growth.
          </p>
        </motion.div>

        {/* Industry Success Stories */}
        <div className="space-y-16 mb-24">
          {gujaratInsights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-10 bg-white dark:bg-white/[0.03] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-xl"
            >
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-gray-200 dark:border-white/10 shadow-lg group">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs font-semibold">
                    <span className="bg-red-600/90 px-3 py-1 rounded-full">{insight.stats.location}</span>
                    <span className="bg-black/70 px-3 py-1 rounded-full">{insight.stats.metric}</span>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-6 text-left space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center shadow-md shadow-red-600/30">
                    <Icon name={insight.icon} size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {insight.title}
                  </h3>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {insight.description}
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 text-center">
                    <p className="text-xl font-bold text-red-600 dark:text-red-400 font-mono">{insight.stats.clients}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Clients</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 text-center">
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{insight.stats.metric}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Impact</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 text-center">
                    <p className="text-xs font-bold text-gray-900 dark:text-white">{insight.stats.location}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Location</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/portfolio">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition-colors flex items-center space-x-2">
                      <Icon name="ExternalLink" size={14} />
                      <span>View Case Study</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Advantages */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Why Local Expertise Matters
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localAdvantages.map((adv, index) => (
              <div
                key={index}
                className="p-7 rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg text-left space-y-4 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center shadow-md shadow-red-600/30">
                  <Icon name={adv.icon} size={22} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{adv.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Initiatives */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl text-left">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
              Contributing to Gujarat's Tech Ecosystem
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Beyond business, we're committed to nurturing Gujarat's technology community through various initiatives and programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {communityInitiatives.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 space-y-3"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                <div className="flex space-x-6 pt-2 border-t border-gray-200/50 dark:border-white/5">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-xl font-bold text-red-600 dark:text-red-400 font-mono block">{m.value}</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/contact-consultation">
              <button className="bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold px-8 py-3 rounded-full text-sm shadow-lg shadow-red-600/30 hover:scale-[1.02] transition-all inline-flex items-center space-x-2">
                <Icon name="Heart" size={16} />
                <span>Join Our Community Initiatives</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GujaratFocusSection;