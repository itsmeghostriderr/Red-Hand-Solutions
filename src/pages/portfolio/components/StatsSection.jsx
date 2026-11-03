import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Award, TrendingUp, Sparkles } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: CheckCircle2,
      value: '150+',
      label: 'Projects Completed',
      description: 'Successfully delivered across industries'
    },
    {
      icon: Users,
      value: '120+',
      label: 'Happy Clients',
      description: 'Businesses transformed digitally'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Success Rate',
      description: 'Projects delivered on time & budget'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI',
      description: 'Return on investment for clients'
    }
  ];

  return (
    <div className="relative rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 mb-16 shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4" /> Verifiable Performance
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Our Track Record <span className="text-red-600 dark:text-red-500">Speaks</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Over 8 years of delivering exceptional digital solutions across Gujarat and beyond. Here's what we've achieved together with our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComp = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 hover:border-red-500/40 text-center transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/20 border border-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-md">
                <IconComp className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;