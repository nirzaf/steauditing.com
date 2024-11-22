import { tailwindColors } from '../theme';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/ri5cvrkrr/neve-accounting-01.jpg?updatedAt=1732207350705"
          alt="Hero background"
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="text-center">
              <div className="backdrop-blur-sm bg-black/30 py-8 px-4 rounded-lg shadow-2xl">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="block text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Salem Taleb Efaifa
                  </span>
                  <span className="block text-[#F2F2F2] mt-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Auditing & Consultancy
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  One of top global alliance of expert firms providing high-quality professional services and advice.
                </p>
                <div className="mt-5 sm:mt-8 flex justify-center">
                  <div className="rounded-md shadow-lg">
                    <a
                      href="#contact"
                      className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${tailwindColors.primary} hover:opacity-90 transition-all duration-300 shadow-lg md:py-4 md:text-lg md:px-10`}
                    >
                      Contact Us
                    </a>
                  </div>
                  <div className="mt-0 ml-3">
                    <a
                      href="#services"
                      className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${tailwindColors.primaryText} bg-white/90 hover:bg-white transition-all duration-300 shadow-lg md:py-4 md:text-lg md:px-10`}
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}