import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const GrowthMetricsSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    teamSize: 0,
    experience: 0
  });

  const finalValues = {
    projects: 200,
    clients: 85,
    teamSize: 25,
    experience: 6
  };

  useEffect(() => {
    let currentStep = 0;
    const steps = 40;
    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);
      setCounters({
        projects: Math.floor(progress * finalValues.projects),
        clients: Math.floor(progress * finalValues.clients),
        teamSize: Math.floor(progress * finalValues.teamSize),
        experience: Math.floor(progress * finalValues.experience)
      });
      if (progress >= 1) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const growthTimeline = [
    {
      year: "2018",
      title: "Foundation Year",
      metrics: { projects: 5, clients: 3, teamSize: 3, revenue: "₹2L" },
      highlights: ["Company established in Rajkot", "First web development projects", "Local client base development"]
    },
    {
      year: "2019",
      title: "Early Growth",
      metrics: { projects: 15, clients: 8, teamSize: 6, revenue: "₹8L" },
      highlights: ["Mobile app development services", "First enterprise client", "Team expansion"]
    },
    {
      year: "2020",
      title: "Digital Transformation",
      metrics: { projects: 35, clients: 18, teamSize: 10, revenue: "₹18L" },
      highlights: ["COVID-19 digital solutions", "Cloud services introduction", "Remote work capabilities"]
    },
    {
      year: "2021",
      title: "Technology Partnerships",
      metrics: { projects: 65, clients: 32, teamSize: 15, revenue: "₹35L" },
      highlights: ["AWS & Google Cloud partnerships", "AI/ML services launch", "Gujarat market expansion"]
    },
    {
      year: "2022",
      title: "Industry Recognition",
      metrics: { projects: 120, clients: 55, teamSize: 20, revenue: "₹65L" },
      highlights: ["Best IT Solutions Provider award", "100+ projects milestone", "Western India expansion"]
    },
    {
      year: "2023",
      title: "Innovation Hub",
      metrics: { projects: 170, clients: 70, teamSize: 23, revenue: "₹95L" },
      highlights: ["R&D division establishment", "Blockchain solutions", "Startup incubation program"]
    },
    {
      year: "2024",
      title: "Market Leadership",
      metrics: { projects: 200, clients: 85, teamSize: 25, revenue: "₹1.2Cr" },
      highlights: ["200+ projects completed", "Market leadership position", "Community initiatives expansion"]
    }
  ];

  const keyMetrics = [
    {
      title: "Project Success Rate",
      value: "98%",
      description: "Projects delivered on time and within budget",
      icon: "Target",
      trend: "+2% from last year"
    },
    {
      title: "Client Retention Rate",
      value: "95%",
      description: "Clients who continue working with us year over year",
      icon: "Heart",
      trend: "+5% from last year"
    },
    {
      title: "Average Project Value",
      value: "₹6L",
      description: "Average value of projects delivered to clients",
      icon: "TrendingUp",
      trend: "+25% from last year"
    },
    {
      title: "Team Satisfaction",
      value: "95%",
      description: "Employee satisfaction and engagement score",
      icon: "Smile",
      trend: "+3% from last year"
    }
  ];

  const technologyAdoption = [
    {
      category: "Cloud Technologies",
      technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes"],
      adoptionRate: 95,
      projects: 150
    },
    {
      category: "Frontend Technologies",
      technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"],
      adoptionRate: 90,
      projects: 180
    },
    {
      category: "Backend Technologies",
      technologies: ["Node.js", "Python", "Java", "PHP", "MongoDB"],
      adoptionRate: 88,
      projects: 170
    },
    {
      category: "Emerging Technologies",
      technologies: ["AI/ML", "Blockchain", "IoT", "AR/VR", "Microservices"],
      adoptionRate: 75,
      projects: 45
    }
  ];

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
            <span>Verified Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Our Growth <span className="text-red-600 dark:text-red-500">Journey in Numbers</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From a small startup to Gujarat's leading IT solutions provider, our growth story is reflected in the numbers that matter most to our clients and team.
          </p>
        </motion.div>

        {/* Current Metrics Counter Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl mb-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Current Achievements</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-10">Real-time metrics showcasing our current position in the market</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-4xl sm:text-5xl font-black text-red-600 dark:text-red-500 font-mono block">
                {counters.projects}+
              </span>
              <p className="text-sm font-bold text-gray-900 dark:text-white mt-2">Projects Completed</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Across various industries</p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-4xl sm:text-5xl font-black text-rose-600 dark:text-rose-500 font-mono block">
                {counters.clients}+
              </span>
              <p className="text-sm font-bold text-gray-900 dark:text-white mt-2">Happy Clients</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Across Gujarat & India</p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-4xl sm:text-5xl font-black text-red-700 dark:text-red-400 font-mono block">
                {counters.teamSize}+
              </span>
              <p className="text-sm font-bold text-gray-900 dark:text-white mt-2">Team Members</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Expert professionals</p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-4xl sm:text-5xl font-black text-amber-600 dark:text-amber-500 font-mono block">
                {counters.experience}+
              </span>
              <p className="text-sm font-bold text-gray-900 dark:text-white mt-2">Years Experience</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">In the industry</p>
            </div>
          </div>
        </div>

        {/* Year over Year Timeline Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Year-over-Year Growth Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthTimeline.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg text-left space-y-4 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
                  <span className="text-2xl font-black text-red-600 dark:text-red-400 font-mono">{item.year}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200">
                    {item.title}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-gray-50 dark:bg-white/[0.02]">
                    <span className="font-bold text-red-600 dark:text-red-400 block text-base font-mono">{item.metrics.projects}</span>
                    <span className="text-gray-500 dark:text-gray-400">Projects</span>
                  </div>
                  <div className="p-2 rounded-xl bg-gray-50 dark:bg-white/[0.02]">
                    <span className="font-bold text-gray-900 dark:text-white block text-base font-mono">{item.metrics.clients}</span>
                    <span className="text-gray-500 dark:text-gray-400">Clients</span>
                  </div>
                  <div className="p-2 rounded-xl bg-gray-50 dark:bg-white/[0.02]">
                    <span className="font-bold text-gray-900 dark:text-white block text-base font-mono">{item.metrics.teamSize}</span>
                    <span className="text-gray-500 dark:text-gray-400">Team</span>
                  </div>
                  <div className="p-2 rounded-xl bg-gray-50 dark:bg-white/[0.02]">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-base font-mono">{item.metrics.revenue}</span>
                    <span className="text-gray-500 dark:text-gray-400">Revenue</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-white/5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Key Performance Indicators
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((kpi, index) => (
              <div
                key={index}
                className="p-7 rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center mx-auto shadow-md shadow-red-600/30">
                  <Icon name={kpi.icon} size={22} />
                </div>
                <div className="text-4xl font-black text-gray-900 dark:text-white font-mono">{kpi.value}</div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white">{kpi.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{kpi.description}</p>
                <div className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-1">
                  <Icon name="TrendingUp" size={13} />
                  <span>{kpi.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Adoption & Expertise */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl text-left">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
              Technology Adoption & Expertise
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our continuous investment in learning and adopting new technologies keeps us at the forefront of innovation.
            </p>
          </div>

          <div className="space-y-6">
            {technologyAdoption.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{cat.category}</h4>
                  <span className="text-xl font-black text-red-600 dark:text-red-400 font-mono">{cat.adoptionRate}%</span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-600 to-rose-500 h-2.5 rounded-full"
                    style={{ width: `${cat.adoptionRate}%` }}
                  />
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/10">
                      {t}
                    </span>
                  ))}
                  <span className="text-xs text-gray-500 dark:text-gray-400 self-center ml-auto font-medium">
                    Used in {cat.projects}+ projects
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthMetricsSection;