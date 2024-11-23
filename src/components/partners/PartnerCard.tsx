import { Award, Star } from 'lucide-react';

interface PartnerCardProps {
  partner: {
    name: string;
    title: string;
    image: string;
    description: string[];
  };
  index: number;
}

export default function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <div 
      className={`flex flex-col ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-16 items-center`}
    >
      <div className="w-full md:w-1/3">
        <div className="relative group">
          {/* Decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-blue-600 rounded-tl-lg"></div>
          <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-blue-600 rounded-tr-lg"></div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-blue-600 rounded-bl-lg"></div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-blue-600 rounded-br-lg"></div>
          
          {/* Image container */}
          <div className="relative rounded-lg overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={partner.image}
              alt={partner.name}
              className="w-full object-cover aspect-[3/4] rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Award className="w-12 h-12 text-blue-600" />
          </div>
          <div className="absolute -bottom-6 -left-6 transform -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Star className="w-12 h-12 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-8">
        <div className="relative">
          {/* Decorative background for name */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg transform -skew-y-2"></div>
          
          {/* Name and title */}
          <div className="relative">
            <h2 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {partner.name}
            </h2>
            <div className="flex items-center space-x-3">
              <div className="h-0.5 w-12 bg-blue-600"></div>
              <p className="text-xl text-blue-600 font-semibold">{partner.title}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 relative">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600/0 via-blue-600/20 to-blue-600/0 rounded-full"></div>
          {partner.description.map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed pl-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
