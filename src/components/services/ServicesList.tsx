import React from 'react';
import ServiceCard from './ServiceCard';
import { IconType } from 'react-icons';

interface Service {
  title: string;
  description: string;
  icon: IconType;
}

interface ServicesListProps {
  services: Service[];
  tailwindColors: {
    primary: string;
    primaryText: string;
    secondary: string;
  };
}

const ServicesList: React.FC<ServicesListProps> = ({ services, tailwindColors }) => {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          {...service}
          index={index}
          tailwindColors={tailwindColors}
        />
      ))}
    </div>
  );
};

export default ServicesList;