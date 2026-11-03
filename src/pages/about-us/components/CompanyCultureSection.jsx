import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyCultureSection = () => {
  const [activeTab, setActiveTab] = useState('office');

  const cultureHighlights = [
    {
      title: "Innovation-First Mindset",
      description: "We encourage experimentation and creative problem-solving. Every team member is empowered to propose new ideas and solutions.",
      icon: "Lightbulb"
    },
    {
      title: "Collaborative Environment",
      description: "Cross-functional teams work together seamlessly, sharing knowledge and supporting each other to achieve common goals.",
      icon: "Users"
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training programs, certifications, and conference attendance to stay ahead of technology trends.",
      icon: "BookOpen"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and wellness programs ensure our team maintains a healthy work-life balance.",
      icon: "Heart"
    }
  ];

  const officeGallery = [
    {
      title: "Modern Workspace",
      description: "Our Rajkot office features open collaborative spaces, modern workstations, and comfortable meeting rooms designed for productivity.",
      image: "/src/assets/images/rhs_modern_workspace_1793703734955.jpg"
    },
    {
      title: "Innovation Lab",
      description: "Dedicated space for R&D activities, prototyping, and testing new technologies with state-of-the-art equipment.",
      image: "/assets/images/content/content_39_photo-1581091226825-a6a2a5aee1.jpg"
    },
    {
      title: "Collaboration Zones",
      description: "Informal meeting areas and brainstorming spaces that foster creativity and spontaneous discussions.",
      image: "/assets/images/content/content_16_photo-1556761175-b413da4baf72.jpg"
    },
    {
      title: "Recreation Area",
      description: "Relaxation zone with games, comfortable seating, and refreshment facilities for team bonding and stress relief.",
      image: "/assets/images/content/content_1_photo-1556742049-0cfed4f6a45d.jpg"
    }
  ];

  const teamEvents = [
    {
      title: "Annual Tech Summit",
      description: "Our flagship event bringing together the entire team to share knowledge, celebrate achievements, and plan for the future.",
      image: "/assets/images/content/content_18_photo-1540575467063-178a50c2df.jpg",
      date: "December 2023"
    },
    {
      title: "Quarterly Team Outings",
      description: "Regular team building activities including adventure trips, cultural events, and recreational activities across Gujarat.",
      image: "/assets/images/content/content_19_photo-1511632765486-a01980e01a.jpg",
      date: "Every Quarter"
    },
    {
      title: "Innovation Hackathons",
      description: "Internal hackathons where teams compete to develop innovative solutions, fostering creativity and technical excellence.",
      image: "/assets/images/content/content_20_photo-1504384308090-c894fdcc53.jpg",
      date: "Bi-annual"
    },
    {
      title: "Client Appreciation Events",
      description: "Special events to celebrate successful project completions and strengthen relationships with our valued clients.",
      image: "/assets/images/content/content_21_photo-1515187029135-18ee286d81.jpg",
      date: "Project Milestones"
    }
  ];

  const clientMeetings = [
    {
      title: "Project Kickoff Meetings",
      description: "Face-to-face meetings with clients to understand requirements, set expectations, and build strong working relationships.",
      image: "/assets/images/content/content_22_photo-1552664730-d307ca884978.jpg"
    },
    {
      title: "Progress Review Sessions",
      description: "Regular client meetings to demonstrate progress, gather feedback, and ensure alignment with project goals.",
      image: "/assets/images/content/content_23_photo-1600880292203-757bb62b4b.jpg"
    },
    {
      title: "Solution Demonstrations",
      description: "Interactive sessions where we showcase developed solutions and train client teams on new systems and processes.",
      image: "/assets/images/content/content_24_photo-1559136555-9303baea8ebd.jpg"
    },
    {
      title: "Strategic Consulting Sessions",
      description: "High-level meetings with client leadership to discuss technology strategy, digital transformation roadmaps, and future opportunities.",
      image: "/assets/images/content/content_26_photo-1507003211169-0a1dd7228f.jpg"
    }
  ];

  const tabs = [
    { id: 'office', label: 'Office Spaces', icon: 'Building', data: officeGallery },
    { id: 'events', label: 'Team Events', icon: 'Calendar', data: teamEvents },
    { id: 'meetings', label: 'Client Meetings', icon: 'Users', data: clientMeetings }
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
            <span>Life at Red Hand</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Our Company <span className="text-red-600 dark:text-red-500">Culture & Values</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Red Hand Solutions, we've built more than just a company—we've created a community of passionate professionals who believe in the power of technology to transform businesses and lives.
          </p>
        </motion.div>

        {/* Culture Highlights Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cultureHighlights.map((highlight, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg text-left space-y-4 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 text-white flex items-center justify-center shadow-md shadow-red-600/30">
                <Icon name={highlight.icon} size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{highlight.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Gallery Tabbed Showcase */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl mb-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
            Behind the Scenes at Red Hand Solutions
          </h3>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-gray-100 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300 hover:border-red-500/40 border border-transparent'
                }`}
              >
                <Icon name={tab.icon} size={15} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 gap-6 text-left"
            >
              {tabs.find(t => t.id === activeTab).data.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden aspect-[16/10] border border-gray-200 dark:border-white/10 shadow-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-xs text-gray-200 line-clamp-2 leading-relaxed">{item.description}</p>
                    {item.date && (
                      <span className="inline-block text-[10px] text-red-300 font-mono pt-1">{item.date}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Culture Metrics */}
        <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/10 shadow-xl mb-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Our Culture in Numbers</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-8">The metrics that reflect our commitment to excellence and team satisfaction</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-3xl sm:text-4xl font-black text-red-600 dark:text-red-500 font-mono block">95%</span>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1 block">Employee Satisfaction</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-3xl sm:text-4xl font-black text-rose-600 dark:text-rose-500 font-mono block">2.5</span>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1 block">Years Avg. Tenure</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-3xl sm:text-4xl font-black text-red-700 dark:text-red-400 font-mono block">40+</span>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1 block">Team Events/Year</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono block">100+</span>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1 block">Training Hours/Employee</span>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
            Want to Be Part of Our Story?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our team of passionate professionals and help us continue building innovative solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                alert("Exploring open positions in Frontend, Backend, Flutter, and UI/UX Design at Red Hand Solutions Rajkot.");
              }}
              className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-red-600/30 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <Icon name="Users" size={16} />
              <span>View Open Positions</span>
            </button>
            <a
              href="mailto:redhand.solution@gmail.com?subject=Resume%20for%20Job%20Application"
              className="border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-sm transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <Icon name="Mail" size={16} />
              <span>Send Your Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCultureSection;