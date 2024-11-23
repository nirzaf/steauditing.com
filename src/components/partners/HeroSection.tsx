import { Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Users className="h-12 w-12" />
          <h1 className="text-4xl font-bold">Our Partners</h1>
        </div>
        <p className="mt-4 text-xl">Meet our experienced leadership team</p>
      </div>
    </div>
  );
}
