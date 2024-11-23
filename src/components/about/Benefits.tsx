import { Heart, DollarSign, Clock4, CheckCircle2 } from 'lucide-react';

const benefits = [
  { name: 'We Do Things With Love And Passion', icon: Heart },
  { name: 'Affordable Price Range', icon: DollarSign },
  { name: 'Receive on Time', icon: Clock4 },
  { name: 'Satisfaction Guaranteed', icon: CheckCircle2 }
];

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="text-center">
              <benefit.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-medium">{benefit.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
