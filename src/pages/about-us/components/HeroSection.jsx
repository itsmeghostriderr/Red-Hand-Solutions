import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-red-600/10 dark:bg-red-500/15 border border-red-600/30 rounded-full px-4 py-1.5"
            >
              <Icon name="MapPin" size={15} className="text-red-600 dark:text-red-400" />
              <span className="text-red-600 dark:text-red-300 text-xs sm:text-sm font-semibold">Proudly Based in Rajkot, Gujarat</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.15] tracking-tight"
            >
              Transforming
              <span className="block bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-clip-text text-transparent">
                Gujarat's Digital
              </span>
              Future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              From our roots in Rajkot to serving businesses across Gujarat, we've been pioneering innovative technology solutions that drive real business growth since our founding.
            </motion.p>

            {/* Quick Metrics Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2"
            >
              <div className="flex items-center space-x-3 bg-white dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 rounded-2xl px-5 py-3.5 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0">
                  <Icon name="Calendar" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider">Founded</p>
                  <p className="text-base font-extrabold text-gray-900 dark:text-white font-mono">2018</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 rounded-2xl px-5 py-3.5 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider">Team Size</p>
                  <p className="text-base font-extrabold text-gray-900 dark:text-white">25+ Experts</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200/80 dark:border-white/10 rounded-2xl px-5 py-3.5 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider">Projects</p>
                  <p className="text-base font-extrabold text-gray-900 dark:text-white">200+ Delivered</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl bg-white dark:bg-white/[0.04] backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 p-8 sm:p-10 shadow-2xl shadow-red-950/15">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md shadow-red-600/30 text-white">
                    <Icon name="TrendingUp" size={22} />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white font-mono">98%</h3>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">Client Satisfaction</p>
                </div>

                <div className="text-center p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md shadow-rose-600/30 text-white">
                    <Icon name="Clock" size={22} />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white font-mono">6+</h3>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">Years Experience</p>
                </div>

                <div className="text-center p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-red-800 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md shadow-red-700/30 text-white">
                    <Icon name="Shield" size={22} />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white font-mono">100%</h3>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">Data Security</p>
                </div>

                <div className="text-center p-4 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md shadow-amber-600/30 text-white">
                    <Icon name="Zap" size={22} />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white font-mono">24/7</h3>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-1.5">
          <span className="text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wider font-semibold">
            Scroll to explore our journey
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-5 h-8 border-2 border-gray-300 dark:border-white/20 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-red-600 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;