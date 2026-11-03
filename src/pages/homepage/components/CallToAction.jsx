import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ConsultationModal from '../../../components/ConsultationModal';

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    "Free consultation & project assessment",
    "Custom solution tailored to your needs",
    "Transparent pricing with no hidden costs",
    "Dedicated project manager assigned",
    "24/7 support throughout development",
    "Post-launch maintenance & optimization"
  ];

  return (
    <>
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-rose-800 text-white shadow-2xl">
        {/* Ambient Subtle Radial Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
                  <span>Take the Next Step</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight tracking-tight text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
                  Join 85+ successful businesses across Gujarat who chose Red Hand Solutions for their digital transformation journey. Let's discuss how we can accelerate your growth.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-white text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Icon name="Check" size={12} />
                    </div>
                    <span className="text-white/95 text-xs sm:text-sm font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white text-red-700 hover:bg-white/95 shadow-2xl px-8 py-4 text-base font-bold rounded-2xl w-full sm:w-auto transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={18}
                  asChild={false}
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Free Consultation
                </Button>
                <Link to="/portfolio" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/60 text-white hover:bg-white/15 px-8 py-4 text-base font-bold rounded-2xl w-full sm:w-auto backdrop-blur-md"
                    iconName="Eye"
                    iconPosition="left"
                    iconSize={18}
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Card - Contact & Fast Response */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 dark:bg-black/30 backdrop-blur-2xl rounded-3xl p-7 sm:p-9 border border-white/20 shadow-2xl space-y-6 text-left">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Get in Touch Today
                </h3>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <a
                    href="tel:+916352412728"
                    className="flex items-center space-x-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-11 h-11 bg-white text-red-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Icon name="Phone" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">Call Us Now</p>
                      <p className="text-base font-bold text-white">+91 6352412728</p>
                    </div>
                  </a>

                  <a
                    href="mailto:redhand.solution@gmail.com"
                    className="flex items-center space-x-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-11 h-11 bg-white text-red-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Icon name="Mail" size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">Email Us</p>
                      <p className="text-base font-bold text-white truncate">redhand.solution@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-white/10">
                    <div className="w-11 h-11 bg-white text-red-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                      <Icon name="MapPin" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">Visit Our Office</p>
                      <p className="text-base font-bold text-white">Rajkot, Gujarat, India</p>
                    </div>
                  </div>
                </div>

                {/* Response Guarantee */}
                <div className="p-4 rounded-2xl bg-white/15 border border-white/20">
                  <div className="flex items-center space-x-2.5 mb-1 text-white font-bold text-sm">
                    <Icon name="Clock" size={16} />
                    <span>Quick Response Guarantee</span>
                  </div>
                  <p className="text-xs text-white/85 leading-relaxed">
                    We respond to all inquiries within 2 hours during business hours and provide project estimates within 24 hours.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/20 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-black font-mono">85+</div>
                    <div className="text-[11px] text-white/80 font-medium">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black font-mono">150+</div>
                    <div className="text-[11px] text-white/80 font-medium">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black font-mono">99%</div>
                    <div className="text-[11px] text-white/80 font-medium">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CallToAction;