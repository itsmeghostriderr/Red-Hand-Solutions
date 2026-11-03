import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timelineData = [
    {
      year: 2018,
      title: "Foundation in Rajkot",
      description: "Red Hand Solutions was founded with a vision to bridge the technology gap for Gujarat businesses. Started with a team of 3 passionate developers in a small office in Rajkot.",
      icon: "Rocket",
      achievements: [
        "Established company in Rajkot",
        "First 5 clients onboarded",
        "Focus on web development"
      ]
    },
    {
      year: 2019,
      title: "Expansion & Growth",
      description: "Expanded our service offerings to include mobile app development and cloud solutions. Team grew to 8 members with specialized expertise.",
      icon: "TrendingUp",
      achievements: [
        "Mobile app development services launched",
        "Team expanded to 8 members",
        "First enterprise client acquired"
      ]
    },
    {
      year: 2020,
      title: "Digital Transformation Era",
      description: "During the pandemic, we helped 50+ businesses transition to digital platforms. Introduced AI and automation services to our portfolio.",
      icon: "Cpu",
      achievements: [
        "50+ digital transformation projects",
        "AI & automation services introduced",
        "Remote work infrastructure established"
      ]
    },
    {
      year: 2021,
      title: "Technology Partnerships",
      description: "Formed strategic partnerships with AWS, Google Cloud, and Microsoft. Achieved certifications and became authorized solution providers.",
      icon: "Handshake",
      achievements: [
        "AWS Partnership established",
        "Google Cloud certification achieved",
        "Microsoft Azure solutions provider"
      ]
    },
    {
      year: 2022,
      title: "Industry Recognition",
      description: "Recognized as 'Best IT Solutions Provider in Gujarat' by Gujarat IT Association. Expanded to serve clients across Western India.",
      icon: "Award",
      achievements: [
        "Gujarat IT Association award",
        "100+ projects completed",
        "Western India market expansion"
      ]
    },
    {
      year: 2023,
      title: "Innovation Hub",
      description: "Established R&D division focusing on emerging technologies like blockchain, IoT, and machine learning. Team reached 20+ professionals.",
      icon: "Lightbulb",
      achievements: [
        "R&D division established",
        "Blockchain solutions launched",
        "IoT and ML expertise developed"
      ]
    },
    {
      year: 2024,
      title: "Market Leadership",
      description: "Became Gujarat's leading IT solutions provider with 200+ successful projects. Launched startup incubation program to support local entrepreneurs.",
      icon: "Crown",
      achievements: [
        "200+ projects milestone",
        "Startup incubation program",
        "Market leadership position"
      ]
    }
  ];

  const activeData = timelineData.find(item => item.year === activeYear) || timelineData[timelineData.length - 1];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50/70 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Historical Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Our Journey of <span className="text-red-600 dark:text-red-500">Innovation & Growth</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From a small startup in Rajkot to Gujarat's trusted IT partner, discover the milestones that shaped our journey and the vision that drives us forward.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline Year Selectors Track */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {timelineData.map((item, index) => {
              const isActive = activeYear === item.year;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30 scale-105'
                      : 'bg-white dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-white/10 hover:border-red-500/40'
                  }`}
                >
                  <Icon name={item.icon} size={15} />
                  <span>{item.year}</span>
                </button>
              );
            })}
          </div>

          {/* Active Timeline Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl p-8 sm:p-12 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30">
                      <Icon name={activeData.icon} size={30} />
                    </div>
                    <div>
                      <span className="text-4xl sm:text-5xl font-black text-red-600 dark:text-red-400 font-mono tracking-tight block">
                        {activeData.year}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {activeData.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                    {activeData.description}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-gray-100 dark:border-white/5">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500">
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeData.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-start space-x-2.5"
                        >
                          <div className="w-4 h-4 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon name="Check" size={10} />
                          </div>
                          <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Badge Stamp */}
                <div className="lg:col-span-4 text-center p-6 rounded-2xl bg-gradient-to-br from-red-600/10 via-rose-500/5 to-transparent border border-red-500/20">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-red-600/30">
                    <Icon name={activeData.icon} size={36} />
                  </div>
                  <h4 className="text-2xl font-extrabold text-gray-900 dark:text-white font-mono">
                    {activeData.year}
                  </h4>
                  <p className="text-xs font-semibold text-red-600 dark:text-red-400 mt-1 uppercase tracking-wider">
                    {activeData.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;