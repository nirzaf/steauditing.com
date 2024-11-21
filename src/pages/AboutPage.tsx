import { Award, Clock, Target, Briefcase, Calendar, Star, Heart, DollarSign, Clock4, CheckCircle2, Shield, Crosshair, Users, Eye, Lightbulb } from 'lucide-react';

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
  { name: 'Visionary', icon: Eye, description: 'We develop creative and innovative approaches to key issues facing by our clients.' }
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
              <div key={feature.name} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50">
                <feature.icon className="h-8 w-8 text-blue-600" />
                <span className="font-medium">{feature.name}</span>
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
              <div key={value.name} className="bg-white p-6 rounded-lg shadow-md">
                <value.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}