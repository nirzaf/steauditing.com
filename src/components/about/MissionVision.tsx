import { Lightbulb, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
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
  );
}
