import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  TrendingUp, 
  Rocket, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';
import Image from '../../../components/AppImage';

const iconMap = {
  Factory,
  ShoppingCart,
  Heart,
  GraduationCap,
  TrendingUp,
  Rocket
};

const IndustryShowcase = ({ onIndustryFilter }) => {
  const industries = [
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: 'Factory',
      image: '/assets/images/content/content_1_photo-1556742049-0cfed4f6a45d.jpg',
      projectCount: 25,
      description: 'ERP systems, inventory management, and production optimization solutions',
      featured: 'Smart Factory Management System for Rajkot Steel Industries'
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: 'ShoppingCart',
      image: '/assets/images/content/content_1_photo-1556742049-0cfed4f6a45d.jpg',
      projectCount: 32,
      description: 'Online stores, POS systems, and customer management platforms',
      featured: 'Multi-vendor E-commerce Platform for Gujarat Textile Exporters'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: 'Heart',
      image: '/assets/images/content/content_8_photo-1559757148-5c350d0d3c56.jpg',
      projectCount: 18,
      description: 'Patient management, telemedicine, and healthcare analytics',
      featured: 'Digital Health Records System for Rajkot Medical Center'
    },
    {
      id: 'education',
      name: 'Education',
      icon: 'GraduationCap',
      image: '/assets/images/content/content_1_photo-1556742049-0cfed4f6a45d.jpg',
      projectCount: 22,
      description: 'Learning management systems, student portals, and online education',
      featured: 'Virtual Learning Platform for Gujarat Engineering Colleges'
    },
    {
      id: 'finance',
      name: 'Finance',
      icon: 'TrendingUp',
      image: '/assets/images/content/content_1_photo-1556742049-0cfed4f6a45d.jpg',
      projectCount: 15,
      description: 'Banking solutions, fintech apps, and financial analytics',
      featured: 'Digital Banking Platform for Regional Cooperative Bank'
    },
    {
      id: 'startup',
      name: 'Startups',
      icon: 'Rocket',
      image: '/assets/images/content/content_35_photo-1553484771-371a605b060b.jpg',
      projectCount: 38,
      description: 'MVP development, scalable platforms, and growth solutions',
      featured: 'Food Delivery App for Local Rajkot Restaurants'
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4" /> Domain Specialization
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Industries We <span className="text-red-600 dark:text-red-500">Serve</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          From traditional manufacturing to cutting-edge startups, we've delivered digital solutions across diverse industries in Gujarat and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {industries.map((ind, index) => {
          const IconComp = iconMap[ind.icon] || Factory;
          return (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => onIndustryFilter(ind.id)}
              className="group cursor-pointer rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 hover:border-red-500/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Overlay */}
                <div className="relative h-44 overflow-hidden bg-gray-950">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070B] via-black/40 to-transparent opacity-85" />

                  {/* Icon & Count Badges */}
                  <div className="absolute top-3.5 left-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white shadow-md shadow-red-600/30">
                      {ind.projectCount} Projects
                    </span>
                  </div>

                  {/* Industry Title on Banner */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-1">
                      {ind.description}
                    </p>
                  </div>
                </div>

                {/* Featured Project Snippet */}
                <div className="p-5">
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block mb-1">
                      Featured Regional Deployment
                    </span>
                    <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      {ind.featured}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 pb-5 pt-0 flex items-center justify-between text-xs font-bold text-gray-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                <span>Filter by {ind.name}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustryShowcase;