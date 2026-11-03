import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Star, 
  Globe, 
  Smartphone, 
  Cloud, 
  Award, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  Cloud,
  TrendingUp,
  Users,
  Award,
  ShieldCheck,
  Zap,
  Star,
  CheckCircle
};

const ClientSuccessMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    projects: 150,
    clients: 120,
    revenue: 250,
    satisfaction: 98
  });

  const metrics = [
    {
      id: 'projects',
      title: 'Projects Completed',
      value: 150,
      suffix: '+',
      icon: 'CheckCircle',
      description: 'Successfully delivered projects across Gujarat'
    },
    {
      id: 'clients',
      title: 'Happy Clients',
      value: 120,
      suffix: '+',
      icon: 'Users',
      description: 'Businesses transformed with our solutions'
    },
    {
      id: 'revenue',
      title: 'Client Revenue Increase',
      value: 250,
      suffix: '%',
      icon: 'TrendingUp',
      description: 'Average revenue growth for our clients'
    },
    {
      id: 'satisfaction',
      title: 'Client Satisfaction',
      value: 98,
      suffix: '%',
      icon: 'Star',
      description: 'Client satisfaction rate based on feedback'
    }
  ];

  const successStories = [
    {
      client: "Gujarat Textiles Ltd",
      service: "Web Development",
      improvement: "300% increase in online orders",
      timeframe: "6 months",
      icon: "Globe"
    },
    {
      client: "Rajkot Food Chain",
      service: "Mobile App",
      improvement: "150% customer retention",
      timeframe: "4 months",
      icon: "Smartphone"
    },
    {
      client: "Ahmedabad Logistics",
      service: "Cloud Solutions",
      improvement: "60% cost reduction",
      timeframe: "3 months",
      icon: "Cloud"
    },
    {
      client: "Surat Diamond Export",
      service: "Digital Marketing",
      improvement: "400% lead generation",
      timeframe: "8 months",
      icon: "TrendingUp"
    }
  ];

  const recognitions = [
    {
      title: "Best IT Solutions",
      organization: "Gujarat Tech Awards 2023",
      icon: Award
    },
    {
      title: "ISO Certified",
      organization: "Quality Management",
      icon: ShieldCheck
    },
    {
      title: "Top Employer",
      organization: "Rajkot IT Sector 2023",
      icon: Users
    },
    {
      title: "Innovation Leader",
      organization: "Digital Gujarat Summit",
      icon: Zap
    }
  ];

  return (
    <div id="metrics-section" className="space-y-12">
      {/* 4 Animated KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric, idx) => {
          const IconComp = iconMap[metric.icon] || CheckCircle;
          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl glass-card border border-gray-200 dark:border-white/10 hover:border-red-500/40 text-center transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/20 border border-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <IconComp className="w-6 h-6" />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-1">
                {animatedValues[metric.id]}
                <span className="text-red-600 dark:text-red-400">{metric.suffix}</span>
              </div>
              <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1.5">
                {metric.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Client Success Stories */}
      <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" /> Proven Regional Impact
          </div>
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Client <span className="text-red-600 dark:text-red-500">Success Stories</span>
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Real enterprise transformation delivered to thriving Gujarat businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {successStories.map((story, index) => {
            const StoryIcon = iconMap[story.icon] || Globe;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 hover:border-red-500/40 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                  <StoryIcon className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-base">
                      {story.client}
                    </h4>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-300">
                      {story.timeframe}
                    </span>
                  </div>
                  <p className="text-xs text-red-600 dark:text-red-400 font-medium mb-3">
                    {story.service}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>{story.improvement}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Industry Recognition Badges */}
      <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-10 shadow-2xl">
        <div className="text-center mb-8">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            Industry Recognition & Accreditations
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
            Trusted by businesses across Gujarat and recognized by technology bodies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {recognitions.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5 flex flex-col items-center justify-center group hover:border-red-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <ItemIcon className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h5>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.organization}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientSuccessMetrics;