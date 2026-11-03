import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const technologies = {
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      techs: [
        { name: "React.js", proficiency: 95, icon: "⚛️", description: "Modern UI development" },
        { name: "Next.js", proficiency: 90, icon: "▲", description: "Full-stack React framework" },
        { name: "Vue.js", proficiency: 85, icon: "💚", description: "Progressive framework" },
        { name: "Angular", proficiency: 80, icon: "🅰️", description: "Enterprise applications" },
        { name: "TypeScript", proficiency: 88, icon: "📘", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", proficiency: 92, icon: "🎨", description: "Utility-first CSS" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "Server",
      techs: [
        { name: "Node.js", proficiency: 93, icon: "🟢", description: "JavaScript runtime" },
        { name: "Python", proficiency: 88, icon: "🐍", description: "Versatile programming" },
        { name: "Java", proficiency: 85, icon: "☕", description: "Enterprise solutions" },
        { name: "PHP", proficiency: 82, icon: "🐘", description: "Web development" },
        { name: "Express.js", proficiency: 90, icon: "🚀", description: "Node.js framework" },
        { name: "Django", proficiency: 86, icon: "🎸", description: "Python web framework" }
      ]
    },
    mobile: {
      title: "Mobile Development",
      icon: "Smartphone",
      techs: [
        { name: "React Native", proficiency: 92, icon: "📱", description: "Cross-platform apps" },
        { name: "Flutter", proficiency: 88, icon: "🦋", description: "Google's UI toolkit" },
        { name: "iOS Native", proficiency: 85, icon: "🍎", description: "Swift development" },
        { name: "Android Native", proficiency: 87, icon: "🤖", description: "Kotlin/Java apps" },
        { name: "Ionic", proficiency: 80, icon: "⚡", description: "Hybrid app development" },
        { name: "Xamarin", proficiency: 75, icon: "🔷", description: "Microsoft framework" }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: "Cloud",
      techs: [
        { name: "AWS", proficiency: 90, icon: "☁️", description: "Amazon Web Services" },
        { name: "Azure", proficiency: 85, icon: "🔵", description: "Microsoft Cloud" },
        { name: "Docker", proficiency: 88, icon: "🐳", description: "Containerization" },
        { name: "Kubernetes", proficiency: 82, icon: "⚙️", description: "Container orchestration" },
        { name: "Jenkins", proficiency: 86, icon: "🔧", description: "CI/CD automation" },
        { name: "Terraform", proficiency: 80, icon: "🏗️", description: "Infrastructure as code" }
      ]
    }
  };

  const categories = Object.keys(technologies);

  const stats = [
    { value: "25+", label: "Technologies Mastered" },
    { value: "150+", label: "Projects Delivered" },
    { value: "8+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Engineering Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Our <span className="text-red-600 dark:text-red-500">Technology Stack</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and frameworks we master to deliver exceptional digital solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const tech = technologies[category];
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30 scale-105'
                    : 'bg-white dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-white/10 hover:border-red-500/40'
                }`}
              >
                <Icon name={tech.icon} size={16} />
                <span>{tech.title}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Grid */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-white/[0.03] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl shadow-red-950/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies[activeCategory].techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group p-5 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-red-500/30 dark:hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Tech Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl" role="img" aria-label={tech.name}>{tech.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors text-base">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{tech.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-extrabold text-red-600 dark:text-red-400 font-mono">
                      {tech.proficiency}%
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Proficiency</div>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div className="relative mb-3">
                  <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.proficiency}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bg-gradient-to-r from-red-600 to-rose-500 h-2 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-medium">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                {/* Stars and Level */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-200/50 dark:border-white/5">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={13}
                        className={
                          i < Math.floor(tech.proficiency / 20)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                    {tech.proficiency >= 90 ? 'Expert' : tech.proficiency >= 80 ? 'Advanced' : 'Intermediate'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 shadow-md"
            >
              <div className="text-3xl sm:text-4xl font-black text-red-600 dark:text-red-500 mb-1 font-mono">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;