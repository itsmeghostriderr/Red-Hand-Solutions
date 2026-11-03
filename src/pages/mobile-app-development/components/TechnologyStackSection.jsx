import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Server, 
  Database, 
  Settings, 
  Layers, 
  Zap, 
  Code, 
  Cloud, 
  HardDrive, 
  Package, 
  Send, 
  Palette, 
  Shield, 
  TrendingUp,
  CreditCard,
  Share2,
  BarChart3,
  Bell,
  MapPin,
  Download,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import ConsultationModal from '../../../components/ConsultationModal';

const iconMap = {
  Smartphone,
  Server,
  Database,
  Settings,
  Layers,
  Zap,
  Code,
  Cloud,
  HardDrive,
  Package,
  Send,
  Palette,
  CreditCard,
  Share2,
  BarChart3,
  Bell,
  MapPin,
  CloudLightning: Zap
};

const TechnologyStackSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const technologyCategories = {
    frontend: {
      title: 'Frontend Development',
      description: 'Modern frameworks and tools for creating exceptional user interfaces',
      icon: 'Smartphone',
      technologies: [
        {
          name: 'React Native',
          description: 'Cross-platform mobile development with native performance',
          proficiency: 95,
          projects: 120,
          icon: 'Layers',
          features: ['Hot Reload', 'Native Modules', 'Code Reusability', 'Performance']
        },
        {
          name: 'Flutter',
          description: "Google's UI toolkit for beautiful, natively compiled applications",
          proficiency: 88,
          projects: 45,
          icon: 'Zap',
          features: ['Single Codebase', 'Fast Development', 'Custom Widgets', 'Hot Reload']
        },
        {
          name: 'Swift (iOS)',
          description: 'Native iOS development for optimal performance and user experience',
          proficiency: 92,
          projects: 80,
          icon: 'Smartphone',
          features: ['Native Performance', 'iOS Guidelines', 'App Store Optimization', 'Latest Features']
        },
        {
          name: 'Kotlin (Android)',
          description: 'Modern Android development with enhanced productivity',
          proficiency: 90,
          projects: 85,
          icon: 'Smartphone',
          features: ['Jetpack Compose', 'Material Design', 'Kotlin Coroutines', 'Android X']
        }
      ]
    },
    backend: {
      title: 'Backend Development',
      description: 'Robust server-side solutions and API development',
      icon: 'Server',
      technologies: [
        {
          name: 'Node.js',
          description: 'JavaScript runtime for scalable server-side applications',
          proficiency: 93,
          projects: 150,
          icon: 'Code',
          features: ['Express.js', 'RESTful APIs', 'Real-time Apps', 'Microservices']
        },
        {
          name: 'Python Django',
          description: 'High-level Python framework for rapid development',
          proficiency: 87,
          projects: 65,
          icon: 'Database',
          features: ['Admin Panel', 'ORM', 'Security', 'Scalability']
        },
        {
          name: 'Firebase',
          description: "Google's platform for mobile and web application development",
          proficiency: 91,
          projects: 95,
          icon: 'Cloud',
          features: ['Real-time Database', 'Authentication', 'Cloud Functions', 'Analytics']
        },
        {
          name: 'AWS Services',
          description: 'Comprehensive cloud computing platform for scalable solutions',
          proficiency: 85,
          projects: 70,
          icon: 'Cloud',
          features: ['EC2', 'Lambda', 'RDS', 'S3 Storage']
        }
      ]
    },
    database: {
      title: 'Database Solutions',
      description: 'Efficient data storage and management systems',
      icon: 'Database',
      technologies: [
        {
          name: 'MongoDB',
          description: 'NoSQL database for flexible and scalable data storage',
          proficiency: 89,
          projects: 110,
          icon: 'Database',
          features: ['Document Storage', 'Horizontal Scaling', 'Flexible Schema', 'Aggregation']
        },
        {
          name: 'PostgreSQL',
          description: 'Advanced open-source relational database system',
          proficiency: 86,
          projects: 75,
          icon: 'HardDrive',
          features: ['ACID Compliance', 'JSON Support', 'Full-text Search', 'Extensions']
        },
        {
          name: 'Redis',
          description: 'In-memory data structure store for caching and sessions',
          proficiency: 82,
          projects: 60,
          icon: 'Zap',
          features: ['Caching', 'Session Storage', 'Pub/Sub', 'Data Structures']
        },
        {
          name: 'SQLite',
          description: 'Lightweight database engine for mobile applications',
          proficiency: 94,
          projects: 130,
          icon: 'Smartphone',
          features: ['Embedded Database', 'Zero Configuration', 'Cross-platform', 'ACID Transactions']
        }
      ]
    },
    tools: {
      title: 'Development Tools',
      description: 'Essential tools and platforms for efficient development workflow',
      icon: 'Settings',
      technologies: [
        {
          name: 'Git & GitHub',
          description: 'Version control and collaborative development platform',
          proficiency: 96,
          projects: 200,
          icon: 'Code',
          features: ['Version Control', 'Collaboration', 'CI/CD', 'Code Review']
        },
        {
          name: 'Docker',
          description: 'Containerization platform for consistent deployment',
          proficiency: 83,
          projects: 55,
          icon: 'Package',
          features: ['Containerization', 'Microservices', 'Scalability', 'DevOps']
        },
        {
          name: 'Figma',
          description: 'Collaborative design tool for UI/UX development',
          proficiency: 88,
          projects: 140,
          icon: 'Palette',
          features: ['Design Systems', 'Prototyping', 'Collaboration', 'Developer Handoff']
        },
        {
          name: 'Postman',
          description: 'API development and testing platform',
          proficiency: 91,
          projects: 180,
          icon: 'Send',
          features: ['API Testing', 'Documentation', 'Monitoring', 'Collaboration']
        }
      ]
    }
  };

  const handleDownloadTechGuide = () => {
    const lines = [
      'RED HAND SOLUTIONS - MOBILE TECHNOLOGY MATRIX',
      '==============================================\n'
    ];
    Object.entries(technologyCategories).forEach(([catKey, cat]) => {
      lines.push(`CATEGORY: ${cat.title.toUpperCase()}\n${cat.description}\n`);
      cat.technologies.forEach(t => {
        lines.push(` - ${t.name} (Proficiency: ${t.proficiency}%, ${t.projects}+ projects)`);
        lines.push(`   Features: ${t.features.join(', ')}`);
        lines.push(`   Role: ${t.description}`);
      });
      lines.push('\n----------------------------------------------\n');
    });
    lines.push('Contact: +91 6352412728 | redhand.solution@gmail.com | Rajkot, Gujarat');

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Red-Hand-Solutions-Technology-Stack.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentCategory = technologyCategories[activeCategory];

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" /> Enterprise Engineering Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Cutting-Edge <br />
            <span className="text-red-600 dark:text-red-500">Technologies We Use</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            We leverage the latest technologies and frameworks to build robust, scalable, and high-performance mobile applications that meet modern business requirements.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {Object.entries(technologyCategories).map(([key, cat]) => {
            const isSelected = activeCategory === key;
            const IconComp = iconMap[cat.icon] || Code;

            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30'
                    : 'glass-card border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-red-500/40'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 text-left">
          {currentCategory.technologies.map((tech, index) => {
            const TechIcon = iconMap[tech.icon] || Code;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="p-7 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 hover:border-red-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 flex items-center justify-center">
                        <TechIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {tech.name}
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                          {tech.projects}+ delivered projects
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 border border-red-500/20">
                      {tech.proficiency}%
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Proficiency Bar */}
                  <div className="mb-5">
                    <div className="w-full bg-gray-100 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-red-600 to-red-500 h-full rounded-full transition-all duration-700"
                        style={{ width: `${tech.proficiency}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2">
                    Key Features
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.features.map((feat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.06] text-gray-700 dark:text-gray-300 text-[11px] font-medium"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3 Architecture Pillars */}
        <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 mb-16 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
            Why We Choose These Technologies
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Peak Performance</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Selected technologies ensure optimal memory footprint, sub-100ms API responses, and smooth 60fps rendering across budget and flagship mobile devices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Hardened Security</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Enterprise encryption standards, secure biometric tokens, OWASP mobile top-10 compliance, and isolated data containers protecting corporate IP.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">Infinite Scalability</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Cloud-native architecture designed to grow seamlessly from 1,000 initial beta testers to millions of concurrent active users without downtime.
              </p>
            </div>
          </div>
        </div>

        {/* Seamless Integrations */}
        <div className="rounded-3xl glass-card border border-gray-200 dark:border-white/10 p-8 sm:p-12 mb-14 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            Seamless 3rd-Party Integrations
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
            We integrate with top-tier third-party ecosystems, payment gateways, and backend protocols
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Payment Gateways', icon: CreditCard },
              { name: 'Social Media', icon: Share2 },
              { name: 'Analytics', icon: BarChart3 },
              { name: 'Push Notifications', icon: Bell },
              { name: 'Maps & Location', icon: MapPin },
              { name: 'Cloud Storage', icon: Cloud }
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5 flex flex-col items-center justify-center gap-2 hover:border-red-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center">
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsConsultOpen(true)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4" /> Consult Our Tech Experts
          </button>
          <button
            onClick={handleDownloadTechGuide}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-white/[0.06] hover:bg-gray-100 dark:hover:bg-white/[0.12] text-gray-800 dark:text-gray-200 font-bold text-xs uppercase tracking-wider border border-gray-200 dark:border-white/10 flex items-center justify-center gap-2 transition-all"
          >
            <Download className="w-4 h-4 text-red-500" /> Technology Comparison Guide (.txt)
          </button>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={`Mobile Architecture Stack (${currentCategory.title})`}
      />
    </>
  );
};

export default TechnologyStackSection;