import React from 'react';
import { motion } from 'framer-motion';

const ServicesHeader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mt-8"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Our Services
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        Comprehensive financial solutions tailored to your business needs
      </p>
    </motion.div>
  );
};

export default ServicesHeader;
