import { tailwindColors } from '../theme';

export default function About() {
  return (
    <div id="about" className={`relative ${tailwindColors.background} py-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -skew-y-12 transform ${tailwindColors.primary} opacity-5 w-full h-full`}></div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className={`h-1 w-12 ${tailwindColors.primary}`}></div>
            <h2 className={`text-4xl font-extrabold tracking-tight ${tailwindColors.primaryText} sm:text-5xl`}>
              Our Commitment to Excellence
            </h2>
            <div className={`h-1 w-12 ${tailwindColors.primary}`}></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <img
                  src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-22.png?updatedAt=1732207355523"
                  alt="Financial analysis"
                  className="w-24 h-24 rounded-lg object-cover shadow-md"
                />
                <div>
                  <h3 className={`text-xl font-semibold ${tailwindColors.primaryText} mb-3`}>Professional Excellence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Salem Taleb Efaifa Auditing and consultancy is an organization of substance with a full-service capability available in Qatar.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <img
                  src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-15.jpg?updatedAt=1732207353030"
                  alt="Business consultation"
                  className="w-24 h-24 rounded-lg object-cover shadow-md"
                />
                <div>
                  <h3 className={`text-xl font-semibold ${tailwindColors.primaryText} mb-3`}>Tailored Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We construct our team to reflect your organization structure. We make all aspects of our service delivery transparent to the client.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <img
                  src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-17.jpg?updatedAt=1732207353126"
                  alt="Team collaboration"
                  className="w-24 h-24 rounded-lg object-cover shadow-md"
                />
                <div>
                  <h3 className={`text-xl font-semibold ${tailwindColors.primaryText} mb-3`}>Exceeding Expectations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our aim is to beat your expectations from any assignments, bringing our views about business operations and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Main Image */}
            <div className="col-span-2 group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-12.jpg?updatedAt=1732207352390"
                  alt="Business professionals"
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Smaller Images */}
            <div className="relative group">
              <img
                src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-19.jpg?updatedAt=1732207353391"
                alt="Corporate meeting"
                className="w-full h-48 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative group">
              <img
                src="https://ik.imagekit.io/ri5cvrkrr/acc1.jpg?updatedAt=1732207356333"
                alt="Office workspace"
                className="w-full h-48 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}