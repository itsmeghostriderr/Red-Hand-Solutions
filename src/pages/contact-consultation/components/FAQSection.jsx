import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');

  const faqs = [
    {
      id: 1,
      category: "Consultation",
      question: "Is the initial consultation really free?",
      answer: `Yes, absolutely! Our initial consultation is completely free with no hidden charges or obligations. During this 30-60 minute session, we'll:\n\n• Understand your project requirements and business goals\n• Provide expert advice and recommendations\n• Discuss timeline and budget estimates\n• Answer all your technical questions\n• Share relevant case studies and examples\n\nThere's no pressure to proceed, and you'll gain valuable insights regardless of your decision.`
    },
    {
      id: 2,
      category: "Pricing",
      question: "How do you determine project pricing?",
      answer: `Our pricing is transparent and based on several factors:\n\n• Project complexity and scope\n• Technology stack requirements\n• Timeline and urgency\n• Additional features and integrations\n• Ongoing support and maintenance needs\n\nWe provide detailed cost breakdowns and fixed-price quotes to avoid any surprises. Our quote calculator gives you an instant estimate, and we'll refine it during our consultation.`
    },
    {
      id: 3,
      category: "Process",
      question: "What's your typical project development process?",
      answer: `We follow a proven 6-phase development process:\n\n1. **Discovery & Planning** (1-2 weeks): Requirements gathering, technical planning\n2. **Design & Prototyping** (1-3 weeks): UI/UX design, client approval\n3. **Development** (4-12 weeks): Coding, regular progress updates\n4. **Testing & QA** (1-2 weeks): Comprehensive testing, bug fixes\n5. **Deployment** (1 week): Launch preparation, go-live support\n6. **Support & Maintenance** (Ongoing): Post-launch support, updates\n\nYou'll receive regular updates and have multiple review checkpoints throughout the process.`
    },
    {
      id: 4,
      category: "Timeline",
      question: "How long does a typical project take?",
      answer: `Project timelines vary based on complexity:\n\n• **Simple Website**: 2-4 weeks\n• **Business Website with CMS**: 4-6 weeks\n• **E-commerce Store**: 6-10 weeks\n• **Web Application**: 8-16 weeks\n• **Mobile App**: 12-20 weeks\n• **Custom Software**: 16-24 weeks\n\nWe can accommodate rush projects with expedited timelines for an additional fee. During consultation, we'll provide a detailed timeline specific to your requirements.`
    },
    {
      id: 5,
      category: "Technology",
      question: "What technologies do you work with?",
      answer: `We specialize in modern, industry-standard technologies:\n\n**Frontend**: React, Next.js, Vue.js, Angular, HTML5, CSS3\n**Backend**: Node.js, Python, PHP, .NET, Java\n**Mobile**: React Native, Flutter, iOS, Android\n**Databases**: MySQL, PostgreSQL, MongoDB, Firebase\n**Cloud**: AWS, Google Cloud, Azure, Vercel\n**E-commerce**: Shopify, WooCommerce, Magento, Custom solutions\n\nWe choose the best technology stack based on your specific needs, scalability requirements, and budget.`
    },
    {
      id: 6,
      category: "Support",
      question: "Do you provide ongoing support after project completion?",
      answer: `Yes, we offer comprehensive post-launch support:\n\n**Included Support** (3 months):\n• Bug fixes and minor issues\n• Basic content updates\n• Security patches\n• Performance monitoring\n\n**Extended Support Plans**:\n• 6-month Standard Support: ₹12,000\n• 12-month Premium Support: ₹25,000\n• 24/7 Enterprise Support: ₹50,000\n\nAll plans include regular backups, security updates, and priority technical support.`
    },
    {
      id: 7,
      category: "Payment",
      question: "What are your payment terms?",
      answer: `We offer flexible payment options to suit your cash flow:\n\n**Standard Payment Schedule**:\n• 30% advance payment to start the project\n• 40% at 50% project completion milestone\n• 30% upon final delivery and approval\n\n**Alternative Options**:\n• Monthly installments for larger projects\n• Milestone-based payments\n• Custom payment plans for startups\n\nWe accept bank transfers, UPI, credit cards, and digital wallets. All payments are secured and invoiced properly.`
    },
    {
      id: 8,
      category: "Location",
      question: "Do you work with clients outside Rajkot/Gujarat?",
      answer: `Absolutely! While we're based in Rajkot, we work with clients across India and internationally:\n\n**Local Clients** (Gujarat): In-person meetings, on-site support available\n**Pan-India**: Video calls, phone support, remote collaboration\n**International**: Flexible timing, English communication, global payment options\n\nWe use modern collaboration tools like Slack, Zoom, and project management platforms to ensure seamless communication regardless of location.`
    }
  ];

  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Icon name="HelpCircle" size={14} />
              <span>Questions & Answers</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Get answers to common questions about our services, process, and pricing. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-white/80 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-red-500/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFAQ === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white dark:bg-white/[0.04] border-red-500/40 shadow-lg shadow-black/[0.02]'
                      : 'bg-white/70 dark:bg-white/[0.02] border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="flex items-center space-x-3.5 min-w-0">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 shrink-0">
                        {faq.category}
                      </span>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-red-500/10 text-red-600' : 'bg-slate-100 dark:bg-white/10 text-slate-500'}`}>
                      <Icon name="ChevronDown" size={18} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/5">
                          <div className="whitespace-pre-line text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom Contact CTA Card */}
          <div className="mt-14 text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-red-500/10 via-rose-500/5 to-slate-900/5 dark:from-red-950/40 dark:to-slate-900/40 border border-red-500/20 shadow-xl">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-red-600/30">
              <Icon name="MessageCircle" size={28} color="white" />
            </div>
            <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
              Still Have Questions?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto leading-relaxed">
              Our team is here to help! Get in touch for personalized answers and expert guidance on your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+916352412728"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <Icon name="Phone" size={16} />
                <span>Call: +91 6352412728</span>
              </a>
              <a
                href="mailto:redhand.solution@gmail.com?subject=FAQ%20Inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/[0.05] text-slate-900 dark:text-white hover:border-red-500/50 hover:bg-slate-100 dark:hover:bg-white/10 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300"
              >
                <Icon name="Mail" size={16} className="text-red-600 dark:text-red-400" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;