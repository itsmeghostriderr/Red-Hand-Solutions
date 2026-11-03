import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      icon: "Globe",
      features: ["React & Next.js", "E-commerce Solutions", "Progressive Web Apps", "API Integration"],
      color: "from-red-600 to-rose-600",
      accentBg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
      link: "/services-overview"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "Smartphone",
      features: ["React Native", "Flutter Development", "Native iOS/Android", "App Store Optimization"],
      color: "from-rose-600 to-red-700",
      accentBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      link: "/mobile-app-development"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: "Cloud",
      features: ["AWS & Azure", "DevOps & CI/CD", "Microservices", "Database Management"],
      color: "from-red-700 to-red-800",
      accentBg: "bg-red-600/10 text-red-500 dark:text-red-400 border-red-600/20",
      link: "/services-overview"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies to grow your business",
      icon: "TrendingUp",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Analytics & Reporting"],
      color: "from-amber-600 to-red-600",
      accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      link: "/services-overview"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Our <span className="text-red-600 dark:text-red-500">Core Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business and accelerate growth
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative rounded-3xl p-7 bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-red-600/10 dark:hover:shadow-red-600/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
            >
              {/* Subtle Red Top Gradient */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Service Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center mb-6 shadow-md shadow-red-600/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon name={service.icon} size={28} />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 pt-2 border-t border-gray-100 dark:border-white/5">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center mr-2.5 flex-shrink-0">
                        <Icon name="Check" size={10} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn More Link */}
              <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                <Link
                  to={service.link}
                  className="inline-flex items-center text-sm font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors group/link"
                >
                  <span>Learn More</span>
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="ml-2 group-hover/link:translate-x-1.5 transition-transform duration-200"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-14">
          <Link to="/services-overview">
            <button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 inline-flex items-center space-x-2">
              <span>View All Services</span>
              <Icon name="ArrowRight" size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;