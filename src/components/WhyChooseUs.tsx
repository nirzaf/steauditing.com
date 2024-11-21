import { Award, Clock, Target, Briefcase, Calendar, Star } from 'lucide-react';

const features = [
  {
    name: 'Business Growth',
    description: 'We help accelerate your business growth with expert guidance.',
    icon: Target,
  },
  {
    name: 'Unlimited Revision',
    description: 'We ensure complete satisfaction through unlimited revisions.',
    icon: Clock,
  },
  {
    name: 'Ultimate Perfection',
    description: 'We strive for excellence in every service we provide.',
    icon: Star,
  },
  {
    name: 'Smart Experience',
    description: 'Benefit from our years of industry expertise.',
    icon: Briefcase,
  },
  {
    name: 'Strict Deadline',
    description: 'We respect and adhere to agreed timelines.',
    icon: Calendar,
  },
  {
    name: 'Reputed Firm',
    description: 'A trusted name in auditing and consultancy services.',
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We aim to add value to your organisation by offering practical suggestions to improve your systems and manage financial risks.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}