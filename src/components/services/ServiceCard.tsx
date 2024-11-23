import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  index: number;
  tailwindColors: {
    primary: string;
    primaryText: string;
    secondary: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, index, tailwindColors }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="h-full flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className={`w-16 h-16 ${tailwindColors.secondary} rounded-xl flex items-center justify-center mb-4`}>
              <Icon className={`w-10 h-10 ${tailwindColors.primaryText}`} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-500">
              {description}
            </p>
          </div>
        </div>
        <div className={`h-1 ${tailwindColors.primary} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
