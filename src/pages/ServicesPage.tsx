import React from 'react';
import { 
  HiOutlinePresentationChartBar, // External Audit
  HiOutlineCloud, // Real Time Accounting
  HiOutlineLightBulb, // Consulting
  HiOutlineDocumentReport, // Financial Statements
  HiOutlineChartSquareBar, // Budgeting
  HiOutlineUserGroup, // Payroll
  HiOutlineCurrencyDollar, // Investment
  HiOutlineDocumentDuplicate, // Tax
  HiOutlineScale, // Business Valuation
  HiOutlineSearchCircle, // Feasibility
  HiOutlineBookOpen, // Book Keeping
  HiOutlineCash, // Financial Management
  HiOutlineSparkles, // Start-Up
  HiOutlineCube, // ERP
  HiOutlineShieldCheck // Risk Assessment
} from 'react-icons/hi';
import { motion } from 'framer-motion';

const tailwindColors = {
  primary: 'bg-blue-600',
  primaryText: 'text-blue-600',
  secondary: 'bg-blue-100',
};

const services = [
  {
    title: 'External Audit',
    description: 'Professional and independent examination of financial statements and accounting records.',
    icon: HiOutlinePresentationChartBar,
  },
  {
    title: 'Real Time Accounting Software',
    description: 'Modern cloud-based accounting solutions for real-time financial tracking and management.',
    icon: HiOutlineCloud,
  },
  {
    title: 'Consulting',
    description: 'Expert business advice and strategic consulting services tailored to your needs.',
    icon: HiOutlineLightBulb,
  },
  {
    title: 'Financial Statements',
    description: 'Comprehensive preparation and analysis of financial statements and reports.',
    icon: HiOutlineDocumentReport,
  },
  {
    title: 'Budgeting',
    description: 'Strategic budget planning and management to optimize your financial resources.',
    icon: HiOutlineChartSquareBar,
  },
  {
    title: 'Payroll Services',
    description: 'Complete payroll management solutions including salary processing and compliance.',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Investment Strategies',
    description: 'Expert guidance on investment opportunities and portfolio management.',
    icon: HiOutlineCurrencyDollar,
  },
  {
    title: 'Tax Return & Fillings',
    description: 'Professional assistance with tax preparation, planning, and compliance.',
    icon: HiOutlineDocumentDuplicate,
  },
  {
    title: 'Business Valuation',
    description: 'Comprehensive analysis and valuation of business worth and potential.',
    icon: HiOutlineScale,
  },
  {
    title: 'Feasibility Study',
    description: 'Detailed analysis of project viability and potential business opportunities.',
    icon: HiOutlineSearchCircle,
  },
  {
    title: 'Book Keeping',
    description: 'Systematic recording and organization of financial transactions.',
    icon: HiOutlineBookOpen,
  },
  {
    title: 'Financial Management',
    description: 'Strategic planning and management of financial resources and operations.',
    icon: HiOutlineCash,
  },
  {
    title: 'Start-Up Assistance',
    description: 'Comprehensive support for new business ventures and startups.',
    icon: HiOutlineSparkles,
  },
  {
    title: 'ERP Consultancy & Implementation',
    description: 'Expert guidance in selecting and implementing ERP solutions.',
    icon: HiOutlineCube,
  },
  {
    title: 'Risk Assessment & Internal Controls',
    description: 'Comprehensive evaluation of business risks and development of robust internal control systems.',
    icon: HiOutlineShieldCheck,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className={`w-16 h-16 ${tailwindColors.secondary} rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon className={`w-10 h-10 ${tailwindColors.primaryText}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className={`h-1 ${tailwindColors.primary} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
