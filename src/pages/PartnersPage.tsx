import { Users, Award, Star } from 'lucide-react';

const partners = [
  {
    name: 'Salem Taleb Efaifa (MBA)',
    title: 'Managing Partner',
    image: 'https://ik.imagekit.io/ri5cvrkrr/2022-12-10_21-02-36.png?updatedAt=1732207356209',
    description: [
      'Salem is the Managing Partner and is responsible for the Assurance and Advisory services, Tax and Business Community Training offered by the firm. He is the Managing partner for the firm as well and our team will be advised overall by him.',
      'He is based in Qatar has been involved in audit activities in Qatar. His ability to quickly comprehend core issues in general and his experience in other business ventures in the Middle East will enable the team to develop and deliver high quality and effective assurance solutions.',
      'During his career, Salem has gained extensive experience in audit, accounting, taxation, and related services. His client portfolio covers a wide variety of industries including oil and gas, telecommunication, utilities, banks, petrochemical and other downstream sector businesses, construction and manufacturing. He has advised a number of clients on assurance and advisory assignments in Qatar.',
      'He specializes in providing professional consultancy services such as Feasibility Study, Business Planning, and Financial & Management Consultancy and is an Assurance Services expert'
    ]
  },
  {
    name: 'Mr. M. Dahalan FCCA, ACA, ACFE, APA',
    title: 'Partner Audit and Assurance',
    image: 'https://ik.imagekit.io/ri5cvrkrr/2022-12-10_21-17-52.png?updatedAt=1732207356185',
    description: [
      'Dahalan is the Partner Audit and Assurance, and is responsible for the Assurance and Advisory services, Tax and Business Community Training offered by the firm. He is the Technical Partner for the firm as well and our team will be advised on technical matters by M.DahaIan.',
      'He is based in Qatar and has been involved in audit and training activities in Qatar, Srilanka, and UAE for over 18 years. His ability to quickly comprehend core issues in general and his experience in other business ventures in the Asia and Middle East will enable the team to develop and deliver high quality and effective assurance solutions.',
      'During his career, M.DahaIan has gained extensive experience in audit, accounting, taxation, business community training, and related services. His client portfolio covers a wide variety of industries including oil and gas, telecommunication, utilities, banks, petrochemical and other downstream sector businesses, construction and manufacturing. He has advised a number of clients on assurance and advisory assignments in Qatar, Srilanka and UAE.',
      'Dahalan is a fraud examiner and Investigation expert involved in many fraud-related assignments and was able to produce reports with solid findings with evidence. He is a Certified Fraud Examiner from the United States.',
      'M.DahaIan carries a vast amount of professional experience, exceeding 18 years in Assurance, Advisory, Internal Audit, Accounting and Management & Financial Consulting Services with major Audit firms including Ernst & Young (EY) and PricewaterhouseCoopers (PWC).'
    ]
  }
];

export default function PartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Users className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Our Partners</h1>
          </div>
          <p className="mt-4 text-xl">Meet our experienced leadership team</p>
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {partners.map((partner, index) => (
              <div 
                key={partner.name}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}