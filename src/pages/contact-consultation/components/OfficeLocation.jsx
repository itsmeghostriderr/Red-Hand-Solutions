import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ConsultationModal from '../../../components/ConsultationModal';

const OfficeLocation = () => {
  const [activeLocationKey, setActiveLocationKey] = useState('ahmedabad');
  const [copiedKey, setCopiedKey] = useState(null);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [showVirtualTour, setShowVirtualTour] = useState(false);

  const locations = {
    ahmedabad: {
      name: "Ahmedabad Headquarters",
      tag: "Global Headquarters",
      isHeadquarters: true,
      address: "Red Hand Solutions Pvt. Ltd.\nA/6, Yagnapurushnagar Society Rd, near Sarasvati Sangit Vidhyalaya, Shyam Sunder Society, Ghatlodiya, Ahmedabad, Gujarat 380061",
      displayAddress: "A/6, Yagnapurushnagar Society Rd, near Sarasvati Sangit Vidhyalaya, Shyam Sunder Society, Ghatlodiya, Ahmedabad, Gujarat 380061",
      phone: "+91 6352412728",
      email: "redhand.solution@gmail.com",
      coordinates: "23.0694,72.5385",
      businessHours: [
        { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
        { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
        { day: "Sunday", hours: "Closed" }
      ],
      landmarks: [
        "Near Sarasvati Sangit Vidhyalaya",
        "Shyam Sunder Society, Ghatlodiya",
        "Accessible from SG Highway & 132 Feet Ring Road",
        "Visitor parking available"
      ]
    },
    rajkot: {
      name: "Rajkot Development Center",
      tag: "Regional Development Hub",
      isHeadquarters: false,
      address: "Red Hand Solutions Pvt. Ltd.\nTech Hub, 3rd Floor, Kalawad Road\nRajkot, Gujarat 360005, India",
      displayAddress: "Tech Hub, 3rd Floor, Kalawad Road, Rajkot, Gujarat 360005, India",
      phone: "+91 6352412728",
      email: "redhand.solution@gmail.com",
      coordinates: "22.3039,70.8022",
      businessHours: [
        { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
        { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
        { day: "Sunday", hours: "Closed" }
      ],
      landmarks: [
        "Near Rajkot Railway Station (2.5 km)",
        "Opposite SBI Main Branch",
        "Behind McDonald's Kalawad Road",
        "Free parking available"
      ]
    }
  };

  const currentOffice = locations[activeLocationKey];

  const handleGetDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${currentOffice.coordinates}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCallOffice = () => {
    window.open(`tel:${currentOffice.phone.replace(/\s/g, '')}`, '_self');
  };

  const handleEmailOffice = () => {
    window.open(`mailto:${currentOffice.email}?subject=Office%20Visit%20Inquiry%20-${encodeURIComponent(currentOffice.name)}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(currentOffice.displayAddress);
    setCopiedKey(activeLocationKey);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <>
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Icon name="MapPin" size={14} />
                <span>Our Offices</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                Visit Our{' '}
                <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                  Locations
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Connect with our teams in person. Headquartered in Ahmedabad with our regional development center in Rajkot, Gujarat.
              </p>
            </div>

            {/* Office Selector Tabs */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 shadow-inner">
                <button
                  onClick={() => setActiveLocationKey('ahmedabad')}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${
                    activeLocationKey === 'ahmedabad'
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon name="Building" size={16} />
                  <span>Ahmedabad Headquarters</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-white/20 ml-1">HQ</span>
                </button>
                <button
                  onClick={() => setActiveLocationKey('rajkot')}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${
                    activeLocationKey === 'rajkot'
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon name="MapPin" size={16} />
                  <span>Rajkot Office</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Office Information Column */}
              <div className="space-y-6">
                {/* Address Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/[0.02]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">
                        <Icon name="MapPin" size={18} />
                      </div>
                      {currentOffice.name}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                      {currentOffice.tag}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="whitespace-pre-line text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-100 dark:border-white/5">
                      {currentOffice.displayAddress}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="default"
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg shadow-red-600/30 flex-1"
                        iconName="Navigation"
                        iconPosition="left"
                        iconSize={16}
                        onClick={handleGetDirections}
                      >
                        Get Directions
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-xl border-slate-300 dark:border-white/20 flex-1"
                        iconName={copiedKey === activeLocationKey ? "Check" : "Copy"}
                        iconPosition="left"
                        iconSize={16}
                        onClick={handleCopy}
                      >
                        {copiedKey === activeLocationKey ? "Address Copied!" : "Copy Address"}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/[0.02]">
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">
                      <Icon name="Phone" size={18} />
                    </div>
                    Direct Contact
                  </h3>
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
                      <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                        <Icon name="Phone" size={16} className="text-red-600 dark:text-red-400" />
                        <span className="font-mono text-sm font-semibold">{currentOffice.phone}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 dark:text-red-400 hover:bg-red-500/10 font-medium"
                        iconName="Phone"
                        iconPosition="left"
                        iconSize={14}
                        onClick={handleCallOffice}
                      >
                        Call
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
                      <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200 truncate pr-2">
                        <Icon name="Mail" size={16} className="text-red-600 dark:text-red-400 shrink-0" />
                        <span className="text-sm font-medium truncate">{currentOffice.email}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 dark:text-red-400 hover:bg-red-500/10 font-medium shrink-0"
                        iconName="Mail"
                        iconPosition="left"
                        iconSize={14}
                        onClick={handleEmailOffice}
                      >
                        Email
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/[0.02]">
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">
                      <Icon name="Clock" size={18} />
                    </div>
                    Business Hours
                  </h3>
                  <div className="space-y-3">
                    {currentOffice.businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-white/5 last:border-b-0 text-sm">
                        <span className="text-slate-800 dark:text-slate-200 font-medium">{schedule?.day}</span>
                        <span className="text-slate-500 dark:text-slate-400 font-mono text-xs sm:text-sm">{schedule?.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold">
                        Open for client meetings and technical sessions
                      </span>
                    </div>
                  </div>
                </div>

                {/* Landmarks */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/[0.02]">
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">
                      <Icon name="Navigation2" size={18} />
                    </div>
                    Location Guidance
                  </h3>
                  <div className="space-y-2.5">
                    {currentOffice.landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                        <Icon name="CheckCircle" size={15} className="text-red-600 dark:text-red-400 shrink-0" />
                        <span>{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map & Facilities Column */}
              <div className="space-y-6">
                {/* Interactive Map */}
                <div className="rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-xl bg-slate-900 relative">
                  <div className="h-[360px] relative">
                    <iframe
                      key={activeLocationKey}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title={`${currentOffice.name} Location`}
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${currentOffice.coordinates}&z=15&output=embed`}
                      className="border-0 w-full h-full grayscale-[20%] dark:invert-[90%] dark:hue-rotate-180"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-lg border border-slate-200/80 dark:border-white/10 flex items-center space-x-2.5">
                      <div className="w-3 h-3 bg-red-600 rounded-full animate-ping" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{currentOffice.name}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          {activeLocationKey === 'ahmedabad' ? 'Ghatlodiya, Ahmedabad' : 'Kalawad Road, Rajkot'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Facilities */}
                <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/[0.02]">
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">
                      <Icon name="Building" size={18} />
                    </div>
                    Office Facilities
                  </h3>
                  <div className="grid grid-cols-2 gap-3.5">
                    {[
                      { icon: "Wifi", name: "High-Speed WiFi" },
                      { icon: "Car", name: "Free Parking" },
                      { icon: "Coffee", name: "Refreshments" },
                      { icon: "Monitor", name: "Presentation Setup" },
                      { icon: "Shield", name: "Secure Environment" },
                      { icon: "Users", name: "Meeting Rooms" }
                    ].map((facility) => (
                      <div key={facility.name} className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
                        <Icon name={facility.icon} size={16} className="text-red-600 dark:text-red-400" />
                        <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">{facility.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visit CTA Banner */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-red-500/10 via-rose-500/5 to-slate-900/5 dark:from-red-950/40 dark:to-slate-900/40 border border-red-500/20 shadow-xl text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-red-600/30">
                    <Icon name="Calendar" size={26} color="white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Schedule an Office Visit
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto leading-relaxed">
                    Experience our workspace and meet our team in {activeLocationKey === 'ahmedabad' ? 'Ahmedabad' : 'Rajkot'}. We'd love to show you around and discuss your project over coffee.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      variant="default"
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg shadow-red-600/30 px-6 py-3"
                      iconName="Calendar"
                      iconPosition="left"
                      iconSize={16}
                      onClick={() => setIsConsultOpen(true)}
                    >
                      Book Office Visit
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-xl border-slate-300 dark:border-white/20 px-6 py-3"
                      iconName="Video"
                      iconPosition="left"
                      iconSize={16}
                      onClick={() => setShowVirtualTour(true)}
                    >
                      Virtual Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Visit Booking Modal */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={`In-Person Office Visit (${currentOffice.name})`}
      />

      {/* Virtual Tour Modal */}
      <AnimatePresence>
        {showVirtualTour && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0E1117] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setShowVirtualTour(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                <Icon name="X" size={18} />
              </button>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold mb-3">
                <Icon name="Camera" size={14} />
                <span>{currentOffice.name}</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Workspace & Discovery Studio Overview
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Take a look at our collaborative development floor, staging screens, and modern consultation pods.
              </p>
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 mb-6 border border-slate-200 dark:border-white/10 relative">
                <img
                  src="/src/assets/images/rhs_modern_workspace_1793703734955.jpg"
                  alt="Red Hand Solutions Modern Workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <div className="font-bold text-base">{currentOffice.name} Innovation Studio</div>
                    <div className="text-xs text-slate-300">Equipped with 10Gbps fiber, dedicated staging screens & agile standup pods</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowVirtualTour(false)}
                  className="rounded-xl"
                >
                  Close
                </Button>
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl"
                  onClick={() => {
                    setShowVirtualTour(false);
                    setIsConsultOpen(true);
                  }}
                >
                  Book In-Person Meeting
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OfficeLocation;