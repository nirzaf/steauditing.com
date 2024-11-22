import { Award, Clock, Target, Briefcase, Calendar, Star, Heart, DollarSign, Clock4, CheckCircle2, Shield, Crosshair, Users, Eye, Lightbulb, Lock } from 'lucide-react';

const features = [
  { name: 'Business Growth', icon: Target },
  { name: 'Unlimited Revision', icon: Clock },
  { name: 'Ultimate Perfection', icon: Star },
  { name: 'Smart Experience', icon: Briefcase },
  { name: 'Strict Deadline', icon: Calendar },
  { name: 'Reputed Firm', icon: Award }
];

const benefits = [
  { name: 'We Do Things With Love And Passion', icon: Heart },
  { name: 'Affordable Price Range', icon: DollarSign },
  { name: 'Receive on Time', icon: Clock4 },
  { name: 'Satisfaction Guaranteed', icon: CheckCircle2 }
];

const values = [
  { name: 'Integrity', icon: Shield, description: 'We exhibit fairness, honesty, and ethical behavior in our service to all our clients.' },
  { name: 'Objectivity', icon: Crosshair, description: 'We perform duties in an unbiased manner, i.e., based on an informed analysis of the issues and a clear understanding of the operations affected.' },
  { name: 'Quality', icon: Star, description: 'We provide accurate reports and timely, feasible, and relevant recommendations.' },
  { name: 'Community', icon: Users, description: 'We collaborate with colleagues and clients to provide services that improve our stakeholders effectiveness and efficiency.' },
  { name: 'Visionary', icon: Eye, description: 'We develop creative and innovative approaches to key issues facing by our clients.' },
  { name: 'Trust & Confidentiality', icon: Lock, description: 'We maintain the highest standards of confidentiality and build lasting relationships based on trust, integrity, and professional ethics.' }
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl">Our journey of excellence in auditing and consultancy</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Salem Taleb Efaifa Auditing and consultancy is an organization of substance with a full-service capability available in Qatar. We construct our team to reflect your organization structure. We make all aspects of our service delivery transparent to the client.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our performance is pre-scheduled, agreed with you for deliverables, timetable, and maximum cost effectiveness. Our aim is to beat your expectations from any assignments. The approach we adopt ensures that we bring our views to you about business operations as well as Financial and legal compliance.
              </p>
            </div>
            <div>
              <img 
                src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-01.jpg?updatedAt=1732207350705"
                alt="Our Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-medium text-gray-900 italic">
            "If you can't show through an audit trail how you arrived at the numbers on your balance sheet, that is a significant internal control failure."
          </blockquote>
          <p className="mt-4 text-lg font-semibold text-blue-600">Robert Cobb</p>
          <p className="text-gray-500">Auditor</p>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="group flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 
                          shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                          border border-gray-100 hover:border-blue-200"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 
                                transform scale-0 group-hover:scale-150 transition-all duration-300"></div>
                  <feature.icon className="h-12 w-12 text-blue-600 group-hover:text-blue-700 
                                        transform group-hover:rotate-6 transition-all duration-300" />
                </div>
                <span className="font-medium mt-4 text-lg text-gray-800 group-hover:text-blue-600 
                                transition-colors duration-300">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Lightbulb className="h-8 w-8 text-blue-600 mr-3" />
                Our Mission
              </h2>
              <p className="text-gray-600">
                Audit and Assurance helps our clients achieve its targets by providing objective and independent audit and assurance services to reduce risk and improve operations and to ensure best practice in all aspects of financial reporting and compliance activities.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                Our Vision
              </h2>
              <p className="text-gray-600">
                Striving to be a team of world-class professional Accounting and Assurance, helping to shape the future of the Audit and Assurance services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div 
                key={value.name} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <value.icon className="h-12 w-12 text-blue-600 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}