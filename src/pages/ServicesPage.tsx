import React from 'react';
import ServicesHeader from '../components/services/ServicesHeader';
import ServicesList from '../components/services/ServicesList';
import { services } from '../data/services';

const tailwindColors = {
  primary: 'bg-blue-600',
  primaryText: 'text-blue-600',
  secondary: 'bg-blue-100',
};

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader />
        <ServicesList services={services} tailwindColors={tailwindColors} />
      </div>
    </div>
  );
};

export default ServicesPage;