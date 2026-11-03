import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Zap, 
  Shield, 
  Cloud, 
  TrendingUp, 
  Calendar, 
  Play, 
  Sparkles, 
  Heart, 
  Star,
  ChevronDown
} from 'lucide-react';
import ConsultationModal from '../../../components/ConsultationModal';

const HeroSection = () => {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Soft atmospheric red glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-7 text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider">
                <Smartphone className="w-4 h-4" /> Premier Mobile App Engineering
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                  Build Apps That <br />
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-rose-400 bg-clip-text text-transparent">
                    Transform Business
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  From concept to app store success, we create native iOS, Android, and cross-platform mobile applications that drive engagement and deliver measurable results for Gujarat businesses.
                </p>
              </div>

              {/* Key Features Bento */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  { icon: Zap, title: 'React Native', desc: 'Cross-platform efficiency with native 60fps feel' },
                  { icon: Shield, title: 'Native iOS/Android', desc: 'Swift & Kotlin for maximum performance' },
                  { icon: Cloud, title: 'Cloud Integration', desc: 'Scalable backend on AWS & Firebase' },
                  { icon: TrendingUp, title: 'App Store Success', desc: 'Guaranteed compliance & ASO setup' }
                ].map((feature, index) => {
                  const IconComp = feature.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3.5 p-4 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900 dark:text-white">{feature.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar className="w-4 h-4" /> Free App Consultation
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('demo-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-xl bg-white dark:bg-white/[0.06] hover:bg-gray-100 dark:hover:bg-white/[0.12] text-gray-900 dark:text-white font-semibold text-sm border border-gray-200 dark:border-white/10 shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-4 h-4 text-red-500" /> View App Demos
                </button>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-gray-200 dark:border-white/10">
                {[
                  { number: '150+', label: 'Apps Developed' },
                  { number: '4.8★', label: 'Average Store Rating' },
                  { number: '2M+', label: 'Total Downloads' }
                ].map((stat, index) => (
                  <div key={index} className="text-left">
                    <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              {/* Primary Smartphone Container */}
              <div className="relative z-10 w-72 h-[550px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 dark:border-white/20 ring-1 ring-red-500/30">
                {/* Dynamic Screen */}
                <div className="w-full h-full bg-[#0E111A] rounded-[2.3rem] overflow-hidden flex flex-col justify-between p-5 text-white relative">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                    <span className="font-bold">9:41</span>
                    <div className="w-20 h-4 bg-black rounded-full mx-auto" />
                    <span>5G • 100%</span>
                  </div>

                  {/* App Screen Content */}
                  <div className="space-y-4 my-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-bold text-xs">
                          RHS
                        </div>
                        <span className="font-bold text-sm">ShopEasy Gujarat</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                        Live
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/10 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Monthly Orders:</span>
                        <span className="font-bold text-emerald-400">+145%</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="w-3/4 bg-red-500 h-full rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-xl bg-red-600/20 border border-red-500/30 text-center">
                        <div className="text-base font-bold text-red-400">4.8 ★</div>
                        <div className="text-[10px] text-gray-400">Play Store</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.06] border border-white/10 text-center">
                        <div className="text-base font-bold text-white">4.9 ★</div>
                        <div className="text-[10px] text-gray-400">App Store</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-white/[0.04] text-xs flex items-center justify-between">
                        <span>Gujarati Multi-language</span>
                        <span className="text-emerald-400">✓ Active</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.04] text-xs flex items-center justify-between">
                        <span>Razorpay / UPI Gateway</span>
                        <span className="text-emerald-400">✓ Integrated</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-[10px] text-gray-500 pb-1">
                    Red Hand Solutions Engineering
                  </div>
                </div>

                {/* Floating Glow Orbs */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/40 animate-bounce">
                  <Star className="w-6 h-6 fill-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-xl bg-gray-900 border border-red-500/40 text-red-500 flex items-center justify-center shadow-lg shadow-black">
                  <Heart className="w-6 h-6 fill-red-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService="Mobile App Development"
      />
    </>
  );
};

export default HeroSection;