import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { useTheme } from '../../context/ThemeContext';
import ConsultationModal from '../ConsultationModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about-us', icon: 'Users' },
    { name: 'Services', path: '/services-overview', icon: 'Settings' },
    { name: 'Portfolio', path: '/portfolio', icon: 'Briefcase' },
    { name: 'Mobile Apps', path: '/mobile-app-development', icon: 'Smartphone' },
    { name: 'Contact', path: '/contact-consultation', icon: 'Phone' }
  ];

  const isActivePath = (path) => {
    if (path === '/homepage' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 dark:bg-[#07080D]/85 backdrop-blur-xl border-b border-gray-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-red-950/20 py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Zone 1: Brand Logo & Title */}
            <Link
              to="/homepage"
              className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-[1.02]"
              onClick={closeMenu}
              aria-label="Red Hand Solutions Home"
            >
              <div className="relative flex items-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-xl opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-300" />
                <img
                  src="/assets/images/RHS Logo (Edited).png"
                  alt="Red Hand Solutions Logo"
                  className="relative w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-xl p-1 bg-white shadow-md border border-gray-200/50"
                  style={{ maxWidth: '44px', maxHeight: '44px' }}
                />
              </div>
              <div className="text-left">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors block">
                  Red Hand Solutions
                </span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400 -mt-1 block font-medium tracking-wide">
                  Digital Innovation
                </span>
              </div>
            </Link>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-gray-100/70 dark:bg-white/[0.05] p-1.5 rounded-full border border-gray-200/60 dark:border-white/10 backdrop-blur-md">
              {navigationItems.map((item) => {
                const active = isActivePath(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                      active
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
                    }`}
                  >
                    <Icon name={item.icon} size={14} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Actions - Theme Toggle & Primary CTA */}
            <div className="flex items-center space-x-3">
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/[0.08] text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 border border-gray-200 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? (
                  <Icon name="Sun" size={18} className="text-amber-400 hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Icon name="Moon" size={18} className="text-gray-700 hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>

              {/* Free Consultation CTA with Modal Trigger */}
              <Button
                variant="default"
                size="sm"
                className="hidden sm:inline-flex bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] font-semibold text-xs tracking-wide px-5 py-2.5 rounded-full transition-all duration-200"
                iconName="Calendar"
                iconPosition="left"
                iconSize={15}
                asChild={false}
                onClick={() => setIsModalOpen(true)}
              >
                Free Consultation
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                <Icon
                  name={isMenuOpen ? "X" : "Menu"}
                  size={22}
                  className="transition-transform duration-200"
                />
              </button>
            </div>
          </div>

          {/* Mobile Drawer Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 pb-4 px-4 bg-white/95 dark:bg-[#0D0F18]/95 backdrop-blur-2xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-300">
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const active = isActivePath(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        active
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
                      }`}
                    >
                      <Icon name={item.icon} size={18} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-3 mt-3 border-t border-gray-200 dark:border-white/10">
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  className="bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold shadow-md py-3 rounded-xl"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={16}
                  asChild={false}
                  onClick={() => {
                    closeMenu();
                    setIsModalOpen(true);
                  }}
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;