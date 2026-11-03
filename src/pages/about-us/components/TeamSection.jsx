import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Prayag Sapariya",
      position: "Founder & CEO",
      experience: "12+ Years",
      image: "/assets/images/team/prayag_sapariya.png",
      backupImage: "/assets/images/team/backup/prayag_sapariya_backup.png",
      specializations: ["Strategic Planning", "Business Development", "Client Relations", "Technology Vision"],
      certifications: ["MBA - IIM Ahmedabad", "AWS Solutions Architect", "Google Cloud Professional"],
      bio: `Prayag founded Red Hand Solutions with a vision to democratize technology access for Gujarat businesses. With over 12 years of experience in IT consulting and business development, he has led the company from a 3-person startup to Gujarat's leading IT solutions provider.\n\nHis expertise in strategic planning and deep understanding of the local business landscape has been instrumental in building long-term client relationships and driving sustainable growth.`,
      achievements: [
        "Founded Red Hand Solutions in 2018",
        "Led 200+ successful project deliveries",
        "Established partnerships with AWS, Google Cloud, Microsoft",
        "Recognized as 'IT Entrepreneur of the Year' by Gujarat IT Association"
      ],
      contact: {
        email: "prayag.rhs@gmail.com",
        linkedin: "https://www.linkedin.com/in/prayagsapariya/"
      }
    },
    {
      id: 2,
      name: "Priyansh Baldha",
      position: "CTO & Lead Architect",
      experience: "10+ Years",
      image: "/assets/images/team/priyansh_baldha.png",
      backupImage: "/assets/images/team/backup/priyansh_baldha_backup.png",
      specializations: ["System Architecture", "Cloud Solutions", "AI/ML Implementation", "DevOps"],
      certifications: ["AWS Solutions Architect Professional", "Google Cloud Architect", "Microsoft Azure Expert"],
      bio: `Priyansh leads our technical vision and ensures that Red Hand Solutions stays at the forefront of technology innovation. With extensive experience in enterprise architecture and distributed systems, he has designed scalable solutions for clients across various industries.\n\nHis expertise in cloud technologies and emerging tech like AI/ML has enabled our clients to achieve significant competitive advantages through digital transformation.`,
      achievements: [
        "Architected 150+ cloud migration projects",
        "Led AI/ML implementation for 25+ clients",
        "Established DevOps practices reducing deployment time by 70%",
        "Speaker at Gujarat Tech Summit 2023"
      ],
      contact: {
        email: "priyansh.rhs@gmail.com",
        linkedin: "https://www.linkedin.com/in/priyansh-baldha/"
      }
    },
    {
      id: 3,
      name: "Aryan Virani",
      position: "Head of Development",
      experience: "8+ Years",
      image: "/assets/images/team/aryan_virani.png",
      backupImage: "/assets/images/team/backup/aryan_virani_backup.png",
      specializations: ["Full-Stack Development", "Mobile Apps", "Web Applications", "API Development"],
      certifications: ["React Certified Developer", "Node.js Professional", "MongoDB Certified"],
      bio: `Aryan oversees all development activities and ensures code quality across projects. With expertise in modern web technologies and mobile app development, he has successfully delivered complex applications for clients ranging from startups to large enterprises.\n\nHis focus on clean code practices and agile methodologies has resulted in highly maintainable and scalable applications that continue to serve our clients' evolving needs.`,
      achievements: [
        "Led development of 100+ web applications",
        "Built 50+ mobile apps with 4.8+ app store ratings",
        "Implemented microservices architecture for enterprise clients",
        "Mentored 15+ junior developers"
      ],
      contact: {
        email: "aryan.rhsolution@gmail.com",
        linkedin: "https://www.linkedin.com/in/aryan-virani-522052224/"
      }
    },
    {
      id: 4,
      name: "Digvijay Kanzariya",
      position: "UI/UX Design Lead",
      experience: "6+ Years",
      image: "/assets/images/team/digvijay_kanzariya.jpeg",
      backupImage: "/assets/images/team/backup/digvijay_kanzariya_backup.jpeg",
      specializations: ["User Experience Design", "Interface Design", "Design Systems", "User Research"],
      certifications: ["Google UX Design Certificate", "Adobe Certified Expert", "Figma Professional"],
      bio: `Digvijay brings creativity and user-centric thinking to every project. With a strong background in interaction design and human-computer psychology, he ensures that all our solutions are not just functional but also intuitive and engaging for end users.\n\nHis research-driven approach to design has resulted in applications with exceptional user satisfaction scores and has helped our clients achieve better user engagement and conversion rates.`,
      achievements: [
        "Designed interfaces for 80+ applications",
        "Improved user engagement by 45% on average",
        "Established design system used across all projects",
        "Won 'Best UI/UX Design' at Gujarat Design Awards 2023"
      ],
      contact: {
        email: "digvijaykanzariya@gmail.com",
        linkedin: "https://www.linkedin.com/in/digvijay-kanzariya-/"
      }
    },
    {
      id: 5,
      name: "Shyam Kanzariya",
      position: "DevOps & Security Lead",
      experience: "7+ Years",
      image: "/assets/images/team/shyam_kanzariya.jpeg",
      backupImage: "/assets/images/team/backup/shyam_kanzariya_backup.jpeg",
      specializations: ["DevOps Automation", "Cloud Security", "Infrastructure Management", "CI/CD Pipelines"],
      certifications: ["AWS DevOps Professional", "Certified Kubernetes Administrator", "CISSP"],
      bio: `Shyam ensures that our applications are not only well-built but also secure and efficiently deployed. His expertise in DevOps practices and infrastructure security has enabled our clients to achieve faster time-to-market while maintaining the highest security standards.\n\nHis implementation of automated deployment pipelines and security best practices has resulted in 99.9% uptime for client applications and zero security incidents.`,
      achievements: [
        "Implemented CI/CD for 120+ projects",
        "Achieved 99.9% uptime across all client applications",
        "Reduced deployment time from hours to minutes",
        "Established security protocols with zero breaches"
      ],
      contact: {
        email: "kanzariyashyam885@gmail.com",
        linkedin: "https://www.linkedin.com/in/kanzariya-shyam/"
      }
    },
    {
      id: 6,
      name: "Darshan Tala",
      position: "Business Analyst & PM",
      experience: "9+ Years",
      image: "/assets/images/team/darshan_tala.png",
      backupImage: "/assets/images/team/backup/darshan_tala_backup.png",
      specializations: ["Project Management", "Business Analysis", "Agile Methodologies", "Client Communication"],
      certifications: ["PMP Certified", "Scrum Master", "Business Analysis Professional"],
      bio: `Darshan bridges the gap between business requirements and technical implementation. With extensive experience in agile project management and enterprise analysis, he ensures that every project is delivered on time, within budget, and exceeds client expectations.\n\nHis systematic approach to project management and excellent communication skills have resulted in 98% client satisfaction rate and long-term partnerships with key clients.`,
      achievements: [
        "Managed 150+ projects with 98% success rate",
        "Implemented Agile practices across all teams",
        "Achieved average project delivery 15% ahead of schedule",
        "Maintained 98% client satisfaction rating"
      ],
      contact: {
        email: "taladarshan47@gmail.com",
        linkedin: "https://www.linkedin.com/in/darshantala2714/"
      }
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
            <span>Leadership & Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Meet Our <span className="text-red-600 dark:text-red-500">Expert Team</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of technology experts, designers, and strategists brings together decades of experience to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelectedMember(member)}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-red-600/15 transition-all duration-300 hover:-translate-y-2 cursor-pointer text-left"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => {
                    if (member.backupImage && e.target.src !== member.backupImage) {
                      e.target.src = member.backupImage;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end text-white">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-xs text-red-400 font-semibold">{member.position}</p>
                  </div>
                  <span className="text-[11px] bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-md">
                    {member.experience}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {member.specializations.slice(0, 3).map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 border border-red-200/40 dark:border-red-500/20"
                    >
                      {spec}
                    </span>
                  ))}
                  {member.specializations.length > 3 && (
                    <span className="px-2 py-1 rounded-lg text-[11px] font-medium text-gray-500 dark:text-gray-400">
                      +{member.specializations.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-red-600 dark:text-red-400 font-bold group-hover:translate-x-1 transition-transform">
                  <span>View Full Profile & Bio</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
              Our Team by Numbers
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              The expertise and experience that drives our success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-3xl sm:text-4xl font-black text-red-600 dark:text-red-500 font-mono block">25+</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1 block">Team Members</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-3xl sm:text-4xl font-black text-rose-600 dark:text-rose-500 font-mono block">50+</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1 block">Certifications</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-3xl sm:text-4xl font-black text-red-700 dark:text-red-400 font-mono block">150+</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1 block">Years Combined Experience</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono block">98%</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1 block">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedMember(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white dark:bg-[#0D0F18] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-left"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <Icon name="X" size={20} />
              </button>

              <div className="grid md:grid-cols-12">
                <div className="md:col-span-5 relative h-72 md:h-auto bg-gray-900">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    onError={(e) => {
                      if (selectedMember.backupImage && e.target.src !== selectedMember.backupImage) {
                        e.target.src = selectedMember.backupImage;
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
                    <p className="text-red-400 font-semibold text-sm">{selectedMember.position}</p>
                    <p className="text-xs text-gray-300 mt-1 font-mono">{selectedMember.experience} in Tech</p>
                  </div>
                </div>

                <div className="md:col-span-7 p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-red-600 dark:text-red-400 mb-2">About</h4>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                      {selectedMember.bio.split('\n\n').map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-red-600 dark:text-red-400 mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMember.specializations.map((spec, sIdx) => (
                        <span key={sIdx} className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-red-600 dark:text-red-400 mb-2">Certifications</h4>
                    <div className="space-y-1.5">
                      {selectedMember.certifications.map((cert, cIdx) => (
                        <div key={cIdx} className="flex items-center space-x-2 text-xs text-gray-700 dark:text-gray-300 font-medium">
                          <Icon name="CheckCircle" size={14} className="text-emerald-500" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-red-600 dark:text-red-400 mb-2">Key Achievements</h4>
                    <div className="space-y-1.5">
                      {selectedMember.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start space-x-2 text-xs text-gray-700 dark:text-gray-300">
                          <Icon name="Star" size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-3 border-t border-gray-100 dark:border-white/5">
                    <a
                      href={`mailto:${selectedMember.contact.email}`}
                      className="px-4 py-2 rounded-xl bg-red-600 text-white font-semibold text-xs hover:bg-red-700 transition-colors flex items-center space-x-2"
                    >
                      <Icon name="Mail" size={14} />
                      <span>{selectedMember.contact.email}</span>
                    </a>
                    {selectedMember.contact.linkedin && (
                      <a
                        href={selectedMember.contact.linkedin.startsWith('http') ? selectedMember.contact.linkedin : `https://${selectedMember.contact.linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 font-semibold text-xs hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center space-x-2"
                      >
                        <Icon name="Linkedin" size={14} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
