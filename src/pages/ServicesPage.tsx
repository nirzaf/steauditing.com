import React from 'react';
import ServicesList from '../components/services/ServicesList';
import { services } from '../data/services';
import HeroSection from '../components/services/HeroSection';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="bg-gradient-to-b from-[#00204A]/5 to-[#00204A]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesList services={services} />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;