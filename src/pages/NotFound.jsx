import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Button from '../components/ui/Button';
import Icon from '../components/AppIcon';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-white flex flex-col justify-between">
      <Header />
      <main className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center relative z-10">
        <div className="relative mb-6">
          <div className="text-8xl sm:text-9xl font-extrabold font-heading bg-gradient-to-r from-red-600 to-rose-400 bg-clip-text text-transparent opacity-30 dark:opacity-40">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-red-600/20 backdrop-blur-md border border-red-500/30 flex items-center justify-center text-red-500 shadow-lg">
              <Icon name="Compass" size={32} />
            </div>
          </div>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has moved. Let's guide you back to Red Hand Solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg shadow-red-600/30 px-8 py-3.5 font-semibold"
            iconName="ArrowLeft"
            iconPosition="left"
            iconSize={16}
            onClick={() => window.history?.back()}
          >
            Go Back
          </Button>
          <Button
            variant="outline"
            className="rounded-xl border-slate-300 dark:border-white/20 px-8 py-3.5 font-semibold"
            iconName="Home"
            iconPosition="left"
            iconSize={16}
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
