import { Users } from 'lucide-react';

const partners = [
  {
    name: 'Salem Taleb Efaifa (MBA)',
    title: 'Managing Partner',
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-24.jpg?updatedAt=1732207354789',
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
    image: 'https://ik.imagekit.io/ri5cvrkrr/neve-accounting-25.jpg?updatedAt=1732207355188',
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
          <div className="space-y-24">
            {partners.map((partner, index) => (
              <div 
                key={partner.name}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="rounded-lg shadow-xl w-full object-cover aspect-[3/4]"
                    />
                    <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{partner.name}</h2>
                    <p className="mt-2 text-xl text-blue-600">{partner.title}</p>
                  </div>
                  <div className="space-y-4">
                    {partner.description.map((paragraph, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed">
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