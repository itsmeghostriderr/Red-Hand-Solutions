import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Play, 
  Download, 
  Calendar, 
  MessageSquare, 
  Search, 
  RefreshCw, 
  Sparkles, 
  X,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import ProjectModal from './components/ProjectModal';
import StatsSection from './components/StatsSection';
import IndustryShowcase from './components/IndustryShowcase';
import ConsultationModal from '../../components/ConsultationModal';

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [consultationPreFill, setConsultationPreFill] = useState('');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Complete Projects Data
  const projects = [
    {
      id: 1,
      title: "Smart Textile Export Platform",
      description: "Comprehensive e-commerce platform connecting Rajkot textile manufacturers with global buyers, featuring real-time inventory, automated quotations, and multi-currency support.",
      fullDescription: `A revolutionary B2B e-commerce platform designed specifically for Gujarat's textile export industry. The platform bridges the gap between local manufacturers and international buyers, providing a seamless digital marketplace with advanced features tailored to textile business needs.

The solution includes sophisticated inventory management, automated quotation systems, multi-language support, and integrated logistics tracking. Built with scalability in mind, the platform handles thousands of product listings and concurrent users while maintaining optimal performance.`,
      client: "Gujarat Textile Exporters Association",
      industry: "textile",
      type: "e-commerce",
      image: "/src/assets/images/rhs_textile_digitization_1793703734254.jpg",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "Socket.io"],
      timeline: "8 months",
      teamSize: 6,
      status: "completed",
      hasLiveDemo: true,
      metrics: [
        { label: "Revenue Increase", value: 250, type: "percentage" },
        { label: "Global Reach", value: 45, type: "countries" },
        { label: "Order Processing", value: 75, type: "percentage" },
        { label: "Cost Reduction", value: 40, type: "percentage" }
      ],
      challenge: `The textile export industry in Rajkot faced significant challenges in reaching global markets. Traditional methods of business development were time-consuming and limited in scope. Manufacturers struggled with manual quotation processes, inventory tracking, and communication barriers with international buyers.`,
      solution: `We developed a comprehensive B2B platform that automates the entire export process. The solution includes AI-powered product matching, automated quotation generation, real-time inventory synchronization, and integrated communication tools with multi-language support.`,
      implementationSteps: [
        "Market research and requirement analysis with 50+ textile exporters",
        "Platform architecture design with scalability and security focus",
        "Development of core modules: inventory, quotations, buyer matching",
        "Integration with payment gateways and logistics partners",
        "Comprehensive testing with real export scenarios",
        "Phased rollout with training and ongoing support"
      ],
      testimonial: {
        content: "This platform transformed our export business completely. We've connected with buyers from 45 countries and increased our revenue by 250%. The automated quotation system alone saves us 20 hours per week.",
        author: "Rajesh Patel",
        position: "Managing Director, Patel Textiles"
      }
    },
    {
      id: 2,
      title: "Chemical Inventory Management System",
      description: "Advanced inventory management system for chemical manufacturing companies with safety compliance, batch tracking, and automated reorder functionality.",
      fullDescription: `A sophisticated inventory management system specifically designed for the chemical manufacturing industry. The system addresses the unique challenges of chemical inventory management including safety compliance, batch tracking, expiration monitoring, and regulatory reporting.

Built with safety as the primary concern, the system includes comprehensive safety data sheet management, automated compliance reporting, and real-time monitoring of hazardous materials. The solution integrates with existing ERP systems and provides detailed analytics for inventory optimization.`,
      client: "Rajkot Chemical Industries Ltd",
      industry: "chemical",
      type: "web-application",
      image: "/src/assets/images/rhs_chemical_automation_1793703734919.jpg",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker"],
      timeline: "6 months",
      teamSize: 4,
      status: "completed",
      hasLiveDemo: false,
      metrics: [
        { label: "Inventory Accuracy", value: 99.5, type: "percentage" },
        { label: "Compliance Score", value: 100, type: "percentage" },
        { label: "Cost Savings", value: 15, type: "currency" },
        { label: "Processing Time", value: 60, type: "percentage" }
      ],
      challenge: `Chemical manufacturing requires strict inventory control due to safety regulations and material compatibility issues. The client was managing inventory manually, leading to compliance risks, overstocking, and potential safety hazards.`,
      solution: `We developed a comprehensive inventory management system with built-in safety protocols, automated compliance checking, and intelligent reorder algorithms. The system includes barcode scanning, batch tracking, and integration with safety management systems.`,
      implementationSteps: [
        "Safety requirement analysis and regulatory compliance study",
        "Database design for chemical properties and compatibility matrix",
        "Development of core inventory modules with safety checks",
        "Integration with existing ERP and safety management systems",
        "Comprehensive testing with actual chemical inventory data",
        "Staff training and system deployment with safety protocols"
      ],
      testimonial: {
        content: "The system has revolutionized our inventory management. We've achieved 100% compliance with safety regulations and reduced inventory costs by ₹15 lakhs annually. The automated alerts have prevented several potential safety incidents.",
        author: "Dr. Amit Shah",
        position: "Plant Manager, Rajkot Chemical Industries"
      }
    },
    {
      id: 3,
      title: "Local Services Mobile App",
      description: "On-demand service booking app connecting Rajkot residents with local service providers including plumbers, electricians, cleaners, and home maintenance.",
      fullDescription: `A comprehensive mobile application that revolutionizes how residents of Rajkot access local services. The app connects customers with verified service providers across multiple categories, ensuring quality service delivery with transparent pricing and real-time tracking.

The platform includes advanced features like service provider verification, real-time GPS tracking, in-app payments, rating systems, and customer support. Built with a focus on the local market, the app supports multiple languages and local payment methods.`,
      client: "Rajkot Municipal Corporation",
      industry: "startup",
      type: "mobile-app",
      image: "/assets/images/content/content_36_photo-1512941937669-90a1b58e7e.jpg",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "Razorpay"],
      timeline: "10 months",
      teamSize: 5,
      status: "ongoing",
      hasLiveDemo: true,
      metrics: [
        { label: "Active Users", value: 25000, type: "number" },
        { label: "Service Providers", value: 1200, type: "number" },
        { label: "Bookings/Month", value: 8500, type: "number" },
        { label: "User Satisfaction", value: 4.7, type: "rating" }
      ],
      challenge: `Residents of Rajkot struggled to find reliable local service providers, often relying on word-of-mouth recommendations. Service providers lacked a platform to reach customers efficiently, and there was no standardized pricing or quality assurance.`,
      solution: `We created a comprehensive mobile app that connects customers with verified service providers. The solution includes real-time booking, GPS tracking, secure payments, and a robust rating system to ensure quality service delivery.`,
      implementationSteps: [
        "Market research with 500+ residents and 200+ service providers",
        "App design with focus on local user preferences and behaviors",
        "Development of customer and service provider mobile applications",
        "Implementation of verification system and quality controls",
        "Integration with local payment systems and logistics",
        "Beta testing with 100 users and iterative improvements"
      ],
      testimonial: {
        content: "This app has made finding reliable service providers so easy. I've used it for plumbing, electrical work, and house cleaning. The service providers are verified and the pricing is transparent. Highly recommended!",
        author: "Priya Sharma",
        position: "Resident, Rajkot"
      }
    },
    {
      id: 4,
      title: "Healthcare Management Portal",
      description: "Comprehensive patient management system for multi-specialty hospitals with appointment scheduling, electronic health records, and telemedicine capabilities.",
      fullDescription: `A complete healthcare management solution designed for multi-specialty hospitals and clinics. The system streamlines patient care through integrated modules for appointment management, electronic health records, billing, pharmacy management, and telemedicine services.

The platform ensures HIPAA compliance and includes advanced features like AI-powered diagnosis assistance, automated appointment reminders, and comprehensive reporting for hospital administration. The system supports multiple user roles and provides seamless integration with existing hospital infrastructure.`,
      client: "Rajkot Medical Center",
      industry: "healthcare",
      type: "web-application",
      image: "/assets/images/content/content_37_medical-appointment-doctor-hea.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS", "Twilio"],
      timeline: "12 months",
      teamSize: 8,
      status: "completed",
      hasLiveDemo: false,
      metrics: [
        { label: "Patient Records", value: 50000, type: "number" },
        { label: "Appointment Efficiency", value: 85, type: "percentage" },
        { label: "Paper Reduction", value: 90, type: "percentage" },
        { label: "Patient Satisfaction", value: 4.8, type: "rating" }
      ],
      challenge: `The hospital was managing patient records manually, leading to inefficiencies, data loss risks, and poor patient experience. Appointment scheduling was chaotic, and there was no integrated system for different departments.`,
      solution: `We developed a comprehensive healthcare management system that digitizes all patient interactions. The solution includes electronic health records, automated appointment scheduling, telemedicine capabilities, and integrated billing systems.`,
      implementationSteps: [
        "Healthcare workflow analysis and compliance requirement study",
        "System architecture design with security and scalability focus",
        "Development of core modules: patient records, appointments, billing",
        "Integration with existing medical equipment and systems",
        "Staff training and phased deployment across departments",
        "Ongoing support and system optimization based on usage patterns"
      ],
      testimonial: {
        content: "The system has transformed our hospital operations. Patient wait times have reduced by 40%, and our staff can now focus more on patient care rather than paperwork. The telemedicine feature has been particularly valuable during the pandemic.",
        author: "Dr. Kavita Patel",
        position: "Chief Medical Officer, Rajkot Medical Center"
      }
    },
    {
      id: 5,
      title: "Educational Learning Platform",
      description: "Interactive online learning platform for engineering colleges with virtual classrooms, assignment management, and student progress tracking.",
      fullDescription: `A comprehensive e-learning platform designed specifically for engineering education. The system provides virtual classrooms, interactive content delivery, assignment management, and detailed analytics for student progress tracking.

The platform includes features like live video lectures, interactive whiteboards, collaborative project spaces, and automated grading systems. Built to handle thousands of concurrent users, the system ensures seamless learning experiences for both students and faculty.`,
      client: "Gujarat Technological University",
      industry: "education",
      type: "web-application",
      image: "/assets/images/content/content_1_photo-1556742049-0cfed4f6a45d.jpg",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "Redis"],
      timeline: "9 months",
      teamSize: 7,
      status: "completed",
      hasLiveDemo: true,
      metrics: [
        { label: "Active Students", value: 15000, type: "number" },
        { label: "Course Completion", value: 92, type: "percentage" },
        { label: "Faculty Adoption", value: 95, type: "percentage" },
        { label: "Learning Efficiency", value: 65, type: "percentage" }
      ],
      challenge: `Traditional classroom-based engineering education was limiting student access to quality resources and expert faculty. The university needed a scalable solution to deliver consistent education quality across multiple campuses.`,
      solution: `We created an interactive learning platform with virtual classrooms, multimedia content delivery, and comprehensive student tracking. The system includes collaboration tools, automated assessments, and detailed analytics for continuous improvement.`,
      implementationSteps: [
        "Educational requirement analysis with faculty and students",
        "Platform design focusing on user experience and scalability",
        "Development of core learning modules and assessment tools",
        "Integration with university's existing student information system",
        "Pilot testing with select courses and iterative improvements",
        "Full deployment with comprehensive training for faculty and students"
      ],
      testimonial: {
        content: "This platform has revolutionized how we deliver engineering education. Students are more engaged, and we can track their progress in real-time. The virtual labs feature has been particularly impressive for practical learning.",
        author: "Prof. Rajesh Kumar",
        position: "Dean of Engineering, GTU"
      }
    },
    {
      id: 6,
      title: "Manufacturing ERP System",
      description: "Complete enterprise resource planning solution for manufacturing companies with production planning, quality control, and supply chain management.",
      fullDescription: `A comprehensive ERP solution tailored for manufacturing industries in Gujarat. The system integrates all business processes including production planning, inventory management, quality control, financial management, and supply chain optimization.

The platform provides real-time visibility into manufacturing operations, automated workflow management, and detailed reporting for informed decision-making. Built with industry-specific requirements, the system handles complex manufacturing scenarios and regulatory compliance.`,
      client: "Rajkot Engineering Works",
      industry: "manufacturing",
      type: "web-application",
      image: "/assets/images/content/content_39_photo-1581091226825-a6a2a5aee1.jpg",
      technologies: ["Java", "Spring Boot", "Oracle", "Angular", "Docker"],
      timeline: "14 months",
      teamSize: 10,
      status: "completed",
      hasLiveDemo: false,
      metrics: [
        { label: "Production Efficiency", value: 35, type: "percentage" },
        { label: "Inventory Optimization", value: 25, type: "percentage" },
        { label: "Quality Improvement", value: 40, type: "percentage" },
        { label: "Cost Reduction", value: 20, type: "percentage" }
      ],
      challenge: `The manufacturing company was using disparate systems for different operations, leading to data silos, inefficient processes, and lack of real-time visibility into operations. Manual processes were causing delays and quality issues.`,
      solution: `We implemented a comprehensive ERP system that integrates all manufacturing processes. The solution provides real-time production monitoring, automated quality checks, intelligent inventory management, and comprehensive financial reporting.`,
      implementationSteps: [
        "Comprehensive business process analysis and requirement gathering",
        "ERP system design with modular architecture for scalability",
        "Development of manufacturing-specific modules and workflows",
        "Data migration from legacy systems with minimal downtime",
        "Extensive testing with real production scenarios",
        "Phased deployment with comprehensive training and support"
      ],
      testimonial: {
        content: "The ERP system has transformed our manufacturing operations. We've achieved 35% improvement in production efficiency and 25% reduction in inventory costs. The real-time visibility has enabled better decision-making at all levels.",
        author: "Suresh Patel",
        position: "Operations Director, Rajkot Engineering Works"
      }
    }
  ];

  // Filtering
  useEffect(() => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project?.title?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        project?.client?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        project?.technologies?.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedIndustry !== 'all') {
      filtered = filtered.filter(project => project.industry === selectedIndustry);
    }

    if (selectedTechnology !== 'all') {
      filtered = filtered.filter(project =>
        project.technologies.some(tech => tech.toLowerCase().includes(selectedTechnology.toLowerCase()))
      );
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(project => project.type === selectedType);
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedIndustry, selectedTechnology, selectedType]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleRequestSimilar = (project) => {
    setConsultationPreFill(`Similar to: ${project?.title} (${project?.client})`);
    setIsModalOpen(false);
    setIsConsultOpen(true);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedIndustry('all');
    setSelectedTechnology('all');
    setSelectedType('all');
  };

  const handleIndustryFilter = (industry) => {
    setSelectedIndustry(industry);
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCaseStudies = () => {
    const text = [
      'RED HAND SOLUTIONS - CASE STUDIES PORTFOLIO',
      '==========================================\n',
      ...projects.map(p => 
        `PROJECT: ${p.title}\nCLIENT: ${p.client} (${p.industry.toUpperCase()})\nTYPE: ${p.type}\nTIMELINE: ${p.timeline} | TEAM SIZE: ${p.teamSize}\nTECH STACK: ${p.technologies.join(', ')}\n\nCHALLENGE:\n${p.challenge}\n\nSOLUTION:\n${p.solution}\n\nRESULTS:\n${p.metrics.map(m => ` - ${m.label}: ${m.value}${m.type === 'percentage' ? '%' : ''}`).join('\n')}\n\nTESTIMONIAL:\n"${p.testimonial.content}" - ${p.testimonial.author}, ${p.testimonial.position}\n` +
        '--------------------------------------------------\n'
      ),
      'Contact: +91 6352412728 | redhand.solution@gmail.com | Rajkot, Gujarat'
    ].join('\n');

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Red-Hand-Solutions-Case-Studies.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | Red Hand Solutions - 150+ Verified Digital Transformation Case Studies</title>
        <meta 
          name="description" 
          content="Explore Red Hand Solutions' portfolio of 150+ successful digital transformation projects across manufacturing, healthcare, textile, and startups in Gujarat with 300% average client ROI." 
        />
        <link rel="canonical" href="/portfolio" />
      </Helmet>

      <div className="min-h-screen bg-transparent text-slate-900 dark:text-white transition-colors duration-300">
        <Header />

        <main className="relative z-10 pt-28 pb-20">
          {/* Hero Section */}
          <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
            {/* Ambient light glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-red-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4" /> 150+ Delivered Systems
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight mb-6">
              Our <span className="bg-gradient-to-r from-red-600 via-red-500 to-rose-400 bg-clip-text text-transparent">Success Stories</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover how we've transformed businesses across Gujarat with cutting-edge digital solutions. From textile exporters to healthcare providers, see the measurable impact of our work.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
              >
                <Play className="w-4 h-4 fill-white" /> Watch Success Stories
              </button>

              <button
                onClick={handleDownloadCaseStudies}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/80 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.12] text-gray-800 dark:text-white font-semibold text-sm border border-gray-200 dark:border-white/10 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-red-500" /> Download Case Studies
              </button>
            </div>
          </section>

          {/* Stats Section */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <StatsSection />
          </section>

          {/* Industry Showcase */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <IndustryShowcase onIndustryFilter={handleIndustryFilter} />
          </section>

          {/* Projects Section */}
          <section id="projects-section" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 scroll-mt-28">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
                Featured <span className="text-red-600 dark:text-red-500">Projects</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Explore our comprehensive portfolio of digital transformation projects. Filter by industry, technology, or project type to find relevant examples.
              </p>
            </div>

            {/* Filter Bar */}
            <FilterBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedIndustry={selectedIndustry}
              onIndustryChange={setSelectedIndustry}
              selectedTechnology={selectedTechnology}
              onTechnologyChange={setSelectedTechnology}
              selectedType={selectedType}
              onTypeChange={setSelectedType}
              onClearFilters={handleClearFilters}
              totalProjects={projects.length}
              filteredCount={filteredProjects.length}
            />

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                    onRequestSimilar={handleRequestSimilar}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white/40 dark:bg-white/[0.02] rounded-3xl border border-dashed border-gray-300 dark:border-white/10 p-8">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Projects Found</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                  Try adjusting your search criteria or clearing your filters to see more results.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 mx-auto transition-all"
                >
                  <RefreshCw className="w-4 h-4" /> Clear All Filters
                </button>
              </div>
            )}
          </section>

          {/* CTA Banner */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="relative rounded-3xl glass-card border border-red-500/30 p-10 sm:p-14 text-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/5 -z-10" />

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
                Join 120+ businesses that have transformed their operations with our digital solutions. Let's discuss how we can help you achieve similar results.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setConsultationPreFill('Portfolio Success Story Consultation');
                    setIsConsultOpen(true);
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Schedule Free Consultation
                </button>

                <a
                  href="https://calendly.com/redhand-solution/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-white/[0.08] hover:bg-gray-100 dark:hover:bg-white/[0.14] text-gray-900 dark:text-white font-semibold text-sm border border-gray-200 dark:border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-red-500" /> Discuss Your Project
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestSimilar={handleRequestSimilar}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={consultationPreFill}
      />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white dark:bg-[#0D0F18] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-600" />
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    Client Impact Video Showcase • Gujarat Deployments
                  </h3>
                </div>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/[0.06] text-gray-500 hover:text-white hover:bg-red-600 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 flex flex-col items-center justify-center text-center p-6 text-white mb-6">
                <div className="w-16 h-16 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-400 mb-3 animate-pulse">
                  <Play className="w-8 h-8 ml-1 fill-red-400" />
                </div>
                <h4 className="text-xl font-bold">Transforming Gujarat Industry</h4>
                <p className="text-xs text-gray-400 max-w-md mt-1">
                  Watch behind-the-scenes engineering across Patel Textiles, Rajkot Chemical Industries, and Rajkot Engineering Works.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Need a custom roadmap for your sector?</span>
                <button
                  onClick={() => {
                    setIsVideoOpen(false);
                    setConsultationPreFill('Client Case Study Discussion');
                    setIsConsultOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Book Consultation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;